'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Simple particle canvas
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; z: number; vx: number; vy: number; vz: number; size: number }[] = [];
    const particleCount = 150;
    const spread = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * spread,
        y: (Math.random() - 0.5) * spread,
        z: (Math.random() - 0.5) * spread,
        vx: (Math.random() - 0.5) * 0.02,
        vy: (Math.random() - 0.5) * 0.02,
        vz: (Math.random() - 0.5) * 0.02,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx + mouseX * 0.01;
        particle.y += particle.vy + mouseY * 0.01;
        particle.z += particle.vz;

        if (particle.x > spread) particle.x -= spread * 2;
        if (particle.x < -spread) particle.x += spread * 2;
        if (particle.y > spread) particle.y -= spread * 2;
        if (particle.y < -spread) particle.y += spread * 2;
        if (particle.z > spread) particle.z -= spread * 2;
        if (particle.z < -spread) particle.z += spread * 2;

        const fov = 300;
        const scale = fov / (fov + particle.z + spread);
        const x2d = particle.x * scale + canvas.width / 2;
        const y2d = particle.y * scale + canvas.height / 2;

        ctx.fillStyle = `rgba(252, 79, 47, ${Math.min(1, scale * 0.6)})`;
        ctx.beginPath();
        ctx.arc(x2d, y2d, particle.size * scale, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // GSAP animations
    const tl = gsap.timeline();
    tl.to('.hero-overline', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 })
      .to('.hero-headline span', { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, '-=0.4')
      .to('.hero-sub', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .to('.hero-actions', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4');

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      tl.kill();
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden px-[60px]">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} id="gl-canvas" className="absolute inset-0 w-full h-full z-0" />

      {/* Hero Content - Left Side */}
      <div className="hero-inner relative z-10 max-w-[820px] pt-[80px]">
        <p className="hero-chip inline-flex items-center gap-[10px] text-[10px] font-bold tracking-[0.32em] uppercase text-[#FC4F2F] mb-9 opacity-0 translate-y-5">
          <span className="w-[28px] h-[1px] bg-[#FC4F2F]"></span>
          Digital Analytics Strategist · Founder · Alchemetryx
        </p>

        <h1 className="h1 opacity-0">
          <span className="solid block text-[#F0F3F5]">Turning</span>
          <span className="hollow block text-transparent" style={{ WebkitTextStroke: '1.5px rgba(240,243,245,0.2)' }}>Data</span>
          <span className="fire block text-[#FC4F2F]" style={{ textShadow: '0 0 100px rgba(252,79,47,0.55), 0 0 40px rgba(252,79,47,0.3)' }}>Into</span>
          <span className="solid block text-[#F0F3F5]">Clarity</span>
        </h1>

        <p className="hero-sub text-[16px] font-normal leading-[1.82] text-[rgba(240,243,245,0.55)] max-w-[460px] mb-[52px] opacity-0 translate-y-5">
          15 years of converting digital noise into{' '}
          <strong className="text-[#F0F3F5] font-medium">strategic intelligence</strong>.
          From BookMyShow to building Alchemetryx — I help owner-led businesses
          see what matters, and <strong className="text-[#F0F3F5] font-medium">act on it</strong>.
        </p>

        <div className="hero-btns flex gap-5 items-center opacity-0 translate-y-5">
          <a href="#expertise" className="btn-fire inline-flex items-center gap-[10px] text-[11px] font-bold tracking-[0.2em] uppercase text-[#190805] bg-[#FC4F2F] px-10 py-4 no-underline transition-all hover:opacity-85 hover:translate-y-[-2px]">
            See My Work ↓
          </a>
          <a href="https://alchemetryx.com" target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center gap-[10px] text-[11px] font-bold tracking-[0.2em] uppercase text-[#F0F3F5] border border-[rgba(240,243,245,0.18)] px-10 py-[15px] no-underline transition-all hover:border-[#FC4F2F] hover:text-[#FC4F2F] hover:translate-y-[-2px]">
            Visit Alchemetryx
          </a>
        </div>
      </div>

      {/* Hero Photo - Right Side */}
      <div className="hero-photo-col absolute right-0 top-0 bottom-0 w-[42%] z-5 overflow-hidden opacity-0" style={{ animation: 'revealFade 1.4s 1s cubic-bezier(0.16,1,0.3,1) forwards' }}>
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, #190805 0%, rgba(25,8,5,0.7) 40%, transparent 100%)' }}></div>
        <div className="absolute bottom-0 left-0 right-0 h-[200px] z-10" style={{ background: 'linear-gradient(to top, #190805 0%, transparent 100%)' }}></div>
        
        {/* Use a placeholder image - replace with actual photo */}
        <div className="w-full h-full bg-gradient-to-b from-[#2a1a15] to-[#1a0a05] flex items-center justify-center">
          <div className="text-[rgba(252,79,47,0.3)] text-[14px] tracking-[0.3em] uppercase">Your Photo Here</div>
        </div>

        {/* Orange corner accents */}
        <div className="absolute top-[80px] right-[40px] w-[36px] h-[36px] border-t-2 border-r-2 border-[#FC4F2F] z-20"></div>
        <div className="absolute bottom-[80px] left-0 w-[36px] h-[36px] border-b-2 border-l-2 border-[#FC4F2F] z-20"></div>

        {/* Name overlay */}
        <div className="absolute bottom-[88px] right-[40px] text-right z-20">
          <div className="pname text-[13px] font-bold tracking-[0.22em] uppercase text-[#F0F3F5]">ASHOK VERMA</div>
          <div className="ptitle text-[10px] tracking-[0.18em] uppercase text-[#FC4F2F] mt-1">FOUNDER · ALCHEMETRYX</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-pill absolute bottom-[44px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[10px] z-10 opacity-0" style={{ animation: 'revealUp 0.9s 1.3s cubic-bezier(0.16,1,0.3,1) forwards' }}>
        <span className="scroll-label text-[8.5px] tracking-[0.35em] uppercase text-[rgba(252,79,47,0.4)]">Scroll</span>
        <div className="scroll-line w-[1px] h-[56px] bg-gradient-to-b from-transparent to-[#FC4F2F]" style={{ animation: 'scrollLine 2.2s ease-in-out infinite' }}></div>
      </div>
    </section>
  );
}
