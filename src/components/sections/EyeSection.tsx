'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function EyeSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const scrollY = window.scrollY;
            const offsetTop = containerRef.current.offsetTop;

            // Ported logic: translateY(${(y - es.closest('.eye-section').offsetTop) * 0.1}px)
            // Here y is the scroll position
            const scrollOffset = (scrollY - offsetTop) * 0.1;
            setTranslateY(scrollOffset);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            ref={containerRef}
            className="eye-section relative h-[90vh] overflow-hidden bg-[#1D0906]"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-b from-[#1D0906] via-transparent to-[#1D0906]" />
            </div>

            <div className="relative z-10 w-full max-w-[1400px] h-full flex items-center justify-center pointer-events-none">
                <div
                    className="relative transition-transform duration-100 ease-out will-change-transform"
                    style={{ transform: `scale(1.04) translateY(${translateY}px)` }}
                >
                    <Image
                        src="/images/eye-v3.png"
                        alt="Interactive Eye"
                        width={1200}
                        height={800}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Text overlay similar to v3 if needed */}
            <div className="absolute inset-x-0 bottom-[15%] z-20 flex justify-center">
                <div className="text-center">
                    <p className="display-font text-[10px] font-bold tracking-[0.4em] text-[#FC4F2F] mb-4">
                        Total Visibility
                    </p>
                    <h2 className="display-font text-[clamp(40px,8vw,90px)] text-[#F0F3F5] leading-[0.9]">
                        I See What <br />
                        <span className="block text-transparent" style={{ WebkitTextStroke: '1px rgba(240,243,245,0.3)' }}>Others Miss</span>
                    </h2>
                </div>
            </div>
        </section>
    );
}
