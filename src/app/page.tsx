'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Expertise from '@/components/sections/Expertise';
import Testimonials from '@/components/sections/Testimonials';
import Experience from '@/components/sections/Experience';
import Philosophy from '@/components/sections/Philosophy';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const eyeSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Reveal all .rev elements — but never touch anything inside #hero
      const revealElements = document.querySelectorAll('.rev');
      revealElements.forEach((el) => {

        // Hero has its own GSAP timeline — leave it completely alone
        if (el.closest('#hero')) return;

        if (el.classList.contains('sec-title')) {
          // Safe fade-up — no innerHTML destruction
          gsap.fromTo(el,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0,
              duration: 0.9, ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                once: true,
              },
            }
          );
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
      document.querySelectorAll('.t-item').forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => el.classList.add('vis'),
          once: true,
        });
      });

      // Eye section parallax
      const eyeSection = eyeSectionRef.current;
      if (eyeSection) {
        const eyeImg = eyeSection.querySelector<HTMLElement>('img');
        const eyeText = eyeSection.querySelector<HTMLElement>('.eye-text');

        if (eyeImg) {
          gsap.fromTo(eyeImg,
            { y: '-20%' },
            {
              y: '20%', ease: 'none',
              scrollTrigger: {
                trigger: eyeSection,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
        }

        if (eyeText) {
          gsap.fromTo(eyeText,
            { opacity: 0, y: 32 },
            {
              opacity: 1, y: 0,
              duration: 1.1, ease: 'power3.out',
              scrollTrigger: {
                trigger: eyeSection,
                start: 'top 75%',
                once: true,
              },
            }
          );
        }
      }
    });

    return () => ctx.revert();
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
      <div className="eye-section" ref={eyeSectionRef}>
        <img
          src="/images/og-image.png"
          alt="Ashok Verma"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            filter: 'grayscale(100%) contrast(1.2) brightness(0.55)',
          }}
        />
        <div className="eye-text">
          <p>The Detail That Changes Everything</p>
          <h2>Most businesses<br />have <em>data.</em><br />Few have <em>clarity.</em></h2>
        </div>
      </div>

      <Expertise />
      <Philosophy />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
