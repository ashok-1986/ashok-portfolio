'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ParticleCanvas from '@/components/canvas/ParticleCanvas';
import { WHATSAPP_URL } from '@/lib/constants';

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

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({ delay: 0.5, defaults: { ease: 'expo.out' } });
      tl.fromTo(
        '.h1 span',
        { clipPath: 'inset(0 0 100% 0)', y: 40 },
        { clipPath: 'inset(0 0 0% 0)', y: 0, duration: 1.1, stagger: 0.08 }
      ).fromTo(
        '.h1 .fire',
        { textShadow: '0 0 0px rgba(252, 79, 47, 0)' },
        {
          textShadow: '0 0 100px rgba(252, 79, 47, 0.55)',
          duration: 0.9,
          ease: 'power2.out',
        },
        '-=0.5'
      );
    });
    return () => mm.revert();
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
          src="/images/hero.webp"
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
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-fire">
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