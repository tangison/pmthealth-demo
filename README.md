# PMT Health Care Institution — Demo Site

A speculative pitch demo by **Tangison Studio** showing what a real digital presence for PMT Health Care Institution could look like. PMT is a Namibian nursing and midwifery training school — currently with no live website of their own.

**This is not PMT's live site.** All facts are real and verifiable through HPCNA and NQA. No testimonials, statistics, or staff names have been invented.

---

## What's here

- **9 pages**: Home, About, Programmes, Campuses, Accreditation, Admissions, Gallery, News, Contact
- **Brand system**: Deep Forest Teal `#16433D` + Warm Ochre `#D98E2B` + Deep Maroon `#6B1F2A` (ceremonial only) + Warm Off-White `#FAF7F2` + Charcoal `#1A1A18`
- **Typography**: Fraunces (display), Work Sans (body), IBM Plex Mono (utility/data). No Inter, no Geist.
- **Signature motif**: "The Pulse Line" — a single continuous line that reads as both a heartbeat trace and a ceremonial thread connecting admission → training → oath → graduation. Used once per page, deliberately.
- **Self-contained chatbot**: deterministic Q&A over PMT's verified facts — no external API, no API key, no backend.
- **Conditional scroll-to-top**: appears only after scrolling past 600px, respects reduced-motion.
- **Accessible**: WCAG AA, visible keyboard focus throughout, ARIA landmarks, focus trap in modals, reduced-motion respected.
- **SEO**: per-route metadata, OG tags, sitemap.xml, robots.txt.

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4 (brand tokens registered as native utilities)
- Vercel-optimised build (`output: "standalone"`)
- No backend, no database, no external services — runs entirely on Vercel Hobby.

## Quick start

```bash
bun install   # or npm install
bun run dev   # or npm run dev
# Visit http://localhost:3000
```

## Deploy

See [`DEPLOY.md`](./DEPLOY.md) for the full step-by-step GitHub + Vercel deployment guide.

## Real facts used

- **Founded**: 2019 by Sister (SR) Rutendo T. Zvidza
- **Named after**: Priscilla Monica Tendo, who inspired Sister Rutendo to become a nurse
- **HPCNA approval**: granted 10 September 2021
- **NQA accreditation**: confirmed
- **Qualification**: Diploma in Enrolled Nursing and Midwifery Science, NQF Level 6
- **Funding**: NSFAF accepted, alongside self-funded applicants
- **Campuses**: Windhoek (No. 12, Sauerbruch Street, Windhoek West — 081 342 1056), Rundu (081 721 8099), Ongwediva (081 395 9524)
- **First graduation**: 50 graduates, Mecure Hotel, Windhoek
- **Partnership**: Articulation + cross-crediting MOU with I-Care Health Training Institute, signed 22 August 2023
- **Mission**: "A Health Training Centre of Excellence producing Quality Nurses to improve the Health Care Delivery System of Namibia and the world."

## Verify independently

- HPCNA: https://www.hpcna.org/
- NQA: https://www.namqa.org/

## Project structure

See [`DEPLOY.md`](./DEPLOY.md) for the full file tree.

## License

Speculative portfolio work by Tangison Studio. All PMT factual content belongs to PMT Health Care Institution. Code is provided as-is for the purpose of the pitch demo.
