-- =============================================================================
-- Datos propios para el artículo de SCRUM-450 (criterio 4)
-- =============================================================================
--
-- Ejecutar en el SQL Editor de Supabase y pegarme los resultados. No necesito
-- acceso: con las tablas de salida me basta para escribir el artículo.
--
-- REGLAS DE PRIVACIDAD, ya metidas en cada consulta:
--   · Solo agregados. Ninguna devuelve una fila por usuario.
--   · Umbral N >= 50: cualquier grupo con menos usuarios se descarta, para que
--     no se pueda reidentificar a nadie por una combinación rara.
--   · Ningún texto libre sale sin pasar el umbral. Los nombres de skill los
--     escribe la gente y puede haber datos personales dentro.
--   · Se publica la ventana temporal y el tamaño de muestra junto a cada cifra.
--     Además de ser lo correcto, es lo que la hace citable: un número sin
--     muestra no lo cita nadie.
--
-- NOMBRES: salen de leer el esquema Drift de skillapp (lib/core/database/
-- tables/) y el código de sincronización. Dos avisos:
--   · El borrado suave es `archived_at`, no `deleted_at`. El sync además maneja
--     `deleted_at` como lápida: si en Supabase existen las dos, añade
--     `and deleted_at is null` a cada consulta.
--   · Las tablas locales no llevan `user_id` (la base local es de un solo
--     usuario); las de Supabase sí. La CONSULTA 0 confirma ambas cosas.
-- =============================================================================


-- -----------------------------------------------------------------------------
-- CONSULTA 0 — Confirmar nombres reales ANTES de ejecutar el resto
-- -----------------------------------------------------------------------------
select table_name, string_agg(column_name, ', ' order by ordinal_position) as columnas
from information_schema.columns
where table_schema = 'public'
  and table_name in ('task','tasks','skill','skills','history','user','users',
                     'skill_task','skill_tasks','category','categories')
group by table_name
order by table_name;


-- -----------------------------------------------------------------------------
-- CONSULTA 1 — Tamaño de muestra y ventana temporal
-- -----------------------------------------------------------------------------
select
  count(distinct user_id)                                as usuarios,
  min(created_at)::date                                  as desde,
  max(created_at)::date                                  as hasta,
  count(*) filter (where event_type = 'task_completed')  as tareas_completadas
from history;


-- -----------------------------------------------------------------------------
-- CONSULTA 2 — ¿Cuántos días aguanta un hábito nuevo?
-- -----------------------------------------------------------------------------
-- Por cada tarea recurrente, días entre la primera y la última vez completada.
-- Es nuestra versión de la pregunta que Lally responde con 66 días de mediana.
-- Poder contrastarlo con datos reales es justo el contenido que nadie más tiene.
with vida_habito as (
  select
    h.task_id,
    h.user_id,
    (max(h.created_at)::date - min(h.created_at)::date) as dias_activo,
    count(*)                                            as veces_completada
  from history h
  join task t on t.id = h.task_id and t.user_id = h.user_id
  where h.event_type = 'task_completed'
    and t.is_recurring = true
    and t.archived_at is null
  group by h.task_id, h.user_id
  having count(*) >= 2   -- una sola vez no es un hábito, es una tarea suelta
)
select
  count(*)                                                          as habitos,
  count(distinct user_id)                                           as usuarios,
  round(percentile_cont(0.25) within group (order by dias_activo))  as p25_dias,
  round(percentile_cont(0.50) within group (order by dias_activo))  as mediana_dias,
  round(percentile_cont(0.75) within group (order by dias_activo))  as p75_dias,
  round(avg(veces_completada), 1)                                   as veces_media
from vida_habito
having count(distinct user_id) >= 50;


