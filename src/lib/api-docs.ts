/**
 * La referencia de la API y del MCP, lista para pintar.
 *
 * La fuente es src/data/api-reference.json, que genera skillion-infra
 * (functions-server/api-reference.ts) desde api-ops.ts: cada operación con su
 * JSON Schema, sus anotaciones MCP y una llamada de ejemplo contestada por los
 * handlers de verdad. Aquí solo va lo que el servidor no sabe: los textos en
 * los dos idiomas y cómo se agrupa. Si el servidor gana una operación o un
 * campo sin texto aquí, el build falla (checkCoverage) en vez de publicar una
 * ficha a medias.
 */
import reference from '../data/api-reference.json';
import type { Lang } from './i18n';

export type Schema = {
  type?: string;
  format?: string;
  enum?: (string | number)[];
  anyOf?: Schema[];
  items?: Schema;
  properties?: Record<string, Schema>;
  required?: string[];
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
  multipleOf?: number;
  maxItems?: number;
  pattern?: string;
  description?: string;
};

export type Op = {
  name: string;
  title: string;
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  status: number;
  bodyOptional?: boolean;
  input: Schema;
  annotations: { readOnlyHint: boolean; destructiveHint: boolean; idempotentHint: boolean };
  example: {
    path: string;
    query: Record<string, string | number> | null;
    body: Record<string, unknown> | null;
    response: unknown;
  };
};

export const BASE: string = reference.base;
export const MCP_URL: string = reference.mcp;
export const LIMITS = reference.limits;
export const OPS = reference.ops as unknown as Op[];

const pick = (lang: Lang, pair: readonly [string, string]) => (lang === 'es' ? pair[1] : pair[0]);

// ------------------------------------------------------------ recursos ----

export type Group = {
  id: string;
  label: readonly [string, string];
  /** Primer segmento de la ruta de sus operaciones. */
  roots: string[];
  intro: readonly [string, string];
};

export const GROUPS: Group[] = [
  {
    id: 'account', label: ['Account', 'Cuenta'], roots: ['me'],
    intro: [
      'Your profile as the app shows it, and the limits of your key.',
      'Tu perfil tal como lo enseña la app, y los límites de tu clave.',
    ],
  },
  {
    id: 'tasks', label: ['Tasks', 'Tareas'], roots: ['tasks', 'completions'],
    intro: [
      'Tasks and habits, each with the skills it gives XP to and its subtasks. Only `title` is required; ' +
        'XP, level, status and coins earned are calculated by the app and read-only.',
      'Tareas y hábitos, cada uno con las skills a las que da XP y sus subtareas. Solo `title` es obligatorio; ' +
        'el XP, el nivel, el estado y las monedas ganadas los calcula la app y son de solo lectura.',
    ],
  },
  {
    id: 'subtasks', label: ['Subtasks', 'Subtareas'], roots: ['subtasks'],
    intro: [
      'The steps of a task\'s checklist. Ticking every step does not complete the task: ' +
        '`POST /v1/tasks/{id}/complete` does. Recurring tasks untick their steps when the period changes.',
      'Los pasos de la lista de una tarea. Marcar todos los pasos no completa la tarea: eso lo hace ' +
        '`POST /v1/tasks/{id}/complete`. Las tareas recurrentes desmarcan sus pasos al cambiar de periodo.',
    ],
  },
  {
    id: 'skills', label: ['Skills', 'Skills'], roots: ['skills'],
    intro: [
      'What you level up (Fitness, Reading…). `level`, `total_xp` (the XP inside the current level) and the ' +
        'streaks are read-only.',
      'Lo que subes de nivel (Fitness, Lectura…). `level`, `total_xp` (el XP dentro del nivel actual) y las ' +
        'rachas son de solo lectura.',
    ],
  },
  {
    id: 'categories', label: ['Categories', 'Categorías'], roots: ['categories'],
    intro: ['The lists your tasks are grouped in. Read-only.', 'Las listas en las que se agrupan tus tareas. Solo lectura.'],
  },
  {
    id: 'history', label: ['History', 'Historial'], roots: ['history'],
    intro: [
      'What happened: completions, level-ups, streaks. Read-only.',
      'Lo que pasó: completados, subidas de nivel, rachas. Solo lectura.',
    ],
  },
  {
    id: 'routines', label: ['Routines', 'Rutinas'], roots: ['routines'],
    intro: [
      'A routine is a day plan of the time blocking screen («Workday», «Weekend»…) with its blocks and the ' +
        '`weekdays` it loads. A weekday belongs to one routine: giving it to one takes it from the other. ' +
        'Blocks sit on a 5-minute grid and cannot overlap.',
      'Una rutina es un día de la pantalla de time blocking («Día de trabajo», «Finde»…) con sus bloques y los ' +
        '`weekdays` que carga. Un día de la semana es de una sola rutina: dárselo a una se lo quita a la otra. ' +
        'Los bloques van en una rejilla de 5 minutos y no se pisan.',
    ],
  },
  {
    id: 'week', label: ['The week', 'La semana'], roots: ['week'],
    intro: [
      'Which routine each weekday loads, Monday first.',
      'Qué rutina carga cada día de la semana, empezando por el lunes.',
    ],
  },
  {
    id: 'days', label: ['Days', 'Días'], roots: ['days'],
    intro: [
      'Which routine a date loads and why (`source`: `date` if that date was changed, `week` if it follows its ' +
        'weekday, `default` if no week is set yet), the blocks that show and the ones resting that day ' +
        '(`turned_off`, or covered by a commitment). Dates are your local date, `yyyy-MM-dd`.',
      'Qué rutina carga una fecha y por qué (`source`: `date` si cambiaste esa fecha, `week` si sigue a su día de ' +
        'la semana, `default` si aún no hay semana), los bloques que se ven y los que descansan ese día ' +
        '(`turned_off`, o tapados por un compromiso). Las fechas son tu fecha local, `yyyy-MM-dd`.',
    ],
  },
  {
    id: 'commitments', label: ['Commitments', 'Compromisos'], roots: ['commitments'],
    intro: [
      'Something fixed on one date («Dentist, 17:30–19:00»), drawn over that day\'s routine. With ' +
        '`skip_overlaps` (on unless you say otherwise) the blocks it covers rest that day.',
      'Algo fijo en una fecha («Dentista, 17:30–19:00»), dibujado encima de la rutina de ese día. Con ' +
        '`skip_overlaps` (activado salvo que digas lo contrario) los bloques que tapa descansan ese día.',
    ],
  },
];

