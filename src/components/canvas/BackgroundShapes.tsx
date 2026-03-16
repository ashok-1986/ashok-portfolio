'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function BackgroundShapes() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Create subtle floating animation for blob 1
            gsap.to('.blob-1', {
                x: '20vw',
                y: '10vh',
                duration: 20,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            // Blob 2
            gsap.to('.blob-2', {
                x: '-10vw',
                y: '30vh',
                duration: 25,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: 2
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-shapes-container">
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="bg-vignette" />
        </div>
    );
}
