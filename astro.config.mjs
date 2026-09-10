// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import { neon } from '@neondatabase/serverless';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// DATABASE_URL como en src/content.config.ts: la config se evalúa antes de que
// Vite inyecte el .env, así que se lee a mano. process.env manda (Vercel).
const { DATABASE_URL } = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');
const databaseUrl = process.env.DATABASE_URL ?? DATABASE_URL;

/**
 * lastmod del blog: updated_at de cada post y, para /blog/ y /es/blog/, el
 * más reciente de su idioma. Una sola consulta memoizada: serialize se llama
 * una vez por URL. Nunca lanza: sin DATABASE_URL o con Neon caído el sitemap
 * sale sin lastmod, que es lo que había hasta ahora, y el build sigue.
 *
 * Las claves llevan barra final porque el sitemap se genera en formato
 * directorio (/blog/<slug>/) y se comparan con el pathname de cada item.
 *
 * @type {Promise<Map<string, string>> | undefined}
 */
let lastmodByPath;
function loadLastmod() {
  lastmodByPath ??= (async () => {
    /** @type {Map<string, string>} */
    const map = new Map();
    if (!databaseUrl) return map;
    try {
      const sql = neon(databaseUrl);
      const rows = await sql`SELECT lang, slug, updated_at FROM blog_posts WHERE published = true`;
      /** @type {Record<string, Date | undefined>} */
      const newest = {};
      for (const row of rows) {
        const date = new Date(row.updated_at);
        map.set(row.lang === 'es' ? `/es/blog/${row.slug}/` : `/blog/${row.slug}/`, date.toISOString());
        const current = newest[row.lang];
        if (!current || date > current) newest[row.lang] = date;
      }
      if (newest.en) map.set('/blog/', newest.en.toISOString());
      if (newest.es) map.set('/es/blog/', newest.es.toISOString());
    } catch (error) {
      console.warn(`[sitemap] sin lastmod: ${error instanceof Error ? error.message : String(error)}`);
    }
    return map;
  })();
  return lastmodByPath;
}

// https://astro.build/config
export default defineConfig({
  site: 'https://skillion.app',
  output: 'static',
  integrations: [
    // Sustituye al public/sitemap.xml escrito a mano, que listaba 3 de 13 URLs
    // con lastmod de 2025-01-05. Sin esto el blog nacia invisible.
    // Los hreflang NO se generan aqui: /updates <-> /es/novedades no es un
    // mapeo mecanico y la opcion i18n del plugin los emitiria mal. Van en el
    // <head> de cada pagina (src/lib/i18n.ts).
    // Sin filter: la unica pagina que se excluia era /gracias, ya retirada.
    // El 404 lo deja fuera la propia integracion.
    // lastmod solo donde se sabe de verdad (el blog, desde Neon). Sin
    // changefreq ni priority: Google los ignora y solo hacen bulto.
    sitemap({
      serialize: async (item) => {
        const lastmod = (await loadLastmod()).get(new URL(item.url).pathname);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
  build: {
    // Inline CSS crítico para reducir bloqueo de renderización
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
    define: {
      'import.meta.env.SITE_URL': JSON.stringify('https://skillion.app'),
      'import.meta.env.SITE_TITLE': JSON.stringify('Skillion - Gamifica tu Vida Real'),
      'import.meta.env.SITE_DESCRIPTION': JSON.stringify('La app de gamificación que convierte tus hábitos en una aventura RPG. Gana XP real y sube de nivel en la vida.')
    },
    build: {
      // Optimizar CSS en producción
      cssCodeSplit: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          // Manualchunks para mejor code splitting
          manualChunks: (id) => {
            // Separar vendors para mejor cache
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },
  },
});