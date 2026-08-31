import fs from 'node:fs';
import path from 'node:path';
import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Única puerta de acceso a los datos del blog.
 *
 * Las páginas y los componentes solo hablan con este módulo. Hoy detrás hay un
 * loader que lee Neon en build; si mañana hiciera falta SSR, se cambia aquí y
 * la UI no se entera.
 */

export type BlogPost = CollectionEntry<'blog'>;
export type Lang = 'en' | 'es';
export type Category = 'how-to' | 'science' | 'tips' | 'tricks' | 'comparison' | 'roundup';

export const CATEGORIES: Category[] = [
  'how-to',
  'science',
  'tips',
  'tricks',
  'comparison',
  'roundup',
];

/**
 * Rótulos de categoría.
 *
 * Van en caja alta y en Press Start 2P, que NO trae glifos para vocales
 * acentuadas en mayúscula: por eso "COMO USAR" va sin tilde. Si se le pone,
 * el navegador cambia de fuente a mitad de palabra.
 */
export const CATEGORY_LABELS: Record<Lang, Record<Category, string>> = {
  en: {
    'how-to': 'HOW TO',
    science: 'SCIENCE',
    tips: 'TIPS',
    tricks: 'TRICKS',
    comparison: 'COMPARISON',
    roundup: 'ROUNDUP',
  },
  es: {
    'how-to': 'COMO USAR',
    science: 'CIENCIA',
    tips: 'CONSEJOS',
    tricks: 'TRUCOS',
    comparison: 'COMPARATIVA',
    roundup: 'LISTADO',
  },
};

/** Colores de cada chip, del artboard 1c. */
export const CATEGORY_COLORS: Record<Category, { bg: string; fg: string }> = {
  'how-to': { bg: '#8fe3da', fg: '#0a2b28' },
  science: { bg: '#b58fe3', fg: '#1b0f2b' },
  tips: { bg: '#b58fe3', fg: '#1b0f2b' },
  tricks: { bg: '#ffc53d', fg: '#2a1a06' },
  // Los dos formatos que mas se citan llevan color propio para que se
  // distingan de un vistazo en el filtro del indice.
  comparison: { bg: '#ff9f6e', fg: '#2b1405' },
  roundup: { bg: '#9fe37b', fg: '#12290a' },
};

/**
 * Muestra el "+XP de lectura" de las cards y del artículo.
 *
 * En el diseño era la prop `showXpRewards`. Se deja en un solo sitio para poder
 * apagarlo de un tirón: hoy ese XP es decorativo, la app no lo acredita todavía.
 */
export const SHOW_XP_REWARDS = true;

/** Metadatos del índice. Compartidos por /blog y /es/blog para que no deriven. */
export const BLOG_SEO: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Blog - Skillion | Guides, science and tricks to level up',
    description:
      'How to use Skillion, the science behind gamification, and the tricks used by the players with the longest streaks.',
  },
  es: {
    title: 'Blog - Skillion | Guías, ciencia y trucos para subir de nivel',
    description:
      'Cómo usar Skillion, la ciencia detrás de la gamificación y los trucos que usan los jugadores con más racha.',
  },
};

/** Destacado primero; después, del más reciente al más antiguo. */
function byListingOrder(a: BlogPost, b: BlogPost): number {
  if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
  return b.data.publishedAt.getTime() - a.data.publishedAt.getTime();
}

export async function getBlogPosts(lang: Lang): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => data.lang === lang);
  return posts.sort(byListingOrder);
}

/**
 * Separa el destacado del resto. Si nadie está marcado como destacado, se
 * promociona el más reciente para que el hueco del diseño no quede vacío.
 */
export async function getBlogIndex(lang: Lang): Promise<{ featured: BlogPost | null; rest: BlogPost[] }> {
  const posts = await getBlogPosts(lang);
  if (posts.length === 0) return { featured: null, rest: [] };
  const [first, ...rest] = posts;
  return { featured: first, rest };
}

export async function getBlogPost(lang: Lang, slug: string): Promise<BlogPost | undefined> {
  const posts = await getCollection('blog', (entry) => entry.data.lang === lang && entry.data.slug === slug);
  return posts[0];
}

/**
 * La misma entrada en el otro idioma, para los hreflang del artículo. Puede no
 * existir: un post puede estar traducido solo a medias.
 */
export async function getTranslation(post: BlogPost): Promise<BlogPost | undefined> {
  const other: Lang = post.data.lang === 'es' ? 'en' : 'es';
  const posts = await getCollection(
    'blog',
    (entry) => entry.data.lang === other && entry.data.translationKey === post.data.translationKey,
  );
  return posts[0];
}

/** Artículos relacionados: misma categoría primero, y si no llega, se rellena. */
export async function getRelated(post: BlogPost, limit = 3): Promise<BlogPost[]> {
  const posts = (await getBlogPosts(post.data.lang as Lang)).filter((p) => p.data.slug !== post.data.slug);
  const sameCategory = posts.filter((p) => p.data.category === post.data.category);
  const others = posts.filter((p) => p.data.category !== post.data.category);
  return [...sameCategory, ...others].slice(0, limit);
}

export function blogIndexPath(lang: Lang): string {
  return lang === 'es' ? '/es/blog/' : '/blog/';
}

export function blogPostPath(lang: Lang, slug: string): string {
  return lang === 'es' ? `/es/blog/${slug}/` : `/blog/${slug}/`;
}

/**
 * Fecha en caja alta para el HUD. Los meses en español van sin tilde por la
 * misma razón que los rótulos: Press Start 2P no tiene mayúsculas acentuadas.
 */
const MONTHS: Record<Lang, string[]> = {
  en: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
  es: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
};

export function formatPixelDate(date: Date, lang: Lang): string {
  const day = date.getUTCDate();
  const month = MONTHS[lang][date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return lang === 'es' ? `${day} ${month} ${year}` : `${month} ${day}, ${year}`;
}

/** ISO corto (YYYY-MM-DD) para <time datetime> y para el sitemap. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/**
 * Imagen que se usa al compartir un artículo.
 *
 * Orden: portada propia del post (columna cover_image) > tarjeta generada por
 * `npm run og` > `undefined`, que hace que el Layout caiga a la OG genérica.
 *
 * La comprobación en disco evita el fallo silencioso más probable de este
 * montaje: publicar en el Neon Console sin regenerar las tarjetas dejaría el
 * og:image apuntando a un 404, que es peor que no tener imagen propia.
 */
export function postOgImage(lang: Lang, slug: string, coverImage: string | null): string | undefined {
  if (coverImage) return coverImage;

  const publicPath = `/og/blog/${lang}-${slug}.png`;
  const onDisk = path.join(process.cwd(), 'public', publicPath);
  return fs.existsSync(onDisk) ? publicPath : undefined;
}
