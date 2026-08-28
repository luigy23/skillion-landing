#!/usr/bin/env python3
"""Detecta el grid real de cada icono pixel art.

Muchos assets son sprites pequeños (16x16) ya escalados x4 a 64x64. Saber el
tamaño de bloque permite escalarlos por multiplos ENTEROS del sprite real, que
es lo unico que mantiene la rejilla nitida. Un icono con bloque=1 solo se puede
mostrar a 1x, 2x, 3x... de su tamano de fichero; nunca por debajo.

Uso: python3 scripts/pixel-grid.py [carpeta]
La tabla BLOCK_SIZES de src/lib/pixel-icon.ts sale de aqui.
"""
import sys, os, glob
from PIL import Image


def block_size(path: str) -> int:
    im = Image.open(path).convert("RGBA")
    w, h = im.size
    px = im.load()
    best = 1
    for n in range(1, min(w, h) + 1):
        if w % n or h % n:
            continue
        ok = True
        for by in range(0, h, n):
            if not ok:
                break
            for bx in range(0, w, n):
                c = px[bx, by]
                for y in range(by, by + n):
                    for x in range(bx, bx + n):
                        if px[x, y] != c:
                            ok = False
                            break
                    if not ok:
                        break
                if not ok:
                    break
        if ok:
            best = n
    return best


folder = sys.argv[1] if len(sys.argv) > 1 else "src/assets/pixelartAssets/blog"
for p in sorted(glob.glob(os.path.join(folder, "*.png"))):
    w, h = Image.open(p).size
    n = block_size(p)
    name = os.path.splitext(os.path.basename(p))[0]
    if n > 1:
        print(f"  {name}: {n},".ljust(28) + f"// {w}x{h} = sprite {w//n}x{h//n} escalado x{n}")
