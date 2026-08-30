import { defineCollection, z } from 'astro:content';
import { loadEnv } from 'vite';
import { neonBlogLoader } from './lib/blog-loader';

// loadEnv en vez de import.meta.env: la config de contenido se evalúa antes de
// que Vite haya inyectado las variables, así que hay que leer el .env a mano.
// El tercer argumento vacío incluye las que no llevan prefijo PUBLIC_.
const { DATABASE_URL } = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

const blog = defineCollection({
  loader: neonBlogLoader(process.env.DATABASE_URL ?? DATABASE_URL),
  schema: z.object({
    /** Comparten translationKey las dos versiones del mismo artículo. */
    translationKey: z.string(),
    lang: z.enum(['en', 'es']),
    slug: z.string(),
    title: z.string(),
    excerpt: z.string(),
    category: z.enum(['how-to', 'science', 'tips', 'tricks', 'comparison', 'roundup']),
    icon: z.string(),
    coverImage: z.string().nullable(),
    readingMinutes: z.number().int().positive(),
    xp: z.number().int().nonnegative(),
    featured: z.boolean(),
    authorName: z.string(),
    authorBio: z.string().nullable(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),

    /**
     * Estructura de citabilidad (SCRUM-450). Un modelo cita lo que puede
     * extraer sin adivinar. `faq` y `sources` alimentan además el JSON-LD.
     *
     * `tldr` no es el excerpt: ese es el gancho de la card, escrito para que
     * hagas clic; este responde el titular de golpe.
     */
    tldr: z.string().nullable().default(null),
    sources: z
      .array(
        z.object({
          title: z.string(),
          url: z.string().url(),
          publisher: z.string().optional(),
        }),
      )
      .default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { blog };
