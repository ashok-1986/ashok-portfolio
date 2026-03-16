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
    // GSAP Context handles all scoped animations and cleanup automatically
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        delay: 0.1, // Small delay for hydration safety
        // No need for immediate set(0) because it's now in globals.css
      });

      tl.fromTo('.hero-chip',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo('.reveal-text',
          { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', y: 50 },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            y: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'expo.out'
          },
          '-=0.4'
        )
        .fromTo('.hero-sub',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.8'
        )
        .to('.hero-btns', {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        }, '-=0.6')
        .to('.hero-photo-col', {
          opacity: 1, duration: 1.4, ease: 'power2.out',
        }, '-=1.0')
        .to('.scroll-pill', {
          opacity: 1, y: 0, duration: 1.0, ease: 'power2.out',
        }, '-=0.5');

      // Image parallax on scroll
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
    }, containerRef); // Scope all selectors to the container

    return () => ctx.revert(); // Reverts all animations and kills scrolltriggers
  }, []);

  return (
    <section id="hero" ref={containerRef}>

      {/* Background particle field */}
      <ParticleCanvas />

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

      {/* Hero content — left side */}
      <div className="hero-inner">

        <p className="hero-chip">
          <span style={{
            width: '28px', height: '1px',
            background: '#FC4F2F', display: 'inline-block',
          }} />
          Digital Analytics Strategist · Founder · Alchemetryx
        </p>

        <h1 className="h1">
          <span className="solid reveal-text">Systems &</span>
          <span className="hollow reveal-text">Operational</span>
          <span className="fire reveal-text">Clarity</span>
        </h1>

        <p className="hero-sub">
          15 years of converting digital noise into{' '}
          <strong>strategic intelligence</strong>. From BookMyShow to
          building Alchemetryx — I help owner-led businesses see what
          matters, and <strong>act on it</strong>.
        </p>

        <div className="hero-btns">
          <Magnetic strength={0.2}>
            <a href="#contact" className="btn-primary" data-cursor="BOOK">
              Let&apos;s Talk →
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href="#expertise" className="btn-ghost" data-cursor="EXPLORE">
              See My Work ↓
            </a>
          </Magnetic>
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