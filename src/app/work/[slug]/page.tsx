'use client';

import { useEffect, useRef } from 'react';
import { useParams, notFound } from 'next/navigation';
import gsap from 'gsap';
import { CASE_STUDIES } from '@/lib/constants';
import CaseStudyNav from '@/components/ui/CaseStudyNav';
import ParticleCanvas from '@/components/canvas/ParticleCanvas';

export default function CaseStudyPage() {
    const params = useParams();
    const slug = params.slug as string;
    const data = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];
    const containerRef = useRef<HTMLDivElement>(null);

    if (!data) {
        notFound();
    }

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            gsap.set('.cs-content > *', { opacity: 0, y: 30 });

            tl.to('.cs-content > *', {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.2
            });
        }, containerRef);

        return () => ctx.revert();
    }, [slug]);

    return (
        <main className="cs-page" ref={containerRef}>
            <CaseStudyNav />
            <ParticleCanvas />

            <section className="cs-hero">
                <div className="cs-container cs-content">
                    <div className="cs-meta">
                        <span className="cs-client">{data.client}</span>
                        <span className="cs-dot">·</span>
                        <span className="cs-year">{data.year}</span>
                    </div>

                    <h1 className="cs-title">{data.title}</h1>
                    <p className="cs-subtitle">{data.subtitle}</p>

                    <div className="cs-grid">
                        <div className="cs-main">
                            <div className="cs-section">
                                <h2 className="cs-section-label">The Challenge</h2>
                                <p className="cs-text">{data.challenge}</p>
                            </div>

                            <div className="cs-section">
                                <h2 className="cs-section-label">The Solution</h2>
                                <p className="cs-text">{data.solution}</p>
                            </div>
                        </div>

                        <div className="cs-sidebar">
                            <div className="cs-section">
                                <h2 className="cs-section-label">Impact Metrics</h2>
                                <ul className="cs-list">
                                    {data.results.map((res, i) => (
                                        <li key={i}>{res}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="cs-section">
                                <h2 className="cs-section-label">Technologies</h2>
                                <div className="cs-tags">
                                    {data.tags.map(tag => (
                                        <span key={tag} className="cs-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
