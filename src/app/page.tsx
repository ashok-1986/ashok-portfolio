'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cursor functionality
    const cursor = cursorRef.current;
    const ring = cursorRingRef.current;

    if (cursor && ring) {
      const handleMouseMove = (e: MouseEvent) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        ring.style.left = `${e.clientX}px`;
        ring.style.top = `${e.clientY}px`;
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          cursor.classList.add('hover');
          ring.classList.add('hover');
        } else {
          cursor.classList.remove('hover');
          ring.classList.remove('hover');
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseover', handleMouseOver);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseover', handleMouseOver);
      };
    }
  }, []);

  useEffect(() => {
    // GSAP Animations
    const tl = gsap.timeline();

    tl.to('.hero-chip', { opacity: 1, y: 0, duration: 0.9, delay: 0.4, ease: 'power3.out' })
      .to('.h1', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
      .to('.hero-sub', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.65')
      .to('.hero-btns', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.6');

    // Reveal animations
    const revealElements = document.querySelectorAll('.rev');
    revealElements.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleClass: 'vis',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    // Timeline animations
    const timelineItems = document.querySelectorAll('.t-item');
    timelineItems.forEach((el, index) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        opacity: 1,
        x: 0,
        duration: 0.7,
        delay: index * 0.08,
        ease: 'power3.out',
      });
    });
  }, []);

  return (
    <main>
      {/* Custom Cursor */}
      <div id="cur" ref={cursorRef}></div>
      <div id="cur-ring" ref={cursorRingRef}></div>

      {/* HERO */}
      <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '0 60px', background: '#190805' }}>
        {/* Particle Canvas Container */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <canvas id="gl-canvas" style={{ width: '100%', height: '100%', display: 'block' }}></canvas>
        </div>

        {/* Hero Photo Column */}
        <div className="hero-photo-col" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '42%', zIndex: 5, overflow: 'hidden', opacity: 0.4 }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '280px', background: 'linear-gradient(to right, #190805 0%, rgba(25,8,5,0.7) 40%, transparent 100%)', zIndex: 20, pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to top, #190805 0%, transparent 100%)', zIndex: 20, pointerEvents: 'none' }}></div>
          
          {/* Hero Image */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src="/images/hero.png"
              alt="Ashok Verma"
              fill
              priority
              sizes="42vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center top',
                filter: 'grayscale(100%) contrast(1.12) brightness(0.88)',
              }}
            />
          </div>

          {/* Orange corner accents */}
          <div className="corner-tr" style={{ position: 'absolute', top: '80px', right: '40px', width: '36px', height: '36px', borderTop: '2px solid #FC4F2F', borderRight: '2px solid #FC4F2F', zIndex: 30 }}></div>
          <div className="corner-bl" style={{ position: 'absolute', bottom: '80px', left: 0, width: '36px', height: '36px', borderBottom: '2px solid #FC4F2F', borderLeft: '2px solid #FC4F2F', zIndex: 30 }}></div>

          {/* Name overlay */}
          <div style={{ position: 'absolute', bottom: '88px', right: '40px', textAlign: 'right', zIndex: 30 }}>
            <div className="pname" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#F0F3F5' }}>ASHOK VERMA</div>
            <div className="ptitle" style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FC4F2F', marginTop: '4px' }}>FOUNDER · ALCHEMETRYX</div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="hero-inner" style={{ position: 'relative', zIndex: 10, maxWidth: '820px', paddingTop: '80px' }}>
          <p className="hero-chip" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#FC4F2F', marginBottom: '36px', opacity: 0, transform: 'translateY(20px)' }}>
            <span style={{ width: '28px', height: '1px', background: '#FC4F2F', display: 'inline-block' }}></span>
            Digital Analytics Strategist · Founder · Alchemetryx
          </p>

          <h1 className="h1" style={{ fontSize: 'clamp(64px, 11vw, 172px)', fontWeight: 900, lineHeight: 0.88, textTransform: 'uppercase', letterSpacing: '-0.035em', marginBottom: '44px', opacity: 0, transform: 'translateY(20px)' }}>
            <span className="solid" style={{ color: '#F0F3F5', display: 'block' }}>Turning</span>
            <span className="hollow" style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(240,243,245,0.2)', display: 'block' }}>Data</span>
            <span className="fire" style={{ color: '#FC4F2F', textShadow: '0 0 100px rgba(252,79,47,0.55), 0 0 40px rgba(252,79,47,0.3)', display: 'block' }}>Into</span>
            <span className="solid" style={{ color: '#F0F3F5', display: 'block' }}>Clarity</span>
          </h1>

          <p className="hero-sub" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.82, color: 'rgba(240,243,245,0.55)', maxWidth: '460px', marginBottom: '52px', opacity: 0, transform: 'translateY(20px)' }}>
            15 years of converting digital noise into <strong style={{ color: '#F0F3F5', fontWeight: 500 }}>strategic intelligence</strong>.
            From BookMyShow to building Alchemetryx — I help owner-led businesses
            see what matters, and <strong style={{ color: '#F0F3F5', fontWeight: 500 }}>act on it</strong>.
          </p>

          <div className="hero-btns" style={{ display: 'flex', gap: '20px', alignItems: 'center', opacity: 0, transform: 'translateY(20px)' }}>
            <a href="#expertise" className="btn-fire" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#190805', background: '#FC4F2F', padding: '16px 40px', textDecoration: 'none', transition: 'opacity 0.3s, transform 0.3s' }}>See My Work ↓</a>
            <a href="https://alchemetryx.com" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0F3F5', border: '1px solid rgba(240,243,245,0.18)', padding: '15px 40px', textDecoration: 'none', transition: 'border-color 0.3s, color 0.3s, transform 0.3s' }}>Visit Alchemetryx</a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-pill" style={{ position: 'absolute', bottom: '44px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', zIndex: 10, opacity: 0 }}>
          <span className="scroll-label" style={{ fontSize: '8.5px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(252,79,47,0.4)' }}>Scroll</span>
          <div className="scroll-line" style={{ width: '1px', height: '56px', background: 'linear-gradient(to bottom, transparent, #FC4F2F)' }}></div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap" style={{ padding: '52px 0', overflow: 'hidden', borderTop: '1px solid rgba(240,243,245,0.055)', borderBottom: '1px solid rgba(240,243,245,0.055)' }}>
        <div className="marquee-track" style={{ display: 'flex', gap: '72px', width: 'max-content', animation: 'marquee 26s linear infinite' }}>
          <div className="m-item" style={{ display: 'flex', alignItems: 'center', gap: '72px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(240,243,245,0.16)', whiteSpace: 'nowrap' }}>
            Google Analytics <span className="m-dot" style={{ color: '#FC4F2F', fontSize: '6px' }}>✦</span> Adobe Analytics <span className="m-dot">✦</span> BigQuery <span className="m-dot">✦</span> Looker Studio <span className="m-dot">✦</span> Tableau <span className="m-dot">✦</span> CleverTap <span className="m-dot">✦</span> MoEngage <span className="m-dot">✦</span> Google Tag Manager <span className="m-dot">✦</span> VWO <span className="m-dot">✦</span> Alteryx <span className="m-dot">✦</span>
          </div>
          <div className="m-item" style={{ display: 'flex', alignItems: 'center', gap: '72px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(240,243,245,0.16)', whiteSpace: 'nowrap' }}>
            Google Analytics <span className="m-dot">✦</span> Adobe Analytics <span className="m-dot">✦</span> BigQuery <span className="m-dot">✦</span> Looker Studio <span className="m-dot">✦</span> Tableau <span className="m-dot">✦</span> CleverTap <span className="m-dot">✦</span> MoEngage <span className="m-dot">✦</span> Google Tag Manager <span className="m-dot">✦</span> VWO <span className="m-dot">✦</span> Alteryx <span className="m-dot">✦</span>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ background: '#190805', padding: '120px 60px' }}>
        <div className="label rev" style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#FC4F2F', marginBottom: '20px' }}>
          <span className="label-line" style={{ width: '28px', height: '1px', background: '#FC4F2F', display: 'inline-block' }}></span>
          The Founder
        </div>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', width: '100%', maxWidth: '1200px', alignItems: 'start' }}>
          <div>
            {/* About Photo */}
            <div className="about-photo-frame rev" style={{ position: 'relative', width: '100%', paddingBottom: '118%', overflow: 'hidden', marginBottom: '36px' }}>
              <Image
                src="/images/about.png"
                alt="Ashok Verma"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  filter: 'grayscale(100%) contrast(1.15) brightness(0.82)',
                }}
              />
              {/* Frame corners */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '28px', height: '28px', borderTop: '2px solid #FC4F2F', borderLeft: '2px solid #FC4F2F', zIndex: 2 }}></div>
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '28px', height: '28px', borderBottom: '2px solid #FC4F2F', borderRight: '2px solid #FC4F2F', zIndex: 2 }}></div>
              {/* Bottom fade */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to top, rgba(25,8,5,0.6), transparent)', zIndex: 1, pointerEvents: 'none' }}></div>
            </div>

            <h2 className="about-statement rev" style={{ fontSize: 'clamp(40px, 5.5vw, 68px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 0.9, color: '#F0F3F5', marginBottom: '44px' }}>
              Not A<br />
              <span className="o" style={{ color: 'transparent', WebkitTextStroke: '1px rgba(240,243,245,0.2)', display: 'block' }}>Tool</span><br />
              Seller.<br />
              A System<br />
              Builder.
            </h2>

            <div className="cert-row rev" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '36px' }}>
              <div className="cert" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(240,243,245,0.4)', border: '1px solid rgba(252,79,47,0.18)', padding: '8px 16px' }}>GA4 Certified</div>
              <div className="cert" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(240,243,245,0.4)', border: '1px solid rgba(252,79,47,0.18)', padding: '8px 16px' }}>Gen AI — Google</div>
              <div className="cert" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(240,243,245,0.4)', border: '1px solid rgba(252,79,47,0.18)', padding: '8px 16px' }}>Coursera Analytics</div>
              <div className="cert" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(240,243,245,0.4)', border: '1px solid rgba(252,79,47,0.18)', padding: '8px 16px' }}>B.E. Electronics</div>
            </div>
          </div>

          <div className="about-body">
            <p className="rev" style={{ fontSize: '16px', lineHeight: 1.82, color: 'rgba(240,243,245,0.55)', marginBottom: '22px' }}>
              I'm <strong style={{ color: '#F0F3F5', fontWeight: 500 }}>Ashok Verma</strong>, founder of Alchemetryx Consulting.
              For 15 years I've sat inside the machine — at BookMyShow, L&T Finance,
              Fichmu Foods — watching businesses collect data and do nothing with it.
            </p>
            <p className="rev" style={{ fontSize: '16px', lineHeight: 1.82, color: 'rgba(240,243,245,0.55)', marginBottom: '22px' }}>
              That's the problem I built Alchemetryx to solve.
              <strong style={{ color: '#F0F3F5', fontWeight: 500 }}>Not dashboards. Not reports. Systems.</strong>
              Operational clarity that reduces owner dependency, speeds up decisions,
              and makes growth predictable.
            </p>
            <p className="rev" style={{ fontSize: '16px', lineHeight: 1.82, color: 'rgba(240,243,245,0.55)', marginBottom: '22px' }}>
              I work with UK-based owner-led SMEs who are drowning in tools
              and starving for direction.
              <strong style={{ color: '#F0F3F5', fontWeight: 500 }}>Clarity before you commit</strong> — that's the promise.
            </p>
          </div>
        </div>

        <div className="stat-strip" style={{ display: 'flex', gap: 0, borderTop: '1px solid rgba(240,243,245,0.07)', marginTop: '56px', paddingTop: '48px', width: '100%', maxWidth: '1200px' }}>
          <div className="stat-item rev" style={{ flex: 1, paddingRight: '40px', borderRight: '1px solid rgba(240,243,245,0.07)', marginRight: '40px' }}>
            <div className="stat-num" style={{ fontSize: '52px', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, color: '#F0F3F5', marginBottom: '8px' }}>15<em style={{ color: '#FC4F2F', fontStyle: 'normal' }}>+</em></div>
            <div className="stat-lbl" style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,243,245,0.55)' }}>Years In Digital Analytics</div>
          </div>
          <div className="stat-item rev d1" style={{ flex: 1, paddingRight: '40px', borderRight: '1px solid rgba(240,243,245,0.07)', marginRight: '40px' }}>
            <div className="stat-num" style={{ fontSize: '52px', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, color: '#F0F3F5', marginBottom: '8px' }}>30<em style={{ color: '#FC4F2F', fontStyle: 'normal' }}>%</em></div>
            <div className="stat-lbl" style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,243,245,0.55)' }}>CAC Reduction Delivered</div>
          </div>
          <div className="stat-item rev d2" style={{ flex: 1, paddingRight: 0, borderRight: 'none', marginRight: 0 }}>
            <div className="stat-num" style={{ fontSize: '52px', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, color: '#F0F3F5', marginBottom: '8px' }}>50<em style={{ color: '#FC4F2F', fontStyle: 'normal' }}>+</em></div>
            <div className="stat-lbl" style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,243,245,0.55)' }}>Projects Transformed</div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" style={{ background: '#1d0906', padding: '120px 60px' }}>
        <div className="exp-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%', maxWidth: '1200px', marginBottom: '72px' }}>
          <h2 className="sec-title rev" style={{ fontSize: 'clamp(52px, 7.5vw, 110px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.04em', lineHeight: 0.88, color: '#F0F3F5' }}>Expe<em style={{ color: '#FC4F2F', fontStyle: 'normal' }}>rtise</em></h2>
          <p className="exp-desc rev" style={{ fontSize: '14px', lineHeight: 1.75, color: 'rgba(240,243,245,0.55)', maxWidth: '260px', textAlign: 'right' }}>Three pillars of digital analytics transformation</p>
        </div>

        <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', width: '100%', maxWidth: '1200px', background: 'rgba(240,243,245,0.055)' }}>
          <div className="card rev" style={{ background: '#1d0906', padding: '48px 40px 44px', position: 'relative', overflow: 'hidden', transition: 'background 0.4s', cursor: 'default' }}>
            <div className="card-num" style={{ position: 'absolute', top: '28px', right: '32px', fontSize: '72px', fontWeight: 900, color: 'rgba(240,243,245,0.03)', letterSpacing: '-0.05em', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>01</div>
            <div className="card-label" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#FC4F2F', marginBottom: '24px' }}>01</div>
            <h3 className="card-title" style={{ fontSize: '22px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#F0F3F5', marginBottom: '18px', lineHeight: 1.05 }}>Analytics Strategy</h3>
            <p className="card-body" style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(240,243,245,0.55)' }}>
              GA4, Adobe Analytics, BigQuery — I architect the full pipeline. Not just implementation, but the operational logic that turns data into decisions.
            </p>
            <div className="tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '28px' }}>
              <span className="tag" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(252,79,47,0.7)', border: '1px solid rgba(252,79,47,0.2)', padding: '5px 11px' }}>GA4</span>
              <span className="tag" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(252,79,47,0.7)', border: '1px solid rgba(252,79,47,0.2)', padding: '5px 11px' }}>BigQuery</span>
              <span className="tag" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(252,79,47,0.7)', border: '1px solid rgba(252,79,47,0.2)', padding: '5px 11px' }}>Looker Studio</span>
              <span className="tag" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(252,79,47,0.7)', border: '1px solid rgba(252,79,47,0.2)', padding: '5px 11px' }}>Alteryx</span>
            </div>
          </div>

          <div className="card rev d1" style={{ background: '#1d0906', padding: '48px 40px 44px', position: 'relative', overflow: 'hidden', transition: 'background 0.4s', cursor: 'default' }}>
            <div className="card-num" style={{ position: 'absolute', top: '28px', right: '32px', fontSize: '72px', fontWeight: 900, color: 'rgba(240,243,245,0.03)', letterSpacing: '-0.05em', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>02</div>
            <div className="card-label" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#FC4F2F', marginBottom: '24px' }}>02</div>
            <h3 className="card-title" style={{ fontSize: '22px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#F0F3F5', marginBottom: '18px', lineHeight: 1.05 }}>Marketing Automation</h3>
            <p className="card-body" style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(240,243,245,0.55)' }}>
              CleverTap, MoEngage, Braze. I build engagement systems that scale personalization without scaling headcount.
            </p>
            <div className="tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '28px' }}>
              <span className="tag" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(252,79,47,0.7)', border: '1px solid rgba(252,79,47,0.2)', padding: '5px 11px' }}>CleverTap</span>
              <span className="tag" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(252,79,47,0.7)', border: '1px solid rgba(252,79,47,0.2)', padding: '5px 11px' }}>MoEngage</span>
              <span className="tag" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(252,79,47,0.7)', border: '1px solid rgba(252,79,47,0.2)', padding: '5px 11px' }}>Braze</span>
              <span className="tag" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(252,79,47,0.7)', border: '1px solid rgba(252,79,47,0.2)', padding: '5px 11px' }}>Segment</span>
            </div>
          </div>

          <div className="card rev d2" style={{ background: '#1d0906', padding: '48px 40px 44px', position: 'relative', overflow: 'hidden', transition: 'background 0.4s', cursor: 'default' }}>
            <div className="card-num" style={{ position: 'absolute', top: '28px', right: '32px', fontSize: '72px', fontWeight: 900, color: 'rgba(240,243,245,0.03)', letterSpacing: '-0.05em', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>03</div>
            <div className="card-label" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#FC4F2F', marginBottom: '24px' }}>03</div>
            <h3 className="card-title" style={{ fontSize: '22px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#F0F3F5', marginBottom: '18px', lineHeight: 1.05 }}>Conversion Optimization</h3>
            <p className="card-body" style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(240,243,245,0.55)' }}>
              VWO, Hotjar, session replays. I find where your funnel leaks and fix it with data-backed experiments, not guesses.
            </p>
            <div className="tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '28px' }}>
              <span className="tag" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(252,79,47,0.7)', border: '1px solid rgba(252,79,47,0.2)', padding: '5px 11px' }}>VWO</span>
              <span className="tag" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(252,79,47,0.7)', border: '1px solid rgba(252,79,47,0.2)', padding: '5px 11px' }}>Hotjar</span>
              <span className="tag" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(252,79,47,0.7)', border: '1px solid rgba(252,79,47,0.2)', padding: '5px 11px' }}>Optimizely</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ background: '#190805', padding: '120px 60px' }}>
        <div className="label rev" style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#FC4F2F', marginBottom: '20px' }}>
          <span className="label-line" style={{ width: '28px', height: '1px', background: '#FC4F2F', display: 'inline-block' }}></span>
          Career Journey
        </div>

        <h2 className="sec-title rev" style={{ fontSize: 'clamp(52px, 7.5vw, 110px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.04em', lineHeight: 0.88, color: '#F0F3F5', marginBottom: '72px' }}>Experience</h2>

        <div className="timeline" style={{ maxWidth: '840px', width: '100%', marginTop: '64px', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, #FC4F2F 0%, rgba(252,79,47,0.05) 100%)' }}></div>

          <div className="t-item" style={{ paddingLeft: '48px', marginBottom: '60px', position: 'relative', opacity: 0, transform: 'translateX(-24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
            <div className="t-dot" style={{ position: 'absolute', left: '-5px', top: '10px', width: '10px', height: '10px', background: '#FC4F2F', borderRadius: '50%', boxShadow: '0 0 18px rgba(252,79,47,0.7)' }}></div>
            <div className="t-period" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#FC4F2F', marginBottom: '10px' }}>2019 — Present</div>
            <h3 className="t-role" style={{ fontSize: '22px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#F0F3F5', marginBottom: '4px', lineHeight: 1.05 }}>Founder</h3>
            <div className="t-co" style={{ fontSize: '13px', color: 'rgba(240,243,245,0.55)', letterSpacing: '0.06em', marginBottom: '16px' }}>Alchemetryx Consulting</div>
            <p className="t-desc" style={{ fontSize: '14px', lineHeight: 1.78, color: 'rgba(240,243,245,0.38)' }}>
              Built a analytics consultancy for owner-led SMEs. Reduced CAC by 30% for clients. Built systems that reduced founder dependency on gut feel.
            </p>
            <div className="t-metric" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '14px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FC4F2F' }}>
              <span style={{ width: '18px', height: '1px', background: '#FC4F2F', display: 'inline-block' }}></span>
              30% avg. CAC reduction
            </div>
          </div>

          <div className="t-item" style={{ paddingLeft: '48px', marginBottom: '60px', position: 'relative', opacity: 0, transform: 'translateX(-24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
            <div className="t-dot" style={{ position: 'absolute', left: '-5px', top: '10px', width: '10px', height: '10px', background: '#FC4F2F', borderRadius: '50%', boxShadow: '0 0 18px rgba(252,79,47,0.7)' }}></div>
            <div className="t-period" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#FC4F2F', marginBottom: '10px' }}>2015 — 2019</div>
            <h3 className="t-role" style={{ fontSize: '22px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#F0F3F5', marginBottom: '4px', lineHeight: 1.05 }}>Head of Digital Analytics</h3>
            <div className="t-co" style={{ fontSize: '13px', color: 'rgba(240,243,245,0.55)', letterSpacing: '0.06em', marginBottom: '16px' }}>BookMyShow</div>
            <p className="t-desc" style={{ fontSize: '14px', lineHeight: 1.78, color: 'rgba(240,243,245,0.38)' }}>
              Led analytics for India's largest ticketing platform. Managed team of 8. Built real-time dashboards used by C-suite daily.
            </p>
            <div className="t-metric" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '14px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FC4F2F' }}>
              <span style={{ width: '18px', height: '1px', background: '#FC4F2F', display: 'inline-block' }}></span>
              10M+ monthly transactions
            </div>
          </div>

          <div className="t-item" style={{ paddingLeft: '48px', marginBottom: '60px', position: 'relative', opacity: 0, transform: 'translateX(-24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
            <div className="t-dot" style={{ position: 'absolute', left: '-5px', top: '10px', width: '10px', height: '10px', background: '#FC4F2F', borderRadius: '50%', boxShadow: '0 0 18px rgba(252,79,47,0.7)' }}></div>
            <div className="t-period" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#FC4F2F', marginBottom: '10px' }}>2012 — 2015</div>
            <h3 className="t-role" style={{ fontSize: '22px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#F0F3F5', marginBottom: '4px', lineHeight: 1.05 }}>Senior Analytics Manager</h3>
            <div className="t-co" style={{ fontSize: '13px', color: 'rgba(240,243,245,0.55)', letterSpacing: '0.06em', marginBottom: '16px' }}>L&T Finance</div>
            <p className="t-desc" style={{ fontSize: '14px', lineHeight: 1.78, color: 'rgba(240,243,245,0.38)' }}>
              First analytics hire. Built the entire digital measurement framework from scratch.
            </p>
            <div className="t-metric" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '14px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FC4F2F' }}>
              <span style={{ width: '18px', height: '1px', background: '#FC4F2F', display: 'inline-block' }}></span>
              First analytics hire
            </div>
          </div>

          <div className="t-item" style={{ paddingLeft: '48px', marginBottom: '60px', position: 'relative', opacity: 0, transform: 'translateX(-24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
            <div className="t-dot" style={{ position: 'absolute', left: '-5px', top: '10px', width: '10px', height: '10px', background: '#FC4F2F', borderRadius: '50%', boxShadow: '0 0 18px rgba(252,79,47,0.7)' }}></div>
            <div className="t-period" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#FC4F2F', marginBottom: '10px' }}>2010 — 2012</div>
            <h3 className="t-role" style={{ fontSize: '22px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#F0F3F5', marginBottom: '4px', lineHeight: 1.05 }}>Digital Analyst</h3>
            <div className="t-co" style={{ fontSize: '13px', color: 'rgba(240,243,245,0.55)', letterSpacing: '0.06em', marginBottom: '16px' }}>Fichmu Foods</div>
            <p className="t-desc" style={{ fontSize: '14px', lineHeight: 1.78, color: 'rgba(240,243,245,0.38)' }}>
              Solo analyst for FMCG brand. E-commerce analytics, supply chain optimization, pricing strategy.
            </p>
            <div className="t-metric" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '14px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FC4F2F' }}>
              <span style={{ width: '18px', height: '1px', background: '#FC4F2F', display: 'inline-block' }}></span>
              Solo analyst
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" style={{ padding: '120px 60px', background: 'rgba(252,79,47,0.03)', borderTop: '1px solid rgba(252,79,47,0.12)', borderBottom: '1px solid rgba(252,79,47,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column', gap: '32px', overflow: 'hidden', position: 'relative' }}>
        <div className="phil-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(252,79,47,0.06), transparent)' }}></div>
        <p className="phil-quote" style={{ fontSize: 'clamp(24px, 3.8vw, 54px)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '880px', position: 'relative' }}>
          "Clarity <em style={{ color: '#FC4F2F', fontStyle: 'normal', textShadow: '0 0 60px rgba(252,79,47,0.35)' }}>before</em> you commit. That's the <em style={{ color: '#FC4F2F', fontStyle: 'normal', textShadow: '0 0 60px rgba(252,79,47,0.35)' }}>only</em> promise that matters."
        </p>
        <p className="phil-attr" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(240,243,245,0.3)' }}>Ashok Verma — Founder, Alchemetryx</p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: '#190805', padding: '120px 60px' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '120px', width: '100%', maxWidth: '1200px', marginTop: '64px' }}>
          <div>
            <h2 className="contact-cta rev" style={{ fontSize: 'clamp(44px, 6.5vw, 84px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.035em', lineHeight: 0.92, color: '#F0F3F5', marginBottom: '36px' }}>Let's Build <span style={{ color: '#FC4F2F' }}>Clarity</span></h2>
            <p className="contact-sub rev" style={{ fontSize: '16px', lineHeight: 1.78, color: 'rgba(240,243,245,0.55)', maxWidth: '380px', marginBottom: '48px' }}>
              Ready to turn your digital noise into strategic intelligence? Let's talk.
            </p>

            <div className="contact-links rev">
              <a href="mailto:verma.86ashok@gmail.com" className="c-link" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', transition: 'opacity 0.3s' }}>
                <span className="c-link-label" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#FC4F2F', minWidth: '72px' }}>Email</span>
                <span className="c-link-val" style={{ fontSize: '14px', color: 'rgba(240,243,245,0.55)' }}>verma.86ashok@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/ashokverma" target="_blank" rel="noopener noreferrer" className="c-link" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', transition: 'opacity 0.3s' }}>
                <span className="c-link-label" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#FC4F2F', minWidth: '72px' }}>LinkedIn</span>
                <span className="c-link-val" style={{ fontSize: '14px', color: 'rgba(240,243,245,0.55)' }}>Ashok Verma</span>
              </a>
              <a href="https://alchemetryx.com" target="_blank" rel="noopener noreferrer" className="c-link" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', transition: 'opacity 0.3s' }}>
                <span className="c-link-label" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#FC4F2F', minWidth: '72px' }}>Company</span>
                <span className="c-link-val" style={{ fontSize: '14px', color: 'rgba(240,243,245,0.55)' }}>alchemetryx.com</span>
              </a>
            </div>
          </div>

          <form className="cf rev" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div className="fg" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label className="fl" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#FC4F2F' }}>Name</label>
              <input type="text" className="fi" placeholder="Your name" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(240,243,245,0.1)', color: '#F0F3F5', fontFamily: 'Urbanist, sans-serif', fontSize: '15px', padding: '12px 0', outline: 'none', transition: 'border-color 0.3s', width: '100%' }} />
            </div>
            <div className="fg" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label className="fl" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#FC4F2F' }}>Email</label>
              <input type="email" className="fi" placeholder="your@email.com" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(240,243,245,0.1)', color: '#F0F3F5', fontFamily: 'Urbanist, sans-serif', fontSize: '15px', padding: '12px 0', outline: 'none', transition: 'border-color 0.3s', width: '100%' }} />
            </div>
            <div className="fg" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label className="fl" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#FC4F2F' }}>Message</label>
              <textarea className="ft" placeholder="Tell me about your project..." rows={4} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(240,243,245,0.1)', color: '#F0F3F5', fontFamily: 'Urbanist, sans-serif', fontSize: '15px', padding: '12px 0', outline: 'none', transition: 'border-color 0.3s', width: '100%', resize: 'none', minHeight: '90px' }}></textarea>
            </div>
            <button type="submit" className="fsub" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#190805', background: '#FC4F2F', border: 'none', padding: '16px 44px', cursor: 'none', transition: 'opacity 0.3s, transform 0.3s', alignSelf: 'flex-start' }}>Send Message →</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '44px 60px', borderTop: '1px solid rgba(240,243,245,0.055)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="fc" style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(240,243,245,0.18)' }}>© {new Date().getFullYear()} Ashok Verma. All rights reserved.</div>
        <div className="fl-row" style={{ display: 'flex', gap: '28px' }}>
          <a href="https://linkedin.com/in/ashokverma" target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(240,243,245,0.18)', textDecoration: 'none', transition: 'color 0.3s' }}>LinkedIn</a>
          <a href="https://alchemetryx.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(240,243,245,0.18)', textDecoration: 'none', transition: 'color 0.3s' }}>Alchemetryx</a>
        </div>
      </footer>
    </main>
  );
}
