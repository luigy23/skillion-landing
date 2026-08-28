// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

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
    sitemap({
      filter: (page) => !page.includes('/gracias'),
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