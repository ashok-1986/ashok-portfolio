'use client';

import { useEffect, useRef } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Expertise from '@/components/sections/Expertise';
import Experience from '@/components/sections/Experience';
import Philosophy from '@/components/sections/Philosophy';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = cursorRingRef.current;
    if (!cursor || !ring) return;

    let rx = 0, ry = 0, cx = 0, cy = 0;

    const onMove = (e: MouseEvent) => {
      cx = e.clientX; cy = e.clientY;
      cursor.style.left = `${cx}px`;
      cursor.style.top = `${cy}px`;
    };

    const trackRing = () => {
      rx += (cx - rx) * 0.13;
      ry += (cy - ry) * 0.13;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      requestAnimationFrame(trackRing);
    };
    trackRing();

    document.addEventListener('mousemove', onMove, { passive: true });
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <main>
      {/* Cursor */}
      <div ref={cursorRef} style={{ position: 'fixed', width: '10px', height: '10px', background: '#FC4F2F', borderRadius: '50%', pointerEvents: 'none', zIndex: 9999, transform: 'translate(-50%,-50%)', transition: 'width .25s,height .25s', mixBlendMode: 'screen' }} />
      <div ref={cursorRingRef} style={{ position: 'fixed', width: '38px', height: '38px', border: '1px solid rgba(252,79,47,0.4)', borderRadius: '50%', pointerEvents: 'none', zIndex: 9998, transform: 'translate(-50%,-50%)', transition: 'width .3s,height .3s,border-color .3s' }} />

      <Hero />

      {/* Marquee */}
      <div style={{ padding: '52px 0', overflow: 'hidden', borderTop: '1px solid rgba(240,243,245,0.055)', borderBottom: '1px solid rgba(240,243,245,0.055)' }}>
        <div style={{ display: 'flex', gap: '72px', width: 'max-content', animation: 'marquee 26s linear infinite' }}>
          {[1, 2].map(i => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '72px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(240,243,245,0.16)', whiteSpace: 'nowrap' }}>
              Google Analytics <span style={{ color: '#FC4F2F', fontSize: '6px' }}>✦</span>
              Adobe Analytics <span style={{ color: '#FC4F2F', fontSize: '6px' }}>✦</span>
              BigQuery <span style={{ color: '#FC4F2F', fontSize: '6px' }}>✦</span>
              Looker Studio <span style={{ color: '#FC4F2F', fontSize: '6px' }}>✦</span>
              Tableau <span style={{ color: '#FC4F2F', fontSize: '6px' }}>✦</span>
              CleverTap <span style={{ color: '#FC4F2F', fontSize: '6px' }}>✦</span>
              MoEngage <span style={{ color: '#FC4F2F', fontSize: '6px' }}>✦</span>
              GTM <span style={{ color: '#FC4F2F', fontSize: '6px' }}>✦</span>
              VWO <span style={{ color: '#FC4F2F', fontSize: '6px' }}>✦</span>
              Alteryx <span style={{ color: '#FC4F2F', fontSize: '6px' }}>✦</span>
            </div>
          ))}
        </div>
      </div>

      <About />
      <Expertise />
      <Experience />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}