/**
 * Vuelca los posts de Neon a JSON para que scripts/make-og-posts.py genere las
 * tarjetas OG. Paso intermedio porque el render va con PIL (control fino de
 * fuentes) y los datos viven en Postgres.
 */
import { neon } from '@neondatabase/serverless';
import fs from 'node:fs';

const url =
  process.env.DATABASE_URL ??
  fs.readFileSync(new URL('../.env', import.meta.url), 'utf8').match(/DATABASE_URL="([^"]+)"/)?.[1];
if (!url) throw new Error('Falta DATABASE_URL');

const sql = neon(url);
const rows = await sql`
  SELECT lang, slug, title, category, icon, reading_minutes AS "readingMinutes"
  FROM blog_posts WHERE published = true ORDER BY lang, slug
`;

const out = process.argv[2];
fs.writeFileSync(out, JSON.stringify(rows, null, 2));
console.log(`${rows.length} posts -> ${out}`);
