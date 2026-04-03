'use client';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';


export default function LenisProvider({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

            orientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.8,
            touchMultiplier: 1.5,
            infinite: false,
        });

        lenisRef.current = lenis;

        // Connect GSAP ScrollTrigger to Lenis
        lenis.on('scroll', () => {
            if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
                (window as any).ScrollTrigger.update();
            }
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
