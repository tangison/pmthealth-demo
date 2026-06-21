#!/bin/bash
# Sequential image search to avoid rate limiting
cd /tmp/img-search

search() {
  local query="$1"
  local outfile="$2"
  local count="${3:-5}"
  echo "Searching: $query"
  z-ai image-search -q "$query" -c "$count" --gl us --no-rank > "$outfile" 2>/dev/null
  # Strip status lines
  python3 -c "
import json
with open('$outfile') as f:
    text = f.read()
start = text.find('{')
if start >= 0:
    with open('$outfile', 'w') as f:
        f.write(text[start:])
with open('$outfile') as f:
    d = json.load(f)
print(f'  → {d.get(\"count\", 0)} images')
for r in d.get('results', []):
    print(f'    {r.get(\"original_url\")}')
"
  sleep 3
}

search "nursing graduation ceremony African students receiving diploma" search-graduation.json 6
search "nursing skills lab training manikin medical equipment" search-skillslab.json 5
search "African nurse midwife with patient hospital care" search-clinical.json 5
search "Windhoek Namibia cityscape modern buildings" search-windhoek.json 4
search "nursing oath ceremony candle lighting pledge" search-oath.json 4
search "African community health outreach rural clinic" search-community.json 4
search "nursing student clinical placement hospital ward Africa" search-placement.json 4

echo "---all searches complete---"
ls -la /tmp/img-search/*.json
