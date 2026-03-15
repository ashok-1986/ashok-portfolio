'use client';

import { useEffect } from 'react';
import { EXPERTISE } from '@/lib/constants';

export default function Expertise() {
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
    <section id="expertise" className="relative py-[120px] px-[60px] bg-[#1d0906]">
      <div className="exp-header flex justify-between items-end w-full max-w-[1200px] mb-[72px]">
        <h2 className="sec-title text-[clamp(52px,7.5vw,110px)] font-black uppercase tracking-[-0.04em] leading-[0.88] text-[#F0F3F5]">
          Expe<em className="text-[#FC4F2F] not-italic">rtise</em>
        </h2>
        <p className="exp-desc text-[14px] leading-[1.75] text-[rgba(240,243,245,0.55)] max-w-[260px] text-right">
          Three pillars of digital analytics transformation
        </p>
      </div>

      <div className="cards-grid grid grid-cols-1 md:grid-cols-3 gap-px w-full max-w-[1200px] bg-[rgba(240,243,245,0.055)]">
        {EXPERTISE.map((item, index) => (
          <div key={item.number} className={`card bg-[#1d0906] px-10 py-[44px] relative overflow-hidden transition-all cursor-default rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3'}`}>
            <div className="card-num absolute top-7 right-8 text-[72px] font-black text-[rgba(240,243,245,0.03)] tracking-[-0.05em] leading-[1] pointer-events-none select-none">
              {item.number}
            </div>
            <div className="card-label text-[10px] font-bold tracking-[0.3em] uppercase text-[#FC4F2F] mb-6">
              {item.number}
            </div>
            <h3 className="card-title text-[22px] font-extrabold uppercase tracking-[-0.02em] text-[#F0F3F5] mb-[18px] leading-[1.05]">
              {item.title}
            </h3>
            <p className="card-body text-[14px] leading-[1.8] text-[rgba(240,243,245,0.55)]">
              {item.body}
            </p>
            <div className="tags flex flex-wrap gap-2 mt-7">
              {item.tools.map((tool) => (
                <span key={tool} className="tag text-[9.5px] font-bold tracking-[0.15em] uppercase text-[rgba(252,79,47,0.7)] border border-[rgba(252,79,47,0.2)] px-[11px] py-[5px]">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
