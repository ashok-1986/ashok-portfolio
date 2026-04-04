'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERTISE } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.exp-card');
    const eventListeners: Array<{
      element: Element;
      type: string;
      handler: EventListener;
    }> = [];

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      }
    );

    cards.forEach((card) => {
      const onMove = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = card.getBoundingClientRect();
        const x = ((mouseEvent.clientX - rect.left) / rect.width - 0.5) * 12;
        const y = ((mouseEvent.clientY - rect.top) / rect.height - 0.5) * -12;
        card.style.transform =
          `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) translateZ(6px)`;
      };
      const onLeave = () => {
        card.style.transform =
          'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
      };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);

      eventListeners.push(
        { element: card, type: 'mousemove', handler: onMove },
        { element: card, type: 'mouseleave', handler: onLeave }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      eventListeners.forEach(({ element, type, handler }) => {
        element.removeEventListener(type, handler);
      });
    };
  }, []);

  return (
    <section id="expertise">
      <div className="exp-header">
        <div className="section-label rev">What I Solve</div>
        <h2 className="sec-title rev">
          Three<em>Pillars</em>
        </h2>
        <p className="exp-desc rev">
          One goal: a business that does not need you in every room,
          every decision, every day.
        </p>
      </div>

      <div className="exp-grid" ref={gridRef}>
        {EXPERTISE.map((item) => (
          <div key={item.slug} className="exp-card">
            <div className="exp-card-inner">
              <span className="exp-num">{item.num}</span>
              <div className="exp-label">{item.label}</div>
              <h3 className="exp-card-title">
                {item.title.split('\n').map((line, i) => (
                  <span key={i} style={{ display: 'block' }}>{line}</span>
                ))}
              </h3>
              <p className="exp-card-body">{item.body}</p>
              <div className="exp-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="exp-tag">{tag}</span>
                ))}
              </div>
              <div className="exp-card-foot">
                <a
                  href={item.slug ? `/work/${item.slug}` : '#expertise'}
                  className="exp-read-more"
                  aria-label={`View ${item.label} case study`}
                >
                  View Case Study
                  <span className="exp-arrow">→</span>
                </a>
              </div>
            </div>
            <div className="exp-card-accent" />
          </div>
        ))}
      </div>
    </section>
  );
}
