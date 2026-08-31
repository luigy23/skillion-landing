/**
 * Genera los iconos del sitio desde el maestro de 1000x1000.
 *
 *   node scripts/make-icons.mjs
 *
 * Por que existe: public/favicon.png era el maestro tal cual, 1000x1000 y
 * 256 KB, servido en el <link rel="icon"> de las 35 paginas. Se descargaba
 * entero en cada carga para dibujarse a 16 px. Era, con diferencia, el peor
 * lastre de rendimiento del sitio, y el unico que penalizaba en todas partes a
 * la vez.
 *
 * El maestro vive en src/assets/brand/ y no en public/ a proposito: ahi dentro
 * nada se sirve al navegador, asi que no hay forma de volver a publicarlo por
 * descuido.
 *
 * sharp ya viene con Astro, no hace falta anadir dependencia.
 *
 * kernel 'nearest': el logo es pixel art. Con el remuestreo por defecto
 * (Lanczos) los bordes duros salen lavados y a 32 px se convierte en una
 * mancha. El vecino mas cercano conserva el pixel.
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const MASTER = fileURLToPath(new URL('../src/assets/brand/skillion-logo-master.png', import.meta.url));
const OUT = fileURLToPath(new URL('../public/', import.meta.url));

const ICONS = [
  // El favicon del <link rel="icon">. 32 es el tamano que piden los
  // navegadores modernos para la pestana; 16 lo derivan solos.
  { file: 'favicon.png', size: 32 },
  // iOS al anadir a pantalla de inicio. Sin esto Apple hace una captura de la
  // pagina y sale borrosa.
  { file: 'apple-touch-icon.png', size: 180 },
  // El logo del Organization en JSON-LD (src/lib/schema.ts). Google pide una
  // imagen de al menos 112x112 para el logo de una organizacion, asi que aqui
  // NO vale apuntar al favicon de 32.
  { file: 'logo-512.png', size: 512 },
];

for (const { file, size } of ICONS) {
  const info = await sharp(MASTER)
    .resize(size, size, { kernel: 'nearest' })
    // palette: cuantiza a PNG-8. El logo tiene pocos colores planos, asi que
    // no se pierde nada visible y el fichero baja muchisimo.
    .png({ compressionLevel: 9, palette: true })
    .toFile(OUT + file);
  console.log(`  ${file.padEnd(22)} ${size}x${size}  ${(info.size / 1024).toFixed(1)} KB`);
}
