'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function EyeSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const scrollY = window.scrollY;
            const offsetTop = containerRef.current.offsetTop;
            const scrollOffset = (scrollY - offsetTop) * 0.15;
            setTranslateY(scrollOffset);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            ref={containerRef}
            className="eye-section relative h-[100vh] overflow-hidden bg-[#000]"
        >
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <div
                    className="relative w-full h-[120%] -top-[10%] transition-transform duration-75 ease-out will-change-transform opacity-60"
                    style={{ transform: `translateY(${translateY}px)` }}
                >
                    <Image
                        src="/images/eye_closeup_cinematic.png"
                        alt="Cinematic Eye Background"
                        fill
                        className="object-cover grayscale brightness-50"
                        priority
                    />
                </div>
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#190805] via-transparent to-[#190805]" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center text-left px-[30px] md:px-[60px] max-w-[1200px] mx-auto w-full">
                <p className="text-[10px] md:text-[12px] font-semibold tracking-[0.4em] text-[#F0F3F5] uppercase mb-6 opacity-60">
                    The detail that changes everything
                </p>
                <h2 className="text-[clamp(36px,7.5vw,96px)] font-semibold text-[#F0F3F5] leading-[0.95] max-w-[900px]">
                    MOST BUSINESSES <br />
                    HAVE <span className="text-[#FC4F2F]">DATA.</span> <br />
                    FEW HAVE <span className="text-[#FC4F2F]">CLARITY.</span>
                </h2>
            </div>

            {/* Label in bottom left */}
            <div className="absolute bottom-[40px] left-[30px] md:left-[60px] z-20 flex items-center gap-4 group">
                <div className="w-[40px] h-[1px] bg-[#FC4F2F] transition-all group-hover:w-[60px]"></div>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#F0F3F5]/80">
                    What I Solve
                </span>
            </div>

            {/* Animated dot if applicable */}
            <div className="absolute left-[30px] md:left-[60px] top-1/2 -translate-y-1/2 z-20 hidden md:block">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FC4F2F] shadow-[0_0_12px_#FC4F2F] animate-pulse"></div>
            </div>
        </section>
    );
}
