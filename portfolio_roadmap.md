# Ashok Verma Portfolio — Complete Roadmap

## Current State
- ✅ **Static HTML version** completed (ashok_verma_portfolio_final.html)
- ✅ **Launch roadmap** visualized (ashok_verma_launch_roadmap.svg)
- ✅ **Next.js architecture** planned (nextjs_build_architecture.svg)
- ✅ **Domain ready**: ashok.alchemetryx.com
- ✅ **Galgo font family** available (Variable + Regular/Bold/Light)
- 📋 **Enhancement ideas** catalogued (portfolio_enhancements_explorer.html)

---

## Phase 1: Foundation (Week 1-2)

### 1.1 Next.js Migration
- [ ] Set up Next.js 15 project with App Router
- [ ] Configure project structure:
  - `app/` — layout.tsx, page.tsx, globals.css, api/contact/
  - `components/` — sections/, canvas/, ui/, providers/
  - `hooks/` — useMouseParallax, useScrollTrigger, useMobileDetect, useLenis
  - `lib/` — constants.ts, animations.ts, tokens.ts
  - `public/` — fonts/, images/, og-image.png

### 1.2 Core Components
- [ ] Convert HTML sections to React components
- [ ] Implement Lenis smooth scrolling
- [ ] Set up GSAP + ScrollTrigger
- [ ] Build Three.js particle field for hero

### 1.3 Design System
- [ ] Define CSS variables (colors, spacing, typography)
- [ ] Create reusable UI components (buttons, cards, inputs)
- [ ] Implement custom cursor system
- [ ] Set up responsive breakpoints

---

## Phase 2: Content & Sections (Week 2-3)

### 2.1 Hero Section
- [ ] Three.js particle field with mouse parallax
- [ ] Split text animation for headline
- [ ] Scroll indicator
- [ ] CTA buttons with magnetic effect

### 2.2 About Section
- [ ] Grid layout with photo frame
- [ ] Stat strip (15+ years, 30% CAC reduction)
- [ ] Certification badges
- [ ] Scroll-triggered reveal animations

### 2.3 Expertise Section
- [ ] Three pillar cards
- [ ] Horizontal scroll pinning (GSAP)
- [ ] Card hover effects with orange underline
- [ ] Tool tags per service

### 2.4 Experience Timeline
- [ ] Vertical timeline with dots
- [ ] Scroll-triggered item reveals
- [ ] Metric highlights per role
- [ ] BookMyShow, L&T Finance, Fichmu Foods entries

### 2.5 Philosophy Section
- [ ] Full-bleed quote section
- [ ] Orange accent styling
- [ ] Background gradient overlay

### 2.6 Contact Section
- [ ] Two-column grid
- [ ] Form with animated underlines
- [ ] Direct contact links (email, LinkedIn)
- [ ] API route for form submission (Resend)

---

## Phase 3: Polish & Launch (Week 3-4)

### 3.1 Visual Enhancements
- [ ] **Morphing background shapes** — SVG blobs with CSS animation
- [ ] **Depth-layered hero** — Three.js Z-layers for true 3D parallax
- [ ] **Context-aware cursor** — Labels change on hover ("View", "Read", "Contact")
- [ ] **Magnetic buttons** — 30-line vanilla JS effect

### 3.2 Performance
- [ ] Lighthouse audit (target: 95+ desktop, 85+ mobile)
- [ ] Image compression (WebP, lazy loading)
- [ ] Code splitting for Three.js
- [ ] Mobile device testing

### 3.3 SEO & Meta
- [ ] Meta tags (title, description, keywords)
- [ ] OpenGraph image (1200×630)
- [ ] Person schema (JSON-LD)
- [ ] robots.txt + sitemap.xml

### 3.4 Deployment
- [ ] Register domain (ashokverma.com / ashokverma.co.uk)
- [ ] Connect Vercel
- [ ] Configure DNS
- [ ] Set up Resend API for contact form
- [ ] Go live

---

