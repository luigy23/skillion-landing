/**
 * Cómo se conecta el MCP de Skillion en cada app. Cada formato está comprobado
 * contra la documentación de esa app (su enlace va en `source`): si una app
 * cambia su formato, se cambia aquí y en ningún otro sitio.
 *
 * La clave va como cabecera `Authorization: Bearer sk_live_…`. Los ejemplos
 * llevan KEY_PLACEHOLDER y la caja de la página lo cambia por la clave de
 * verdad en el navegador (scripts/mcp-key.ts), con las mismas funciones de
 * enlace que usa el build.
 *
 * Los logos son de Simple Icons 16.37.0 (CC0), en public/icons/clients/; sin
 * logo los que Simple Icons no tiene (OpenAI y Grok).
 */
import reference from '../data/api-reference.json';

export const KEY_PLACEHOLDER = 'sk_live_…';
const URL = reference.mcp;
type Text = readonly [string, string];

const serverJson = (key: string) => ({ url: URL, headers: { Authorization: `Bearer ${key}` } });

/** base64 de UTF-8: btoa solo acepta Latin-1 y la clave de ejemplo lleva «…». */
const base64 = (text: string) => btoa(String.fromCharCode(...new TextEncoder().encode(text)));

/** Cursor: base64 del servidor sin su nombre; el nombre va en `name`. */
export const cursorLink = (key: string) =>
  `cursor://anysphere.cursor-deeplink/mcp/install?name=skillion&config=${encodeURIComponent(
    base64(JSON.stringify(serverJson(key))),
  )}`;

/** VS Code: la redirección web abre `vscode:mcp/install` con el servidor y conserva las cabeceras. */
export const vscodeLink = (key: string) =>
  `https://vscode.dev/redirect/mcp/install?name=skillion&config=${encodeURIComponent(
    JSON.stringify({ type: 'http', ...serverJson(key) }),
  )}`;

export const LINKS = { cursor: cursorLink, vscode: vscodeLink } as const;

export type Client = {
  id: string;
  name: string;
  logo?: string;
  who: Text;
  steps: Text[];
  snippets: { label: string; code: string }[];
  buttons?: { kind: keyof typeof LINKS; label: Text; href: (key: string) => string }[];
  note?: Text;
  source: string[];
  /** Todavía no se puede: va en «Todavía no» con su motivo en steps[0]. */
  notYet?: boolean;
};

const json = (v: unknown) => JSON.stringify(v, null, 2);
const K = KEY_PLACEHOLDER;

