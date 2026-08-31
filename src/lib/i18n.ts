export type Lang = 'en' | 'es';

/**
 * Equivalencias EN <-> ES por ruta.
 *
 * Existe porque el mapeo NO es mecánico: /updates es /es/novedades. Antes los
 * hreflang de todas las páginas apuntaban al home, así que /contact le decía a
 * Google que su versión española era /es/.
 *
 * Clave = ruta EN (sin barra final salvo el home). Valor = ruta ES.
 */
const ROUTE_PAIRS: Record<string, string> = {
  '/': '/es/',
  '/contact': '/es/contact',
  '/privacy': '/es/privacy',
  '/terms': '/es/terms',
  '/free-premium': '/es/free-premium',
  '/updates': '/es/novedades',
  '/blog': '/es/blog',
  '/faq': '/es/preguntas-frecuentes',
};

const ES_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(ROUTE_PAIRS).map(([en, es]) => [es, en]),
);

/** Quita la barra final para comparar, pero conserva "/" tal cual. */
function normalize(pathname: string): string {
  if (pathname === '/' || pathname === '/es/') return pathname;
  return pathname.replace(/\/+$/, '');
}

export interface Alternates {
  en: string;
  es: string;
}

/**
 * Devuelve las dos versiones de la ruta actual, o null si no hay pareja.
 *
 * Los artículos del blog no están en la tabla (los slugs viven en Neon y
 * difieren por idioma): esas páginas pasan sus alternates a mano. Una ruta sin
 * pareja —el 404, sin ir más lejos— cae al return null del final y no emite
 * hreflang, que es justo lo que debe pasar.
 */
export function getAlternates(pathname: string): Alternates | null {
  const path = normalize(pathname);

  if (path in ROUTE_PAIRS) return { en: path, es: ROUTE_PAIRS[path] };
  if (path === '/es') return { en: '/', es: '/es/' };
  if (path in ES_TO_EN) return { en: ES_TO_EN[path], es: path };

  return null;
}

export function langFromPath(pathname: string): Lang {
  return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';
}
