'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let cx = 0, cy = 0, rx = 0, ry = 0;

        const onMove = (e: MouseEvent) => {
            cx = e.clientX;
            cy = e.clientY;
            dot.style.left = `${cx}px`;
            dot.style.top = `${cy}px`;
        };

        const trackRing = () => {
            rx += (cx - rx) * 0.13;
            ry += (cy - ry) * 0.13;
            ring.style.left = `${rx}px`;
            ring.style.top = `${ry}px`;
            requestAnimationFrame(trackRing);
        };
        trackRing();

        const onEnter = () => {
            dot.style.width = '18px';
            dot.style.height = '18px';
            ring.style.width = '56px';
            ring.style.height = '56px';
            ring.style.borderColor = '#FC4F2F';
        };
        const onLeave = () => {
            dot.style.width = '10px';
            dot.style.height = '10px';
            ring.style.width = '38px';
            ring.style.height = '38px';
            ring.style.borderColor = 'rgba(252,79,47,0.4)';
        };

        document.addEventListener('mousemove', onMove, { passive: true });

        const interactables = document.querySelectorAll('a, button, .card');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', onEnter);
            el.addEventListener('mouseleave', onLeave);
        });

        return () => {
            document.removeEventListener('mousemove', onMove);
            interactables.forEach(el => {
                el.removeEventListener('mouseenter', onEnter);
                el.removeEventListener('mouseleave', onLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={dotRef} style={{
                position: 'fixed',
                width: '10px',
                height: '10px',
                background: '#FC4F2F',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
                transform: 'translate(-50%, -50%)',
                transition: 'width .25s, height .25s',
                mixBlendMode: 'screen',
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
                transition: 'width .3s, height .3s, border-color .3s',
            }} />
        </>
    );
}
