'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from '@/components/ui/Magnetic';
import ParticleCanvas from '@/components/canvas/ParticleCanvas';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax on scroll only — reveal is handled by CSS animations
      if (imageRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            if (imageRef.current) {
              gsap.set(imageRef.current, { y: `${self.progress * 20}%` });
            }
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef}>

      {/* Background particle field */}
      <ParticleCanvas />

      {/* Hero content — left side */}
      <div className="hero-inner">

        <p className="hero-chip">
          <span style={{
            width: '28px', height: '1px',
            background: '#FC4F2F', display: 'inline-block',
          }} />
          Digital Intelligence · Analytics Strategy · UK SMEs
        </p>

        <h1 className="h1">
          <span className="solid reveal-text">TURNING</span>
          <span className="hollow reveal-text">DATA INTO</span>
          <span className="fire reveal-text">CLARITY</span>
        </h1>

        <p className="hero-sub">
          15 years of converting digital noise into{' '}
          <strong>strategic intelligence</strong>. From BookMyShow
          to Alchemetryx — helping owner-led businesses see what
          matters, and <strong>act on it. Without chaos.</strong>
        </p>

        <div className="hero-btns">
          <Magnetic strength={0.2}>
            <a href="#contact" className="btn-fire" data-cursor="BOOK">
              Book a Free Audit →
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href="#expertise" className="btn-ghost" data-cursor="EXPLORE">
              See My Work ↓
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Hero photo — right side */}
      <div className="hero-photo-col">
        <div className="hero-image-wrap">
          <img
            ref={imageRef}
            src="/images/hero.png"
            alt="Ashok Verma"
            style={{
              height: '120%',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              top: '-10%',
              position: 'relative',
              filter: 'grayscale(100%) contrast(1.12) brightness(0.88)',
            }}
          />
        </div>

        {/* Left fade gradient */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '280px',
          background: 'linear-gradient(to right, #190805 0%, rgba(25,8,5,0.7) 40%, transparent 100%)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        {/* Bottom fade gradient */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px',
          background: 'linear-gradient(to top, #190805 0%, transparent 100%)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        {/* Orange corner accents */}
        <div className="corner-tr" />
        <div className="corner-bl" />

        {/* Name tag */}
        <div className="hero-name-tag">
          <div className="pname">ASHOK VERMA</div>
          <div className="ptitle">FOUNDER · ALCHEMETRYX</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-pill">
        <span className="scroll-label">Scroll</span>
        <div className="scroll-line" />
      </div>

    </section>
  );
}