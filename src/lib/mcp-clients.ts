/**
 * Cómo se conecta el MCP de Skillion en cada app. Cada formato está comprobado
 * contra la documentación de esa app (su enlace va en `source`): si una app
 * cambia su formato, se cambia aquí y en ningún otro sitio.
 *
 * Dos maneras: iniciando sesión (`signIn`: basta la dirección; el servidor
 * hace el OAuth y pide la clave en su propia página) o con la clave como
 * cabecera `Authorization: Bearer sk_live_…` en la configuración. Los ejemplos
 * de esta segunda llevan KEY_PLACEHOLDER y la caja de la página lo cambia por la clave de
 * verdad en el navegador (scripts/mcp-key.ts), con las mismas funciones de
 * enlace que usa el build.
 *
 * Los logos son de Simple Icons 16.37.0 (CC0), en public/icons/clients/; sin
 * logo los que Simple Icons no tiene (ChatGPT, Codex y Grok).
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
  /** Se conecta iniciando sesión: basta la URL (OAuth). Sin esto, con la clave en su configuración. */
  signIn?: boolean;
  /** Todavía no se puede: va en «Todavía no» con su motivo en steps[0]. */
  notYet?: boolean;
};

const json = (v: unknown) => JSON.stringify(v, null, 2);
const K = KEY_PLACEHOLDER;

