# Next.js Portfolio Setup Guide

## Step 1: Create Next.js Project

Open terminal in `d:\Projects\Personal_Projects\Websites\Ashok` and run:

```bash
npx create-next-app@latest ashok-portfolio --typescript --tailwind --eslint
```

**When prompted, select:**
- TypeScript: **Yes**
- ESLint: **Yes**
- Tailwind CSS: **Yes**
- `src/` directory: **Yes**
- App Router: **Yes**
- Turbopack: **Yes**
- Customize import alias: **No**

---

## Step 2: Install Dependencies

```bash
cd ashok-portfolio

# Animation & 3D
npm install gsap lenis three @types/three @react-three/fiber @react-three/drei

# Icons (optional)
npm install lucide-react
```

---

## Step 3: Set Up Font Faces

### 3.1 Copy Fonts

Copy your font files to the public folder:

```bash
# Create fonts directory
mkdir public\fonts

# Copy Galgo Variable Font
copy "..\Fonts\Galgo Condensed Variable\WOFF2\GalgoVF.woff2" "public\fonts\galgo-var.woff2"
copy "..\Fonts\Galgo Condensed Variable\WOFF\GalgoVF.woff" "public\fonts\galgo-var.woff"

# Copy Galgo Regular
copy "..\Fonts\Galgo\WOFF2\Galgo-Regular.woff2" "public\fonts\galgo-regular.woff2"
copy "..\Fonts\Galgo\WOFF\Galgo-Regular.woff" "public\fonts\galgo-regular.woff"

# Copy Galgo Bold
copy "..\Fonts\Galgo\WOFF2\Galgo-Bold.woff2" "public\fonts\galgo-bold.woff2"
copy "..\Fonts\Galgo\WOFF\Galgo-Bold.woff" "public\fonts\galgo-bold.woff"

# Copy Galgo Light
copy "..\Fonts\Galgo\WOFF2\Galgo-Light.woff2" "public\fonts\galgo-light.woff2"
copy "..\Fonts\Galgo\WOFF\Galgo-Light.woff" "public\fonts\galgo-light.woff"
```

### 3.2 Update `src/app/globals.css`

Replace the `@font-face` section with:

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
```

### 3.3 Update `src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashok Verma — Alchemetryx | Digital Analytics Strategist",
  description: "15 years converting digital noise into strategic intelligence. Founder of Alchemetryx Consulting. GA4 Certified. Helping UK-based owner-led SMEs see what matters.",
  keywords: ["Digital Analytics", "GA4", "Alchemetryx", "Ashok Verma", "BookMyShow", "Marketing Analytics"],
  authors: [{ name: "Ashok Verma" }],
  openGraph: {
    title: "Ashok Verma — Alchemetryx",
    description: "Turning Data Into Clarity",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Galgo, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
```

---

## Step 4: Set Up Project Structure

Create the folder structure:

```bash
# Create component directories
mkdir src\components\sections
mkdir src\components\canvas
mkdir src\components\ui
mkdir src\components\providers

# Create hooks directory
mkdir src\hooks

# Create lib directory
mkdir src\lib

# Create types directory
mkdir src\types
```

---

## Step 5: Create Design Tokens (`src/lib/tokens.ts`)

```ts
export const tokens = {
  colors: {
    void: '#190805',
    void2: '#1d0906',
    clarity: '#F0F3F5',
    edge: '#FC4F2F',
    edgeGlow: 'rgba(252,79,47,0.4)',
    edgeDim: 'rgba(252,79,47,0.12)',
    clarityMid: 'rgba(240,243,245,0.55)',
    clarityDim: 'rgba(240,243,245,0.08)',
  },
  fonts: {
    primary: 'Galgo, sans-serif',
  },
  spacing: {
    section: '120px',
    container: '60px',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '960px',
    desktop: '1200px',
  },
} as const;
```

---

## Step 6: Create Constants (`src/lib/constants.ts`)

```ts
export const NAVIGATION = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const;

export const STATS = [
  { value: '15+', label: 'Years In Digital Analytics' },
  { value: '30%', label: 'CAC Reduction Delivered' },
  { value: '50+', label: 'Projects Transformed' },
] as const;

export const EXPERTISE = [
  {
    number: '01',
    title: 'Analytics Strategy',
    body: 'GA4, Adobe Analytics, BigQuery — I architect the full pipeline. Not just implementation, but the operational logic that turns data into decisions.',
    tools: ['GA4', 'BigQuery', 'Looker Studio', 'Alteryx'],
  },
  {
    number: '02',
    title: 'Marketing Automation',
    body: 'CleverTap, MoEngage, Braze. I build engagement systems that scale personalization without scaling headcount.',
    tools: ['CleverTap', 'MoEngage', 'Braze', 'Segment'],
  },
  {
    number: '03',
    title: 'Conversion Optimization',
    body: 'VWO, Hotjar, session replays. I find where your funnel leaks and fix it with data-backed experiments, not guesses.',
    tools: ['VWO', 'Hotjar', 'Optimizely', 'Google A/B Testing'],
  },
] as const;

export const EXPERIENCE = [
  {
    period: '2019 — Present',
    role: 'Founder',
    company: 'Alchemetryx Consulting',
    description: 'Built a analytics consultancy for owner-led SMEs. Reduced CAC by 30% for clients. Built systems that reduced founder dependency on gut feel.',
    metric: '30% avg. CAC reduction',
  },
  {
    period: '2015 — 2019',
    role: 'Head of Digital Analytics',
    company: 'BookMyShow',
    description: 'Led analytics for India\'s largest ticketing platform. Managed team of 8. Built real-time dashboards used by C-suite daily.',
    metric: '10M+ monthly transactions',
  },
  {
    period: '2012 — 2015',
    role: 'Senior Analytics Manager',
    company: 'L&T Finance',
    description: 'First analytics hire. Built the entire digital measurement framework from scratch.',
    metric: 'First analytics hire',
  },
  {
    period: '2010 — 2012',
    role: 'Digital Analyst',
    company: 'Fichmu Foods',
    description: 'Solo analyst for FMCG brand. E-commerce analytics, supply chain optimization, pricing strategy.',
    metric: 'Solo analyst',
  },
] as const;
```

---

## Step 7: Create Utility Functions (`src/lib/utils.ts`)

```ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function lerp(start: number, end: number, t: number): number {
  return start * (1 - t) + end * t;
}
```

Install required deps:
```bash
npm install clsx tailwind-merge
```

---

## Step 8: Create Base Layout Component (`src/components/sections/Layout.tsx`)

```tsx
'use client';

import { ReactNode, useEffect } from 'react';
import { initLenis } from '@/hooks/useLenis';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = initLenis();
    return () => lenis.destroy();
  }, []);

  return (
    <main className="relative">
      {children}
    </main>
  );
}
```

---

## Step 9: Create Lenis Hook (`src/hooks/useLenis.ts`)

```ts
import Lenis from 'lenis';

