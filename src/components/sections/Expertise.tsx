'use client';

import { useEffect } from 'react';
import { EXPERTISE } from '@/lib/constants';
import { useTilt } from '@/hooks/useTilt';

interface ExpertiseItem {
  number: string;
  title: string;
  body: string;
  tools: string[];
}

function ExpertiseCard({ item, index }: { item: ExpertiseItem, index: number }) {
  const tiltRef = useTilt({ maxRotation: 12, perspective: 800 });

  return (
    <div
      ref={tiltRef as any}
      className={`card bg-[#1d0906] px-10 py-[44px] relative overflow-hidden transition-all cursor-default rev ${index % 3 === 0 ? 'd1' : index % 3 === 1 ? 'd2' : 'd3'}`}
    >
      <div className="card-num absolute top-7 right-8 text-[72px] font-semibold text-[rgba(240,243,245,0.03)] tracking-[-0.05em] leading-[1] pointer-events-none select-none">
        {item.number}
      </div>
      <div className="card-label display-font text-[10px] font-semibold tracking-[0.3em] text-[#FC4F2F] mb-6">
        {item.number}
      </div>
      <h3 className="card-title text-[22px] font-semibold text-[#F0F3F5] mb-[18px] leading-[1.05] whitespace-pre-line">
        {item.title}
      </h3>
      <p className="card-body text-[14px] font-light leading-[1.8] text-[rgba(240,243,245,0.7)]">
        {item.body}
      </p>
      <div className="tags flex flex-wrap gap-2 mt-7">
        {item.tools.map((tool) => (
          <span key={tool} className="tag text-[9.5px] font-semibold tracking-[0.15em] uppercase text-[rgba(252,79,47,0.7)] border border-[rgba(252,79,47,0.2)] px-[11px] py-[5px]">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

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
    <section id="expertise" className="relative py-[160px] md:py-[200px] px-[30px] md:px-[60px] bg-[#1d0906]">
      <div className="max-w-[1200px] mx-auto">
        <div className="exp-header flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-[72px] gap-6">
          <h2 className="sec-title rev text-[clamp(52px,7.5vw,110px)] font-semibold text-[#F0F3F5] leading-[0.9]">
            Expe<em className="text-[#FC4F2F] not-italic">rtise</em>
          </h2>
          <p className="exp-desc rev d2 text-[14px] font-light leading-[1.75] text-[rgba(240,243,245,0.7)] max-w-[260px] md:text-right">
            Three pillars of digital analytics transformation
          </p>
        </div>

        <div className="cards-grid grid grid-cols-1 md:grid-cols-3 gap-px w-full bg-[rgba(240,243,245,0.055)]">
          {(EXPERTISE as unknown as ExpertiseItem[]).map((item, index) => (
            <ExpertiseCard key={item.number} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
