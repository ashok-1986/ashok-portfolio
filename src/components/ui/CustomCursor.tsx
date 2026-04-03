'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let cx = window.innerWidth / 2;
        let cy = window.innerHeight / 2;
        let rx = cx, ry = cy;
        let rafId: number;

        const onMove = (e: MouseEvent) => {
            cx = e.clientX;
            cy = e.clientY;
            dot.style.left = `${cx}px`;
            dot.style.top = `${cy}px`;
        };

        const trackRing = () => {
            rx += (cx - rx) * 0.12;
            ry += (cy - ry) * 0.12;
            ring.style.left = `${rx}px`;
            ring.style.top = `${ry}px`;
            rafId = requestAnimationFrame(trackRing);
        };
        trackRing();

        const onEnter = () => {
            dot.style.transform = 'translate(-50%,-50%) scale(1.8)';
            ring.style.width = '56px';
            ring.style.height = '56px';
            ring.style.borderColor = 'var(--edge)';
        };

        const onLeave = () => {
            dot.style.transform = 'translate(-50%,-50%) scale(1)';
            ring.style.width = '38px';
            ring.style.height = '38px';
            ring.style.borderColor = 'rgba(252,79,47,0.4)';
        };

        document.addEventListener('mousemove', onMove, { passive: true });
        const targets = document.querySelectorAll('a, button, .expertise-card, .t-item, .card, .card-link');
        targets.forEach(el => {
            el.addEventListener('mouseenter', onEnter);
            el.addEventListener('mouseleave', onLeave);
        });

        // Hide on mobile
        const isMobile = window.matchMedia('(pointer: coarse)').matches;
        if (isMobile) {
            dot.style.display = 'none';
            ring.style.display = 'none';
        }

        return () => {
            cancelAnimationFrame(rafId);
            document.removeEventListener('mousemove', onMove);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} style={{
                position: 'fixed',
                width: '10px',
                height: '10px',
                background: 'var(--edge)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
                transform: 'translate(-50%, -50%)',
                transition: 'transform 0.25s var(--ease-out)',
                mixBlendMode: 'screen',
                top: 0,
                left: 0,
            }} />
            <div ref={ringRef} style={{
                position: 'fixed',
                width: '38px',
                height: '38px',
                border: '1px solid rgba(252,79,47,0.4)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9998,
                transform: 'translate(-50%, -50%)',
                transition: 'width 0.3s var(--ease-out), height 0.3s var(--ease-out), border-color 0.3s ease',
                top: 0,
                left: 0,
            }} />
        </>
    );
}
