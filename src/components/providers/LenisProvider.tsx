'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

let globalLenis: Lenis | null = null;

export function getLenis() {
    return globalLenis;
}

export default function LenisProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.85,
            touchMultiplier: 1.8,
        });

        globalLenis = lenis;
        if (typeof window !== 'undefined') {
            (window as any).__lenis = lenis;
        }


        let rafId: number;
        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            globalLenis = null;
        };
    }, []);

    return <>{children}</>;
}
