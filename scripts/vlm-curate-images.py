#!/usr/bin/env python3
"""VLM-verify each downloaded stock image — keep only the ones that are
genuinely useful for the PMT site. Output a curated list to /tmp/curated-images.json."""
import json
import os
import subprocess
import sys

STOCK_DIR = "/home/z/my-project/public/images/stock"
MANIFEST = os.path.join(STOCK_DIR, "manifest.json")

with open(MANIFEST) as f:
    manifest = json.load(f)

curated = []

for img in manifest:
    fname = img["filename"]
    fpath = os.path.join(STOCK_DIR, fname)
    print(f"Checking {fname}...", end=" ", flush=True)
    
    # VLM check
    try:
        result = subprocess.run(
            [
                "z-ai", "vision",
                "-p", "In ONE short sentence (under 25 words), describe what this image shows. Be specific about people, setting, and activity. If the image is inappropriate, low quality, or off-topic for a nursing school website, say 'SKIP: <reason>'.",
                "-i", fpath,
                "-o", "/tmp/vlm-check.json"
            ],
            capture_output=True, text=True, timeout=60
        )
        with open("/tmp/vlm-check.json") as f:
            d = json.load(f)
        desc = d["choices"][0]["message"]["content"].strip()
        print(desc[:80])
        
        # Decide whether to keep
        skip = desc.upper().startswith("SKIP")
        curated.append({
            **img,
            "description": desc,
            "keep": not skip,
        })
    except Exception as e:
        print(f"ERROR: {e}")
        curated.append({**img, "description": f"ERROR: {e}", "keep": False})

# Write curated manifest
with open("/tmp/curated-images.json", "w") as f:
    json.dump(curated, f, indent=2)

# Print summary
kept = [c for c in curated if c["keep"]]
skipped = [c for c in curated if not c["keep"]]
print(f"\n=== SUMMARY ===")
print(f"Kept: {len(kept)}")
print(f"Skipped: {len(skipped)}")
print(f"\nKept images by category:")
from collections import Counter
cats = Counter(c["category"] for c in kept)
for cat, count in sorted(cats.items()):
    print(f"  {cat}: {count}")
