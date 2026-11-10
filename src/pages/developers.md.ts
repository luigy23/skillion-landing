import type { APIRoute } from 'astro';
import { apiMarkdown } from '../lib/api-markdown';

/** La referencia de la API en Markdown (ver lib/api-markdown.ts). */
export const GET: APIRoute = ({ site }) =>
  new Response(apiMarkdown('en', site ?? new URL('https://skillion.app')), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