const ALL: Client[] = [
  // ---- Iniciando sesión: basta la dirección del servidor (OAuth).
  {
    id: 'chatgpt', name: 'ChatGPT', signIn: true,
    who: ['on the web', 'en la web'],
    steps: [
      ['Open `chatgpt.com/plugins`, tap the plus button and choose «Add custom MCP server». Name it Skillion, paste the address in «Server URL», pick «OAuth» as authentication, confirm «I understand and want to continue» and tap «Create as a plugin».',
        'Abre `chatgpt.com/plugins`, toca el botón del más y elige «Add custom MCP server». Ponle de nombre Skillion, pega la dirección en «Server URL», elige «OAuth» como autenticación, confirma «I understand and want to continue» y toca «Create as a plugin».'],
      ['Install the plugin it creates. In a new chat, type `@` and pick Skillion.',
        'Instala el plugin que crea. En un chat nuevo, escribe `@` y elige Skillion.'],
    ],
    snippets: [],
    note: ['OpenAI is opening this plan by plan: if you do not see «Add custom MCP server», your account does not have it yet. Some plans only let a server like this read, not change.',
      'OpenAI lo va abriendo por planes: si no ves «Add custom MCP server», tu cuenta aún no lo tiene. Algunos planes solo dejan que un servidor así lea, no que cambie.'],
    source: ['https://developers.openai.com/api/docs/guides/custom-mcp-server', 'https://developers.openai.com/plugins/deploy/connect-chatgpt'],
  },
  {
    id: 'claude', name: 'Claude', logo: '/icons/clients/claude.svg', signIn: true,
    who: ['web, desktop and phone · every plan, Free too', 'web, escritorio y móvil · todos los planes, también el gratis'],
    steps: [
      ['On claude.ai or in the desktop app: Customize → Connectors → «+ Add» → «Add custom connector». Name it Skillion, paste the address, tap «Continue» and then «Add». If the connector shows «Connect», tap it.',
        'En claude.ai o en la app de escritorio: Personalizar → Conectores → «+ Añadir» → «Añadir conector personalizado». Ponle de nombre Skillion, pega la dirección, toca «Continuar» y después «Añadir». Si el conector muestra «Conectar», tócalo.'],
      ['In each chat: «+» in the message box → Connectors → turn Skillion on. Once connected on the web or desktop, you have it on your phone too.',
        'En cada chat: «+» en la caja del mensaje → Conectores → activa Skillion. Una vez conectado en la web o el escritorio, lo tienes también en el móvil.'],
    ],
    snippets: [],
    note: ['The Free plan allows one custom connector.', 'El plan gratis permite un conector personalizado.'],
    source: ['https://claude.com/docs/connectors/custom/add-unlisted.md', 'https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp'],
  },
  {
    id: 'gemini-app', name: 'Gemini', logo: '/icons/clients/googlegemini.svg', signIn: true,
    who: ['United States only, for now', 'solo en Estados Unidos, por ahora'],
    steps: [
      ['On a computer, at `gemini.google.com`: Settings → Connected Apps → under «Custom apps», add the address and tap «Next». In a prompt, type `@` and pick Skillion. Once connected, it also works in the phone app.',
        'En un ordenador, en `gemini.google.com`: Settings → Connected Apps → en «Custom apps», añade la dirección y toca «Next». En un mensaje, escribe `@` y elige Skillion. Una vez conectado, funciona también en la app del móvil.'],
    ],
    snippets: [],
    note: ['Google asks for a personal account (not work or school), 18 or over, in the US, in English and with «Keep Activity» on.',
      'Google pide una cuenta personal (no de trabajo ni de estudios), ser mayor de 18, estar en EE. UU., en inglés y con «Keep Activity» activado.'],
    source: ['https://support.google.com/gemini/answer/17209137'],
  },
  {
    id: 'lechat', name: 'Le Chat · Mistral', logo: '/icons/clients/mistralai.svg', signIn: true,
    who: ['free accounts too', 'también en cuentas gratis'],
    steps: [
      ['Open «Connectors» in the sidebar → «+ Add Connector» → the «Custom MCP Connector» tab. Connector name: `skillion` (no spaces). Paste the address in «Server URL» and tap «Connect».',
        'Abre «Connectors» en la barra lateral → «+ Add Connector» → la pestaña «Custom MCP Connector». Connector name: `skillion` (sin espacios). Pega la dirección en «Server URL» y toca «Connect».'],
      ['In each chat: the «+» icon or `/` → Tools → turn it on.', 'En cada chat: el icono «+» o `/` → Tools → actívalo.'],
    ],
    snippets: [],
    source: ['https://docs.mistral.ai/vibe/work/connectors/mcp-connectors'],
  },
  {
    id: 'grok-app', name: 'Grok', signIn: true,
    who: ['on the web', 'en la web'],
    steps: [
      ['Open `grok.com/connectors` → «New Connector» → «Custom» (in some accounts: «+ Add Connector» → «Other»), paste the address and follow the sign-in.',
        'Abre `grok.com/connectors` → «New Connector» → «Custom» (en algunas cuentas: «+ Add Connector» → «Other»), pega la dirección y sigue el inicio de sesión.'],
    ],
    snippets: [],
    source: ['https://docs.x.ai/grok/connectors', 'https://docs.x.ai/grok/connector-management'],
  },
  {
    id: 'perplexity', name: 'Perplexity', logo: '/icons/clients/perplexity.svg', signIn: true,
    who: ['Pro, Max and Enterprise', 'Pro, Max y Enterprise'],
    steps: [
      ['«Plugins» in the sidebar (or Customize → Connectors) → «Add custom» → «Add MCP connector» → «Remote». Name: Skillion; paste the address in «MCP server URL», tick the acknowledgement box and tap «Add». Then tap the connector\'s card to sign in.',
        '«Plugins» en la barra lateral (o Customize → Connectors) → «Add custom» → «Add MCP connector» → «Remote». Name: Skillion; pega la dirección en «MCP server URL», marca la casilla de aviso y toca «Add». Después toca la tarjeta del conector para iniciar sesión.'],
    ],
    snippets: [],
    source: ['https://www.perplexity.ai/help-center/en/articles/13915507-adding-custom-remote-connectors'],
  },
  // ---- Con la clave en su configuración.
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
    id: 'grok', name: 'xAI API',
    who: ['for developers', 'para desarrolladores'],
    steps: [['In a call to the xAI API, add Skillion as a remote MCP tool:', 'En una llamada a la API de xAI, añade Skillion como herramienta MCP remota:']],
    snippets: [{ label: 'tools', code: json([{ type: 'mcp', server_url: URL, server_label: 'skillion', headers: { Authorization: `Bearer ${K}` } }]) }],
    source: ['https://docs.x.ai/docs/guides/tools/remote-mcp-tools'],
  },
  {
    id: 'copilot', name: 'Microsoft Copilot', notYet: true,
    who: ['', ''],
    steps: [['The Copilot app for consumers has no way to add a server of your own.',
      'La app de Copilot para particulares no deja añadir un servidor propio.']],
    snippets: [], source: ['https://support.microsoft.com/en-us/microsoft-copilot/connecting-microsoft-copilot-to-other-services'],
  },
];

// El orden en que la gente los usa: primero las apps de chat, después las herramientas.
const ORDER = [
  'chatgpt', 'gemini-app', 'claude', 'lechat', 'grok-app', 'perplexity',
  'claude-code', 'codex', 'claude-desktop', 'gemini', 'cursor', 'vscode', 'kimi', 'windsurf', 'lmstudio', 'grok',
];

export const CLIENTS: Client[] = [...ALL].sort((a, b) => {
  const [x, y] = [ORDER.indexOf(a.id), ORDER.indexOf(b.id)];
  return (x < 0 ? ORDER.length : x) - (y < 0 ? ORDER.length : y);
});
