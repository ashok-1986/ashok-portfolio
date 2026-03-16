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

    document.querySelectorAll('.rev').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="relative py-[120px] px-[60px] bg-[#190805]">
      <div className="label rev inline-flex items-center gap-[14px] text-[10px] font-semibold tracking-[0.35em] uppercase text-[#FC4F2F] mb-5">
        Career Journey
      </div>

      <h2 className="sec-title rev text-[clamp(52px,7.5vw,110px)] font-semibold text-[#F0F3F5] mb-[72px] max-w-[1200px]">
        Experience
      </h2>

      <div className="timeline max-w-[840px] w-full mt-16 relative">
        <div className="timeline-line absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#FC4F2F] to-[rgba(252,79,47,0.05)]"></div>

        {EXPERIENCE.map((item, index) => (
          <div
            key={index}
            className={`t-item rev pl-12 mb-16 relative transition-all duration-1000 cubic-bezier(0.16,1,0.3,1) ${index % 2 === 0 ? 'd1' : 'd2'}`}
            style={{ transitionDelay: `${index * 0.12}s` }}
          >
            <div className="t-dot absolute left-[-5px] top-2.5 w-[10px] h-[10px] bg-[#FC4F2F] rounded-full shadow-[0_0_18px_rgba(252,79,47,0.7)]"></div>
            <div className="t-period display-font text-[9.5px] font-semibold tracking-[0.28em] text-[#FC4F2F] mb-2.5">
              {item.period}
            </div>
            <h3 className="t-role text-[22px] font-semibold text-[#F0F3F5] mb-1 leading-[1.05]">
              {item.role}
            </h3>
            <div className="t-co text-[13px] font-medium text-[rgba(240,243,245,0.6)] tracking-[0.06em] mb-4">
              {item.company}
            </div>
            <p className="t-desc text-[14px] font-light leading-[1.78] text-[rgba(240,243,245,0.45)]">
              {item.desc}
            </p>
            {item.metric && (
              <div className="t-metric inline-flex items-center gap-2.5 mt-4 text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[#FC4F2F]">
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