export const CLIENTS: Client[] = [
  {
    id: 'claude-desktop', name: 'Claude Desktop', logo: '/icons/clients/claude.svg',
    who: ['desktop app', 'app de escritorio'],
    steps: [
      ['You need Node.js installed (nodejs.org, the LTS button).', 'Necesitas Node.js instalado (nodejs.org, el botón LTS).'],
      ['In Claude: Settings → Developer → Edit Config. Paste this in `claude_desktop_config.json`, save and restart Claude.',
        'En Claude: Ajustes → Desarrollador → Editar configuración. Pega esto en `claude_desktop_config.json`, guarda y reinicia Claude.'],
    ],
    snippets: [{ label: 'claude_desktop_config.json', code: json({ mcpServers: { skillion: {
      command: 'npx', args: ['-y', 'mcp-remote', URL, '--header', 'Authorization:${AUTH_HEADER}'],
      env: { AUTH_HEADER: `Bearer ${K}` } } } }) }],
    note: ['If your file already has other servers, add only the `"skillion": {…}` part inside `mcpServers`.',
      'Si tu archivo ya tiene otros servidores, añade solo la parte `"skillion": {…}` dentro de `mcpServers`.'],
    source: ['https://modelcontextprotocol.io/docs/develop/connect-local-servers', 'https://github.com/geelen/mcp-remote'],
  },
  {
    id: 'claude-code', name: 'Claude Code', logo: '/icons/clients/claude.svg',
    who: ['terminal', 'terminal'],
    steps: [['Run this once in your terminal:', 'Corre esto una vez en tu terminal:']],
    snippets: [{ label: 'Terminal', code: `claude mcp add --transport http skillion ${URL} \\\n  --header "Authorization: Bearer ${K}"` }],
    note: ['For a project\'s `.mcp.json`, use `"Authorization": "Bearer ${SKILLION_API_KEY}"` and keep the key in that environment variable.',
      'Para el `.mcp.json` de un proyecto, usa `"Authorization": "Bearer ${SKILLION_API_KEY}"` y deja la clave en esa variable de entorno.'],
    source: ['https://code.claude.com/docs/en/mcp'],
  },
  {
    id: 'codex', name: 'Codex',
    who: ['ChatGPT\'s Codex: terminal, app and IDE extension', 'el Codex de ChatGPT: terminal, app y extensión del editor'],
    steps: [['Add this to `~/.codex/config.toml`. The terminal, the app and the IDE extension all read it.',
      'Añade esto a `~/.codex/config.toml`. Lo leen la terminal, la app y la extensión del editor.']],
    snippets: [{ label: '~/.codex/config.toml', code: `[mcp_servers.skillion]\nurl = "${URL}"\nhttp_headers = { "Authorization" = "Bearer ${K}" }` }],
    note: ['To keep the key out of the file: `bearer_token_env_var = "SKILLION_API_KEY"` instead of `http_headers`.',
      'Para no dejar la clave en el archivo: `bearer_token_env_var = "SKILLION_API_KEY"` en lugar de `http_headers`.'],
    source: ['https://learn.chatgpt.com/docs/config-file/config-reference', 'https://learn.chatgpt.com/docs/extend/mcp'],
  },
  {
    id: 'gemini', name: 'Gemini CLI', logo: '/icons/clients/googlegemini.svg',
    who: ['terminal', 'terminal'],
    steps: [['Run this once in your terminal:', 'Corre esto una vez en tu terminal:']],
    snippets: [{ label: 'Terminal', code: `gemini mcp add --transport http \\\n  --header "Authorization: Bearer ${K}" \\\n  skillion ${URL}` }],
    source: ['https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md'],
  },
  {
    id: 'kimi', name: 'Kimi Code', logo: '/icons/clients/kimi.svg',
    who: ['terminal', 'terminal'],
    steps: [['Add this to `~/.kimi-code/mcp.json` (or `~/.kimi/mcp.json` with the older Kimi CLI):',
      'Añade esto a `~/.kimi-code/mcp.json` (o `~/.kimi/mcp.json` con el Kimi CLI de antes):']],
    snippets: [{ label: 'mcp.json', code: json({ mcpServers: { skillion: serverJson(K) } }) }],
    source: ['https://www.kimi.com/code/docs/en/kimi-code-cli/customization/mcp.html', 'https://moonshotai.github.io/kimi-cli/en/customization/mcp.html'],
  },
  {
    id: 'cursor', name: 'Cursor', logo: '/icons/clients/cursor.svg',
    who: ['editor', 'editor'],
    steps: [['Tap the button with your key pasted above, or paste the JSON in `~/.cursor/mcp.json`.',
      'Toca el botón con tu clave pegada arriba, o pega el JSON en `~/.cursor/mcp.json`.']],
    buttons: [{ kind: 'cursor', label: ['Add to Cursor', 'Añadir a Cursor'], href: cursorLink }],
    snippets: [{ label: '~/.cursor/mcp.json', code: json({ mcpServers: { skillion: serverJson(K) } }) }],
    source: ['https://cursor.com/docs/context/mcp/install-links', 'https://cursor.com/docs/context/mcp'],
  },
  {
    id: 'vscode', name: 'VS Code · Copilot', logo: '/icons/clients/githubcopilot.svg',
    who: ['editor', 'editor'],
    steps: [['Tap the button with your key pasted above. Or, in a project, paste the JSON in `.vscode/mcp.json`: VS Code asks for the key the first time and does not write it in the file.',
      'Toca el botón con tu clave pegada arriba. O, en un proyecto, pega el JSON en `.vscode/mcp.json`: VS Code te pide la clave la primera vez y no la escribe en el archivo.']],
    buttons: [{ kind: 'vscode', label: ['Add to VS Code', 'Añadir a VS Code'], href: vscodeLink }],
    snippets: [{ label: '.vscode/mcp.json', code: json({
      inputs: [{ type: 'promptString', id: 'skillion-key', description: 'Skillion API key', password: true }],
      servers: { skillion: { type: 'http', url: URL, headers: { Authorization: 'Bearer ${input:skillion-key}' } } } }) }],
    source: ['https://code.visualstudio.com/api/extension-guides/ai/mcp', 'https://code.visualstudio.com/docs/agents/reference/mcp-configuration'],
  },
  {
    id: 'windsurf', name: 'Windsurf', logo: '/icons/clients/windsurf.svg',
    who: ['editor (now Devin Desktop)', 'editor (ahora Devin Desktop)'],
    steps: [['In Cascade, open the MCP settings and the raw `mcp_config.json`, and paste:',
      'En Cascade, abre los ajustes de MCP y el `mcp_config.json`, y pega:']],
    snippets: [{ label: 'mcp_config.json', code: json({ mcpServers: { skillion: { serverUrl: URL, headers: { Authorization: `Bearer ${K}` } } } }) }],
    source: ['https://docs.devin.ai/windsurf/plugins/cascade/mcp.md'],
  },
  {
    id: 'lmstudio', name: 'DeepSeek · LM Studio', logo: '/icons/clients/deepseek.svg',
    who: ['desktop app, with DeepSeek or another local model', 'app de escritorio, con DeepSeek u otro modelo local'],
    steps: [
      ['DeepSeek has no app that connects MCP servers. LM Studio runs DeepSeek models (and others) on your computer and does.',
        'DeepSeek no tiene una app que conecte servidores MCP. LM Studio ejecuta modelos de DeepSeek (y otros) en tu ordenador, y sí los conecta.'],
      ['In LM Studio: Program → Install → Edit mcp.json, paste this and save. Then load a model that uses tools.',
        'En LM Studio: Program → Install → Edit mcp.json, pega esto y guarda. Después carga un modelo que use herramientas.'],
    ],
    snippets: [{ label: 'mcp.json', code: json({ mcpServers: { skillion: serverJson(K) } }) }],
    source: ['https://lmstudio.ai/docs/app/mcp'],
  },
  {
    id: 'grok', name: 'Grok · xAI API',
    who: ['for developers', 'para desarrolladores'],
    steps: [['In a call to the xAI API, add Skillion as a remote MCP tool:', 'En una llamada a la API de xAI, añade Skillion como herramienta MCP remota:']],
    snippets: [{ label: 'tools', code: json([{ type: 'mcp', server_url: URL, server_label: 'skillion', headers: { Authorization: `Bearer ${K}` } }]) }],
    source: ['https://docs.x.ai/docs/guides/tools/remote-mcp-tools'],
  },
  {
    id: 'chatgpt', name: 'ChatGPT', notYet: true,
    who: ['', ''],
    steps: [['ChatGPT only connects servers that sign you in with OAuth, and Skillion\'s MCP uses a key for now.',
      'ChatGPT solo conecta servidores que te hacen iniciar sesión con OAuth, y el MCP de Skillion usa una clave por ahora.']],
    snippets: [], source: ['https://developers.openai.com/plugins/build/auth'],
  },
  {
    id: 'claude-web', name: 'claude.ai', notYet: true,
    who: ['', ''],
    steps: [['Custom connectors with a key are in beta for a few accounts. If yours has «Request headers»: Add custom connector → No sign-in → header `authorization` with `Bearer sk_live_…`. If not, use Claude Desktop.',
      'Los conectores con clave están en beta para pocas cuentas. Si la tuya tiene «Request headers»: Add custom connector → No sign-in → cabecera `authorization` con `Bearer sk_live_…`. Si no, usa Claude Desktop.']],
    snippets: [], source: ['https://claude.com/docs/connectors/custom/add-unlisted.md'],
  },
  {
    id: 'apps', name: 'Gemini, grok.com, kimi.com', notYet: true,
    who: ['', ''],
    steps: [['Their web and phone apps do not say yet how to connect a server with a key. Their terminal tools above do work.',
      'Sus apps web y del móvil aún no dicen cómo conectar un servidor con clave. Sus herramientas de terminal de arriba sí funcionan.']],
    snippets: [], source: ['https://support.google.com/gemini/answer/17209137', 'https://docs.x.ai/grok/connectors'],
  },
];
