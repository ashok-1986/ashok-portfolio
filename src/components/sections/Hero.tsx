'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import WebGLBackground from '@/components/canvas/WebGLBackground';

export default function Hero() {
  useEffect(() => {
    const chip = document.querySelector('.hero-chip') as HTMLElement;
    const h1 = document.querySelector('.h1') as HTMLElement;
    const sub = document.querySelector('.hero-sub') as HTMLElement;
    const btns = document.querySelector('.hero-btns') as HTMLElement;

    const reveal = (el: HTMLElement | null, delay: number) => {
      if (!el) return;
      el.style.transition = `opacity 0.9s ${delay}s cubic-bezier(0.16,1,0.3,1), transform 0.9s ${delay}s cubic-bezier(0.16,1,0.3,1)`;
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    };

    setTimeout(() => {
      reveal(chip, 0.4);
      reveal(h1, 0.6);
      reveal(sub, 0.85);
      reveal(btns, 1.0);
    }, 50);
  }, []);

  return (
    <section id="hero">
      <WebGLBackground />

      {/* Hero photo — right side */}
      <div className="hero-photo-col" style={{ opacity: 0, animation: 'revealFade 1.4s 1s cubic-bezier(0.16,1,0.3,1) forwards' }}>
        <Image
          src="/images/hero.png"
          alt="Ashok Verma"
          fill
          priority
          sizes="42vw"
          className="object-cover object-top filter grayscale contrast-[1.12] brightness-[0.88]"
        />

        <div className="corner-tr" />
        <div className="corner-bl" />

        <div className="hero-name-tag">
          <div className="pname">ASHOK VERMA</div>
          <div className="ptitle">FOUNDER · ALCHEMETRYX</div>
        </div>
      </div>

      {/* Hero content — left */}
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

        <p className="hero-sub font-light">
          15 years converting digital noise into <strong>strategic intelligence</strong>.
          From BookMyShow to building Alchemetryx — I help owner-led businesses
          see what matters, and <strong>act on it</strong>.
        </p>

        <div className="hero-btns flex gap-5">
          <a href="#expertise" className="btn-fire">
            See My Work ↓
          </a>
          <a href="https://alchemetryx.com" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Visit Alchemetryx
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-pill" style={{ opacity: 0, animation: 'revealUp 0.9s 1.3s cubic-bezier(0.16,1,0.3,1) forwards' }}>
        <span className="scroll-label">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}