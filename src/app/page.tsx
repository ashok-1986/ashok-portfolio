'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Expertise from '@/components/sections/Expertise';
import Experience from '@/components/sections/Experience';
import Philosophy from '@/components/sections/Philosophy';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Reveal animations for all elements with .rev
    const revealElements = document.querySelectorAll('.rev');
    revealElements.forEach((el) => {
      // For staggered character reveals
      if (el.classList.contains('sec-title')) {
        const text = el.textContent || '';
        el.innerHTML = '';
        text.split('').forEach((char) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.className = 'rev-char';
          el.appendChild(span);
        });

        const chars = el.querySelectorAll('.rev-char');
        gsap.to(chars, {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        });
      } else {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            onEnter: () => el.classList.add('vis'),
            once: true,
          },
        });
      }
    });

    // Timeline item reveals
    const timelineItems = document.querySelectorAll('.t-item');
    timelineItems.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => el.classList.add('vis'),
        once: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main>
      <Navigation />
      <Hero />

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          <div className="m-item">
            Google Analytics <span className="m-dot">✦</span> Adobe Analytics <span className="m-dot">✦</span> BigQuery <span className="m-dot">✦</span> Looker Studio <span className="m-dot">✦</span> Tableau <span className="m-dot">✦</span> CleverTap <span className="m-dot">✦</span> MoEngage <span className="m-dot">✦</span> Google Tag Manager <span className="m-dot">✦</span> VWO <span className="m-dot">✦</span> Alteryx <span className="m-dot">✦</span>
          </div>
          <div className="m-item">
            Google Analytics <span className="m-dot">✦</span> Adobe Analytics <span className="m-dot">✦</span> BigQuery <span className="m-dot">✦</span> Looker Studio <span className="m-dot">✦</span> Tableau <span className="m-dot">✦</span> CleverTap <span className="m-dot">✦</span> MoEngage <span className="m-dot">✦</span> Google Tag Manager <span className="m-dot">✦</span> VWO <span className="m-dot">✦</span> Alteryx <span className="m-dot">✦</span>
          </div>
        </div>
      </div>

      <About />

      {/* EYE SECTION - INTERSTITIAL */}
      <div className="eye-section">
        <img src="https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?auto=format&fit=crop&q=80&w=2000" alt="Cinematic Eye Close-Up" />
        <div className="eye-text">
          <p className="rev">The Detail That Changes Everything</p>
          <h2 className="rev">Most businesses<br />have <em>data.</em><br />Few have <em>clarity.</em></h2>
        </div>
      </div>

      <Expertise />
      <Experience />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}
