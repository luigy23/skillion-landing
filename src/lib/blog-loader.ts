import type { Loader } from 'astro/loaders';
import { neon } from '@neondatabase/serverless';

/**
 * Loader del Content Layer que lee los posts de Neon en tiempo de BUILD.
 *
 * El sitio sigue siendo `output: 'static'`: esto corre durante `astro build`,
 * no en cada request. Consecuencia práctica: publicar un post = insertar la
 * fila en el Neon Console y relanzar el build (deploy hook de Vercel).
 *
 * Todo el acceso a datos del blog pasa por aquí. Si algún día hace falta
 * pasar a SSR, se cambia este fichero y `src/lib/blog.ts`; los componentes
 * y las páginas no se enteran.
 */

/** Fila tal cual sale de Postgres (snake_case). */
interface PostRow {
  translation_key: string;
  lang: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  icon: string;
  cover_image: string | null;
  reading_minutes: number;
  xp: number;
  featured: boolean;
  author_name: string;
  author_bio: string | null;
  published_at: string | Date;
  updated_at: string | Date;
}

/**
 * Convierte los bloques `:::tip ... :::` en el callout "CONSEJO DEL MAGO".
 *
 * Se hace en dos pasadas para que el markdown de DENTRO del callout siga
 * funcionando: si inyectáramos el HTML antes de renderizar, CommonMark trata
 * el contenido de un bloque HTML como texto plano y perderíamos negritas y
 * enlaces. Así que primero sustituimos por un comentario-marcador (que el
 * markdown deja pasar intacto), renderizamos, y luego rellenamos.
 */
async function renderTipCallouts(
  body: string,
  renderMarkdown: (content: string) => Promise<{ html: string }>,
  tipLabel: string,
): Promise<string> {
  const tips: string[] = [];
  const withTokens = body.replace(/^:::tip\s*\n([\s\S]*?)\n:::\s*$/gm, (_match, inner: string) => {
    tips.push(inner.trim());
    return `<!--skillion-tip-${tips.length - 1}-->`;
  });

  const { html } = await renderMarkdown(withTokens);
  if (tips.length === 0) return html;

  const renderedTips = await Promise.all(tips.map((tip) => renderMarkdown(tip)));

  return html.replace(/<!--skillion-tip-(\d+)-->/g, (_match, index: string) => {
    const inner = renderedTips[Number(index)]?.html ?? '';
    // El icono se pinta desde CSS (BlogArticle.astro, vía define:vars) en vez
    // de incrustar aquí una URL: el loader corre antes de que el bundler haya
    // resuelto el hash del asset, así que no puede conocerla.
    return (
      '<aside class="mage-tip">' +
      '<span class="mage-tip-icon" aria-hidden="true"></span>' +
      '<div class="mage-tip-body">' +
      `<span class="mage-tip-label">${tipLabel}</span>` +
      inner +
      '</div>' +
      '</aside>'
    );
  });
}

export function neonBlogLoader(databaseUrl: string | undefined): Loader {
  return {
    name: 'neon-blog',

    async load({ store, parseData, renderMarkdown, generateDigest, logger }) {
      if (!databaseUrl) {
        // Fallar ruidosamente. Un build "verde" con el blog vacío es peor que
        // un build roto: se publicaría un índice sin artículos sin que nadie
        // se entere hasta que alguien lo abra.
        throw new Error(
          'Falta DATABASE_URL: el blog se lee de Neon en build. ' +
            'Ponla en .env (local) y en las variables de entorno de Vercel (Production y Preview).',
        );
      }

      const sql = neon(databaseUrl);
      const rows = (await sql`
        SELECT translation_key, lang, slug, title, excerpt, body, category, icon,
               cover_image, reading_minutes, xp, featured, author_name, author_bio,
               published_at, updated_at
        FROM blog_posts
        WHERE published = true
        ORDER BY lang, featured DESC, published_at DESC
      `) as PostRow[];

      store.clear();

      for (const row of rows) {
        // El id lleva el idioma porque un mismo slug puede existir en en y es.
        const id = `${row.lang}/${row.slug}`;

        const data = await parseData({
          id,
          data: {
            translationKey: row.translation_key,
            lang: row.lang,
            slug: row.slug,
            title: row.title,
            excerpt: row.excerpt,
            category: row.category,
            icon: row.icon,
            coverImage: row.cover_image,
            readingMinutes: row.reading_minutes,
            xp: row.xp,
            featured: row.featured,
            authorName: row.author_name,
            authorBio: row.author_bio,
            publishedAt: new Date(row.published_at),
            updatedAt: new Date(row.updated_at),
          },
        });

        const tipLabel = row.lang === 'es' ? 'CONSEJO DEL MAGO' : "WIZARD'S TIP";
        const html = await renderTipCallouts(row.body, renderMarkdown, tipLabel);
        const { metadata } = await renderMarkdown(row.body);

        store.set({
          id,
          data,
          rendered: { html, metadata },
          // El digest incluye updated_at, así que editar en el console invalida
          // la entrada en el siguiente build.
          digest: generateDigest({ ...row, published_at: String(row.published_at) }),
        });
      }

      logger.info(`Cargados ${rows.length} posts desde Neon`);
    },
  };
}
