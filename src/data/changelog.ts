// ============================================================================
// CHANGELOG / NOVEDADES — single source of truth
// ----------------------------------------------------------------------------
// HOW TO ADD A NEW RELEASE:
//   1. Copy one of the objects inside `changelog` below.
//   2. Paste it at the TOP of the array (newest first) and edit the fields.
//   3. Set `highlight: true` on the newest one (and remove it from the old one)
//      so it shows the "LATEST / ULTIMA" glow badge.
//   4. Each entry has a `tag`: 'feature' (NUEVO), 'fix' (ARREGLADO) or
//      'improvement' (MEJORADO). It only controls the color of the chip.
//
// Every text field is bilingual: { en, es }. The page renders the right one.
// ============================================================================

export type ChangelogTag = 'feature' | 'fix' | 'improvement';

export interface Localized {
  en: string;
  es: string;
}

export interface ChangelogEntry {
  /** Emoji shown in the pixel box. */
  icon: string;
  tag: ChangelogTag;
  title: Localized;
  description: Localized;
}

export interface ChangelogRelease {
  /** Semantic version, shown as a level badge (e.g. "2.6.8"). */
  version: string;
  /** ISO date "YYYY-MM-DD". */
  date: string;
  /** Highlights the release with the "LATEST / ULTIMA" glow badge. */
  highlight?: boolean;
  /** Optional release codename, shown next to the version. */
  codename?: Localized;
  entries: ChangelogEntry[];
}

