'use client';

import { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Expertise from '@/components/sections/Expertise';
import Experience from '@/components/sections/Experience';
import Philosophy from '@/components/sections/Philosophy';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
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