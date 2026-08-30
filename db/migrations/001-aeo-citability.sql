-- 001 — Estructura de citabilidad (SCRUM-450)
--
-- El objetivo del ticket es que un modelo (ChatGPT, Claude, Perplexity, el
-- resumen de Google) tenga material nuestro que merezca la pena citar. Para eso
-- un artículo necesita tres cosas que la tabla no sabía guardar: una respuesta
-- directa arriba del todo, preguntas frecuentes en formato pregunta/respuesta y
-- fuentes enlazadas. Las dos últimas alimentan además el JSON-LD (FAQPage y
-- BlogPosting), que es lo que hace la página parseable sin adivinar.
--
-- Idempotente: se puede volver a ejecutar tal cual en el SQL Editor de Neon.

-- ---------------------------------------------------------------------------
-- 1. Columnas nuevas
-- ---------------------------------------------------------------------------

-- Respuesta de 2-3 frases que resuelve la pregunta del titular de golpe. NO es
-- el excerpt: ese es el gancho de la card y la meta description, y se escribe
-- para que hagas clic. Este se escribe para que puedas NO hacer clic, que es
-- justo lo que un modelo extrae y cita.
alter table blog_posts add column if not exists tldr text;

-- [{ "title": "...", "url": "https://...", "publisher": "..." }]
-- Afirmar un dato sin enlazar de dónde sale es lo que separa un artículo
-- citable de uno ignorado.
alter table blog_posts add column if not exists sources jsonb not null default '[]'::jsonb;

-- [{ "q": "...", "a": "..." }]
alter table blog_posts add column if not exists faq jsonb not null default '[]'::jsonb;

-- Que sean listas de objetos y no cualquier JSON: un string suelto aquí
-- rompería el render y el schema sin decir por qué.
alter table blog_posts drop constraint if exists blog_posts_sources_is_array;
alter table blog_posts add constraint blog_posts_sources_is_array
  check (jsonb_typeof(sources) = 'array');

alter table blog_posts drop constraint if exists blog_posts_faq_is_array;
alter table blog_posts add constraint blog_posts_faq_is_array
  check (jsonb_typeof(faq) = 'array');

-- ---------------------------------------------------------------------------
-- 2. Categorías nuevas: comparativa y listado
-- ---------------------------------------------------------------------------
-- Son los dos formatos que el ticket pide de forma explícita ("Skillion frente
-- a Habitica", "las mejores apps de hábitos") y los que más se citan. Meterlos
-- en 'science' o 'tips' los escondería del filtro del índice.
alter table blog_posts drop constraint if exists blog_posts_category_check;
alter table blog_posts add constraint blog_posts_category_check
  check (category in ('how-to','science','tips','tricks','comparison','roundup'));

-- ---------------------------------------------------------------------------
-- 3. updated_at pasa a ser de verdad la fecha de modificación
-- ---------------------------------------------------------------------------
-- Hasta ahora era `default now()` sin trigger: guardaba la fecha de INSERCIÓN y
-- no volvía a moverse. El criterio 3 del ticket pide fecha de última
-- actualización visible, y el dateModified del JSON-LD la necesita de verdad.
--
-- El guard `old.* is distinct from new.*` evita que un seed idempotente, que
-- reescribe las filas en cada pasada, mueva la fecha sin que haya cambiado nada.
create or replace function blog_posts_touch_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists blog_posts_touch_updated_at on blog_posts;
create trigger blog_posts_touch_updated_at
  before update on blog_posts
  for each row
  when (old.* is distinct from new.*)
  execute function blog_posts_touch_updated_at();
