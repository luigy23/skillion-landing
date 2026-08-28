# Blog — de dónde salen los posts

Los artículos viven en **Neon** (tabla `blog_posts`) y se leen **en tiempo de
build**, no en cada request. El sitio sigue siendo `output: 'static'`: no hay
adapter, no hay funciones, el modelo de deploy del resto del proyecto no cambia.

```
Neon Console  ──►  npm run build  ──►  HTML estático  ──►  Vercel
   (escribes)      (loader lee)        (25 páginas)
```

La contrapartida: **publicar exige un rebuild**. Un post nuevo no aparece solo.

## Publicar un artículo

1. **Insertar la fila** en el SQL Editor del Neon Console. Hacen falta las dos
   versiones (ES y EN) con el mismo `translation_key` — así se enlazan los
   hreflang entre `/blog/<slug-en>` y `/es/blog/<slug-es>`.

   ```sql
   INSERT INTO blog_posts (
     translation_key, lang, slug, title, excerpt, body, category, icon,
     reading_minutes, xp, featured, author_name, author_bio, published_at
   ) VALUES (
     'mi-articulo', 'es', 'mi-articulo-en-espanol',
     'Título del artículo',
     'Extracto que sale en la card y en la meta description.',
     $$Cuerpo en **markdown**.

   ## 1 · Primer apartado

   Texto normal.

   :::tip
   Esto sale como el callout CONSEJO DEL MAGO.
   :::

   > Y esto como cita en menta.$$,
     'science', 'brain', 7, 35, false,
     'EQUIPO SKILLION', 'Diseñamos sistemas de progreso para humanos reales.',
     '2026-09-01'
   );
   ```

2. **Generar la tarjeta OG** del post (opcional pero recomendado):

   ```bash
   npm run og
   ```

   Sin esto el artículo cae a la imagen genérica al compartirse. La página
   comprueba si el fichero existe, así que olvidarlo no rompe el build.

3. **Relanzar el build.** En Vercel, un
   [deploy hook](https://vercel.com/docs/deploy-hooks) deja esto en una llamada:

   ```bash
   curl -X POST "https://api.vercel.com/v1/integrations/deploy/<hook>"
   ```

## Convenciones del cuerpo (markdown)

| Escribes            | Sale como                              |
| ------------------- | -------------------------------------- |
| `## 1 · Apartado`   | H2 en oro; alimenta el TOC del sidebar  |
| `:::tip … :::`      | Callout "CONSEJO DEL MAGO"              |
| `> cita`            | Blockquote en menta                     |
| `**negrita**`       | Resaltado en menta                      |
| `- lista`           | Lista con viñetas                       |

El **primer párrafo** se pinta más grande y claro: es la entradilla.

## Campos que conviene entender

- **`category`** — clave estable (`how-to`, `science`, `tips`, `tricks`), no la
  etiqueta visible. El rótulo se traduce en el componente, así el filtro del
  índice funciona igual en los dos idiomas.
- **`icon`** — nombre de un PNG de `src/assets/pixelartAssets/blog/` sin
  extensión. Si pones uno que no existe, cae a `book` en vez de romper el build.
  Los iconos se escalan solo por **múltiplos enteros** de su sprite real, que es
  lo único que mantiene la rejilla nítida (`python3 scripts/pixel-grid.py`).
- **`featured`** — el destacado del índice. Si no marcas ninguno, se promociona
  el más reciente para que el hueco del diseño no quede vacío.
- **`cover_image`** — portada 1600×900. Si es `NULL` se pinta el patrón
  diagonal del diseño, que es el estado actual: todavía no hay ilustraciones.
- **`published`** — ponlo a `false` para despublicar sin borrar la fila.

## Ojo con Press Start 2P

Esa fuente **no tiene mayúsculas acentuadas ni Ñ**. Cualquier texto que vaya en
caja alta (rótulos, categorías, fechas, botones) debe escribirse sin tilde
—`COMO USAR`, `MISION`— o el navegador cambia de fuente a mitad de palabra. Las
minúsculas sí llevan tilde con normalidad, así que títulos y cuerpo van bien.

## Scripts

| Comando          | Qué hace                                                |
| ---------------- | ------------------------------------------------------- |
| `npm run seed`   | Reescribe los 5 artículos de ejemplo (idempotente)       |
| `npm run og`     | Regenera las tarjetas OG de todos los posts publicados   |
| `npm run build`  | Lee Neon y compila el sitio                              |

## Si algún día hace falta SSR

Todo el acceso a datos pasa por `src/lib/blog.ts` y `src/lib/blog-loader.ts`.
Para leer en runtime habría que instalar `@astrojs/vercel`, pasar a
`output: 'server'` y añadir `export const prerender = true` a las 13 páginas que
hoy son estáticas. Los componentes y las páginas del blog no cambiarían.
