"""Quantize a PNG to a 256-color palette (no dithering) in place.
Called by render.mjs; keeps the grain-textured PNGs small. Needs Pillow."""
import sys
from PIL import Image

for path in sys.argv[1:]:
    im = Image.open(path).convert("RGB")
    im.quantize(colors=256, method=Image.Quantize.FASTOCTREE, dither=Image.Dither.NONE).save(path, optimize=True)
