# PMT Health Care Institution — Demo Site Worklog

---
Task ID: 1
Agent: main (Super Z)
Task: Build a comprehensive Demo Mode pitch site for PMT Health Care Institution per the Tangison webcreation LOOP. 9 pages, brand system derived from the institution's "quality, compassion, trust" voice + the nursing oath as the signature ownable detail. Static content, no CMS, no backend integrations.

Work Log:
- Loaded `fullstack-dev` skill; initialized project env via init-fullstack.sh
- Phase 1-3 (Discovery + Research + Brand System): Wrote brand system into `src/app/globals.css` (color tokens: Forest Teal #16433D, Warm Ochre #D98E2B, Deep Maroon #6B1F2A, Warm Off-White #FAF7F2, Charcoal #1A1A18) and `tailwind.config.ts` (registered as proper Tailwind utilities). Loaded fonts via next/font/google: Fraunces (display), Work Sans (body), IBM Plex Mono (utility/data). Replaced default Geist layout with brand layout. Never used Inter or Geist.
- Phase 4-5 (Architecture + Design): Built component system first — SiteHeader (sticky, responsive, mobile sheet), SiteFooter (sticky-bottom, mission + sitemap + campus contacts + social), PageShell (skip link + sticky footer wrapper), PulseLine (signature motif — single continuous heartbeat line, used once per page), AccreditationBadge (typographic chip, no fake seals), CampusCard, CTAButton (ochre fill, plain-verb copy), SectionHeading, PlaceholderImage (graceful branded fallback when image missing), ContactForm (client component, accessible, validation, demo success state).
- Phase 6 (Development): Built all 9 pages in order — Home, About, Programmes, Campuses, Accreditation (highest priority per brief), Admissions, Gallery, News, Contact. Plus sitemap.ts, robots.ts, favicon.svg.
- Phase 7 (Verification): All 11 routes return HTTP 200. ESLint passes clean. TypeScript configured with ignoreBuildErrors=false-equivalent (lint catches issues). Dev server compiles clean.
- Phase 8 (Audit): Self-audit against brand brief — verified no banned AI-cliché phrases ("revolutionize", "unlock", "next-generation", "cutting-edge", "seamless", "transformative"). Verified PulseLine appears deliberately (homepage full variant + accreditation divider variant + footer decorative at 30% opacity). Verified reduced-motion CSS disables PulseLine animation. VLM (vision) verified: gallery placeholders render as branded teal/ochre blocks (no broken-image icons), accreditation page renders HPCNA date + NQA links + calm legitimacy paragraph, programmes page placeholders render correctly, mobile hero holds without overflow, contact form validation + success state works end-to-end.
- Phase 9 (Reflection): Considered VLM critique about hero feeling dense / "generic". Rejected suggestions to use "Transform Namibia's Health System" / "Passion Meets Purpose" type headlines — these are exactly the buzzword copy the brief forbids, and the brief explicitly mandates using the institution's own mission statement near-verbatim. Hero headline is the institution's voice, not ours.
- Phase 10 (Iteration): Fixed import path typo in news page (`@/components/ui-cta-button` → `@/components/site/cta-button`). Removed conflicting static `public/robots.txt` so the dynamic `src/app/robots.ts` route works. Fixed JSX typo (`className-name`) on accreditation page.

Stage Summary:
- All 9 pages built and verified: /, /about, /programmes, /campuses, /accreditation, /admissions, /gallery, /news, /contact
- Plus /sitemap.xml and /robots.txt
- All routes return 200, zero console errors, zero page errors
- Brand system fully derived from the brief: no Inter/Geist, no stock-photo clichés, no fake testimonials, no fake seals, maroon used sparingly (only on Accreditation ceremonial rule)
- PulseLine signature motif implemented with reduced-motion fallback
- PlaceholderImage system: missing images gracefully fall back to branded teal/ochre blocks (verified by VLM — no broken-image icons visible)
- Contact form: accessible labels, validation, loading state, success state — clearly marked as demo (non-functional) in both the UI and the code comment
- Gallery: 12 named image slots documented in `/public/images/gallery/` with a clear naming convention shown on the page itself, so the institution can drop in real photos with zero code changes
- Open content gaps: entry requirements + duration on Programmes page are intentionally labelled placeholders per the brief; intake dates on Admissions page are structured but not hard-coded to a specific year
- All real facts used exactly as provided (HPCNA approval 10 Sept 2021, NQA accredited, NQF Level 6, founded 2019, named for Priscilla Monica Tendo, founder Sister Rutendo T. Zvidza, three campuses with phones, first graduation 50 nurses at Mecure Hotel, I-Care MOU 22 Aug 2023, NSFAF accepted, ~24,800 FB / ~1,450 IG followers). No invented statistics, testimonials, or staff names.

---
Task ID: 2
Agent: main (Super Z)
Task: Add (1) a chatbot system, (2) a conditional scroll-to-top button, and (3) prepare the repo for GitHub + Vercel deployment. User pasted live credentials (GitHub PAT + Vercel token) — flagged for immediate revocation; did NOT use them. Build done locally, deploy commands handed back to user to run with fresh tokens.

Work Log:
- SECURITY: Flagged that the user pasted a live GitHub PAT (`ghp_...`) and Vercel token (`vcp_...`) into the chat. Both are compromised. Did NOT use them. Instructed user to revoke both immediately at github.com/settings/tokens and vercel.com/account/tokens.
- Chatbot (src/components/site/chatbot.tsx): Self-contained deterministic Q&A. No external API, no API key, no backend — uses keyword matching against a 14-entry knowledge base of real PMT facts (accreditation, admissions, NSFAF, programme, duration, entry requirements, campuses, contact, oath, founder, I-Care MOU, gallery, news, greetings). Floating teal button bottom-right with the Pulse Line heartbeat glyph as its icon. Panel opens with focus management, ESC-to-close, Tab focus trap, ARIA dialog role. Shows 5 quick-prompt chips on first open. Includes "typing…" indicator with 3 bouncing dots. Footer notes "No data leaves this page". Matches brand system (teal header, warm off-white body, ochre accents, Fraunces title, Work Sans body, IBM Plex Mono labels). Mobile-friendly: full-screen on phones, 400px panel on desktop.
- ScrollToTop (src/components/site/scroll-to-top.tsx): Conditional floating button bottom-left. Appears only after scrolling past 600px (past the hero on most pages). Smooth scroll, respects prefers-reduced-motion (instant jump for users who opted out). Visible focus state, keyboard accessible, aria-hidden when not visible. Position bottom-left so it never collides with the chatbot (bottom-right).
- Wired both into src/app/layout.tsx so they appear on every page globally.
- Verification: ESLint clean. All 9 routes return HTTP 200. agent-browser confirmed chatbot trigger visible, panel opens, accepts input, returns correct accreditation answer with link, ESC closes it. Scroll-to-top button correctly hidden at scrollY=0, appears at scrollY>600, scrolls back to top when clicked (verified scrollY 1200 → 0). Zero console errors, zero page errors. VLM verified chatbot panel renders with correct brand styling.
- 47.kesug.com: Could not reliably scrape this URL from inside the sandbox (same login-wall/JS-render issue as Facebook). Image placeholder system from Task 1 is already in place — user can drop photos into /public/images/gallery/ with documented filenames for zero-code-change swaps.

Stage Summary:
- Chatbot: 14 knowledge entries covering every PMT fact in the brief. Self-contained, no external dependencies, fully accessible, matches brand system. Verified end-to-end via agent-browser.
- ScrollToTop: Conditional, accessible, reduced-motion-aware. Verified via agent-browser (scrollY 1200 → 0 after click).
- Both components mounted globally in layout.tsx — appear on all 9 pages.
- All 9 routes still return HTTP 200, zero console errors, zero page errors.
- Deployment: Did NOT push to GitHub or Vercel using the compromised tokens. Git repo initialized locally. Deploy guide written with the exact commands the user needs to run with a FRESH GitHub PAT (the compromised one must be revoked first). Vercel deploy is one-click via the Vercel dashboard after the GitHub repo exists — no token needed.
