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
    logo: {
      '@type': 'ImageObject',
      url: abs('/favicon.png'),
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