export const groupOf = (op: Op) => GROUPS.find((g) => g.roots.includes(op.path.split('/')[1]))!;

// -------------------------------------------------------- operaciones ----

/** [título, qué hace] por operación, en inglés y en español. */
const OP_TEXT: Record<string, { en: [string, string]; es: [string, string] }> = {
  get_me: { en: ['Your profile', 'Your level, XP, coins, energy and health, and the limits of the API.'],
    es: ['Tu perfil', 'Tu nivel, XP, monedas, energía y salud, y los límites de la API.'] },
  list_tasks: { en: ['List tasks', 'Your tasks, each with its skills and subtasks.'],
    es: ['Listar tareas', 'Tus tareas, cada una con sus skills y subtareas.'] },
  get_task: { en: ['Get a task', 'One task, with its skills and subtasks.'],
    es: ['Ver una tarea', 'Una tarea, con sus skills y subtareas.'] },
  create_task: { en: ['Create a task', 'Creates a task and links it to its skills. Returns it as stored.'],
    es: ['Crear una tarea', 'Crea una tarea y la une a sus skills. Devuelve cómo quedó guardada.'] },
  update_task: { en: ['Update a task', 'Changes only the fields you send.'],
    es: ['Cambiar una tarea', 'Cambia solo los campos que mandes.'] },
  delete_task: { en: ['Delete a task', 'Does what the app does: a one-off task is deleted, a recurring one is archived and its history stays.'],
    es: ['Borrar una tarea', 'Hace lo mismo que la app: una tarea suelta se borra y una recurrente se archiva, con su historial.'] },
  complete_task: { en: ['Complete a task', 'Asks the app to complete it. You get `202` at once; your phone applies it with its own rules (XP, coins, energy, streaks) on its next sync.'],
    es: ['Completar una tarea', 'Le pide a la app que la complete. Recibes `202` al momento y tu móvil la aplica con sus reglas (XP, monedas, energía, rachas) en el siguiente sync.'] },
  list_completions: { en: ['List completion requests', 'What you asked to complete through the API, newest first, and how it went: `pending` → `claimed` → `applied`, or `rejected` with a reason.'],
    es: ['Ver peticiones de completar', 'Lo que pediste completar por la API, lo más nuevo primero, y cómo fue: `pending` → `claimed` → `applied`, o `rejected` con el motivo.'] },
  list_subtasks: { en: ['List subtasks', 'Your subtasks; with `task_id`, the steps of one task.'],
    es: ['Listar subtareas', 'Tus subtareas; con `task_id`, los pasos de una tarea.'] },
  get_subtask: { en: ['Get a subtask', 'One step.'], es: ['Ver una subtarea', 'Un paso.'] },
  create_subtask: { en: ['Create a subtask', 'Adds a step at the end of a task\'s list.'],
    es: ['Crear una subtarea', 'Añade un paso al final de la lista de una tarea.'] },
  update_subtask: { en: ['Update a subtask', 'Renames it or ticks it.'], es: ['Cambiar una subtarea', 'Le cambia el nombre o la marca.'] },
  delete_subtask: { en: ['Delete a subtask', 'Removes the step from the list.'], es: ['Borrar una subtarea', 'Quita el paso de la lista.'] },
  list_skills: { en: ['List skills', 'Your skills.'], es: ['Listar skills', 'Tus skills.'] },
  get_skill: { en: ['Get a skill', 'One skill.'], es: ['Ver una skill', 'Una skill.'] },
  create_skill: { en: ['Create a skill', 'Creates a skill at level 1. Returns it as stored.'],
    es: ['Crear una skill', 'Crea una skill en el nivel 1. Devuelve cómo quedó guardada.'] },
  update_skill: { en: ['Update a skill', 'Changes only the fields you send.'], es: ['Cambiar una skill', 'Cambia solo los campos que mandes.'] },
  delete_skill: { en: ['Archive a skill', 'Skills are archived, never deleted: their history stays.'],
    es: ['Archivar una skill', 'Las skills se archivan, nunca se borran: su historial se queda.'] },
  list_categories: { en: ['List categories', 'Your categories.'], es: ['Listar categorías', 'Tus categorías.'] },
  get_category: { en: ['Get a category', 'One category.'], es: ['Ver una categoría', 'Una categoría.'] },
  list_history: { en: ['List history', 'Your history, oldest change first.'], es: ['Listar el historial', 'Tu historial, del cambio más antiguo al más nuevo.'] },
  get_history_entry: { en: ['Get a history entry', 'One entry.'], es: ['Ver una entrada del historial', 'Una entrada.'] },
  list_routines: { en: ['List routines', 'Your routines, each with its blocks and weekdays.'],
    es: ['Listar rutinas', 'Tus rutinas, cada una con sus bloques y sus días.'] },
  get_routine: { en: ['Get a routine', 'One routine with its blocks.'], es: ['Ver una rutina', 'Una rutina con sus bloques.'] },
  create_routine: { en: ['Create a routine', 'Creates a routine with its blocks and, if you send them, its weekdays.'],
    es: ['Crear una rutina', 'Crea una rutina con sus bloques y, si los mandas, sus días.'] },
  update_routine: { en: ['Update a routine', 'Changes the routine, its blocks or its weekdays.'],
    es: ['Cambiar una rutina', 'Cambia la rutina, sus bloques o sus días.'] },
  delete_routine: { en: ['Delete a routine', 'Deletes it with its blocks. Its weekdays become free and the dates that loaded it go back to their weekday.'],
    es: ['Borrar una rutina', 'La borra con sus bloques. Sus días quedan libres y las fechas que la cargaban vuelven a su día de la semana.'] },
  get_week: { en: ['Get the week', 'Which routine each weekday loads; `free` is a day with no routine.'],
    es: ['Ver la semana', 'Qué rutina carga cada día de la semana; `free` es un día sin rutina.'] },
  set_weekday_routine: { en: ['Set a weekday\'s routine', 'Every week, that weekday loads that routine (taken from the one that had it); `null` makes it a free day. Returns the week.'],
    es: ['Dar un día de la semana a una rutina', 'Todas las semanas, ese día carga esa rutina (se lo quita a la que lo tenía); `null` lo deja libre. Devuelve la semana.'] },
  list_days: { en: ['List days', 'Your calendar from one date to another, up to 31 days.'],
    es: ['Listar días', 'Tu calendario de una fecha a otra, hasta 31 días.'] },
  get_day: { en: ['Get a day', 'Which routine a date loads and what that day looks like.'],
    es: ['Ver un día', 'Qué rutina carga una fecha y cómo es ese día.'] },
  set_day: { en: ['Change a day', 'Like the app\'s «Which routine today?»: another routine that day only (or every week), a free day, or blocks turned off that day. Picking what the week already gives clears the change. Returns the day.'],
    es: ['Cambiar un día', 'Como el «¿Qué rutina hoy?» de la app: otra rutina solo ese día (o todas las semanas), un día libre o bloques apagados ese día. Si eliges lo que ya da la semana, el cambio se borra. Devuelve el día.'] },
  reset_day: { en: ['Reset a day', 'The date goes back to its weekday\'s routine. Its commitments stay. Returns the day.'],
    es: ['Devolver un día a su semana', 'La fecha vuelve a la rutina de su día de la semana. Sus compromisos se quedan. Devuelve el día.'] },
  list_commitments: { en: ['List commitments', 'Your commitments; one date or a range.'],
    es: ['Listar compromisos', 'Tus compromisos; una fecha o un rango.'] },
  get_commitment: { en: ['Get a commitment', 'One commitment.'], es: ['Ver un compromiso', 'Un compromiso.'] },
  create_commitment: { en: ['Create a commitment', 'Adds something fixed to a date. Returns it as stored.'],
    es: ['Crear un compromiso', 'Añade algo fijo a una fecha. Devuelve cómo quedó guardado.'] },
  update_commitment: { en: ['Update a commitment', 'Changes only the fields you send.'], es: ['Cambiar un compromiso', 'Cambia solo los campos que mandes.'] },
  delete_commitment: { en: ['Delete a commitment', 'Removes it; the blocks it covered show again.'],
    es: ['Borrar un compromiso', 'Lo quita; los bloques que tapaba vuelven a verse.'] },
};

