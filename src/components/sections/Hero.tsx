'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chipRef = useRef<HTMLParagraphElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal hero content using refs — reliable, no DOM query needed
    const reveal = (el: HTMLElement | null, delay: number) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      setTimeout(() => {
        el.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)`;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, delay);
    };

    reveal(chipRef.current, 400);
    reveal(h1Ref.current, 600);
    reveal(subRef.current, 850);
    reveal(btnsRef.current, 1000);

    // Canvas particle system
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const N = 2600;
    const particles = Array.from({ length: N }, () => {
      const r = Math.random();
      return {
        x: (Math.random() - 0.5) * window.innerWidth * 1.4,
        y: (Math.random() - 0.5) * window.innerHeight * 1.4,
        z: (Math.random() - 0.5) * 800,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        vz: (Math.random() - 0.5) * 0.12,
        size: r < 0.035 ? 2.8 + Math.random() * 2.2
          : r < 0.18 ? 1.0 + Math.random() * 1.4
            : 0.3 + Math.random() * 0.8,
        color: r < 0.035 ? 'rgba(252,79,47,'
          : r < 0.18 ? 'rgba(240,243,245,'
            : 'rgba(60,20,12,',
      };
    });

    let mx = 0, my = 0, frame = 0, rafId: number;

    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouse, { passive: true });

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cw = canvas.width / 2;
      const ch = canvas.height / 2;
      const fov = 600;

      particles.forEach(p => {
        p.x += p.vx + mx * 0.3;
        p.y += p.vy + my * 0.2;
        p.z += p.vz;
        const hw = canvas.width * 0.8;
        const hh = canvas.height * 0.8;
        if (p.x > hw) p.x -= hw * 2;
        if (p.x < -hw) p.x += hw * 2;
        if (p.y > hh) p.y -= hh * 2;
        if (p.y < -hh) p.y += hh * 2;
        if (p.z > 600) p.z -= 1200;
        if (p.z < -600) p.z += 1200;

        const scale = fov / (fov + p.z + 600);
        const sx = p.x * scale + cw;
        const sy = p.y * scale + ch;
        const alpha = (0.5 + 0.5 * Math.sin(frame * 0.008 + p.x * 0.01)) * Math.min(1, scale * 1.2);

        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(0.3, p.size * scale), 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${alpha.toFixed(2)})`;
        ctx.fill();
      });
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '0 60px', background: '#190805' }}>

      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, display: 'block' }} />

      {/* Photo */}
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '42%', zIndex: 5, overflow: 'hidden', opacity: 0, animation: 'revealFade 1.4s 1s cubic-bezier(0.16,1,0.3,1) forwards' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '280px', background: 'linear-gradient(to right, #190805 0%, rgba(25,8,5,0.7) 40%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to top, #190805 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
        <Image src="/images/hero.png" alt="Ashok Verma" fill priority sizes="42vw" style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(100%) contrast(1.12) brightness(0.88)' }} />
        <div style={{ position: 'absolute', top: '80px', right: '40px', width: '36px', height: '36px', borderTop: '2px solid #FC4F2F', borderRight: '2px solid #FC4F2F', zIndex: 3 }} />
        <div style={{ position: 'absolute', bottom: '80px', left: 0, width: '36px', height: '36px', borderBottom: '2px solid #FC4F2F', borderLeft: '2px solid #FC4F2F', zIndex: 3 }} />
        <div style={{ position: 'absolute', bottom: '88px', right: '40px', textAlign: 'right', zIndex: 3 }}>
          <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#F0F3F5' }}>ASHOK VERMA</div>
          <div style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FC4F2F', marginTop: '4px' }}>FOUNDER · ALCHEMETRYX</div>
        </div>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '820px', paddingTop: '80px' }}>

        <p ref={chipRef} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#FC4F2F', marginBottom: '36px', opacity: 0 }}>
          <span style={{ width: '28px', height: '1px', background: '#FC4F2F', display: 'inline-block' }} />
          Digital Analytics Strategist · Founder · Alchemetryx
        </p>

        <h1 ref={h1Ref} style={{ fontSize: 'clamp(64px, 11vw, 172px)', fontWeight: 900, lineHeight: 0.88, textTransform: 'uppercase', letterSpacing: '-0.035em', marginBottom: '44px', opacity: 0 }}>
          <span style={{ color: '#F0F3F5', display: 'block' }}>Turning</span>
          <span style={{ color: 'transparent', WebkitTextStroke: '2px rgba(240,243,245,0.25)', display: 'block' }}>Data</span>
          <span style={{ color: '#FC4F2F', textShadow: '0 0 100px rgba(252,79,47,0.55)', display: 'block' }}>Into</span>
          <span style={{ color: '#F0F3F5', display: 'block' }}>Clarity</span>
        </h1>

        <p ref={subRef} style={{ fontSize: '16px', lineHeight: 1.82, color: 'rgba(240,243,245,0.80)', maxWidth: '460px', marginBottom: '52px', opacity: 0 }}>
          15 years of converting digital noise into{' '}
          <strong style={{ color: '#F0F3F5', fontWeight: 500 }}>strategic intelligence</strong>.
          From BookMyShow to building Alchemetryx — I help owner-led businesses
          see what matters, and <strong style={{ color: '#F0F3F5', fontWeight: 500 }}>act on it</strong>.
        </p>

        <div ref={btnsRef} style={{ display: 'flex', gap: '20px', alignItems: 'center', opacity: 0 }}>
          <a href="#expertise" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#190805', background: '#FC4F2F', padding: '16px 40px', textDecoration: 'none' }}>See My Work ↓</a>
          <a href="https://alchemetryx.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0F3F5', border: '1px solid rgba(240,243,245,0.18)', padding: '15px 40px', textDecoration: 'none' }}>Visit Alchemetryx</a>
        </div>
      </div>

      {/* Scroll */}
      <div style={{ position: 'absolute', bottom: '44px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', zIndex: 10, opacity: 0, animation: 'revealUp 0.9s 1.3s cubic-bezier(0.16,1,0.3,1) forwards' }}>
        <span style={{ fontSize: '8.5px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(252,79,47,0.4)' }}>Scroll</span>
        <div style={{ width: '1px', height: '56px', background: 'linear-gradient(to bottom, transparent, #FC4F2F)', animation: 'scrollLine 2.2s ease-in-out infinite' }} />
      </div>

    </section>
  );
}