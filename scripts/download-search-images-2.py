#!/usr/bin/env python3
"""Download images from the second batch of search results."""
import json
import os
import re
import urllib.request

OUT_DIR = "/home/z/my-project/public/images/stock"
os.makedirs(OUT_DIR, exist_ok=True)

search_files = [
    ("namibian-hospital.json", "hospital"),
    ("stethoscope-student.json", "stethoscope"),
    ("midwife-newborn.json", "midwife"),
    ("blood-pressure.json", "bloodpressure"),
    ("group-students.json", "group"),
    ("diploma-closeup.json", "diploma"),
    ("study-desk.json", "study"),
    ("nurse-corridor.json", "corridor"),
]

search_dir = "/tmp/img-search-2"
downloaded = []

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
            downloaded.append({"filename": fname, "category": prefix, "size": len(data)})
            print(f"  ✓ {fname} ({len(data)} bytes)")
        except Exception as e:
            print(f"  ✗ {fname} — {e}")

# Append to existing manifest
manifest_path = os.path.join(OUT_DIR, "manifest.json")
existing = []
if os.path.exists(manifest_path):
    with open(manifest_path) as f:
        existing = json.load(f)
existing.extend(downloaded)
with open(manifest_path, "w") as f:
    json.dump(existing, f, indent=2)

print(f"\nDownloaded {len(downloaded)} new images. Total in manifest: {len(existing)}")
