'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.hero-chip', { opacity: 1, y: 0, duration: 0.9, delay: 0.4, ease: 'power3.out' })
      .to('.h1', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
      .to('.hero-sub', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.65')
      .to('.hero-btns', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.6')
      .to('.hero-photo-col', { opacity: 1, duration: 1.2, ease: 'power2.out' }, '-=1')
      .to('.scroll-pill', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.5');
  }, []);

  return (
    <section id="hero" ref={containerRef}>
      {/* Background Particles Placeholder */}
      <canvas id="gl-canvas"></canvas>

      {/* Hero Photo Column */}
      <div className="hero-photo-col">
        {/* Using a generated cinematic image or placeholder */}
        <img src="/images/hero.png" alt="Ashok Verma Cinematic Staircase" />
        <div className="corner-tr"></div>
        <div className="corner-bl"></div>
        <div className="hero-name-tag">
          <div className="pname">ASHOK VERMA</div>
          <div className="ptitle">FOUNDER · ALCHEMETRYX</div>
        </div>
      </div>

      <div className="hero-inner">
        <p className="hero-chip">
          Digital Analytics Strategist · Founder · Alchemetryx
        </p>

        <h1 className="h1">
          <span className="solid">Turning</span>
          <span className="hollow">Data</span>
          <span className="fire">Into</span>
          <span className="solid">Clarity</span>
        </h1>

        <p className="hero-sub">
          15 years of converting digital noise into <strong>strategic intelligence</strong>.
          From BookMyShow to building Alchemetryx — I help owner-led businesses
          see what matters, and <strong>act on it</strong>.
        </p>

        <div className="hero-btns">
          <a href="#expertise" className="btn-fire">
            See My Work ↓
          </a>
          <a
            href="https://alchemetryx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Visit Alchemetryx
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-pill">
        <span className="scroll-label">Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
