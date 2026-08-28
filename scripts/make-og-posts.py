#!/usr/bin/env python3
"""Genera una imagen OG (1200x630) por articulo en public/og/blog/.

Los posts necesitan imagen propia al compartirse: si todos cayeran a la OG
generica, cinco enlaces distintos en Twitter se verian identicos.

Lee el JSON que vuelca `node scripts/dump-posts.mjs` (los datos viven en Neon),
asi que basta con relanzarlo despues de publicar para tener la tarjeta al dia.
El nombre de fichero es <lang>-<slug>.png, la misma convencion que espera
src/lib/blog.ts en `postOgImage()`. Si falta, la pagina cae a la OG generica.

Uso: npm run og
"""
import json
import os
import sys
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (15, 21, 38)
GRID = (63, 93, 168, 26)
GOLD = (255, 197, 61)
TITLE = (255, 255, 255)
MUTED = (143, 166, 221)

# Mismos colores de chip que el artboard 1c (src/lib/blog.ts)
CHIPS = {
    "how-to": ((143, 227, 218), (10, 43, 40)),
    "science": ((181, 143, 227), (27, 15, 43)),
    "tips": ((181, 143, 227), (27, 15, 43)),
    "tricks": ((255, 197, 61), (42, 26, 6)),
}
LABELS = {
    "en": {"how-to": "HOW TO", "science": "SCIENCE", "tips": "TIPS", "tricks": "TRICKS"},
    # Sin tilde: coherente con el resto del sitio aunque aqui la fuente si la tenga.
    "es": {"how-to": "COMO USAR", "science": "CIENCIA", "tips": "CONSEJOS", "tricks": "TRUCOS"},
}

# Sprites ya escalados x4: su rejilla real es 16x16 (scripts/pixel-grid.py)
BLOCK_SIZES = {
    "book": 4, "computer": 4, "heart": 4, "lightbulb": 4, "map": 4,
    "meditation": 4, "pencil": 4, "plant": 4, "star": 4, "strength": 4,
}

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ICONS = os.path.join(ROOT, "src/assets/pixelartAssets/blog")
OUT = os.path.join(ROOT, "public/og/blog")

title_font = ImageFont.truetype(os.path.join(ROOT, "public/fonts/Poppins-Bold.ttf"), 54)
chip_font = ImageFont.truetype(os.path.join(ROOT, "public/fonts/Poppins-Bold.ttf"), 24)
meta_font = ImageFont.truetype(os.path.join(ROOT, "public/fonts/Poppins-SemiBold.ttf"), 28)


def wrap(draw, text, font, max_width):
    words, lines, line = text.split(), [], ""
    for word in words:
        probe = f"{line} {word}".strip()
        if draw.textlength(probe, font=font) <= max_width:
            line = probe
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines[:4]


def scaled_icon(name, box):
    """Mismo criterio que src/lib/pixel-icon.ts: solo multiplos enteros."""
    path = os.path.join(ICONS, f"{name}.png")
    if not os.path.exists(path):
        path = os.path.join(ICONS, "book.png")
        name = "book"
    icon = Image.open(path).convert("RGBA")
    block = BLOCK_SIZES.get(name, 1)
    unit_w, unit_h = icon.width // block, icon.height // block
    scale = max(1, box // max(unit_w, unit_h))
    return icon.resize((unit_w * scale, unit_h * scale), Image.NEAREST)


def build(post):
    img = Image.new("RGBA", (W, H), BG)

    grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(grid)
    for x in range(0, W, 32):
        gd.line([(x, 0), (x, H)], fill=GRID)
    for y in range(0, H, 32):
        gd.line([(0, y), (W, y)], fill=GRID)
    img = Image.alpha_composite(img, grid)
    draw = ImageDraw.Draw(img)

    icon = scaled_icon(post["icon"], 208)
    img.paste(icon, (W - icon.width - 88, (H - icon.height) // 2), icon)

    text_left, text_right = 80, W - icon.width - 140

    chip_bg, chip_fg = CHIPS[post["category"]]
    label = LABELS[post["lang"]][post["category"]]
    tw = draw.textlength(label, font=chip_font)
    draw.rectangle([text_left, 92, text_left + tw + 36, 92 + 50], fill=chip_bg)
    draw.text((text_left + 18, 103), label, font=chip_font, fill=chip_fg)

    y = 186
    for line in wrap(draw, post["title"], title_font, text_right - text_left):
        draw.text((text_left, y), line, font=title_font, fill=TITLE)
        y += 70

    minutes = f"{post['readingMinutes']} MIN"
    draw.text((text_left, H - 108), "SKILLION", font=meta_font, fill=GOLD)
    offset = draw.textlength("SKILLION", font=meta_font)
    draw.text((text_left + offset + 22, H - 108), f"· {minutes}", font=meta_font, fill=MUTED)

    draw.rectangle([0, 0, W - 1, H - 1], outline=(10, 15, 31), width=8)
    return img.convert("RGB")


def main():
    with open(sys.argv[1], encoding="utf-8") as fh:
        posts = json.load(fh)

    os.makedirs(OUT, exist_ok=True)
    for post in posts:
        name = f"{post['lang']}-{post['slug']}.png"
        build(post).save(os.path.join(OUT, name), optimize=True)
        print(f"  {name}")
    print(f"\n{len(posts)} tarjetas OG en public/og/blog/")


if __name__ == "__main__":
    main()
