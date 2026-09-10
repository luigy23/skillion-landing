# skillion-landing

Web de [skillion.app](https://skillion.app): Astro 5 en `output: 'static'`,
Tailwind 4, desplegada en Vercel. Dos idiomas (`/` y `/es/`) y un blog cuyos
artículos viven en Neon y se leen al compilar.

## Arrancar

```sh
npm install
cp .env.example .env   # DATABASE_URL y PUBLIC_GA_ID
npm run dev
```

`npm run build` **necesita `DATABASE_URL`**: los posts están en Neon (tabla
`blog_posts`) y el loader los lee en tiempo de build, así que sin la variable
el build falla a propósito antes que publicar un blog vacío. Cómo se publica
un artículo, cómo se siembra y en qué orden hay que tocar código y base para
no romper producción: [db/README.md](db/README.md).

`npm run build` termina avisando a IndexNow (`scripts/indexnow.mjs`). Solo
hace efecto en el deploy de producción de Vercel y allí nunca tumba el build;
para compilar sin avisar a nadie, `npx astro build`.

| Comando           | Qué hace                                                    |
| :---------------- | :---------------------------------------------------------- |
| `npm run dev`     | Servidor local en `localhost:4321`                          |
| `npm run build`   | Compila a `dist/` y avisa a IndexNow                        |
| `npm run preview` | Sirve `dist/`                                               |
| `npm run seed`    | Siembra los posts en Neon (ver `db/README.md`)              |
| `npm run og`      | Regenera las tarjetas OG de los artículos en `public/og/`   |

## Dónde está cada cosa

- `src/pages/` — rutas EN en la raíz y ES bajo `es/`. El mapeo no es
  mecánico: `/updates` es `/es/novedades`, `/faq` es `/es/preguntas-frecuentes`.
- `src/components/` — la UI; lo del blog en `blog/`. Las páginas son
  envoltorios finos sobre un componente con prop `lang`, para que EN y ES no
  deriven.
- `src/data/` — contenido que no vive en Neon: la FAQ (`faq.ts`, con sus
  reglas de redacción en cabecera) y los datos de contacto.
- `src/lib/` — `blog.ts` (única puerta a los posts), `i18n.ts`, `schema.ts`.
- `db/` — esquema, seed y guía del blog en Neon.
- `scripts/` — tarjetas OG, iconos, fuentes e IndexNow.
- `docs/` — protocolo de medición AEO.

## SEO / AEO

- **hreflang**: por ruta, en `src/lib/i18n.ts`. Una ruta nueva se da de alta
  ahí o no emite hreflang; los artículos pasan sus alternates a mano porque
  sus slugs viven en Neon.
- **JSON-LD**: la identidad (Organization, WebSite, SoftwareApplication) está
  en `src/lib/schema.ts` y solo se emite en la portada. Cada tipo de página
  declara lo suyo: `ArticleSchema` (artículo), `BlogIndexSchema` (índice),
  FAQPage en `FaqPage` y `HomeFaq`.
- **`/llms.txt`**: índice del sitio en markdown para modelos, generado en
  cada build desde el blog (`src/pages/llms.txt.ts`).
- **Sitemap**: `@astrojs/sitemap` con `lastmod` real desde Neon;
  `/sitemap.xml` reescribe al índice que genera Astro (`vercel.json`).
- **IndexNow**: en cada build de producción, ver arriba. La clave es el
  `.txt` de `public/`.
- **Medición**: `docs/aeo-medicion.md`.

## Una regla de tipografía que muerde

Press Start 2P no tiene mayúsculas acentuadas ni Ñ. Todo rótulo en caja alta
va sin tildes, o el navegador cambia de fuente a mitad de palabra y descuadra
la línea.