export const opTitle = (op: Op, lang: Lang) => OP_TEXT[op.name][lang][0];
export const opText = (op: Op, lang: Lang) => OP_TEXT[op.name][lang][1];

/** Avisos que van en la ficha de su operación, donde hacen falta. */
export const OP_NOTES: Record<string, { warn?: boolean; text: readonly [string, string] }[]> = {
  complete_task: [
    { warn: true, text: [
      'Completing is a request, not the completion: XP, coins, energy and streaks are calculated by the app. ' +
        'Follow it with `GET /v1/completions`.',
      'Completar es una petición, no el completado: el XP, las monedas, la energía y las rachas los calcula la app. ' +
        'Síguela con `GET /v1/completions`.'] },
    { text: [
      'Pact tasks are completed with a check-in in the app and bad habits are never completed: both answer `409`. ' +
        'A task with 20 requests still waiting also answers `409` until your phone syncs.',
      'Las tareas de un pacto se completan con un check-in en la app y los malos hábitos nunca se completan: las ' +
        'dos dan `409`. Una tarea con 20 peticiones aún esperando también da `409` hasta que tu móvil sincronice.'] },
  ],
  update_task: [{ text: [
    '`skills` is the whole list: a skill you leave out is unlinked.',
    '`skills` es la lista entera: la skill que no mandes se desune.'] }],
  create_routine: [{ warn: true, text: [
    'Until a routine has weekdays, every day loads the routine you picked on your phone. The API cannot see that ' +
      'choice and uses your default routine instead: the first weekday you set gives the other six to it.',
    'Mientras ninguna rutina tiene días, cada día carga la rutina que elegiste en el móvil. La API no ve esa ' +
      'elección y usa tu rutina predeterminada: el primer día que pongas le da los otros seis a ella.'] }],
  update_routine: [{ text: [
    '`blocks` is always the whole list: a block with `id` is updated, one without `id` is created and any block ' +
      'you leave out is deleted. Leave `blocks` out to keep them as they are.',
    '`blocks` es siempre la lista entera: un bloque con `id` se actualiza, uno sin `id` se crea y el que no mandes ' +
      'se borra. Si no mandas `blocks`, se quedan como están.'] }],
  set_day: [{ warn: true, text: [
    'This works like the app with «Switch by itself every day» on, which is how it comes. With it off, your phone ' +
      'keeps the routine you picked until you change it.',
    'Funciona como la app con «Cambiar sola cada día» activado, que es como viene. Si lo apagas, tu móvil se queda ' +
      'con la rutina que elegiste hasta que la cambies.'] }],
  update_subtask: [{ text: [
    'Ticking every step does not complete the task.', 'Marcar todos los pasos no completa la tarea.'] }],
};

