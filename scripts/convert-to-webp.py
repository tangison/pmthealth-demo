#!/usr/bin/env python3
"""
Convert ALL images in /public/images/ to WebP format with aggressive compression.

Strategy:
- For photos (JPG/JPEG): convert to WebP at quality 78 (good balance of size/quality)
- For PNGs with transparency (logos, badges): convert to WebP at quality 85, preserve alpha
- For PNGs without transparency (decorative): convert to WebP at quality 78
- Skip files that are already small (< 5KB) — diminishing returns
- Keep original filenames but with .webp extension
- Generate a manifest of conversions

Output: writes .webp versions alongside originals. The Next.js Image component
will automatically serve WebP when supported (already configured in next.config.ts).
"""
import os
import sys
from PIL import Image

IMAGE_DIRS = [
    "/home/z/my-project/public/images/crawled",
    "/home/z/my-project/public/images/stock",
    "/home/z/my-project/public/images",  # root logos + favicon
]

# Quality settings
PHOTO_QUALITY = 78       # for JPGs — good balance, ~50-70% size reduction
PNG_QUALITY = 85         # for PNGs — slightly higher since they often have text/logos
MAX_DIMENSION = 1920     # don't exceed 1920px on the longest side (retina-friendly)
MIN_SIZE_TO_CONVERT = 3000  # skip files smaller than 3KB

conversions = []
skipped = []
errors = []

for image_dir in IMAGE_DIRS:
    if not os.path.exists(image_dir):
        continue
    for fname in sorted(os.listdir(image_dir)):
        fpath = os.path.join(image_dir, fname)
        if not os.path.isfile(fpath):
            continue
        
        lower = fname.lower()
        if not (lower.endswith(".jpg") or lower.endswith(".jpeg") or lower.endswith(".png")):
            continue
        
        # Skip the .ico file — it's special
        if lower.endswith(".ico"):
            continue
        
        # Skip already-small files
        size = os.path.getsize(fpath)
        if size < MIN_SIZE_TO_CONVERT:
            skipped.append({"file": fpath, "reason": f"too small ({size}B)"})
            continue
        
        # Determine output path
        out_fname = os.path.splitext(fname)[0] + ".webp"
        out_path = os.path.join(image_dir, out_fname)
        
        try:
            img = Image.open(fpath)
            
            # Resize if exceeds max dimension
            w, h = img.size
            if max(w, h) > MAX_DIMENSION:
                ratio = MAX_DIMENSION / max(w, h)
                new_size = (int(w * ratio), int(h * ratio))
                img = img.resize(new_size, Image.LANCZOS)
            
            # Convert mode if needed (PNG with transparency stays RGBA, JPG becomes RGB)
            if img.mode == "RGBA" or (img.mode == "P" and "transparency" in img.info):
                # Has transparency — preserve it
                img = img.convert("RGBA")
                quality = PNG_QUALITY
            else:
                img = img.convert("RGB")
                quality = PHOTO_QUALITY
            
            # Save as WebP
            img.save(out_path, "WEBP", quality=quality, method=6)  # method=6 = slowest/best compression
            
            new_size = os.path.getsize(out_path)
            old_size = os.path.getsize(fpath)
            reduction = (1 - new_size / old_size) * 100
            
            conversions.append({
                "original": fpath,
                "webp": out_path,
                "old_size": old_size,
                "new_size": new_size,
                "reduction_pct": round(reduction, 1),
            })
            
            print(f"  ✓ {fname:50s} {old_size:>8}B → {new_size:>8}B  (-{reduction:.0f}%)")
        except Exception as e:
            errors.append({"file": fpath, "error": str(e)})
            print(f"  ✗ {fname:50s} ERROR: {e}")

# Print summary
total_old = sum(c["old_size"] for c in conversions)
total_new = sum(c["new_size"] for c in conversions)
total_saved = total_old - total_new
avg_reduction = (1 - total_new / total_old) * 100 if total_old > 0 else 0

print(f"\n{'='*70}")
print(f"WEBP CONVERSION SUMMARY")
print(f"{'='*70}")
print(f"Converted:  {len(conversions)} images")
print(f"Skipped:    {len(skipped)} images (too small)")
print(f"Errors:     {len(errors)} images")
print(f"")
print(f"Total before: {total_old/1024/1024:.2f} MB")
print(f"Total after:  {total_new/1024/1024:.2f} MB")
print(f"Total saved:  {total_saved/1024/1024:.2f} MB ({avg_reduction:.1f}% reduction)")
print(f"")
if errors:
    print(f"Errors:")
    for e in errors:
        print(f"  {e['file']}: {e['error']}")

# Write conversion manifest
manifest_path = "/home/z/my-project/public/images/webp-conversion-manifest.json"
import json
with open(manifest_path, "w") as f:
    json.dump({
        "conversions": conversions,
        "skipped": skipped,
        "errors": errors,
        "summary": {
            "total_converted": len(conversions),
            "total_before_mb": round(total_old/1024/1024, 2),
            "total_after_mb": round(total_new/1024/1024, 2),
            "total_saved_mb": round(total_saved/1024/1024, 2),
            "avg_reduction_pct": round(avg_reduction, 1),
        },
    }, f, indent=2)
print(f"\nManifest written to: {manifest_path}")
