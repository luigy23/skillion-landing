#!/usr/bin/env python3
"""Genera la imagen OG por defecto en public/og/skillion.png.

Existe porque el Layout referenciaba /assets/Skillion.png: una ruta relativa
(OG exige URL absoluta) apuntando a un fichero que ni siquiera acababa en dist.
Resultado: ninguna pagina tenia imagen al compartirse.

1200x630 es la proporcion que piden Facebook, X y LinkedIn.
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (15, 21, 38)          # #0f1526
GRID = (63, 93, 168, 26)   # rgba(63,93,168,.10)
GOLD = (255, 197, 61)
TEXT = (220, 234, 254)

img = Image.new("RGB", (W, H), BG)

# Rejilla de fondo, la misma del blog (32px)
grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(grid)
for x in range(0, W, 32):
    gd.line([(x, 0), (x, H)], fill=GRID)
for y in range(0, H, 32):
    gd.line([(0, y), (W, y)], fill=GRID)
img = Image.alpha_composite(img.convert("RGBA"), grid).convert("RGB")

# Logo: 163x163 escalado x2 con NEAREST para no emborronar la rejilla
logo = Image.open("src/assets/pixelartAssets/hero/skillionlogotransparent.png").convert("RGBA")
logo = logo.resize((logo.width * 2, logo.height * 2), Image.NEAREST)
img.paste(logo, ((W - logo.width) // 2, 96), logo)

draw = ImageDraw.Draw(img)
name_font = ImageFont.truetype("public/fonts/Poppins-Bold.ttf", 76)
tag_font = ImageFont.truetype("public/fonts/Poppins-SemiBold.ttf", 34)


def centered(text, font, y, fill):
    box = draw.textbbox((0, 0), text, font=font)
    draw.text(((W - (box[2] - box[0])) // 2, y), text, font=font, fill=fill)


centered("SKILLION", name_font, 452, GOLD)
centered("Gamify your real life", tag_font, 548, TEXT)

# Marco duro, como las cards del blog
draw.rectangle([0, 0, W - 1, H - 1], outline=(10, 15, 31), width=8)

import os
os.makedirs("public/og", exist_ok=True)
img.save("public/og/skillion.png", optimize=True)
print(f"public/og/skillion.png  {img.width}x{img.height}")
