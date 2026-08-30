/**
 * Avisa a IndexNow de que hay URLs nuevas o actualizadas.
 *
 *   npm run build && node scripts/indexnow.mjs
 *
 * Por qué importa para SCRUM-450: la búsqueda de ChatGPT se apoya en el índice
 * de Bing, y Bing puede tardar semanas en volver a pasar por su cuenta.
 * IndexNow le dice "esto ha cambiado, ven ahora" y recorta esa espera. Lo
 * comparten Bing, Yandex, Seznam y Naver con un solo aviso.
 *
 * La clave es el nombre del fichero en public/: IndexNow comprueba que
 * https://skillion.app/<clave>.txt existe y contiene la propia clave. Eso es lo
 * que demuestra que quien avisa controla el dominio.
 *
 * Ojo: esto NO sustituye dar de alta el sitio en Bing Webmaster Tools ni
 * enviar allí el sitemap. Son dos cosas distintas y el criterio 6 pide la
 * segunda.
 */
import { readFileSync } from 'node:fs';

const KEY = 'd3a7392fdd8cd524adcbb7d8b9e824e4';
const HOST = 'skillion.app';

// Del sitemap que ya genera @astrojs/sitemap: es la lista canónica de lo que
// existe, así no hay que mantener una segunda lista que se desincronice.
const sitemap = readFileSync(new URL('../dist/sitemap-0.xml', import.meta.url), 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  console.error('El sitemap está vacío. ¿Se ha ejecutado npm run build?');
  process.exit(1);
}

const response = await fetch('https://api.indexnow.org/IndexNow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

// 200 = aceptado. 202 = aceptado, clave pendiente de validar (normal la primera
// vez, hasta que el fichero de clave esté desplegado).
console.log(`${response.status} ${response.statusText} · ${urlList.length} URLs enviadas`);
if (!response.ok && response.status !== 202) {
  console.error(await response.text());
  process.exit(1);
}
