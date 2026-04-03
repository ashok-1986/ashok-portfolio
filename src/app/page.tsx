'use client';

import { useEffect, useRef } from 'react';
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
  const eyeSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Scroll reveal — ALL sections EXCEPT #hero (hero uses CSS)
      const revealEls = document.querySelectorAll('.rev');
      revealEls.forEach((el) => {
        if (el.closest('#hero')) return; // NEVER touch hero elements

        if (el.classList.contains('sec-title')) {
          // Safe fade-up — no innerHTML destruction
          gsap.fromTo(el,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0,
              duration: 0.9,
              ease: 'power3.out',
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

      // Timeline items
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
              duration: 1.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: eyeSection,
                start: 'top 75%',
                once: true,
              },
            }
          );
        }
      }

      // Horizontal marquee speed boost on scroll
      const marqueeTrack = document.querySelector<HTMLElement>('.marquee-track');
      if (marqueeTrack) {
        let velocity = 1;
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
          const currentScroll = window.scrollY;
          const delta = Math.abs(currentScroll - lastScroll);
          velocity = Math.min(4, 1 + delta * 0.05);
          marqueeTrack.style.animationDuration = `${26 / velocity}s`;
          lastScroll = currentScroll;
          setTimeout(() => {
            marqueeTrack.style.animationDuration = '26s';
            velocity = 1;
          }, 500);
        }, { passive: true });
      }
    });

    // Scroll progress bar
    const progressBar = document.querySelector<HTMLElement>('.scroll-progress');
    if (progressBar) {
      const updateProgress = () => {
        const scrolled = window.scrollY;
        const total = document.body.scrollHeight - window.innerHeight;
        const progress = (scrolled / total) * 100;
        progressBar.style.width = `${progress}%`;
      };
      window.addEventListener('scroll', updateProgress, { passive: true });
    }

    return () => ctx.revert();
  }, []);

  const marqueeText = 'GA4 ANALYTICS · BIGQUERY · LOOKER STUDIO · MARKETING AUTOMATION · GTM · DATA STRATEGY · CRO · DECISION INTELLIGENCE · AI WORKFLOWS · MAKE.COM · HUBSPOT · RETENTION ·';

  return (
    <main>
      <div className="scroll-progress" />
      <Navigation />
      <Hero />

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          <div className="m-item">{marqueeText}</div>
          <div className="m-item">{marqueeText}</div>
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