// ------------------------------------------------------------- campos ----

/** Qué es cada campo. El tipo y los límites salen del schema; aquí solo lo que significa. */
const FIELD_TEXT: Record<string, readonly [string, string]> = {
  '*.id': ['The id.', 'El id.'],
  '*.limit': ['Items per page, default 50.', 'Elementos por página, 50 por defecto.'],
  '*.cursor': ['The `next_cursor` of the previous page.', 'El `next_cursor` de la página anterior.'],
  '*.updated_since': ['Only what changed after this date.', 'Solo lo que cambió después de esta fecha.'],
  '*.include_deleted': ['Also deleted items (with `deleted_at`).', 'También lo borrado (con `deleted_at`).'],
  '*.include_archived': ['Also archived items.', 'También lo archivado.'],
  '*.icon': ['An emoji, or a built-in icon: `assets/images/icons/<name>.png`.', 'Un emoji, o un icono de la app: `assets/images/icons/<nombre>.png`.'],
  '*.color': ['`#RRGGBB`.', '`#RRGGBB`.'],

  'tasks.title': ['The name.', 'El nombre.'],
  'tasks.description': ['Notes.', 'Notas.'],
  'tasks.category_id': ['One of your categories. Default: your main one.', 'Una de tus categorías. Por defecto, la principal.'],
  'tasks.status': ['Only tasks in this status.', 'Solo las tareas en este estado.'],
  'tasks.difficulty': ['Default `medium`.', '`medium` por defecto.'],
  'tasks.priority': ['Default 3.', '3 por defecto.'],
  'tasks.energy_cost': ['Energy when completed: negative spends it, positive gives it. Default -1.', 'Energía al completarla: negativo gasta, positivo da. -1 por defecto.'],
  'tasks.health_effect': ['Health when completed.', 'Salud al completarla.'],
  'tasks.coins': ['Coins when completed. Default 10.', 'Monedas al completarla. 10 por defecto.'],
  'tasks.estimated_duration': ['In seconds.', 'En segundos.'],
  'tasks.is_recurring': ['It comes back every period.', 'Vuelve cada periodo.'],
  'tasks.recurrence_pattern': ['Needed if it is recurring.', 'Obligatorio si es recurrente.'],
  'tasks.custom_days': ['Weekdays for `custom`, like `"1,3,5"`: 1 = Monday … 7 = Sunday.', 'Días para `custom`, como `"1,3,5"`: 1 = lunes … 7 = domingo.'],
  'tasks.recurrence_target': ['Times per period.', 'Veces por periodo.'],
  'tasks.recurrence_end_date': ['When it stops coming back.', 'Cuándo deja de volver.'],
  'tasks.recurrence_day_of_month': ['For `monthly` and `yearly`.', 'Para `monthly` y `yearly`.'],
  'tasks.recurrence_month': ['For `yearly`.', 'Para `yearly`.'],
  'tasks.deadline': ['Only for one-off tasks.', 'Solo para tareas no recurrentes.'],
  'tasks.daily_deadline_time': ['`HH:mm`, for recurring tasks.', '`HH:mm`, para tareas recurrentes.'],
  'tasks.reminder_mode': ['Default `auto`.', '`auto` por defecto.'],
  'tasks.reminder_minute': ['Minute of the day, with `custom`.', 'Minuto del día, con `custom`.'],
  'tasks.is_penalty': ['Missing the deadline takes the rewards away.', 'Si pasa el plazo, pierdes la recompensa.'],
  'tasks.skills': ['Every skill it gives XP to.', 'Cada skill a la que da XP.'],
  'tasks.skills[].skill_id': ['One of your skills.', 'Una de tus skills.'],
  'tasks.skills[].xp': ['XP per completion; negative takes XP away. Default 10.', 'XP por completado; negativo resta XP. 10 por defecto.'],
  'tasks.completed_at': ['When it was done, within the last 7 days. Default: now.', 'Cuándo se hizo, dentro de los últimos 7 días. Por defecto, ahora.'],
  'completions.status': ['Only requests in this status.', 'Solo las peticiones en este estado.'],

  'subtasks.task_id': ['The task it belongs to (only when creating).', 'La tarea a la que pertenece (solo al crear).'],
  'subtasks.title': ['The step.', 'El paso.'],
  'subtasks.is_completed': ['Ticked.', 'Marcada.'],

  'skills.name': ['The name.', 'El nombre.'],
  'skills.description': ['What it is about.', 'De qué va.'],
  'skills.is_active': ['Free accounts keep 3 active skills.', 'Las cuentas gratis mantienen 3 activas.'],

  'history.event_type': ['For example `taskCompleted`.', 'Por ejemplo `taskCompleted`.'],

  'routines.name': ['The name.', 'El nombre.'],
  'routines.is_default': ['The one the app falls back to; marking one unmarks the others. Your first routine is.', 'La que usa la app por defecto; marcar una desmarca las demás. Tu primera rutina lo es.'],
  'routines.weekdays': ['The weekdays it loads every week (1 = Monday … 7 = Sunday), taken from whichever routine had them; `[]` or `null` for none.', 'Los días que carga cada semana (1 = lunes … 7 = domingo), quitados a la rutina que los tuviera; `[]` o `null` para ninguno.'],
  'routines.blocks': ['The whole list of blocks.', 'La lista entera de bloques.'],
  'routines.blocks[].id': ['Only to change a block the routine already has.', 'Solo para cambiar un bloque que la rutina ya tiene.'],
  'routines.blocks[].start_minute': ['Minutes from midnight (420 = 07:00); 1440 and up is the next day.', 'Minutos desde medianoche (420 = 07:00); 1440 o más es el día siguiente.'],
  'routines.blocks[].duration_minute': ['In minutes.', 'En minutos.'],
  'routines.blocks[].title': ['Required unless the block has `task_id`.', 'Obligatorio si el bloque no lleva `task_id`.'],
  'routines.blocks[].note': ['A note.', 'Una nota.'],
  'routines.blocks[].icon': ['An emoji or a built-in icon.', 'Un emoji o un icono de la app.'],
  'routines.blocks[].color': ['`#RRGGBB`.', '`#RRGGBB`.'],
  'routines.blocks[].task_id': ['One of your tasks: the block is that task.', 'Una de tus tareas: el bloque es esa tarea.'],
  'routines.blocks[].is_pinned': ['«Start now» does not move it.', '«Empezar ahora» no lo mueve.'],

  'week.weekday': ['1 = Monday … 7 = Sunday.', '1 = lunes … 7 = domingo.'],
  'week.routine_id': ['The routine, or `null` for a free day.', 'La rutina, o `null` para un día libre.'],

  'days.date': ['Your local date.', 'Tu fecha local.'],
  'days.from': ['First date.', 'Primera fecha.'],
  'days.to': ['Last date. Default: the same as `from`.', 'Última fecha. Por defecto, la misma que `from`.'],
  'days.routine_id': ['The routine that date loads; `null` = its weekday\'s; left out = keep the one it has.', 'La rutina que carga esa fecha; `null` = la de su día de la semana; sin mandar = se queda la que tiene.'],
  'days.free': ['No routine that day.', 'Ese día sin rutina.'],
  'days.disabled_block_ids': ['Blocks of that day\'s routine turned off that day only (the whole list).', 'Bloques de la rutina de ese día apagados solo ese día (la lista entera).'],
  'days.every_week': ['That weekday also loads it every week («every Friday»).', 'Ese día de la semana también la carga todas las semanas («todos los viernes»).'],

  'commitments.date': ['Your local date.', 'Tu fecha local.'],
  'commitments.from': ['From this date.', 'Desde esta fecha.'],
  'commitments.to': ['Up to this date.', 'Hasta esta fecha.'],
  'commitments.title': ['What it is.', 'Qué es.'],
  'commitments.start_time': ['`HH:mm`, local time.', '`HH:mm`, hora local.'],
  'commitments.end_time': ['`HH:mm`, after `start_time`; `24:00` at the latest.', '`HH:mm`, después de `start_time`; como mucho `24:00`.'],
  'commitments.skip_overlaps': ['The blocks it covers rest that day. Default `true`.', 'Los bloques que tapa descansan ese día. `true` por defecto.'],
};

