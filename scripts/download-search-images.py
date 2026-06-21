#!/usr/bin/env python3
"""Download all images from the search result JSON files into /public/images/stock/"""
import json
import os
import re
import urllib.request

OUT_DIR = "/home/z/my-project/public/images/stock"
os.makedirs(OUT_DIR, exist_ok=True)

search_files = [
    ("search-classroom.json", "classroom"),
    ("search-graduation.json", "graduation"),
    ("search-skillslab.json", "skillslab"),
    ("search-clinical.json", "clinical"),
    ("search-windhoek.json", "windhoek"),
    ("search-oath.json", "oath"),
    ("search-community.json", "community"),
    ("search-placement.json", "placement"),
]

search_dir = "/tmp/img-search"
manifest = []

for sf, prefix in search_files:
    fp = os.path.join(search_dir, sf)
    if not os.path.exists(fp):
        continue
    with open(fp) as f:
        d = json.load(f)
    if not d.get("success"):
        continue
    for i, r in enumerate(d.get("results", []), 1):
        url = r.get("original_url")
        if not url:
            continue
        # Determine extension from URL
        ext_match = re.search(r"\.(jpg|jpeg|png)(\?|$)", url, re.I)
        ext = ext_match.group(1).lower() if ext_match else "jpg"
        if ext == "jpeg":
            ext = "jpg"
        fname = f"{prefix}-{i:02d}.{ext}"
        out_path = os.path.join(OUT_DIR, fname)
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=30) as resp:
                data = resp.read()
            with open(out_path, "wb") as f:
                f.write(data)
            manifest.append({
                "filename": fname,
                "category": prefix,
                "source_url": url,
                "size_bytes": len(data),
                "width": r.get("original_width"),
                "height": r.get("original_height"),
            })
            print(f"  ✓ {fname} ({len(data)} bytes)")
        except Exception as e:
            print(f"  ✗ {fname} — {e}")

# Write manifest
with open(os.path.join(OUT_DIR, "manifest.json"), "w") as f:
    json.dump(manifest, f, indent=2)

print(f"\nDownloaded {len(manifest)} images to {OUT_DIR}")
