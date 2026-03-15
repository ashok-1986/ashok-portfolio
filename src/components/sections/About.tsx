'use client';

import { useEffect } from 'react';
import { STATS } from '@/lib/constants';

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.rev').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-[120px] px-[60px] bg-[#190805]">
      <div className="section-label rev inline-flex items-center gap-[14px] text-[10px] font-bold tracking-[0.35em] uppercase text-[#FC4F2F] mb-5">
        <span className="w-[28px] h-[1px] bg-[#FC4F2F] inline-block"></span>
        The Founder
      </div>

      <div className="about-grid grid grid-cols-1 md:grid-cols-2 gap-[100px] w-full max-w-[1200px]">
        <div>
          <h2 className="about-statement text-[clamp(40px,5.5vw,68px)] font-black uppercase tracking-[-0.03em] leading-[0.9] text-[#F0F3F5] mb-11">
            Not A<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(240,243,245,0.2)' }}>Tool</span><br />
            Seller.<br />
            A System<br />
            Builder.
          </h2>

          <div className="cert-row flex flex-wrap gap-2.5 mt-9">
            <div className="cert flex items-center gap-2 text-[10px] tracking-[0.12em] text-[rgba(240,243,245,0.4)] border border-[rgba(252,79,47,0.18)] px-4 py-2">
              <span className="w-[5px] h-[5px] bg-[#FC4F2F] rounded-full flex-shrink-0"></span>
              GA4 Certified
            </div>
            <div className="cert flex items-center gap-2 text-[10px] tracking-[0.12em] text-[rgba(240,243,245,0.4)] border border-[rgba(252,79,47,0.18)] px-4 py-2">
              <span className="w-[5px] h-[5px] bg-[#FC4F2F] rounded-full flex-shrink-0"></span>
              Gen AI — Google
            </div>
            <div className="cert flex items-center gap-2 text-[10px] tracking-[0.12em] text-[rgba(240,243,245,0.4)] border border-[rgba(252,79,47,0.18)] px-4 py-2">
              <span className="w-[5px] h-[5px] bg-[#FC4F2F] rounded-full flex-shrink-0"></span>
              Coursera Analytics
            </div>
            <div className="cert flex items-center gap-2 text-[10px] tracking-[0.12em] text-[rgba(240,243,245,0.4)] border border-[rgba(252,79,47,0.18)] px-4 py-2">
              <span className="w-[5px] h-[5px] bg-[#FC4F2F] rounded-full flex-shrink-0"></span>
              B.E. Electronics
            </div>
          </div>
        </div>

        <div className="about-body">
          <p className="text-[16px] leading-[1.82] text-[rgba(240,243,245,0.55)] mb-5.5">
            I&apos;m <strong className="text-[#F0F3F5] font-medium">Ashok Verma</strong>, founder of Alchemetryx Consulting.
            For 15 years I&apos;ve sat inside the machine — at BookMyShow, L&T Finance,
            Fichmu Foods — watching businesses collect data and do nothing with it.
          </p>
          <p className="text-[16px] leading-[1.82] text-[rgba(240,243,245,0.55)] mb-5.5">
            That&apos;s the problem I built Alchemetryx to solve.
            <strong className="text-[#F0F3F5] font-medium">Not dashboards. Not reports. Systems.</strong>
            Operational clarity that reduces owner dependency, speeds up decisions,
            and makes growth predictable.
          </p>
          <p className="text-[16px] leading-[1.82] text-[rgba(240,243,245,0.55)] mb-5.5">
            I work with UK-based owner-led SMEs who are drowning in tools
            and starving for direction.
            <strong className="text-[#F0F3F5] font-medium">Clarity before you commit</strong> — that&apos;s the promise.
            Every engagement starts with understanding how the business
            actually runs today, not how it should run in theory.
          </p>
        </div>
      </div>

      <div className="stat-strip flex gap-0 border-t border-[rgba(240,243,245,0.07)] mt-14 pt-12 w-full max-w-[1200px]">
        {STATS.map((stat, index) => (
          <div key={stat.label} className={`stat-item flex-1 pr-10 border-r border-[rgba(240,243,245,0.07)] mr-10 ${index === STATS.length - 1 ? 'border-r-0 mr-0 pr-0' : ''} rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3'}`}>
            <div className="stat-num text-[52px] font-black tracking-[-0.04em] leading-[1] text-[#F0F3F5] mb-2">
              {stat.value}
            </div>
            <div className="stat-lbl text-[10px] tracking-[0.22em] uppercase text-[rgba(240,243,245,0.55)]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