/** Los parámetros de paginado: se explican una vez, en «Listas y paginado». */
export const PAGING = new Set(['limit', 'cursor', 'updated_since', 'include_deleted', 'include_archived']);

const resourceOf = (op: Op) => op.path.split('/')[1];

export function fieldText(op: Op, field: string, lang: Lang): string {
  const own = FIELD_TEXT[`${resourceOf(op)}.${field}`] ?? FIELD_TEXT[`*.${field.replace(/^.*\[\]\./, '')}`];
  if (!own) throw new Error(`api-docs: no text for ${resourceOf(op)}.${field} (${op.name})`);
  return pick(lang, own);
}

// ------------------------------------------------------------- tipos ----

const nonNull = (s: Schema) => (s.anyOf ? s.anyOf.find((x) => x.type !== 'null') ?? s : s);
const nullable = (s: Schema) => !!s.anyOf?.some((x) => x.type === 'null');

export function typeLabel(s: Schema): string {
  const t = nonNull(s);
  let label: string;
  if (t.format === 'uuid') label = 'uuid';
  else if (t.format === 'date') label = 'date';
  else if (t.format === 'date-time') label = 'datetime';
  else if (t.type === 'array') label = `${t.items?.type === 'object' ? 'object' : typeLabel(t.items ?? {})}[]`;
  else label = t.type ?? 'any';
  return nullable(s) ? `${label} | null` : label;
}

