// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercelAdapter from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://skillion.app',
  adapter: vercelAdapter(),
  vite: {
    plugins: [tailwindcss()],
    define: {
      'import.meta.env.SITE_URL': JSON.stringify('https://skillion.app'),
      'import.meta.env.SITE_TITLE': JSON.stringify('Skillion - Gamifica tu Vida Real'),
      'import.meta.env.SITE_DESCRIPTION': JSON.stringify('La app de gamificación que convierte tus hábitos en una aventura RPG. Gana XP real y sube de nivel en la vida.')
    }
  }
});