export const changelog: ChangelogRelease[] = [
  {
    version: '2.7.4',
    date: '2026-08-15',
    highlight: true,
    codename: {
      en: 'Deadline Reminders',
      es: 'Recordatorios de fecha límite',
    },
    entries: [
      {
        icon: '\u23f0',
        tag: 'feature',
        title: {
          en: 'Deadline reminders',
          es: 'Recordatorios de fecha límite',
        },
        description: {
          en: 'Any task with a due date can now warn you before it lands. One-off deadlines take an exact time of day, and you can mute the reminder on a task without touching the rest. Translated into all eight supported languages.',
          es: 'Cualquier tarea con fecha de entrega puede avisarte antes de que llegue. Las fechas puntuales admiten una hora exacta, y puedes silenciar el aviso de una tarea concreta sin tocar las demás. Traducido a los ocho idiomas de la app.',
        },
      },
      {
        icon: '\ud83e\udde9',
        tag: 'feature',
        title: {
          en: 'Widget shows only what matters',
          es: 'El widget muestra solo lo que importa',
        },
        description: {
          en: 'Choose which categories appear in the home-screen widget from Preferences.',
          es: 'Elige desde Preferencias qué categorías aparecen en el widget de la pantalla de inicio.',
        },
      },
      {
        icon: '\ud83d\udd14',
        tag: 'improvement',
        title: {
          en: 'Notifications that actually arrive',
          es: 'Notificaciones que sí llegan',
        },
        description: {
          en: 'Smart notifications get their own Android channel, and on iOS we now work around the 64-pending limit so nothing gets dropped in silence. Permission state is read from the system instead of assumed.',
          es: 'Las notificaciones inteligentes tienen su propio canal en Android, y en iOS ya esquivamos el límite de 64 pendientes para que ninguna se pierda en silencio. El permiso se consulta al sistema en vez de darlo por hecho.',
        },
      },
      {
        icon: '\ud83e\udeb6',
        tag: 'improvement',
        title: {
          en: 'A lighter app',
          es: 'Una app más ligera',
        },
        description: {
          en: 'We compressed the sounds, dropped artwork no screen was reaching and stored the rest at the size it is actually drawn.',
          es: 'Comprimimos los sonidos, quitamos ilustraciones a las que no llegaba ninguna pantalla y guardamos el resto al tamaño al que se dibujan de verdad.',
        },
      },
    ],
  },
  {
    version: '2.7.3',
    date: '2026-08-13',
    codename: {
      en: 'Subtasks',
      es: 'Subtareas',
    },
    entries: [
      {
        icon: '\u2611\ufe0f',
        tag: 'feature',
        title: {
          en: 'Subtasks, up to 20 per task',
          es: 'Subtareas, hasta 20 por tarea',
        },
        description: {
          en: 'Break a big task into a checklist. Tick the items off and the checkbox on the card doubles as a progress ring that fills as you advance. Completing the parent checks everything, and vice versa.',
          es: 'Divide una tarea grande en una lista. Ve marcando y la casilla de la tarjeta se convierte en un anillo de progreso que se llena según avanzas. Completar la tarea marca todo, y al revés también.',
        },
      },
      {
        icon: '\ud83d\udccb',
        tag: 'improvement',
        title: {
          en: 'Task detail, reorganized',
          es: 'El detalle de tarea, reorganizado',
        },
        description: {
          en: 'Identity, subtasks and costs each get their own block instead of one long list.',
          es: 'Identidad, subtareas y costes tienen cada uno su bloque, en vez de una lista larga.',
        },
      },
      {
        icon: '\ud83d\uddc2\ufe0f',
        tag: 'feature',
        title: {
          en: 'Collapsible category groups',
          es: 'Grupos de categorías plegables',
        },
        description: {
          en: 'Fold away the categories you are not working on. The app remembers how you left them.',
          es: 'Pliega las categorías en las que no estás trabajando. La app recuerda cómo las dejaste.',
        },
      },
      {
        icon: '\ud83c\udf0d',
        tag: 'improvement',
        title: {
          en: 'Six more languages for starter tasks',
          es: 'Seis idiomas más en las tareas iniciales',
        },
        description: {
          en: 'The 78 starter-task texts now speak German, French, Italian, Portuguese, Russian and Ukrainian.',
          es: 'Los 78 textos de tareas iniciales ya hablan alemán, francés, italiano, portugués, ruso y ucraniano.',
        },
      },
    ],
  },
  {
    version: '2.7.2',
    date: '2026-08-03',
    codename: {
      en: 'Home Screen Widget',
      es: 'Widget de pantalla de inicio',
    },
    entries: [
      {
        icon: '\ud83d\udcf1',
        tag: 'feature',
        title: {
          en: 'The iOS widget, redesigned',
          es: 'El widget de iOS, rediseñado',
        },
        description: {
          en: 'Pixel-art console look, live sync with the app, a badge for recurring tasks and X/N progress on flexible goals. The NEW TASK button opens the create sheet straight from the home screen.',
          es: 'Aspecto de consola pixel art, sincronización en vivo con la app, distintivo para las tareas recurrentes y progreso X/N en las metas flexibles. El botón NUEVA TAREA abre el formulario desde la propia pantalla de inicio.',
        },
      },
      {
        icon: '\ud83d\uddc4\ufe0f',
        tag: 'feature',
        title: {
          en: 'Archive by hand, in batches',
          es: 'Archiva a mano y por lotes',
        },
        description: {
          en: 'Archive any task with a swipe or from its detail, and switch on selection mode to act on several at once.',
          es: 'Archiva cualquier tarea deslizando o desde su detalle, y activa el modo selección para actuar sobre varias a la vez.',
        },
      },
      {
        icon: '\u23f3',
        tag: 'improvement',
        title: {
          en: 'Time Blocking, front and center',
          es: 'Time Blocking, en primer plano',
        },
        description: {
          en: 'It takes its own slot in the navigation bar, and routine templates now carry their own icon and color.',
          es: 'Ocupa su propio hueco en la barra de navegación, y las plantillas de rutina llevan ahora icono y color propios.',
        },
      },
      {
        icon: '\ud83d\udd12',
        tag: 'improvement',
        title: {
          en: 'Deleting your account deletes your data',
          es: 'Borrar la cuenta borra tus datos',
        },
        description: {
          en: 'Account deletion now purges your data in the cloud first, as the GDPR requires.',
          es: 'Al borrar la cuenta se eliminan primero tus datos en la nube, como exige el RGPD.',
        },
      },
    ],
  },
  {
    version: '2.7.1',
    date: '2026-07-20',
    codename: {
      en: 'New Create Task',
      es: 'Nuevo crear tarea',
    },
    entries: [
      {
        icon: '\u270f\ufe0f',
        tag: 'feature',
        title: {
          en: 'Create Task, rebuilt from scratch',
          es: 'Crear tarea, reconstruido de cero',
        },
        description: {
          en: 'A new modal with one sheet per field: category, description, skills, difficulty, duration, frequency, due date, cost and rewards. Editing an existing task uses exactly the same screen.',
          es: 'Un modal nuevo con una hoja por campo: categoría, descripción, skills, dificultad, duración, frecuencia, fecha de entrega, coste y recompensas. Editar una tarea existente usa exactamente la misma pantalla.',
        },
      },
      {
        icon: '\ud83d\udcc5',
        tag: 'feature',
        title: {
          en: 'Frequency, the way you think about it',
          es: 'La frecuencia, como te la imaginas',
        },
        description: {
          en: 'Weekly by picking days, monthly on a grid, yearly on a calendar. The custom option keeps the classic weekday picker.',
          es: 'Semanal eligiendo días, mensual sobre una cuadrícula, anual sobre un calendario. La opción personalizada conserva el selector de días de siempre.',
        },
      },
      {
        icon: '\ud83c\udfa8',
        tag: 'improvement',
        title: {
          en: 'Pixel-art icons everywhere',
          es: 'Iconos pixel art por todas partes',
        },
        description: {
          en: 'Category, due date, duration and the more-options rows get their own artwork, and the reward sheet shows the XP each skill would lose.',
          es: 'Categoría, fecha de entrega, duración y las filas de más opciones tienen su propia ilustración, y la hoja de recompensas muestra el XP que perdería cada skill.',
        },
      },
    ],
  },
  {
    version: '2.7.0',
    date: '2026-07-09',
    codename: {
      en: 'Cloud Sync',
      es: 'Sincronización en la nube',
    },
    entries: [
      {
        icon: '\u2601\ufe0f',
        tag: 'feature',
        title: {
          en: 'Your adventure, on every device',
          es: 'Tu aventura, en todos tus dispositivos',
        },
        description: {
          en: 'Sync is on by default. Log in on a new phone and everything restores from the cloud, and you get into the app straight away while it downloads in the background instead of staring at a loader.',
          es: 'La sincronización viene activada. Inicia sesión en un móvil nuevo y todo se restaura desde la nube: entras en la app al momento y la descarga sigue de fondo, en vez de quedarte mirando una pantalla de carga.',
        },
      },
      {
        icon: '\ud83d\udd04',
        tag: 'improvement',
        title: {
          en: 'Always up to date',
          es: 'Siempre al día',
        },
        description: {
          en: 'Pull down to force a real sync, and coming back to the app checks for changes on its own.',
          es: 'Desliza hacia abajo para forzar una sincronización de verdad, y al volver a la app se comprueban los cambios sola.',
        },
      },
      {
        icon: '\ud83c\udff7\ufe0f',
        tag: 'feature',
        title: {
          en: 'Several categories per task',
          es: 'Varias categorías por tarea',
        },
        description: {
          en: 'Tag a task with as many categories as it needs, instead of picking just one.',
          es: 'Etiqueta una tarea con tantas categorías como necesite, en vez de elegir una sola.',
        },
      },
      {
        icon: '\ud83e\uddcd',
        tag: 'improvement',
        title: {
          en: 'Your avatar travels with you',
          es: 'Tu avatar viaja contigo',
        },
        description: {
          en: 'The avatar syncs across devices, and the tutorials no longer replay every time you log back in or set up a new phone.',
          es: 'El avatar se sincroniza entre dispositivos, y los tutoriales ya no se repiten cada vez que vuelves a iniciar sesión o estrenas móvil.',
        },
      },
    ],
  },
  {
    version: '2.6.8',
    date: '2026-06-05',
    codename: {
      en: 'Smart Notifications',
      es: 'Notificaciones inteligentes',
    },
    entries: [
      {
        icon: '\ud83d\udd14',
        tag: 'feature',
        title: {
          en: 'Smart Notifications are here',
          es: 'Llegan las notificaciones inteligentes',
        },
        description: {
          en: "Skillion now nudges you at exactly the right moment \u2014 keep your streaks alive, never miss a recurring task, and get a heads-up when a skill needs attention. Fully customizable: choose the categories you want and set Quiet Hours so you're never disturbed.",
          es: 'Skillion ahora te avisa justo en el momento adecuado: mantén vivas tus rachas, no te pierdas ninguna tarea recurrente y recibe un aviso cuando una skill necesite atención. Totalmente personalizable: elige las categorías que quieras y configura las Horas de silencio para que nunca te molesten.',
        },
      },
      {
        icon: '\ud83d\udd50',
        tag: 'fix',
        title: {
          en: 'Time Blocking, rock-solid',
          es: 'Time Blocking, sólido como una roca',
        },
        description: {
          en: 'Your "Rocks" now stay locked in place when you rearrange your day, "Start Now" cleanly snaps tasks to the current time, and "Restart Routine" behaves exactly as you\'d expect.',
          es: 'Tus "Rocas" ahora se quedan fijas en su sitio cuando reorganizas tu día, "Empezar ahora" encaja las tareas limpiamente en la hora actual y "Reiniciar rutina" se comporta exactamente como esperas.',
        },
      },
      {
        icon: '\ud83d\uddc4\ufe0f',
        tag: 'feature',
        title: {
          en: 'Task Archiving, your way',
          es: 'Archivado de tareas, a tu manera',
        },
        description: {
          en: 'Single and recurring tasks get their own auto-archive switch, and when you turn it off the app asks whether to recover what it archived or leave it be.',
          es: 'Las tareas sueltas y las recurrentes tienen su propio interruptor de archivado automático, y al desactivarlo la app te pregunta si quieres recuperar lo archivado o dejarlo como está.',
        },
      },
      {
        icon: '\u2728',
        tag: 'improvement',
        title: {
          en: 'Smarter & smoother',
          es: 'Mas inteligente y fluido',
        },
        description: {
          en: 'Improved AI suggestions and general performance under the hood.',
          es: 'Mejoras en las sugerencias de IA y en el rendimiento general bajo el capó.',
        },
      },
    ],
  },
  {
    version: '2.6.7',
    date: '2026-05-26',
    codename: {
      en: 'Block Reminders',
      es: 'Avisos por bloque',
    },
    entries: [
      {
        icon: '\u23f1\ufe0f',
        tag: 'feature',
        title: {
          en: 'Reminders for each time block',
          es: 'Avisos para cada bloque de tiempo',
        },
        description: {
          en: 'Every block in Time Blocking can warn you before it starts, with the amount of notice you choose. The reminder uses the name of the task linked to the block.',
          es: 'Cada bloque de Time Blocking puede avisarte antes de empezar, con la antelación que elijas. El aviso usa el nombre de la tarea enlazada al bloque.',
        },
      },
      {
        icon: '\ud83d\uddd1\ufe0f',
        tag: 'improvement',
        title: {
          en: 'Safer deletion',
          es: 'Borrado más seguro',
        },
        description: {
          en: 'Deleting a task or a skill is now reversible under the hood, so nothing disappears for good by accident.',
          es: 'Borrar una tarea o una skill es ahora reversible por dentro, así que nada desaparece para siempre por accidente.',
        },
      },
      {
        icon: '\ud83d\udcbe',
        tag: 'fix',
        title: {
          en: 'Backups and updates, made safe',
          es: 'Copias y actualizaciones, a salvo',
        },
        description: {
          en: 'Restoring an older backup no longer crashes, and we closed a migration that could take tasks with it while updating. If you were on the previous build, this is the one you want.',
          es: 'Restaurar una copia antigua ya no cierra la app, y cerramos una migración que podía llevarse tareas por delante al actualizar. Si venías de la versión anterior, está es la que quieres.',
        },
      },
    ],
  },
  {
    version: '2.6.5',
    date: '2026-05-14',
    codename: {
      en: 'Your Day, Your Clock',
      es: 'Tu día, tu reloj',
    },
    entries: [
      {
        icon: '\ud83d\udd01',
        tag: 'feature',
        title: {
          en: 'Recurring tasks that bend',
          es: 'Tareas recurrentes que se adaptan',
        },
        description: {
          en: 'Recurring tasks got flexible, starting with setting which day your week begins on.',
          es: 'Las tareas recurrentes se volvieron flexibles, empezando por elegir qué día empieza tu semana.',
        },
      },
      {
        icon: '\ud83c\udf10',
        tag: 'feature',
        title: {
          en: 'Daily reset in your own timezone',
          es: 'Reinicio diario en tu zona horaria',
        },
        description: {
          en: 'Pick the hour your day rolls over. If you go to bed at 3am, your day can end at 4.',
          es: 'Elige a qué hora cambia tu día. Si te acuestas a las 3, tu día puede acabar a las 4.',
        },
      },
      {
        icon: '\ud83d\udcf3',
        tag: 'improvement',
        title: {
          en: 'The first steps, now you can feel them',
          es: 'Los primeros pasos, ahora se sienten',
        },
        description: {
          en: 'The phone answers you with a vibration that builds as you move through the first steps.',
          es: 'El móvil te responde con una vibración que va subiendo mientras avanzas por los primeros pasos.',
        },
      },
      {
        icon: '\ud83d\udc1b',
        tag: 'fix',
        title: {
          en: 'A round of task fixes',
          es: 'Una ronda de arreglos en tareas',
        },
        description: {
          en: 'You can clear a task category, edit tasks worth 0 coins, and undo now gives back luck and overdue rewards exactly as they were. Reward animations survive leaving the screen.',
          es: 'Ya puedes quitar la categoría de una tarea, editar tareas de 0 monedas, y deshacer devuelve la suerte y las penalizaciones exactamente como estaban. Las animaciones de recompensa sobreviven al salir de la pantalla.',
        },
      },
    ],
  },
];