/** Los límites del schema en palabras: «1–128 caracteres», «de 5 en 5»… */
export function rules(s: Schema, lang: Lang): string[] {
  const t = nonNull(s);
  const es = lang === 'es';
  const out: string[] = [];
  if (t.enum) out.push(t.enum.join(' · '));
  if (t.minLength != null || t.maxLength != null) {
    const max = t.maxLength?.toLocaleString(es ? 'es' : 'en');
    out.push(t.minLength ? `${t.minLength}–${max} ${es ? 'caracteres' : 'chars'}` : `${es ? 'hasta' : 'up to'} ${max} ${es ? 'caracteres' : 'chars'}`);
  }
  if (t.minimum != null && t.maximum != null) {
    out.push(`${t.minimum.toLocaleString(es ? 'es' : 'en')} … ${t.maximum.toLocaleString(es ? 'es' : 'en')}`);
  }
  if (t.multipleOf) out.push(es ? `de ${t.multipleOf} en ${t.multipleOf}` : `steps of ${t.multipleOf}`);
  if (t.maxItems) out.push(es ? `hasta ${t.maxItems}` : `up to ${t.maxItems}`);
  if (t.type === 'array' && t.items?.minimum != null && t.items?.maximum != null) {
    out.push(`${t.items.minimum} … ${t.items.maximum}`);
  }
  return out;
}

export type Param = { name: string; schema: Schema; required: boolean; text: string; rules: string[]; child?: boolean };

export type Params = { path: Param[]; query: Param[]; body: Param[]; paging: boolean };

