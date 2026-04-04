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

      // Scroll reveal — skip #hero (uses CSS animations)
      const revealEls = document.querySelectorAll('.rev');
      revealEls.forEach((el) => {
        if (el.closest('#hero')) return;

        if (el.classList.contains('sec-title')) {
          gsap.fromTo(el,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 85%', once: true },
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

      // Eye section
      const eyeSection = eyeSectionRef.current;
      if (eyeSection) {
        const eyeImg = eyeSection.querySelector<HTMLElement>('img');

        if (eyeImg) {
          const onEyeScroll = () => {
            const rect = eyeSection.getBoundingClientRect();
            const progress = 1 - (rect.bottom / (window.innerHeight + rect.height));
            const y = progress * 40;
            eyeImg.style.transform = `translateY(${y}%)`;
          };
          window.addEventListener('scroll', onEyeScroll, { passive: true });
        }

        const eyeText = eyeSection.querySelector<HTMLElement>('.eye-text');
        if (eyeText) {
          gsap.fromTo(eyeText,
            { opacity: 0, y: 32 },
            {
              opacity: 1, y: 0,
              duration: 1.1,
              ease: 'power3.out',
              scrollTrigger: { trigger: eyeSection, start: 'top 75%', once: true },
            }
          );
        }
      }

      // Marquee speed boost — RAF lerp + Lenis velocity
      const marqueeTrack = document.querySelector<HTMLElement>('.marquee-track');
      if (marqueeTrack) {
        let currentDuration = 26;
        let targetDuration = 26;
        let lastY = 0;
        let rafMarquee: number;

        const updateMarquee = () => {
          currentDuration += (targetDuration - currentDuration) * 0.05;
          marqueeTrack.style.animationDuration = `${currentDuration}s`;
          rafMarquee = requestAnimationFrame(updateMarquee);
        };
        rafMarquee = requestAnimationFrame(updateMarquee);

        const onScroll = () => {
          const delta = Math.abs(window.scrollY - lastY);
          targetDuration = Math.max(6, 26 - delta * 0.8);
          lastY = window.scrollY;
          clearTimeout((window as any)._marqueeTimer);
          (window as any)._marqueeTimer = setTimeout(() => { targetDuration = 26; }, 600);
        };
        window.addEventListener('scroll', onScroll, { passive: true });

        if (typeof window !== 'undefined' && window.__lenis) {
          window.__lenis.on('scroll', ({ velocity }: { velocity: number }) => {
            targetDuration = Math.max(6, 26 - Math.abs(velocity) * 3);
            clearTimeout((window as any)._marqueeTimer);
            (window as any)._marqueeTimer = setTimeout(() => { targetDuration = 26; }, 600);
          });
        }

        // Cleanup function for marquee animation
        const cleanupMarquee = () => {
          if (rafMarquee) {
            cancelAnimationFrame(rafMarquee);
          }
          window.removeEventListener('scroll', onScroll);
        };

        // Store cleanup for later use if needed
        window._cleanupMarquee = cleanupMarquee;
      }

    });

    // Scroll progress bar
    const progressBar = document.querySelector<HTMLElement>('.scroll-progress');
    if (progressBar) {
      const updateProgress = () => {
        const total = document.body.scrollHeight - window.innerHeight;
        progressBar.style.width = `${(window.scrollY / total) * 100}%`;
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
          <div className="m-item">{marqueeText} <span className="m-dot">·</span> </div>
          <div className="m-item">{marqueeText} <span className="m-dot">·</span> </div>
        </div>
      </div>

      <About />

      {/* EYE SECTION */}
      <div className="eye-section" ref={eyeSectionRef}>
        <img
          src="/images/og-image.png"
          alt=""
          aria-hidden="true"
        />
        <div className="eye-overlay" />
        <div className="eye-text">
          <p>The Detail That Changes Everything</p>
          <h2>
            Most businesses<br />
            have <em>data.</em><br />
            Few have <em>clarity.</em>
          </h2>
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
