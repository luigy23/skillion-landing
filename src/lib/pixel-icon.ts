import type { ImageMetadata } from 'astro';

/**
 * Iconos pixel art del blog, servidos SIEMPRE como original.
 *
 * Nunca pasan por <Image> de Astro: sharp remuestrea con interpolación suave y
 * se carga la rejilla. Aquí solo se calcula a qué tamaño mostrarlos, y ese
 * tamaño es siempre un múltiplo ENTERO del sprite real.
 */

const icons = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/pixelartAssets/blog/*.png',
  { eager: true },
);

/** name -> ImageMetadata */
const byName = new Map<string, ImageMetadata>(
  Object.entries(icons).map(([path, mod]) => [
    path.split('/').pop()!.replace(/\.png$/, ''),
    mod.default,
  ]),
);

/**
 * Iconos que ya vienen escalados: el fichero es 64x64 pero el sprite real es
 * 16x16 repetido en bloques de 4x4. Se pueden mostrar a cualquier múltiplo de
 * 16 y siguen nítidos. Los que no aparecen aquí tienen bloque 1: su tamaño de
 * fichero YA es el sprite, así que solo admiten 1x, 2x, 3x... y nunca menos.
 *
 * Generado con `python3 scripts/pixel-grid.py`.
 */
const BLOCK_SIZES: Record<string, number> = {
  book: 4,
  computer: 4,
  heart: 4,
  lightbulb: 4,
  map: 4,
  meditation: 4,
  pencil: 4,
  plant: 4,
  star: 4,
  strength: 4,
};

/** Si un post referencia un icono que no existe, no rompemos el build. */
const FALLBACK = 'book';

export interface PixelIcon {
  src: string;
  width: number;
  height: number;
}

/**
 * Devuelve el icono escalado al mayor múltiplo entero de su sprite que quepa
 * en una caja de `box` píxeles.
 *
 * Si ni siquiera 1x cabe, devuelve 1x igualmente: es preferible que un icono
 * sobresalga un poco (el layout lo centra y recorta) a mostrarlo borroso, que
 * es justo lo que se intenta evitar.
 */
export function pixelIcon(name: string | null | undefined, box: number): PixelIcon {
  const key = name && byName.has(name) ? name : FALLBACK;
  const asset = byName.get(key)!;

  const block = BLOCK_SIZES[key] ?? 1;
  const unitW = asset.width / block;
  const unitH = asset.height / block;

  const scale = Math.max(1, Math.floor(box / Math.max(unitW, unitH)));

  return {
    src: asset.src,
    width: Math.round(unitW * scale),
    height: Math.round(unitH * scale),
  };
}

/** Para saber si un icono referenciado desde Neon existe realmente. */
export function hasIcon(name: string | null | undefined): boolean {
  return !!name && byName.has(name);
}

export function iconNames(): string[] {
  return [...byName.keys()].sort();
}