export function paramsOf(op: Op, lang: Lang): Params {
  const props = op.input.properties ?? {};
  const required = new Set(op.input.required ?? []);
  const inPath = new Set([...op.path.matchAll(/\{(\w+)\}/g)].map((m) => m[1]));
  const reads = op.method === 'GET' || op.method === 'DELETE';
  const out: Params = { path: [], query: [], body: [], paging: false };
  for (const [name, schema] of Object.entries(props)) {
    if (!inPath.has(name) && reads && PAGING.has(name) && op.name.startsWith('list_') && op.name !== 'list_completions') {
      out.paging = true;
      continue;
    }
    const param: Param = { name, schema, required: required.has(name), text: fieldText(op, name, lang), rules: rules(schema, lang) };
    const where = inPath.has(name) ? out.path : reads ? out.query : out.body;
    where.push(param);
    const items = nonNull(schema).items;
    if (items?.type === 'object') {
      const req = new Set(items.required ?? []);
      for (const [child, cs] of Object.entries(items.properties ?? {})) {
        const key = `${name}[].${child}`;
        where.push({ name: key, schema: cs, required: req.has(child), text: fieldText(op, key, lang), rules: rules(cs, lang), child: true });
      }
    }
  }
  return out;
}

/** create_x de un update_x: sus campos son los mismos, todos opcionales. */
export const sameFieldsAs = (op: Op) =>
  op.method === 'PATCH' ? OPS.find((o) => o.method === 'POST' && o.path === op.path.replace('/{id}', '')) : undefined;

// --------------------------------------------------------- anclas ----

export const anchorOf = (op: Op) =>
  `${op.method.toLowerCase()}-${op.path.slice(1).replace(/[{}]/g, '').replace(/\//g, '-')}`;

export const toolAnchor = (name: string) => `tool-${name}`;

// ------------------------------------------------------- ejemplos ----

const exampleUrl = (op: Op) => {
  const qs = op.example.query
    ? '?' + new URLSearchParams(Object.entries(op.example.query).map(([k, v]) => [k, String(v)])).toString()
    : '';
  return `${BASE}${op.example.path}${qs}`;
};

const indent = (text: string, by: string) => text.split('\n').map((l, i) => (i ? by + l : l)).join('\n');

function pyLiteral(v: unknown, level = 0): string {
  const pad = '    '.repeat(level + 1);
  const end = '    '.repeat(level);
  if (v === null) return 'None';
  if (v === true) return 'True';
  if (v === false) return 'False';
  if (typeof v === 'string') return JSON.stringify(v);
  if (typeof v === 'number') return String(v);
  if (Array.isArray(v)) {
    if (v.every((x) => typeof x !== 'object' || x === null)) return `[${v.map((x) => pyLiteral(x)).join(', ')}]`;
    return `[\n${v.map((x) => pad + pyLiteral(x, level + 1)).join(',\n')},\n${end}]`;
  }
  const entries = Object.entries(v as Record<string, unknown>);
  return `{\n${entries.map(([k, x]) => `${pad}${JSON.stringify(k)}: ${pyLiteral(x, level + 1)}`).join(',\n')},\n${end}}`;
}

export function curlOf(op: Op): string {
  const url = exampleUrl(op);
  const lines = [`curl ${op.method === 'GET' ? '' : `-X ${op.method} `}${url.includes('?') ? `"${url}"` : url}`];
  lines.push('  -H "Authorization: Bearer $SKILLION_KEY"');
  if (op.example.body) {
    lines.push('  -H "Content-Type: application/json"');
    lines.push(`  -d '${indent(JSON.stringify(op.example.body, null, 2), '  ')}'`);
  }
  return lines.join(' \\\n');
}

export function jsOf(op: Op): string {
  const opts = [`  method: '${op.method}',`];
  if (op.method === 'GET') opts.shift();
  opts.push(`  headers: {\n    Authorization: \`Bearer \${process.env.SKILLION_KEY}\`,${op.example.body ? "\n    'Content-Type': 'application/json'," : ''}\n  },`);
  if (op.example.body) opts.push(`  body: JSON.stringify(${indent(JSON.stringify(op.example.body, null, 2), '  ')}),`);
  const call = `const res = await fetch('${exampleUrl(op)}', {\n${opts.join('\n')}\n})`;
  return op.status === 204 ? `${call}\n// 204: no body` : `${call}\nconst { data } = await res.json()`;
}

export function pyOf(op: Op): string {
  const args = [`    "${exampleUrl(op)}",`, `    headers={"Authorization": f"Bearer {os.environ['SKILLION_KEY']}"},`];
  if (op.example.body) args.push(`    json=${indent(pyLiteral(op.example.body, 1), '')},`);
  const call = `res = requests.${op.method.toLowerCase()}(\n${args.join('\n')}\n)`;
  return `import os, requests\n\n${call}\n${op.status === 204 ? 'res.raise_for_status()  # 204: no body' : 'data = res.json()["data"]'}`;
}

