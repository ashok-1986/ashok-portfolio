# Quick Start Checklist

## Run the Setup Script

```bash
# From: d:\Projects\Personal_Projects\Websites\Ashok
setup.bat
```

This will:
1. Create Next.js project
2. Install all dependencies (GSAP, Lenis, Three.js, R3F)
3. Set up folder structure
4. Copy Galgo fonts

---

## Manual Steps After Script

### 1. Update `src/app/globals.css`

Add font faces at the top:

```css
@font-face {
  font-family: 'Galgo';
  src: url('/fonts/galgo-var.woff2') format('woff2'),
       url('/fonts/galgo-var.woff') format('woff');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Galgo';
  src: url('/fonts/galgo-regular.woff2') format('woff2'),
       url('/fonts/galgo-regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Galgo';
  src: url('/fonts/galgo-bold.woff2') format('woff2'),
       url('/fonts/galgo-bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Galgo';
  src: url('/fonts/galgo-light.woff2') format('woff2'),
       url('/fonts/galgo-light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

/* Your existing CSS variables */
:root {
  --void: #190805;
  --void2: #1d0906;
  --clarity: #F0F3F5;
  --edge: #FC4F2F;
  --edge-glow: rgba(252,79,47,0.4);
  --edge-dim: rgba(252,79,47,0.12);
  --clarity-mid: rgba(240,243,245,0.55);
  --clarity-dim: rgba(240,243,245,0.08);
}

/* Base styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

body {
  background: var(--void);
  color: var(--clarity);
  font-family: 'Galgo', sans-serif;
  overflow-x: hidden;
  cursor: auto; /* Fallback for custom cursor */
}

/* Custom cursor element (JS-driven) */
.custom-cursor {
  position: fixed;
  width: 12px;
  height: 12px;
  background: var(--edge);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s, width 0.3s, height 0.3s, background 0.3s;
  mix-blend-mode: normal;
}
.custom-cursor-ring {
  position: fixed;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(252,79,47,0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: all 0.15s ease;
}
.custom-cursor.hover { width: 20px; height: 20px; background: var(--edge); }
.custom-cursor-ring.hover { width: 60px; height: 60px; border-color: var(--edge); }

/* Hide custom cursor when keyboard focused or reduced motion preferred */
@media (prefers-reduced-motion: reduce) {
  .custom-cursor,
  .custom-cursor-ring {
    display: none;
  }
}
.no-custom-cursor .custom-cursor,
.no-custom-cursor .custom-cursor-ring {
  display: none;
}
```

### 2. Update `src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashok Verma — Alchemetryx | Digital Analytics Strategist",
  description: "15 years converting digital noise into strategic intelligence. Founder of Alchemetryx Consulting.",
  keywords: ["Digital Analytics", "GA4", "Alchemetryx", "Ashok Verma"],
  authors: [{ name: "Ashok Verma" }],
  openGraph: {
    title: "Ashok Verma — Alchemetryx",
    description: "Turning Data Into Clarity",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

> **Note on `og-image.png`**: The `images: ["/og-image.png"]` line in the metadata refers to an Open Graph image. You will need to create an `og-image.png` file and place it in the `public/` directory. If you don't have an image yet, you can remove this line for now.

### 3. Update `src/app/page.tsx`

```tsx
export default function Home() {
  return (
    <main>
      <h1 style={{ 
        fontSize: 'clamp(64px, 11vw, 172px)', 
        fontWeight: 900,
        textTransform: 'uppercase',
        letterSpacing: '-0.035em',
        lineHeight: 0.88,
        padding: '100px 60px'
      }}>
        <span style={{ color: '#F0F3F5' }}>Turning</span>{' '}
        <span style={{ color: '#FC4F2F' }}>Data</span>{' '}
        <span style={{ color: 'transparent', WebkitTextStroke: '1.0px rgba(240,243,245,0.2)' }}>Into</span>{' '}
        <span style={{ color: '#F0F3F5' }}>Clarity</span>
      </h1>
    </main>
  );
}
```

---

## Run Development Server

```bash
cd ashok-portfolio
npm run dev -- -p 3307
```

Visit: `http://localhost:3307`

---

## Verify Setup

- [ ] Fonts loading? (Check DevTools → Network → No 404s)
- [ ] Galgo font applied? (Check DevTools → Computed → font-family)
- [ ] Page renders without errors?
- [ ] Hot reload working? (Edit page.tsx and save)

---

## What's Next?

1. **Hero Section** — Three.js particle field + GSAP animations
2. **Navigation** — Fixed nav with blur backdrop
3. **About Section** — Grid layout with photo
4. **Expertise Cards** — 3-column grid with hover effects
5. **Experience Timeline** — Vertical timeline with scroll reveals

---

## Common Issues

### Font not loading?
```bash
# Check if fonts exist
dir public\fonts
```

### Port 3000 in use?
```bash
# Kill Node process or use different port
npm run dev -- -p 3001
```

### Three.js SSR errors?
Add to top of canvas components:
```tsx
'use client';

import dynamic from 'next/dynamic';
```

---

## Resources

- **Next.js Docs**: https://nextjs.org/docs
- **GSAP Docs**: https://greensock.com/docs/
- **Three.js Docs**: https://threejs.org/docs/
- **R3F Docs**: https://docs.pmnd.rs/react-three-fiber

---

**Ready to build?** Start with the Hero section — get the particle field working first, then layer on GSAP animations.