let rafId: number | null = null;

export function initLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time: number) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);

  // Return lenis instance with destroy method that also cancels RAF
  const originalDestroy = lenis.destroy.bind(lenis);
  lenis.destroy = function() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    originalDestroy();
  };

  return lenis;
}
```

---

## Step 10: Update Main Page (`src/app/page.tsx`)

```tsx
import { Layout } from '@/components/sections/Layout';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Expertise } from '@/components/sections/Expertise';
import { Experience } from '@/components/sections/Experience';
import { Philosophy } from '@/components/sections/Philosophy';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Philosophy />
      <Contact />
      <Footer />
    </Layout>
  );
}
```

> **Note on Section Components**: The imports above reference components (`Layout`, `Hero`, `About`, `Expertise`, `Experience`, `Philosophy`, `Contact`, `Footer`) that you need to create. Create each as a functional React component in the `src/components/sections/` directory. For example, create `src/components/sections/Hero.tsx`, `src/components/sections/About.tsx`, etc. You can start with minimal placeholder implementations:
>
> ```tsx
> // src/components/sections/Hero.tsx
> export function Hero() {
>   return <section id="hero">Hero Section</section>;
> }
> ```
>
> Repeat this pattern for each component (`About`, `Expertise`, `Experience`, `Philosophy`, `Contact`, `Footer`), then gradually port your HTML/CSS content into each one.

---

## Step 11: Development Server

```bash
npm run dev -- -p 3307
```

Visit `http://localhost:3307`

---

## Next Steps

1. **Build Hero section** — Start with Three.js particle field
2. **Port HTML/CSS** — Convert your existing styles to Tailwind or CSS modules
3. **Add GSAP animations** — ScrollTrigger for reveals
4. **Test on mobile** — Use Chrome DevTools device emulation
5. **Deploy to Vercel** — Connect repo and deploy

---

## File Structure After Setup

```
ashok-portfolio/
├── public/
│   ├── fonts/
│   │   ├── galgo-var.woff2
│   │   ├── galgo-regular.woff2
│   │   └── ...
│   └── images/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── sections/
│   │   ├── canvas/
│   │   ├── ui/
│   │   └── providers/
│   ├── hooks/
│   │   └── useLenis.ts
│   ├── lib/
│   │   ├── constants.ts
│   │   ├── tokens.ts
│   │   └── utils.ts
│   └── types/
├── package.json
└── tailwind.config.ts
```

---

## Troubleshooting

### Font not loading?
- Check browser DevTools Network tab for 404s
- Ensure fonts are in `public/fonts/` (not `src/public/`)
- Clear browser cache

### Three.js errors?
- Install types: `npm install -D @types/three`
- Use dynamic import for canvas components: `dynamic(() => import(...), { ssr: false })`

### GSAP not working?
- Register plugins in useEffect: `gsap.registerPlugin(ScrollTrigger)`
- Use `gsap.context()` for cleanup in React
