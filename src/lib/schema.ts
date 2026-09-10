/**
 * Identidad de Skillion como entidad, en un solo sitio.
 *
 * Por qué existe este fichero (SCRUM-450): un motor generativo no cita "una
 * web", cita una entidad que ha sabido reconocer. Hasta ahora el sitio solo
 * declaraba un `SoftwareApplication` con un `creator` llamado "Skillion Team",
 * que es un nombre suelto sin nada detrás: no dice dónde más existe esa
 * organización ni quién la lleva. `sameAs` es justo eso — la lista de sitios
 * donde la misma entidad aparece bajo control propio (las dos fichas de tienda
 * y las redes) — y es la señal con la que un buscador reconcilia todas esas
 * apariciones en una sola cosa en lugar de en cinco cuentas sin relación.
 *
 * Centralizado y no copiado en cada plantilla porque el `@id` tiene que ser
 * literalmente idéntico allá donde se referencie: si el artículo declara un
 * publisher con otra URL, se acaban declarando dos organizaciones distintas
 * que se llaman igual, que es peor que no declarar ninguna.
 */

import type { Lang } from './i18n';

/** IRI de la entidad. Es un identificador, no una página que haya que visitar. */
export const ORG_ID = 'https://skillion.app/#organization';

/**
 * Perfiles bajo nuestro control. Solo van aquí los que administramos: `sameAs`
 * afirma "esta es la misma entidad", así que meter un directorio de terceros o
 * una reseña ajena sería afirmar algo que no nos toca afirmar.
 */
export const SAME_AS = [
  'https://apps.apple.com/app/skillion-gamify-your-life/id6752905262',
  'https://play.google.com/store/apps/details?id=app.skillion',
  'https://instagram.com/skillion.app',
  'https://instagram.com/skillion.es',
  'https://tiktok.com/@skillion.app',
];

export const SUPPORT_EMAIL = 'hello@skillion.app';

/**
 * El grafo de la organización.
 *
 * @param abs  Resuelve una ruta del sitio a URL absoluta. Se pasa desde fuera
 *             para que respete `Astro.site` y no haya un dominio a fuego aquí.
 */
export function organization(abs: (path: string) => string) {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Skillion',
    url: abs('/'),
    // logo-512 y no el favicon: Google pide al menos 112x112 para el logo de
    // una organizacion, y el favicon son 32.
    logo: {
      '@type': 'ImageObject',
      url: abs('/logo-512.png'),
      width: 512,
      height: 512,
    },
    description:
      'Skillion is a habit app that turns real-life goals into an RPG: you earn XP for ' +
      'completing tasks, level up skills you define yourself, and keep streaks alive.',
    sameAs: SAME_AS,
    // El fundador con nombre real es señal de que detrás hay alguien, no una
    // marca anónima. Coincide con el que firma los artículos en db/content.
    founder: {
      '@type': 'Person',
      name: 'Luigy Leonardo',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: SUPPORT_EMAIL,
      url: abs('/contact'),
    },
  };
}

/**
 * `<` escapado a <: si un texto contuviera "</script>" cerraría la
 * etiqueta antes de tiempo y volcaría el resto del JSON en el body.
 */
export const serializeGraph = (graph: unknown) => JSON.stringify(graph).replace(/</g, '\\u003c');

/**
 * El sitio como entidad. Sale de la portada de cada idioma con su `url` e
 * `inLanguage`, y el mismo `@id` en las dos: es un sitio, no dos. Sin
 * SearchAction a propósito: no hay buscador interno que declarar.
 */
export function website(abs: (path: string) => string, lang: Lang) {
  return {
    '@type': 'WebSite',
    '@id': abs('/#website'),
    url: abs(lang === 'es' ? '/es/' : '/'),
    name: 'Skillion',
    inLanguage: lang,
    publisher: { '@id': ORG_ID },
  };
}

/**
 * Las fichas de tienda son la misma app en otro sitio: es lo que permite atar
 * lo que se dice aquí con lo que hay publicado allí.
 */
const STORE_URLS = SAME_AS.filter((url) => url.includes('apple.com') || url.includes('play.google'));

/**
 * Textos de la app por idioma. Antes había un solo bloque en español que se
 * emitía también en la portada inglesa.
 *
 * featureList solo lleva lo que la FAQ (src/data/faq.ts) ya afirma de la app:
 * habilidades propias que suben de nivel, XP por tarea, energía diaria de 100
 * puntos, hitos de racha a los 3/7/14/30/60/100 días, Time Blocking con
 * plantillas, widget, Máquina del destino y sincronización entre
 * dispositivos. Si una función no consta allí, no se declara aquí.
 */
const APP_COPY: Record<Lang, { description: string; keywords: string; featureList: string[] }> = {
  en: {
    description:
      'Skillion is a gamified productivity app that turns your habits and daily tasks into an RPG: ' +
      'you earn XP for every task you complete, level up skills you define yourself, and keep streaks alive.',
    keywords: 'gamified productivity app, habit tracker, gamification app, RPG, XP, streaks, time blocking',
    featureList: [
      'Custom skills that level up as you complete tasks',
      'XP for every task you complete',
      'Daily energy budget of 100 points',
      'Streak milestones at 3, 7, 14, 30, 60 and 100 days',
      'Time Blocking with routine templates',
      'Home-screen widget',
      'Task of destiny: a slot machine for your pending tasks',
      'Cross-device sync',
    ],
  },
  es: {
    description:
      'App de gamificación que convierte tus hábitos y metas en una aventura RPG. ' +
      'Gana XP en la vida real por cada tarea que completas.',
    keywords: 'app de productividad gamificada, hábitos, gamificación, RPG, XP, rachas',
    featureList: [
      'Habilidades propias que suben de nivel al completar tareas',
      'XP por cada tarea completada',
      'Energía diaria de 100 puntos',
      'Hitos de racha a los 3, 7, 14, 30, 60 y 100 días',
      'Time Blocking con plantillas de rutina',
      'Widget de pantalla de inicio',
      'Máquina del destino: una tragaperras de tareas pendientes',
      'Sincronización entre dispositivos',
    ],
  },
};

/**
 * La app. Sin aggregateRating ni review: declaraba 4.8 sobre 1000 valoraciones
 * sin respaldo en las tiendas, y el marcado de reseñas sin datos reales es
 * motivo de penalización manual de Google.
 */
export function softwareApplication(abs: (path: string) => string, lang: Lang) {
  const copy = APP_COPY[lang];
  return {
    '@type': 'SoftwareApplication',
    '@id': abs('/#app'),
    name: 'Skillion',
    description: copy.description,
    url: abs('/'),
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    sameAs: STORE_URLS,
    downloadUrl: STORE_URLS,
    publisher: { '@id': ORG_ID },
    creator: { '@id': ORG_ID },
    inLanguage: ['en', 'es'],
    keywords: copy.keywords,
    featureList: copy.featureList,
  };
}

/**
 * El grafo de la portada. Los tres nodos van en un solo @graph para poder
 * referenciarse entre sí por @id: la app y el sitio los publica la
 * organización, y así se declara una vez y no tres entidades sueltas que
 * casualmente se llaman igual.
 */
export function homeGraph(abs: (path: string) => string, lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@graph': [organization(abs), website(abs, lang), softwareApplication(abs, lang)],
  };
}
