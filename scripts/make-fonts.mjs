/**
 * Convierte las fuentes de Poppins de TTF a WOFF2.
 *
 *   npm i -D ttf2woff2 && node scripts/make-fonts.mjs
 *
 * La dependencia se instala solo para esto y se puede desinstalar despues: los
 * .woff2 quedan commiteados y no hay paso de conversion en el build.
 *
 * Por que: public/fonts/ tenia 18 ficheros TTF, 3,4 MB, de los que solo 5
 * estaban declarados en @font-face. Y TTF es el formato mas pesado que se
 * puede servir. Poppins-Regular.ttf son 192 KB; en WOFF2 baja a ~65. El Layout
 * precarga dos de ellos, asi que eran ~384 KB en la ruta critica de render.
 *
 * De los 5 pesos declarados se conservan 3. El 300 y el 800 no aparecian en
 * ningun sitio salvo en su propio @font-face: cero usos reales en todo src/.
 *
 * Se declara SOLO woff2, sin TTF de respaldo. Lo soporta el 97,5% de los
 * navegadores y el resto cae a la pila de sistema, que para una fuente de
 * cuerpo es aceptable. Listar el TTF detras no costaria nada en runtime
 * —el navegador descarga solo el primer formato que entiende— pero obligaria a
 * conservar los ficheros, que es justo lo que se quiere eliminar.
 */
import ttf2woff2 from 'ttf2woff2';
import { readFileSync, writeFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const DIR = fileURLToPath(new URL('../public/fonts/', import.meta.url));

// peso -> nombre del fichero. Solo lo que se usa de verdad:
//   400  cuerpo por defecto
//   600  ParallaxProductivity.astro:237, un uso
//   700  el que manda: font-bold aparece 132 veces
const PESOS = [
  [400, 'Poppins-Regular'],
  [600, 'Poppins-SemiBold'],
  [700, 'Poppins-Bold'],
];

let antes = 0;
let despues = 0;

for (const [peso, nombre] of PESOS) {
  const ttf = `${DIR}${nombre}.ttf`;
  const woff2 = `${DIR}${nombre}.woff2`;
  writeFileSync(woff2, ttf2woff2(readFileSync(ttf)));

  const a = statSync(ttf).size;
  const d = statSync(woff2).size;
  antes += a;
  despues += d;
  console.log(
    `  ${String(peso).padEnd(4)} ${nombre.padEnd(20)} ${(a / 1024).toFixed(0).padStart(4)} KB -> ${(d / 1024).toFixed(0).padStart(3)} KB  (-${Math.round((1 - d / a) * 100)}%)`,
  );
}

console.log(`\n  total  ${(antes / 1024).toFixed(0)} KB -> ${(despues / 1024).toFixed(0)} KB`);
