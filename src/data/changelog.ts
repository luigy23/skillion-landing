// ============================================================================
// CHANGELOG / NOVEDADES — single source of truth
// ----------------------------------------------------------------------------
// HOW TO ADD A NEW RELEASE:
//   1. Copy one of the objects inside `changelog` below.
//   2. Paste it at the TOP of the array (newest first) and edit the fields.
//   3. Set `highlight: true` on the newest one (and remove it from the old one)
//      so it shows the "LATEST / ÚLTIMA" glow badge.
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
  /** Highlights the release with the "LATEST / ÚLTIMA" glow badge. */
  highlight?: boolean;
  /** Optional release codename, shown next to the version. */
  codename?: Localized;
  entries: ChangelogEntry[];
}

export const changelog: ChangelogRelease[] = [
  {
    version: '2.6.8',
    date: '2026-06-06',
    highlight: true,
    codename: {
      en: 'Smart Notifications',
      es: 'Notificaciones inteligentes',
    },
    entries: [
      {
        icon: '🔔',
        tag: 'feature',
        title: {
          en: 'Smart Notifications are here',
          es: 'Llegan las notificaciones inteligentes',
        },
        description: {
          en: "Skillion now nudges you at exactly the right moment — keep your streaks alive, never miss a recurring task, and get a heads-up when a skill needs attention. Fully customizable: choose the categories you want and set Quiet Hours so you're never disturbed.",
          es: 'Skillion ahora te avisa justo en el momento adecuado: mantén vivas tus rachas, no te pierdas ninguna tarea recurrente y recibe un aviso cuando una skill necesite atención. Totalmente personalizable: elige las categorías que quieras y configura las Horas de silencio para que nunca te molesten.',
        },
      },
      {
        icon: '🕐',
        tag: 'fix',
        title: {
          en: 'Time Blocking, rock-solid',
          es: 'Time Blocking, sólido como una roca',
        },
        description: {
          en: 'Your "Rocks" now stay locked in place when you rearrange your day, "Start Now" cleanly snaps tasks to the current time, and "Restart Routine" behaves exactly as you\'d expect.',
          es: 'Tus «Rocas» ahora se quedan fijas en su sitio cuando reorganizas tu día, «Empezar ahora» encaja las tareas limpiamente en la hora actual y «Reiniciar rutina» se comporta exactamente como esperas.',
        },
      },
      {
        icon: '🗄️',
        tag: 'feature',
        title: {
          en: 'Task Archiving, your way',
          es: 'Archivado de tareas, a tu manera',
        },
        description: {
          en: 'New preferences to control how completed tasks get archived.',
          es: 'Nuevas preferencias para controlar cómo se archivan las tareas completadas.',
        },
      },
      {
        icon: '✨',
        tag: 'improvement',
        title: {
          en: 'Smarter & smoother',
          es: 'Más inteligente y fluido',
        },
        description: {
          en: 'Improved AI suggestions and general performance under the hood.',
          es: 'Mejoras en las sugerencias de IA y en el rendimiento general bajo el capó.',
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
    es: 'Notas de versión',
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
    es: 'ÚLTIMA',
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
