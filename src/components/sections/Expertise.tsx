'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERTISE } from '@/lib/constants';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal animation
    const cards = gsap.utils.toArray<HTMLElement>('.card');
    gsap.fromTo(cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        }
      }
    );

    // Mouse tilt effect
    cards.forEach((card) => {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        gsap.to(card, {
          rotateY: x * 15,
          rotateX: -y * 15,
          transformPerspective: 1000,
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      card.addEventListener('mousemove', handleMouseMove as any);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      card.addEventListener('mouseleave', handleMouseLeave as any);
    });
  }, []);

  return (
    <section id="expertise">
      <div className="exp-header">
        <h2 className="sec-title rev">
          Expe<em>rtise</em>
        </h2>
        <p className="exp-desc rev">
          Three pillars of digital analytics transformation
        </p>
      </div>

      <div className="cards-grid" ref={gridRef}>
        {EXPERTISE.map((item, index) => (
          <Link key={index} href={`/work/${item.slug}`} className="card-link">
            <div className="card">
              <div className="card-num">{item.num}</div>
              <div className="card-label">{item.label}</div>
              <h3 className="card-title">
                {item.title.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < item.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h3>
              <p className="card-body">{item.body}</p>
              <div className="tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="card-footer">
                <span className="read-more">View Case Study</span>
                <span className="arrow">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}


