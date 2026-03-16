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
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          onEnter: () => el.classList.add('vis'),
          once: true,
        },
      });
    });

    // Marquee animation
    gsap.to('.marquee-track', {
      xPercent: -50,
      ease: 'none',
      duration: 20,
      repeat: -1,
    });

    // Timeline item reveals (specific logic if needed, but .rev handles basics)
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
      <section className="eye-section">
        <img src="https://images.unsplash.com/photo-1516339900600-af08448510a3?auto=format&fit=crop&q=80&w=2000" alt="Cinematic Eye" />
        <div className="eye-text">
          <p className="rev">The Vision</p>
          <h2 className="rev">Seeing <em>Everything</em>. Missing <em>Nothing</em>.</h2>
        </div>
      </section>

      <Expertise />
      <Experience />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}
