-- Blog de Skillion — esquema de la tabla de posts.
--
-- El sitio es estático: esta tabla se lee en BUILD por el loader del Content
-- Layer (src/lib/blog-loader.ts). Publicar = insertar/editar la fila aquí en el
-- Neon Console y relanzar el build (deploy hook de Vercel).
--
-- Reproducible: se puede volver a ejecutar tal cual en el SQL Editor de Neon.

create table if not exists blog_posts (
  id               bigint generated always as identity primary key,

  -- Agrupa las traducciones del MISMO artículo. Los dos idiomas comparten
  -- translation_key pero cada uno tiene su slug, para no forzar slugs en
  -- inglés dentro de /es/ (mejor SEO) y poder calcular hreflang entre ellos.
  translation_key  text        not null,
  lang             text        not null check (lang in ('en','es')),
  slug             text        not null,

  title            text        not null,
  excerpt          text        not null,
  body             text        not null,          -- Markdown

  -- Clave estable, NO la etiqueta visible: el rótulo se traduce en el
  -- componente (CIENCIA / SCIENCE). Así el filtro funciona en los dos idiomas.
  category         text        not null check (category in ('how-to','science','tips','tricks','comparison','roundup')),

  -- Nombre del PNG pixel art en src/assets/pixelartAssets/blog/ (sin extensión)
  icon             text        not null default 'brain',
  -- Portada 1600x900. NULL => se pinta el patrón placeholder del diseño.
  cover_image      text,

  reading_minutes  integer     not null check (reading_minutes > 0),
  xp               integer     not null default 0 check (xp >= 0),
  featured         boolean     not null default false,

  author_name      text        not null default 'Skillion Team',
  author_bio       text,

  -- Estructura de citabilidad (SCRUM-450). Un modelo cita lo que puede extraer
  -- sin adivinar: una respuesta directa, preguntas resueltas y de dónde sale
  -- cada dato. `faq` y `sources` alimentan además el JSON-LD del artículo.
  --
  -- tldr NO es el excerpt: ese es el gancho de la card, escrito para que hagas
  -- clic. Este responde la pregunta del titular de golpe, escrito para que
  -- puedas NO hacer clic.
  tldr             text,
  -- [{ "title", "url", "publisher" }]
  sources          jsonb       not null default '[]'::jsonb
                     check (jsonb_typeof(sources) = 'array'),
  -- [{ "q", "a" }]
  faq              jsonb       not null default '[]'::jsonb
                     check (jsonb_typeof(faq) = 'array'),

  published_at     date        not null,
  published        boolean     not null default true,
  updated_at       timestamptz not null default now(),

  unique (lang, slug),
  unique (lang, translation_key)
);

-- updated_at es la fecha de última modificación de verdad, no la de inserción:
-- el criterio de "última actualización visible" y el dateModified del JSON-LD
-- dependen de ella. El guard evita que un seed idempotente, que reescribe las
-- filas en cada pasada, mueva la fecha sin que haya cambiado nada.
create or replace function blog_posts_touch_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists blog_posts_touch_updated_at on blog_posts;
create trigger blog_posts_touch_updated_at
  before update on blog_posts
  for each row
  when (old.* is distinct from new.*)
  execute function blog_posts_touch_updated_at();

-- El índice sirve al orden del listado (destacado primero, luego por fecha).
create index if not exists blog_posts_listing_idx
  on blog_posts (lang, published, featured desc, published_at desc);
