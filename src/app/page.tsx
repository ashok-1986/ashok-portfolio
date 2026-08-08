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

      // Eye section text reveal
      const eyeText = eyeSectionRef.current?.querySelector<HTMLElement>('.eye-text');
      if (eyeText) {
        gsap.fromTo(eyeText,
          { opacity: 0, y: 32 },
          {
            opacity: 1, y: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: eyeSectionRef.current, start: 'top 75%', once: true },
          }
        );
      }
    });

    // Eye section scroll parallax
    const eyeSection = eyeSectionRef.current;
    const eyeImg = eyeSection?.querySelector<HTMLElement>('img') ?? null;
    const onEyeScroll = () => {
      if (!eyeSection || !eyeImg) return;
      const rect = eyeSection.getBoundingClientRect();
      const progress = 1 - (rect.bottom / (window.innerHeight + rect.height));
      eyeImg.style.transform = `translateY(${progress * 40}%)`;
    };
    window.addEventListener('scroll', onEyeScroll, { passive: true });

    // Marquee speed boost — RAF lerp + Lenis velocity
    let cleanupMarquee = () => {};
    const marqueeTrack = document.querySelector<HTMLElement>('.marquee-track');
    if (marqueeTrack) {
      let currentDuration = 26;
      let targetDuration = 26;
      let lastY = 0;
      let rafMarquee = 0;

      const updateMarquee = () => {
        currentDuration += (targetDuration - currentDuration) * 0.05;
        marqueeTrack.style.animationDuration = `${currentDuration}s`;
        rafMarquee = requestAnimationFrame(updateMarquee);
      };
      rafMarquee = requestAnimationFrame(updateMarquee);

      const resetTarget = () => { targetDuration = 26; };
      const scheduleReset = () => {
        clearTimeout(window._marqueeTimer);
        window._marqueeTimer = setTimeout(resetTarget, 600);
      };

      const onScroll = () => {
        const delta = Math.abs(window.scrollY - lastY);
        targetDuration = Math.max(6, 26 - delta * 0.8);
        lastY = window.scrollY;
        scheduleReset();
      };
      window.addEventListener('scroll', onScroll, { passive: true });

      // Lenis may not be mounted yet (child effects run before the provider's)
      let unsubscribeLenis: (() => void) | null = null;
      const attachLenis = () => {
        if (unsubscribeLenis || !window.__lenis) return;
        unsubscribeLenis = window.__lenis.on('scroll', (lenis) => {
          targetDuration = Math.max(6, 26 - Math.abs(lenis.velocity) * 3);
          scheduleReset();
        });
      };
      attachLenis();
      const retryLenis = setTimeout(attachLenis, 0);

      cleanupMarquee = () => {
        cancelAnimationFrame(rafMarquee);
        window.removeEventListener('scroll', onScroll);
        if (unsubscribeLenis) unsubscribeLenis();
        clearTimeout(retryLenis);
        clearTimeout(window._marqueeTimer);
      };
    }

    // Scroll progress bar
    const progressBar = document.querySelector<HTMLElement>('.scroll-progress');
    const updateProgress = () => {
      if (!progressBar) return;
      const total = document.body.scrollHeight - window.innerHeight;
      progressBar.style.width = `${(window.scrollY / total) * 100}%`;
    };
    window.addEventListener('scroll', updateProgress, { passive: true });

    return () => {
      cleanupMarquee();
      window.removeEventListener('scroll', onEyeScroll);
      window.removeEventListener('scroll', updateProgress);
      ctx.revert();
    };
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
          src="/images/og-image.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
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
