// /p/<código>: el enlace de invitación a un pacto (SCRUM-589).
//
// Con la app instalada, iOS y Android abren la app directamente (universal links
// y app links, public/.well-known/) y esta página no llega a verse. Sin la app:
// - Las etiquetas OG («Juli te reta: Leer · 30 días») las lee la vista previa de
//   WhatsApp; salen de api.skillion.app/functions/v1/pact-link/preview, que solo
//   devuelve lo que verá cualquiera con el enlace (skillion-infra pactos-44).
// - El JS registra la visita (el rastreador de WhatsApp no ejecuta JS, así que no
//   cuenta como «abierto») y lleva a la tienda:
//   · Android: a Play con referrer=pact%3D<código>; la app lo lee con el Install
//     Referrer al arrancar.
//   · iOS: al tocar el botón copia el enlace al portapapeles y abre el App Store;
//     la app lo lee en su primer arranque. Sin IP ni huella: Apple lo prohíbe.

const API = 'https://api.skillion.app/functions/v1/pact-link'
const SITE = 'https://skillion.app'
const APP_STORE = 'https://apps.apple.com/app/skillion-gamify-your-life/id6752905262'
const PLAY = 'https://play.google.com/store/apps/details?id=app.skillion'
const CODE = /^[A-Za-z0-9]{4,8}$/

const T = {
  es: {
    challenge: (n, h, d) => `${n} te reta: ${h} · ${d} días`,
    generic: 'Te han invitado a un pacto en Skillion',
    desc: 'Acepta el reto en Skillion: dos personas, un hábito y quién lo cumple más.',
    lead: 'Descarga Skillion y acepta la invitación. Al abrir la app te llevamos directo al pacto.',
    button: 'Descargar Skillion',
    other: 'Con la app ya instalada, abre este enlace desde el móvil. O escribe el código en Pactos:',
    copied: 'Enlace copiado. Te llevamos al App Store…',
  },
  en: {
    challenge: (n, h, d) => `${n} challenges you: ${h} · ${d} days`,
    generic: 'You have been invited to a pact on Skillion',
    desc: 'Take the challenge on Skillion: two people, one habit, and who keeps it best.',
    lead: 'Get Skillion and accept the invitation. When you open the app we take you straight to the pact.',
    button: 'Get Skillion',
    other: 'If you already have the app, open this link on your phone. Or type the code in Pacts:',
    copied: 'Link copied. Taking you to the App Store…',
  },
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

async function preview(code) {
  try {
    const res = await fetch(`${API}/preview?code=${encodeURIComponent(code)}`, { signal: AbortSignal.timeout(3000) })
    return res.ok ? await res.json() : null
  } catch {
    return null
  }
}

export default async function handler(req, res) {
  const code = String(req.query.code ?? '').toUpperCase()
  if (!CODE.test(code)) {
    res.writeHead(302, { Location: '/' })
    return res.end()
  }
  const lang = /^es\b/i.test(String(req.headers['accept-language'] ?? '')) ? 'es' : 'en'
  const t = T[lang]
  const p = await preview(code)
  const title = p ? t.challenge(p.name || 'Skillion', p.habit_name, p.duration_days) : t.generic
  const url = `${SITE}/p/${code}/`
  const play = `${PLAY}&referrer=${encodeURIComponent(`pact=${code}`)}`

  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // The preview changes when the pact starts or the code dies: short and shared.
  res.setHeader('Cache-Control', 'public, s-maxage=300, max-age=0')
  res.end(`<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="robots" content="noindex">
<meta name="description" content="${esc(t.desc)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Skillion">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(t.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/og/skillion.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png">
<style>
  :root { color-scheme: dark; }
  body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #0f1526;
         color: #f4f1ea; font: 16px/1.5 system-ui, -apple-system, sans-serif; }
  main { max-width: 420px; padding: 32px 16px; text-align: center; }
  img { width: 88px; height: 88px; border-radius: 20px; }
  h1 { font-size: 24px; line-height: 1.25; margin: 20px 0 8px; }
  p { color: #c9c4b8; margin: 0 0 24px; }
  /* The same main button as /developers. */
  .btn { display: inline-block; padding: 13px 18px; font-size: 16px; font-weight: 900; line-height: 1.2;
         color: #2a1a06; text-decoration: none; background: #ffc53d; border: 4px solid #0a0f1f;
         box-shadow: 6px 6px 0 rgba(5, 8, 18, 0.45); cursor: pointer; }
  .code { font: 700 28px/1 ui-monospace, monospace; letter-spacing: 4px; margin: 12px 0 24px; }
  .stores a { color: #ffc53d; margin: 0 8px; }
  [hidden] { display: none; }
</style>
</head>
<body>
<main>
  <img src="/logo-512.png" alt="" width="88" height="88">
  <h1>${esc(title)}</h1>
  <p>${esc(t.lead)}</p>
  <a class="btn" id="go" href="${APP_STORE}">${esc(t.button)}</a>
  <p id="copied" hidden>${esc(t.copied)}</p>
  <div id="other" hidden>
    <p>${esc(t.other)}</p>
    <div class="code">${esc(code)}</div>
    <div class="stores"><a href="${APP_STORE}">App Store</a><a href="${PLAY}">Google Play</a></div>
  </div>
</main>
<script>
(function () {
  var code = ${JSON.stringify(code)}, url = ${JSON.stringify(url)};
  var ua = navigator.userAgent;
  var ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  var android = /Android/.test(ua);
  try {
    fetch(${JSON.stringify(`${API}/visit`)}, {
      method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: code, platform: ios ? 'ios' : android ? 'android' : 'other', lang: navigator.language })
    }).catch(function () {});
  } catch (e) {}
  var go = document.getElementById('go');
  if (android) {
    go.href = ${JSON.stringify(play)};
    setTimeout(function () { location.href = go.href; }, 400);
  } else if (ios) {
    // The app reads this link from the clipboard on its first launch.
    go.addEventListener('click', function (ev) {
      ev.preventDefault();
      var done = function () { document.getElementById('copied').hidden = false; location.href = ${JSON.stringify(APP_STORE)}; };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, done);
      else done();
    });
  } else {
    go.hidden = true;
    document.getElementById('other').hidden = false;
  }
})();
</script>
</body>
</html>`)
}
