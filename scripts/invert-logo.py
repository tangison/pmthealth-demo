"""
Generate inverted (white linework) version of the PMT circular badge logo
for use on dark/purple backgrounds where the original purple-on-white
version disappears.

Strategy:
- Keep alpha channel (transparency) intact
- For non-transparent pixels, convert colour → white (preserve alpha gradient)
- This produces a white "ghost" of the original logo that reads cleanly
  on purple/dark backgrounds.

Output: /home/z/my-project/public/images/logo-badge-white.png
"""
from PIL import Image

SRC = "/home/z/my-project/public/images/logo-circular-badge.png"
DST = "/home/z/my-project/public/images/logo-badge-white.png"

img = Image.open(SRC).convert("RGBA")
pixels = img.load()
w, h = img.size

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if a == 0:
            # fully transparent — leave alone
            continue
        # Set RGB to white, preserve alpha
        pixels[x, y] = (255, 255, 255, a)

img.save(DST, "PNG", optimize=True)
print(f"Wrote {DST}")
print(f"Size: {img.size}")