## Phase 4: Growth Layer (Post-Launch, Ongoing)

### 4.1 High-Impact Content
- [ ] **Case study pages** (3 minimum):
  - BookMyShow — problem, system, number
  - Fichmu Foods — analytics transformation
  - Alchemetryx client — CAC reduction story
- [ ] **Founder video loop** — 30s silent B-roll for hero
- [ ] **Client testimonials** — photo, name, one powerful sentence
- [ ] **Calendly/Cal.com widget** — "Book a Clarity Session"

### 4.2 Technical Intelligence
- [ ] **GA4 + Hotjar** on your own site (non-negotiable)
- [ ] **Vercel Analytics** — real-time performance monitoring
- [ ] **UK English variant** — /uk URL flag for localization

### 4.3 B2B Features
- [ ] **Password-protected case studies** — per-prospect URLs
- [ ] **Alchemetryx insight feed** — short-form analytics takes (200-400 words)

---

## Phase 5: Advanced Enhancements (Optional, High Effort)

### 5.1 Visual Polish
- [ ] **GSAP SplitText** — letter-by-letter hero reveal (desktop only)
- [ ] **Horizontal scroll section** — expertise cards gallery-style
- [ ] **Light mode variant** — accessibility toggle
- [ ] **Reactive audio/scroll shader** — particles respond to scroll velocity

### 5.2 Operations
- [ ] **Sanity CMS integration** — edit copy without code
- [ ] **Multi-language support** — i18n for UK/IN markets

---

## Effort vs Impact Matrix

| Enhancement | Effort | Impact | Priority |
|-------------|--------|--------|----------|
| Case study pages | High | Highest | 🔴 Must do |
| Calendly booking | Low | High | 🔴 Must do |
| GA4 + Hotjar | Low | Essential | 🔴 Day one |
| Testimonials | Medium | High | 🔴 Must do |
| Founder video | Medium | Medium | 🟡 Post-launch |
| Password-protected studies | Medium | Strategic | 🟡 Sales tool |
| SplitText hero | Medium | Medium | 🟢 Optional |
| 3D depth layers | High | High | 🟢 Optional |
| Light mode | High | Low | ⚪ Later |
| Sanity CMS | High | Permanent value | 🟢 When scaling |

---

## Cost Breakdown

| Item | Cost | Frequency |
|------|------|-----------|
| Galgo Condensed font | ✅ Owned | — |
| Domain (ashok.alchemetryx.com) | ✅ Owned | — |
| Vercel + Next.js | $0 | Free tier |
| Resend (email) | $0 | 3k/mo free |
| Cal.com | $0 | Open source |
| Sanity CMS | $0 | Free tier |
| **Total** | **$0** | All set! |

---

## Tech Stack Summary

```
Frontend:  Next.js 15 + React 18
3D:        React Three Fiber + Drei + Three.js
Animation: GSAP + ScrollTrigger + Lenis
Styling:   CSS Modules / CSS Variables
Hosting:   Vercel
Email:     Resend API
Analytics: GA4 + Hotjar (own site)
CMS:       Sanity (optional)
Booking:   Cal.com embed
```

---

## Success Metrics

- [ ] Lighthouse: 95+ Performance, 100 Accessibility
- [ ] Mobile: Fully responsive, touch-optimized
- [ ] Load time: < 3s initial, < 1s subsequent
- [ ] Conversion: Contact form submissions / booking clicks
- [ ] Engagement: Time on page, scroll depth (via Hotjar)

---

## Next Actions (This Week)

1. **Initialize Next.js repo** — `npx create-next-app@latest ashok-portfolio`
2. **Install dependencies** — GSAP, Lenis, Three.js, React Three Fiber
3. **Set up font faces** — Configure Galgo variable font in globals.css
4. **Port hero section first** — validate Three.js + GSAP setup
5. **Test on mobile** — early and often

---

*Last updated: March 15, 2026*
*Based on: ashok_verma_portfolio_final.html + portfolio_enhancements_explorer.html*
