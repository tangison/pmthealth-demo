# PMT Health Care Institution — Deployment Guide

A step-by-step guide to push this demo site to GitHub and deploy it to Vercel (Hobby plan).

---

## ⚠️ FIRST: Revoke the compromised tokens

The tokens you pasted into the chat earlier are now compromised. **Revoke them before doing anything else:**

1. **GitHub PAT**: Visit https://github.com/settings/tokens → find the token that starts with `ghp_` → click **Revoke**.
2. **Vercel token**: Visit https://vercel.com/account/tokens → find the token that starts with `vcp_` → click **Delete**.

Once revoked, generate fresh ones following the steps below.

---

## Step 1 — Create a fresh GitHub Personal Access Token

1. Go to https://github.com/settings/tokens
2. Click **Generate new token (classic)** or use a fine-grained token
3. Scopes needed: `repo` (full control of private repositories)
4. Set an expiry (90 days is sensible)
5. Click **Generate token** and **copy the value** — you won't see it again
6. Store it in a password manager. **Do not paste it into chat tools.**

---

## Step 2 — Create the GitHub repository

Either via the web UI (https://github.com/new) or via the GitHub CLI:

```bash
# Option A: Using the GitHub CLI (cleanest)
gh repo create pmthealth-demo --public --source=. --remote=origin --description "PMT Health Care Institution — speculative demo site by Tangison Studio"

# Option B: Via the web UI
# 1. Go to https://github.com/new
# 2. Name: pmthealth-demo (or whatever you prefer)
# 3. Visibility: Public (so Vercel Hobby can deploy it)
# 4. Do NOT initialize with README/.gitignore — this repo already has them
# 5. Click "Create repository"
# 6. Copy the repo URL — you'll need it in Step 3
```

---

## Step 3 — Push the code to GitHub

Run these commands **from the project root** (the folder containing `package.json`):

```bash
# 1. Initialise git (if not already)
git init

# 2. Add all files (respects .gitignore — node_modules, .next, etc. are excluded)
git add .

# 3. First commit
git commit -m "Initial commit — PMT Health Care Institution demo site

- 9 pages: Home, About, Programmes, Campuses, Accreditation, Admissions, Gallery, News, Contact
- Brand system: Forest Teal #16433D / Warm Ochre #D98E2B / Deep Maroon / Warm Off-White / Charcoal
- Typography: Fraunces (display) + Work Sans (body) + IBM Plex Mono (utility)
- Signature Pulse Line motif, used once per page
- Self-contained chatbot (no external API)
- Conditional scroll-to-top button (appears after 600px scroll)
- Accessible: WCAG AA, keyboard nav, focus states, reduced-motion respected
- SEO: metadata, OG tags, sitemap.xml, robots.txt for every route
- All real facts only — no fake testimonials, no fake statistics"

# 4. Set the branch name to 'main'
git branch -M main

# 5. Add your remote (replace <YOUR_USERNAME> with your GitHub username)
git remote add origin https://github.com/<YOUR_USERNAME>/pmthealth-demo.git

# 6. Push
git push -u origin main
```

If you prefer to authenticate with a fresh PAT instead of the git credential helper, use this URL format for step 5:

```bash
git remote add origin https://<YOUR_FRESH_PAT>@github.com/<YOUR_USERNAME>/pmthealth-demo.git
```

Or, if you've already added the remote without the token, you can authenticate during push:

```bash
git push -u origin main
# When prompted:
#   Username: <YOUR_GITHUB_USERNAME>
#   Password: <YOUR_FRESH_PAT>  (NOT your GitHub password)
```

---

## Step 4 — Deploy to Vercel (Hobby plan — free)

The cleanest path is via the Vercel dashboard (no token needed):

1. Go to https://vercel.com and sign in with GitHub
2. Click **Add New…** → **Project**
3. Find the `pmthealth-demo` repository in the list → click **Import**
4. Vercel will auto-detect Next.js — **don't change any settings**:
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `bun install` or `npm install` (auto-detected)
5. Click **Deploy**
6. Wait ~2 minutes for the first build to complete
7. Vercel will give you a URL like `https://pmthealth-demo-<random>.vercel.app`

That's it. Every future `git push origin main` will automatically trigger a new Vercel deployment.

### Optional: Custom domain

Once deployed, you can attach a custom domain (e.g. `pmthealth.example.na`) via:
- Vercel dashboard → your project → **Settings** → **Domains**
- Add the domain and follow the DNS instructions Vercel provides

---

## Step 5 — Verify the live deployment

Once Vercel finishes building:

1. Visit the deployment URL
2. Walk every page: Home → About → Programmes → Campuses → Accreditation → Admissions → Gallery → News → Contact
3. Test the chatbot (bottom-right "Ask PMT" button) — ask "Is PMT accredited?"
4. Scroll down on any long page — the scroll-to-top button (bottom-left) should appear
5. Test mobile: resize the browser to ~375px wide, verify the mobile nav opens and the chatbot panel goes full-screen

---

## Vercel Hobby plan — what to know

The Hobby plan is free and supports everything this site uses:
- ✅ Static + serverless pages (Next.js App Router)
- ✅ Custom domains
- ✅ Automatic HTTPS
- ✅ Edge network CDN
- ✅ Continuous deployment from GitHub

What it does NOT include (not relevant for this demo):
- ❌ Team collaboration features
- ❌ Advanced analytics
- ❌ Server-side functions with long execution times (this site has none)
- ❌ Commercial usage (if PMT ever goes live with this as their real site and runs ads/monetization, they should upgrade to Pro)

---

## What's in this repo

```
.
├── src/
│   ├── app/                       # Next.js App Router pages
│   │   ├── layout.tsx             # Root layout — fonts + global UI (chatbot, scroll-to-top)
│   │   ├── page.tsx               # Home
│   │   ├── about/page.tsx
│   │   ├── programmes/page.tsx
│   │   ├── campuses/page.tsx
│   │   ├── accreditation/page.tsx # Highest-priority page
│   │   ├── admissions/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── news/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── sitemap.ts             # Auto-generated /sitemap.xml
│   │   ├── robots.ts              # Auto-generated /robots.txt
│   │   └── globals.css            # Brand tokens + global styles
│   ├── components/
│   │   ├── site/                  # PMT-specific components (custom built)
│   │   │   ├── site-header.tsx
│   │   │   ├── site-footer.tsx
│   │   │   ├── page-shell.tsx
│   │   │   ├── pulse-line.tsx     # Signature motif
│   │   │   ├── accreditation-badge.tsx
│   │   │   ├── campus-card.tsx
│   │   │   ├── cta-button.tsx
│   │   │   ├── section-heading.tsx
│   │   │   ├── placeholder-image.tsx
│   │   │   ├── contact-form.tsx
│   │   │   ├── chatbot.tsx        # Self-contained Q&A
│   │   │   └── scroll-to-top.tsx  # Conditional floating button
│   │   └── ui/                    # shadcn/ui primitives (used sparingly)
│   └── lib/
│       ├── site-data.ts           # All PMT facts in one place — easy to update
│       ├── db.ts                  # Prisma client (not used in this demo)
│       └── utils.ts
├── public/
│   ├── favicon.svg                # Typographic PMT mark
│   ├── logo.svg                   # (default scaffold — replaceable)
│   └── images/
│       └── gallery/               # Drop real photos here — see Gallery page for filenames
├── package.json
├── tailwind.config.ts             # Brand colors registered as Tailwind tokens
├── next.config.ts                 # output: 'standalone' for Vercel
└── .gitignore
```

---

## Image drop-in (when PMT provides real photos)

The Gallery page is built with 12 named image slots. Drop photos into `/public/images/gallery/` using these filenames — **zero code changes needed**:

- `graduation-01.jpg` through `graduation-04.jpg`
- `ceremony-01.jpg` through `ceremony-03.jpg`
- `campus-windhoek-01.jpg`
- `campus-rundu-01.jpg`
- `campus-ongwediva-01.jpg`
- `classroom-01.jpg` and `classroom-02.jpg`

Until each file exists, the page shows a branded teal/ochre placeholder block — never a broken-image icon.

After dropping photos in, commit + push:

```bash
git add public/images/gallery/
git commit -m "Add real graduation + campus photos"
git push
# Vercel will auto-redeploy
```

---

## Troubleshooting

**Build fails on Vercel with "Module not found"**: Make sure you ran `git add .` from the project root (where `package.json` lives), not from a subfolder.

**Vercel build succeeds but page is blank**: Check the Vercel build logs — if Next.js can't find a font, it's usually because Google Fonts is blocked. The fix is to either self-host the fonts (replace `next/font/google` with local font files) or whitelist `fonts.googleapis.com` in your network.

**Chatbot doesn't appear**: It's mounted in `src/app/layout.tsx`. Check the browser console — if there's a hydration error, it's usually because of a browser extension. Try in incognito mode.

**Scroll-to-top never appears**: It only appears after scrolling past 600px. Try a longer page (like the homepage) and scroll down past the hero.

---

## Need to update content later?

All PMT facts (mission, founder, accreditation dates, campus phones, news items, gallery image list) live in **one file**: `src/lib/site-data.ts`. Edit that file, commit, push — Vercel auto-redeploys.
