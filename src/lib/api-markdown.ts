/**
 * /developers.md y /es/desarrolladores.md: la referencia entera en Markdown,
 * para pegársela a un asistente o que la lea un modelo. Sale de los mismos
 * datos que las fichas (lib/api-docs.ts), así que no puede contar otra cosa.
 */
import type { Lang } from './i18n';
import {
  BASE, curlOf, ERRORS, GROUPS, groupOf, LIMITS, MCP_URL, OP_NOTES, opText, opTitle, OPS, paramsOf, pick,
  responseOf, sameFieldsAs, typeLabel,
} from './api-docs';

export function apiMarkdown(lang: Lang, site: URL): string {
  const es = lang === 'es';
  const abs = (p: string) => new URL(p, site).href;
  const n = (v: number) => v.toLocaleString(es ? 'es' : 'en');
  const out: string[] = [];
  const push = (...lines: string[]) => out.push(...lines);

  push(
    es ? '# API de Skillion' : '# Skillion API',
    '',
    es
      ? '> Lee y cambia tus propias skills, tareas, rutinas y calendario de Skillion (app de hábitos tipo RPG). Solo Premium.'
      : '> Read and change your own Skillion skills, tasks, routines and calendar (an RPG-style habit app). Premium only.',
    '',
    `- ${es ? 'URL base' : 'Base URL'}: ${BASE}`,
    `- ${es ? 'Autenticación' : 'Authentication'}: \`Authorization: Bearer sk_live_…\` (${es ? 'la clave sale de la app: Ajustes → toca 7 veces la versión → API para desarrolladores' : 'get it in the app: Settings → tap the version 7 times → Developer API'})`,
    `- MCP: ${MCP_URL} (${es ? 'mismas operaciones, misma clave' : 'same operations, same key'}): ${abs(es ? '/es/desarrolladores/mcp/' : '/developers/mcp/')}`,
    `- ${es ? 'Límites' : 'Limits'}: ${n(LIMITS.per_minute)}/min, ${n(LIMITS.per_day)}/${es ? 'día' : 'day'} (UTC), ${LIMITS.page_max} ${es ? 'por página' : 'per page'}, 64 KB ${es ? 'por cuerpo' : 'per body'}. ${es ? 'Al pasarte: 429 con retry-after.' : 'Over a limit: 429 with retry-after.'}`,
    `- ${es ? 'Listas' : 'Lists'}: ${es ? 'del cambio más antiguo al más nuevo; devuelve `next_cursor` como `cursor` hasta que sea null. Filtros comunes: limit, cursor, updated_since, include_deleted, include_archived.' : 'oldest change first; pass `next_cursor` back as `cursor` until it is null. Common filters: limit, cursor, updated_since, include_deleted, include_archived.'}`,
    `- ${es ? 'Fechas' : 'Dates'}: ${es ? 'ISO 8601 con zona; las de calendario (días, compromisos) son la fecha local, yyyy-MM-dd.' : 'ISO 8601 with a time zone; calendar dates (days, commitments) are the local date, yyyy-MM-dd.'}`,
    `- ${es ? 'Los cambios llegan al móvil en su siguiente sync (al abrir la app).' : 'Changes reach the phone on its next sync (when the app opens).'}`,
    '',
    es ? '## Errores' : '## Errors',
    '',
    '`{"error": {"code": "…", "message": "…", "details": {"field": "why"}}}`',
    '',
    `| HTTP | code | ${es ? 'qué pasó' : 'what happened'} | ${es ? 'qué hacer' : 'what to do'} |`,
    '|---|---|---|---|',
    ...ERRORS.map((e) => `| ${e.http} | ${e.code} | ${pick(lang, e.what)} | ${pick(lang, e.fix)} |`),
    '',
  );

  for (const g of GROUPS) {
    push(`## ${pick(lang, g.label)}`, '', pick(lang, g.intro), '');
    for (const op of OPS.filter((o) => groupOf(o) === g)) {
      const p = paramsOf(op, lang);
      push(`### ${opTitle(op, lang)}`, '', `\`${op.method} /v1${op.path}\` · MCP: \`${op.name}\``, '', opText(op, lang), '');
      for (const note of OP_NOTES[op.name] ?? []) push(`> ${pick(lang, note.text)}`, '');
      const like = sameFieldsAs(op);
      const lists: [string, typeof p.body][] = [
        [es ? 'Ruta' : 'Path', p.path], [es ? 'Consulta' : 'Query', p.query], [es ? 'Cuerpo' : 'Body', like ? [] : p.body],
      ];
      for (const [label, list] of lists) {
        if (!list.length) continue;
        push(`${label}:`, '');
        for (const x of list) {
          const bits = [typeLabel(x.schema), x.required ? (es ? 'obligatorio' : 'required') : '', ...x.rules].filter(Boolean);
          push(`${x.child ? '  ' : ''}- \`${x.name}\` (${bits.join(', ')}): ${x.text}`);
        }
        push('');
      }
      if (like) push(`${es ? 'Cuerpo: los mismos campos que' : 'Body: the same fields as'} \`${like.name}\`${es ? ', todos opcionales.' : ', all optional.'}`, '');
      push(`${es ? 'Responde' : 'Answers'} ${op.status}.`, '', '```bash', curlOf(op), '```', '');
      const res = responseOf(op);
      if (res) push('```json', res, '```', '');
    }
  }
  return out.join('\n');
}
