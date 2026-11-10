// Lo que se mueve en las docs de la API y del MCP: copiar, el lenguaje de los
// ejemplos, el índice y volver arriba. Con el ClientRouter esto corre en la
// carga y en cada astro:page-load: la marca data-bound evita duplicar listeners.

const LANG_KEY = 'skillion-dev-lang';
const LANGS = ['curl', 'js', 'py'];

function visiblePre(block: Element): HTMLElement | null {
  const all = Array.from(block.querySelectorAll<HTMLElement>('pre'));
  return all.find((pre) => pre.getClientRects().length > 0) ?? all[0] ?? null;
}

function bindCopy(root: HTMLElement) {
  root.querySelectorAll<HTMLButtonElement>('.copy').forEach((button) => {
    const label = button.textContent ?? '';
    button.addEventListener('click', async () => {
      const block = button.closest('.code');
      try {
        // data-copy-url: la página entera en Markdown, para pegársela a un asistente.
        // Safari solo deja copiar dentro del clic: la descarga va como promesa del ClipboardItem.
        const url = button.dataset.copyUrl;
        if (url && 'ClipboardItem' in window) {
          const blob = fetch(url).then((r) => r.text()).then((t) => new Blob([t], { type: 'text/plain' }));
          await navigator.clipboard.write([new ClipboardItem({ 'text/plain': blob })]);
        } else {
          const text = url
            ? await (await fetch(url)).text()
            : button.dataset.copyText ?? (block ? visiblePre(block)?.innerText : '') ?? '';
          await navigator.clipboard.writeText(text);
        }
      } catch {
        return;
      }
      button.textContent = button.dataset.copied ?? label;
      button.classList.add('is-copied');
      window.setTimeout(() => {
        button.textContent = label;
        button.classList.remove('is-copied');
      }, 1600);
    });
  });
}

function setLang(root: HTMLElement, lang: string) {
  if (!LANGS.includes(lang)) return;
  root.dataset.lang = lang;
  root.querySelectorAll<HTMLButtonElement>('.lang').forEach((b) =>
    b.setAttribute('aria-pressed', String(b.dataset.setLang === lang)),
  );
}

function bindLangs(root: HTMLElement) {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved) setLang(root, saved);
  } catch {
    // Sin almacenamiento (modo privado): se queda curl.
  }
  root.querySelectorAll<HTMLButtonElement>('.lang').forEach((button) =>
    button.addEventListener('click', () => {
      // El ejemplo que se estaba mirando no salta al cambiar de lenguaje.
      const before = button.getBoundingClientRect().top;
      setLang(root, button.dataset.setLang ?? 'curl');
      window.scrollBy(0, button.getBoundingClientRect().top - before);
      try {
        localStorage.setItem(LANG_KEY, root.dataset.lang ?? 'curl');
      } catch {
        // Sin almacenamiento: vale para esta visita.
      }
    }),
  );
}

function bindToc(root: HTMLElement) {
  const toc = root.querySelector<HTMLDetailsElement>('details.toc');
  const narrow = window.matchMedia('(max-width: 1023px)');
  if (toc && narrow.matches) toc.open = false;
  toc?.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => {
      if (narrow.matches) toc.open = false;
    }),
  );
  const links = new Map(
    Array.from(root.querySelectorAll<HTMLAnchorElement>('[data-toc-link]')).map((a) => [a.hash.slice(1), a]),
  );
  links.values().next().value?.setAttribute('aria-current', 'location');
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || !links.has(entry.target.id)) continue;
        links.forEach((a) => a.removeAttribute('aria-current'));
        links.get(entry.target.id)?.setAttribute('aria-current', 'location');
      }
    },
    { rootMargin: '0px 0px -70% 0px' },
  );
  root.querySelectorAll('.dev-section').forEach((section) => observer.observe(section));
}

function bindToTop(root: HTMLElement) {
  const button = root.querySelector<HTMLButtonElement>('.to-top');
  if (!button) return;
  const update = () => button.classList.toggle('is-on', window.scrollY > 900);
  window.addEventListener('scroll', update, { passive: true });
  update();
  button.addEventListener('click', () => {
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
  });
}

/** Una respuesta que se abre desde un enlace (#…) se despliega sola. */
function openTarget(root: HTMLElement) {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  root.querySelector(`[id="${CSS.escape(id)}"] details.response`)?.setAttribute('open', '');
}

export function initDevDocs() {
  const root = document.querySelector<HTMLElement>('.dev-page');
  if (!root || root.dataset.bound === 'true') return;
  root.dataset.bound = 'true';
  bindCopy(root);
  bindLangs(root);
  bindToc(root);
  bindToTop(root);
  openTarget(root);
}
