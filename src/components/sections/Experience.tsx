'use client';

import { useEffect } from 'react';
import { EXPERIENCE } from '@/lib/constants';

export default function Experience() {
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

    document.querySelectorAll('.t-item').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="relative py-[120px] px-[60px] bg-[#190805]">
      <div className="section-label rev inline-flex items-center gap-[14px] text-[10px] font-bold tracking-[0.35em] uppercase text-[#FC4F2F] mb-5">
        <span className="w-[28px] h-[1px] bg-[#FC4F2F] inline-block"></span>
        Career Journey
      </div>

      <h2 className="sec-title text-[clamp(52px,7.5vw,110px)] font-black uppercase tracking-[-0.04em] leading-[0.88] text-[#F0F3F5] mb-[72px] max-w-[1200px]">
        Experience
      </h2>

      <div className="timeline max-w-[840px] w-full mt-16 relative">
        <div className="timeline-line absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#FC4F2F] to-[rgba(252,79,47,0.05)]"></div>

        {EXPERIENCE.map((item, index) => (
          <div key={index} className="t-item pl-12 mb-16 relative opacity-0 translate-x-[-24px] transition-all duration-700 ease" style={{ transitionDelay: `${index * 0.08}s` }}>
            <div className="t-dot absolute left-[-5px] top-2.5 w-[10px] h-[10px] bg-[#FC4F2F] rounded-full shadow-[0_0_18px_rgba(252,79,47,0.7)]"></div>
            <div className="t-period text-[9.5px] font-bold tracking-[0.28em] uppercase text-[#FC4F2F] mb-2.5">
              {item.period}
            </div>
            <h3 className="t-role text-[22px] font-extrabold uppercase tracking-[-0.02em] text-[#F0F3F5] mb-1 leading-[1.05]">
              {item.role}
            </h3>
            <div className="t-co text-[13px] text-[rgba(240,243,245,0.55)] tracking-[0.06em] mb-4">
              {item.company}
            </div>
            <p className="t-desc text-[14px] leading-[1.78] text-[rgba(240,243,245,0.38)]">
              {item.description}
            </p>
            {item.metric && (
              <div className="t-metric inline-flex items-center gap-2.5 mt-3.5 text-[10px] font-bold tracking-[0.18em] uppercase text-[#FC4F2F]">
                <span className="w-[18px] h-[1px] bg-[#FC4F2F]"></span>
                {item.metric}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
