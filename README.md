# Ashok Verma — Portfolio

Portfolio site for Ashok Verma, systems & operational clarity consultant. Built with Next.js (App Router), TypeScript, and GSAP.

## Stack

- **Framework**: Next.js 16 (App Router), React 19, TypeScript
- **Animation**: GSAP (ScrollTrigger, SplitText) + Lenis-style smooth scroll
- **Canvas**: Lightweight particle/background canvases (no Three.js)
- **Fonts**: `next/font` — Urbanist (display) + variable sans

## Scripts

```bash
npm run dev        # development server
npm run build      # production build
npm run start      # serve production build
npm run lint       # eslint (flat config: next/core-web-vitals + next/typescript)
npx tsc --noEmit   # typecheck
```

## Contact

No forms, no email integration, no environment variables. All contact flows point to a single WhatsApp CTA:

- Link: `https://wa.link/3c06rx`
- Defined once in `src/lib/constants.ts` (`WHATSAPP_URL`) and reused across `Contact`, `Footer`, and `Hero` CTAs.

## SEO

- `src/app/sitemap.ts` and `src/app/robots.ts` generate `sitemap.xml` / `robots.txt` at build time (no static copies in `public/`).
- Case study pages (`src/app/work/[slug]`) are server components with `generateStaticParams()` and per-slug `generateMetadata()`; the GSAP-rendered markup lives in a client child (`CaseStudyContent.tsx`).

## Image pipeline

`public/images/` stores only optimized outputs — no raw PNGs in the repo:

- `hero.webp`, `about.webp` — photos at ~quality 80 (from 1–2 MB PNGs, ~98% smaller)
- `og-image.webp` — full-res (1920×1080) backdrop used in the eye section
- `og-image.jpg` — 1200×630 Open Graph card for `layout.tsx` metadata

To regenerate from source, use `sharp` (already present in `node_modules`):

```bash
node -e "const s=require('sharp'); s('hero.png').webp({quality:80}).toFile('public/images/hero.webp')"
```
