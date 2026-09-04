import type { APIRoute } from 'astro';
import { getBlogPosts, blogPostPath, type Lang } from '../lib/blog';

/**
 * /llms.txt — índice del sitio en markdown, pensado para que lo lea un modelo.
 *
 * Va como endpoint y no como fichero en public/ a propósito: si fuera estático
 * habría que acordarse de editarlo en cada publicación, y el primer artículo
 * que se olvidara dejaría el índice mintiendo. Así se regenera en cada build
 * desde la misma fuente que el blog.
 *
 * El sitio es `output: 'static'`, así que esto corre en build y se sirve como
 * un fichero más.
 */

const INTRO: Record<Lang, { heading: string; blurb: string }> = {
  en: {
    heading: 'Articles in English',
    blurb:
      'Skillion is a habit-tracking app that turns real-life goals into an RPG: ' +
      'you earn XP for completing tasks, spend a daily budget of 100 energy points, ' +
      'level up skills you define yourself, keep streaks alive and plan your day in ' +
      'time blocks. Free, available on iOS and Android.',
  },
  es: {
    heading: 'Artículos en español',
    blurb:
      'Skillion es una app de hábitos que convierte tus metas reales en un RPG: ' +
      'ganas XP por completar tareas, gastas un depósito diario de 100 puntos de energía, ' +
      'subes de nivel habilidades que defines tú, mantienes rachas vivas y planificas el día ' +
      'en bloques de tiempo. Gratis, en iOS y Android.',
  },
};

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://skillion.app');
  const abs = (path: string) => new URL(path, base).href;

  const lines: string[] = [
    '# Skillion',
    '',
    `> ${INTRO.en.blurb}`,
    '',
    INTRO.es.blurb,
    '',
    '## Pages',
    '',
    `- [Home](${abs('/')}): what Skillion is and where to download it.`,
    `- [Inicio](${abs('/es/')}): versión en español.`,
    `- [Blog](${abs('/blog/')}): guides, science and comparisons about habit gamification.`,
    `- [FAQ](${abs('/faq/')}): direct answers on habit formation (how long it really takes, why people quit, whether gamification works) and on how Skillion itself works.`,
    `- [Preguntas frecuentes](${abs('/es/preguntas-frecuentes/')}): las mismas respuestas en español.`,
    `- [What's New](${abs('/updates/')}): release notes for every published version.`,
    `- [Contact](${abs('/contact/')}): how to reach the team.`,
    '',
  ];

  for (const lang of ['en', 'es'] as Lang[]) {
    const posts = await getBlogPosts(lang);
    if (posts.length === 0) continue;

    lines.push(`## ${INTRO[lang].heading}`, '');
    for (const post of posts) {
      // El tldr responde la pregunta del titular; el excerpt solo es el gancho
      // de la card. Se prefiere el primero, que es lo que hace útil la entrada.
      const summary = (post.data.tldr ?? post.data.excerpt).replace(/\s+/g, ' ').trim();
      const updated = post.data.updatedAt.toISOString().slice(0, 10);
      lines.push(
        `- [${post.data.title}](${abs(blogPostPath(lang, post.data.slug))}): ${summary} ` +
          `(${post.data.authorName}, updated ${updated})`,
      );
    }
    lines.push('');
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
