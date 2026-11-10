// La caja «Tu clave» del MCP: con una clave válida, los comandos y los botones
// la llevan. Solo cambia el texto de esta pestaña: ni se manda ni se guarda.
import { KEY_PLACEHOLDER, LINKS } from '../lib/mcp-clients';

const VALID = /^sk_live_[0-9a-f]{64}$/;

export function initMcpKey() {
  const input = document.querySelector<HTMLInputElement>('#mcp-key');
  const help = document.querySelector<HTMLElement>('#mcp-key-help');
  if (!input || !help || input.dataset.bound === 'true') return;
  input.dataset.bound = 'true';

  const apply = () => {
    const raw = input.value.trim();
    const ok = VALID.test(raw);
    const key = ok ? raw : KEY_PLACEHOLDER;
    input.setAttribute('aria-invalid', String(raw !== '' && !ok));
    help.textContent = raw !== '' && !ok ? help.dataset.bad ?? '' : help.dataset.ok ?? '';
    document.querySelectorAll<HTMLElement>('[data-template]').forEach((code) => {
      code.textContent = (code.dataset.template ?? '').split(KEY_PLACEHOLDER).join(key);
    });
    document.querySelectorAll<HTMLAnchorElement>('[data-deeplink]').forEach((a) => {
      const link = LINKS[a.dataset.deeplink as keyof typeof LINKS];
      if (link) a.href = link(key);
    });
  };
  input.addEventListener('input', apply);
}