export const responseOf = (op: Op) => (op.example.response == null ? null : JSON.stringify(op.example.response, null, 2));

/** Los argumentos del MCP para el mismo ejemplo: la ruta, la consulta y el cuerpo, juntos. */
export function mcpArgsOf(op: Op): Record<string, unknown> {
  const args: Record<string, unknown> = {};
  const names = [...op.path.matchAll(/\{(\w+)\}/g)].map((m) => m[1]);
  const parts = op.path.split('/');
  const real = op.example.path.split('/');
  for (const n of names) {
    const v = real[parts.indexOf(`{${n}}`)];
    args[n] = n === 'weekday' ? Number(v) : v;
  }
  return { ...args, ...(op.example.query ?? {}), ...(op.example.body ?? {}) };
}

// ---------------------------------------------------------- errores ----

export const ERRORS: { http: number; code: string; what: readonly [string, string]; fix: readonly [string, string] }[] = [
  { http: 400, code: 'invalid_request', what: ['A query parameter or the body is not valid.', 'Un parámetro o el cuerpo no es válido.'],
    fix: ['`message` says which one.', '`message` dice cuál.'] },
  { http: 400, code: 'invalid_json', what: ['The body is not JSON.', 'El cuerpo no es JSON.'],
    fix: ['Send JSON with `Content-Type: application/json`.', 'Manda JSON con `Content-Type: application/json`.'] },
  { http: 401, code: 'unauthorized', what: ['The key is missing, malformed or revoked.', 'Falta la clave, está mal escrita o está revocada.'],
    fix: ['Check `Authorization: Bearer sk_live_…`, or create a new key.', 'Revisa `Authorization: Bearer sk_live_…` o crea una clave nueva.'] },
  { http: 403, code: 'premium_required', what: ['The account is not Premium.', 'La cuenta no es Premium.'],
    fix: ['If you just subscribed, try again in a minute.', 'Si acabas de suscribirte, prueba en un minuto.'] },
  { http: 404, code: 'not_found', what: ['It does not exist, or it is not yours.', 'No existe, o no es tuyo.'],
    fix: ['Check the id; deleted items show with `include_deleted=true`.', 'Revisa el id; lo borrado sale con `include_deleted=true`.'] },
  { http: 405, code: 'method_not_allowed', what: ['That method does not exist on that path.', 'Ese método no existe en esa ruta.'],
    fix: ['See the endpoint\'s card.', 'Mira la ficha del endpoint.'] },
  { http: 409, code: 'pact_task', what: ['It is a pact task.', 'Es una tarea de un pacto.'],
    fix: ['It changes only in the app, with a check-in.', 'Solo cambia en la app, con un check-in.'] },
  { http: 409, code: 'bad_habit', what: ['Bad habits are not completed: they are kept clean.', 'Los malos hábitos no se completan: se mantienen limpios.'],
    fix: ['Log a slip in the app.', 'Marca la recaída en la app.'] },
  { http: 409, code: 'too_many_pending', what: ['That task already has 20 completions waiting.', 'Esa tarea ya tiene 20 completados esperando.'],
    fix: ['Open the app so it syncs them.', 'Abre la app para que los sincronice.'] },
  { http: 413, code: 'payload_too_large', what: ['The body is over 64 KB.', 'El cuerpo pasa de 64 KB.'],
    fix: ['Split it into several calls.', 'Pártelo en varias llamadas.'] },
  { http: 422, code: 'invalid_field', what: ['Some fields are not valid.', 'Algún campo no es válido.'],
    fix: ['`details` lists each one and why.', '`details` dice cuál y por qué.'] },
  { http: 429, code: 'rate_limited', what: ['Over the per-minute or the daily limit.', 'Te pasaste del límite por minuto o del diario.'],
    fix: ['Wait `retry-after` seconds.', 'Espera `retry-after` segundos.'] },
  { http: 500, code: 'internal', what: ['Something failed on our side.', 'Algo falló de nuestro lado.'],
    fix: ['Try again later; if it keeps failing, write to us.', 'Prueba más tarde; si sigue, escríbenos.'] },
];

// ---------------------------------------------------------- control ----

/** Lo que el servidor tiene y esta página no explica rompe el build. */
export function checkCoverage(lang: Lang) {
  const missing = OPS.filter((o) => !OP_TEXT[o.name]).map((o) => o.name);
  if (missing.length) throw new Error(`api-docs: no text for ${missing.join(', ')}`);
  for (const op of OPS) {
    if (!GROUPS.some((g) => g.roots.includes(resourceOf(op)))) throw new Error(`api-docs: no group for ${op.path}`);
    paramsOf(op, lang);
  }
}

export const rich = (text: string) => text.split('`');
export { pick };