-- -----------------------------------------------------------------------------
-- CONSULTA 3 — Curva de supervivencia: ¿en qué día se cae la gente?
-- -----------------------------------------------------------------------------
-- Qué porcentaje de hábitos seguía vivo a los 7, 14, 30, 60 y 90 días. Es la
-- cifra con más posibilidades de que alguien la cite: concreta, comparable, y
-- fuera de una app de hábitos nadie la tiene.
with vida_habito as (
  select
    h.task_id, h.user_id,
    (max(h.created_at)::date - min(h.created_at)::date) as dias_activo
  from history h
  join task t on t.id = h.task_id and t.user_id = h.user_id
  where h.event_type = 'task_completed'
    and t.is_recurring = true
    and t.archived_at is null
  group by h.task_id, h.user_id
  having count(*) >= 2
)
select
  count(*)                                                            as habitos,
  round(100.0 * count(*) filter (where dias_activo >=  7) / count(*)) as pct_vivos_dia_7,
  round(100.0 * count(*) filter (where dias_activo >= 14) / count(*)) as pct_vivos_dia_14,
  round(100.0 * count(*) filter (where dias_activo >= 30) / count(*)) as pct_vivos_dia_30,
  round(100.0 * count(*) filter (where dias_activo >= 60) / count(*)) as pct_vivos_dia_60,
  round(100.0 * count(*) filter (where dias_activo >= 90) / count(*)) as pct_vivos_dia_90
from vida_habito
having count(distinct user_id) >= 50;


-- -----------------------------------------------------------------------------
-- CONSULTA 4 — ¿Qué skills elige la gente?
-- -----------------------------------------------------------------------------
-- Normalizado a minúsculas y sin espacios sobrantes. El HAVING es la garantía
-- de privacidad: un nombre que solo usan 3 personas no sale, porque lo escribe
-- cada usuario y puede llevar dentro un nombre propio.
select
  lower(trim(name))        as skill,
  count(distinct user_id)  as usuarios,
  round(avg(level), 1)     as nivel_medio,
  round(avg(best_streak))  as mejor_racha_media
from skill
where archived_at is null
  and is_active = true
group by lower(trim(name))
having count(distinct user_id) >= 50
order by usuarios desc
limit 30;


-- -----------------------------------------------------------------------------
-- CONSULTA 5 — ¿Cuántas skills se crean el primer día, y predice algo?
-- -----------------------------------------------------------------------------
-- La que más me interesa. En dos artículos afirmamos "empieza con tres, no con
-- doce" apoyándonos en la literatura. Si nuestros datos lo confirman —o lo
-- desmienten— eso es material original, y desmentirlo sería aún más citable.
--
-- created_at de skill es nullable, así que se descartan las filas sin fecha en
-- vez de tratarlas como día 1.
with alta as (
  select user_id, min(created_at)::date as dia_alta
  from skill
  where archived_at is null and created_at is not null
  group by user_id
),
primer_dia as (
  select s.user_id, count(*) as skills_dia_1
  from skill s
  join alta a on a.user_id = s.user_id
  where s.archived_at is null
    and s.created_at is not null
    and s.created_at::date = a.dia_alta
  group by s.user_id
),
actividad as (
  select user_id, max(created_at)::date as ultima_actividad
  from history
  where event_type = 'task_completed'
  group by user_id
)
select
  case
    when p.skills_dia_1 <= 3  then '1-3 skills'
    when p.skills_dia_1 <= 6  then '4-6 skills'
    when p.skills_dia_1 <= 10 then '7-10 skills'
    else '11 o mas'
  end                                                                        as grupo,
  count(*)                                                                   as usuarios,
  round(avg(p.skills_dia_1), 1)                                              as skills_media,
  round(100.0 * count(*) filter (where c.ultima_actividad - a.dia_alta >= 30)
        / count(*))                                                          as pct_activos_dia_30
from primer_dia p
join alta a       on a.user_id = p.user_id
join actividad c  on c.user_id = p.user_id
group by grupo
having count(*) >= 50
order by grupo;


-- -----------------------------------------------------------------------------
-- CONSULTA 6 — ¿A qué hora y qué día se completa más?
-- -----------------------------------------------------------------------------
-- Color para el artículo. Sostiene el argumento de la planificación por bloques
-- si resulta que hay franjas claramente mejores que otras.
select
  extract(dow  from created_at)::int as dia_semana,   -- 0 = domingo
  extract(hour from created_at)::int as hora,
  count(*)                           as completadas,
  count(distinct user_id)            as usuarios
from history
where event_type = 'task_completed'
group by 1, 2
having count(distinct user_id) >= 50
order by completadas desc
limit 40;
