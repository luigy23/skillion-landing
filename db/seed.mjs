/**
 * Semilla del blog. Escribe en Neon todos los artículos de db/content/.
 *
 *   node db/seed.mjs
 *
 * Idempotente: se puede relanzar sin duplicar. El upsert va por
 * (lang, translation_key), que es la clave única que empareja las dos
 * traducciones del mismo artículo.
 *
 * Publicar un artículo nuevo = crear su fichero en db/content/, añadirlo a la
 * lista de abajo, lanzar esto y relanzar el build. Escribir el contenido aquí
 * en vez de a mano en el Neon Console lo deja versionado y revisable en una PR.
 */
import { neon } from '@neondatabase/serverless';
import fs from 'node:fs';

import { legacyPosts } from './content/legacy-five.mjs';
import { skillionVsHabitica } from './content/skillion-vs-habitica.mjs';
import { bestHabitApps } from './content/best-habit-apps.mjs';
import { whyHabitsFail } from './content/why-habits-fail.mjs';
import { habitData2026 } from './content/habit-data-2026.mjs';
import { gamifyYourLife } from './content/gamify-your-life.mjs';

// El de datos propios va primero: es la pieza con cifras que nadie mas tiene y
// la que el ticket señala como la que mas citas gana.
const posts = [habitData2026, gamifyYourLife, skillionVsHabitica, bestHabitApps, whyHabitsFail, ...legacyPosts];

const url =
  process.env.DATABASE_URL ??
  fs.readFileSync(new URL('../.env', import.meta.url), 'utf8').match(/DATABASE_URL="([^"]+)"/)?.[1];

if (!url) throw new Error('Falta DATABASE_URL');
const sql = neon(url);

const rows = [];
for (const post of posts) {
  for (const lang of ['es', 'en']) {
    const t = post[lang];
    // Los cinco originales no traen autor propio: son contenido de producto y
    // firman como equipo. Los de SCRUM-450 sí, porque el ticket pide autor con
    // nombre real y esa es la señal que miran los modelos.
    const author = post.author[lang];

    rows.push({
      translation_key: post.translationKey,
      lang,
      slug: t.slug,
      title: t.title,
      excerpt: t.excerpt,
      body: t.body,
      category: post.category,
      icon: post.icon,
      cover_image: null,
      reading_minutes: post.readingMinutes,
      xp: post.xp,
      featured: post.featured,
      author_name: author.name,
      author_bio: author.bio,
      published_at: post.publishedAt,
      published: true,
      tldr: t.tldr ?? null,
      sources: JSON.stringify(post.sources ?? []),
      faq: JSON.stringify(t.faq ?? []),
    });
  }
}

for (const r of rows) {
  // updated_at NO se toca en el UPDATE: lo lleva el trigger de la tabla, que
  // solo dispara si la fila cambió de verdad. Ponerlo a now() aquí haría que
  // cada pasada del seed moviera la fecha de "última actualización" que ve el
  // lector y el dateModified del JSON-LD, aunque no hubiera cambiado una coma.
  await sql`
    INSERT INTO blog_posts (
      translation_key, lang, slug, title, excerpt, body, category, icon,
      cover_image, reading_minutes, xp, featured, author_name, author_bio,
      published_at, published, tldr, sources, faq
    ) VALUES (
      ${r.translation_key}, ${r.lang}, ${r.slug}, ${r.title}, ${r.excerpt}, ${r.body},
      ${r.category}, ${r.icon}, ${r.cover_image}, ${r.reading_minutes}, ${r.xp},
      ${r.featured}, ${r.author_name}, ${r.author_bio}, ${r.published_at}, ${r.published},
      ${r.tldr}, ${r.sources}::jsonb, ${r.faq}::jsonb
    )
    ON CONFLICT (lang, translation_key) DO UPDATE SET
      slug = EXCLUDED.slug,
      title = EXCLUDED.title,
      excerpt = EXCLUDED.excerpt,
      body = EXCLUDED.body,
      category = EXCLUDED.category,
      icon = EXCLUDED.icon,
      cover_image = EXCLUDED.cover_image,
      reading_minutes = EXCLUDED.reading_minutes,
      xp = EXCLUDED.xp,
      featured = EXCLUDED.featured,
      author_name = EXCLUDED.author_name,
      author_bio = EXCLUDED.author_bio,
      published_at = EXCLUDED.published_at,
      published = EXCLUDED.published,
      tldr = EXCLUDED.tldr,
      sources = EXCLUDED.sources,
      faq = EXCLUDED.faq
  `;
  console.log(`  ${r.lang}  ${r.slug}`);
}

const [{ count }] = await sql`SELECT count(*)::int AS count FROM blog_posts`;
console.log(`\n${rows.length} filas escritas · ${count} posts en la tabla`);