// ----------------------------------------------------------------------------
// UI strings for the page chrome (everything that is NOT a changelog entry).
// ----------------------------------------------------------------------------
export const changelogUi = {
  metaTitle: {
    en: "What's New — Skillion | Patch Notes & Updates",
    es: 'Novedades — Skillion | Notas de versión y actualizaciones',
  },
  metaDescription: {
    en: 'See the latest Skillion updates: new features, fixes and improvements. Level up your habits with every release.',
    es: 'Descubre las últimas novedades de Skillion: nuevas funciones, arreglos y mejoras. Sube de nivel tus hábitos en cada versión.',
  },
  heroEyebrow: {
    en: 'Patch Notes',
    es: 'Registro de cambios',
  },
  heroTitle: {
    en: "What's New",
    es: 'Novedades',
  },
  heroSubtitle: {
    en: 'Every update makes your adventure better. Here is what changed.',
    es: 'Cada actualización mejora tu aventura. Esto es lo que cambió.',
  },
  versionLabel: {
    en: 'Version',
    es: 'Versión',
  },
  latestBadge: {
    en: 'LATEST',
    es: 'ULTIMA',
  },
  // Sin flecha decorativa: Press Start 2P no trae ese glifo y el navegador lo
  // saca de otra fuente, más pequeño y desalineado. Sin tilde en MAS por el
  // mismo motivo (la fuente no tiene mayúsculas acentuadas).
  showMore: {
    en: 'SHOW MORE VERSIONS',
    es: 'VER MAS VERSIONES',
  },
  backHome: {
    en: 'Back to home',
    es: 'Volver al inicio',
  },
  thanksTitle: {
    en: 'Thanks for leveling up with us!',
    es: '¡Gracias por subir de nivel con nosotros!',
  },
  thanksText: {
    en: 'Keep your streak alive. Your next level is one quest away.',
    es: 'Mantén viva tu racha. Tu próximo nivel está a una misión de distancia.',
  },
  tags: {
    feature: { en: 'NEW', es: 'NUEVO' },
    fix: { en: 'FIXED', es: 'ARREGLADO' },
    improvement: { en: 'IMPROVED', es: 'MEJORADO' },
  } as Record<ChangelogTag, Localized>,
} as const;

export type Lang = 'en' | 'es';

/** Format an ISO date into a localized, human-readable string. */
export function formatDate(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split('-').map(Number);
  // Use UTC to avoid off-by-one from the local timezone.
  const date = new Date(Date.UTC(y, m - 1, d));
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
