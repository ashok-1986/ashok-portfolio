'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TESTIMONIALS } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.testimonial-card',
                {
                    opacity: 0,
                    y: 40
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%',
                        once: true,
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="testimonials" ref={containerRef} className="testimonials-section">
            <div className="section-container">
                <div className="label rev">Wall of Trust</div>
                <h2 className="sec-title rev">
                    Client <em>Voices</em>
                </h2>

                <div className="testimonial-grid">
                    {TESTIMONIALS.map((item, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="quote-icon">“</div>
                            <p className="testimonial-content">{item.content}</p>
                            <div className="testimonial-author">
                                <div className="author-info">
                                    <div className="author-name">{item.name}</div>
                                    <div className="author-role">
                                        {item.role} · <span className="author-company">{item.company}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
