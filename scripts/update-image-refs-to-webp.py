#!/usr/bin/env python3
"""
Update all image src references in src/ to point to .webp versions.

Rules:
- Replace .jpg, .jpeg, .png extensions with .webp ONLY for paths under /images/
- DO NOT touch /favicon.ico, /favicon-32.png, /favicon-16.png, /apple-touch-icon.png
  (these need to stay as-is for browser compatibility)
- DO NOT touch .svg files
- Preserve everything else in the file

This is a one-pass find-and-replace. Backup files are NOT created because
the changes are in git and easily reverted.
"""
import os
import re

ROOT = "/home/z/my-project/src"

# Files that should NOT be converted to webp references
KEEP_AS_IS = {
    "/favicon.ico",
    "/favicon-32.png",
    "/favicon-16.png",
    "/favicon.svg",
    "/apple-touch-icon.png",
    "/og-image.png",  # OG images need to be PNG/JPG for social media crawlers
}

# Pattern: matches "/images/....jpg" or "/images/....jpeg" or "/images/....png"
# Captures the path without extension, plus the extension
pattern = re.compile(r'"(/images/[^"]+\.(jpg|jpeg|png))"', re.IGNORECASE)

updated_files = []
replacements_counter = [0]  # use list to allow mutation in nested function

for dirpath, _, filenames in os.walk(ROOT):
    for fname in filenames:
        if not (fname.endswith(".ts") or fname.endswith(".tsx")):
            continue
        fpath = os.path.join(dirpath, fname)
        with open(fpath) as f:
            content = f.read()
        
        def replace_match(m):
            full_path = m.group(1)
            ext = m.group(2).lower()
            # Skip files in the keep-as-is list
            if full_path in KEEP_AS_IS:
                return m.group(0)
            # Replace extension with .webp
            new_path = full_path[:-len(ext)] + "webp"
            replacements_counter[0] += 1
            return f'"{new_path}"'
        
        new_content = pattern.sub(replace_match, content)
        
        if new_content != content:
            with open(fpath, "w") as f:
                f.write(new_content)
            updated_files.append(fpath)

print(f"Updated {len(updated_files)} files with {replacements_counter[0]} image reference changes:")
for f in updated_files:
    print(f"  {f}")
