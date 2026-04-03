'use client';

import { useEffect, useRef } from 'react';
import ParticleCanvas from '@/components/canvas/ParticleCanvas';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imageRef.current) return;
      const y = window.scrollY * 0.25;
      imageRef.current.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const SERVICES = [
    { num: '01', label: 'Decision Intelligence' },
    { num: '02', label: 'Digital Platforms' },
    { num: '03', label: 'Intelligent Automation' },
    { num: '04', label: '90-Day Blueprint' },
  ];

  return (
    <section id="hero" ref={containerRef}>
      <ParticleCanvas />

      {/* Photo — right side, full bleed */}
      <div className="hero-photo-col">
        <img
          ref={imageRef}
          src="/images/hero.png"
          alt="Ashok Verma"
          className="hero-photo-img"
        />
        <div className="hero-photo-fade-left" />
        <div className="hero-photo-fade-bottom" />
        <div className="corner-tr" />
        <div className="corner-bl" />
        <div className="hero-name-tag">
          <div className="pname">ASHOK VERMA</div>
          <div className="ptitle">FOUNDER · ALCHEMETRYX</div>
        </div>
      </div>

      {/* Content — left side */}
      <div className="hero-inner">
        <p className="hero-chip">
          <span className="chip-line" />
          Digital Intelligence · Analytics Strategy · UK SMEs
        </p>

        <h1 className="h1">
          <span className="solid">Turning</span>
          <span className="hollow">Data</span>
          <span className="fire">Into</span>
          <span className="solid">Clarity</span>
        </h1>

        <p className="hero-sub">
          15 years of converting digital noise into{' '}
          <strong>strategic intelligence</strong>. From BookMyShow
          to Alchemetryx — helping owner-led businesses see what
          matters, and <strong>act on it. Without chaos.</strong>
        </p>

        <div className="hero-btns">
          <a href="#contact" className="btn-fire">
            Book a Free Audit →
          </a>
          <a href="#expertise" className="btn-ghost">
            See My Work ↓
          </a>
        </div>

        {/* Service numbers row */}
        <div className="hero-services">
          {SERVICES.map((s) => (
            <div key={s.num} className="hero-service-item">
              <span className="service-num">#{s.num}</span>
              <span className="service-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-pill">
        <span className="scroll-label">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}