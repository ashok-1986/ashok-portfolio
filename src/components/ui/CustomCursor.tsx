'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const ring = ringRef.current;

        if (!cursor || !ring) return;

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Direct position for small dot
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        };

        // Smooth lerp for ring
        const animate = () => {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;

            ring.style.left = `${ringX}px`;
            ring.style.top = `${ringY}px`;

            requestAnimationFrame(animate);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('clickable')
            ) {
                cursor.classList.add('hover');
                ring.classList.add('hover');
            } else {
                cursor.classList.remove('hover');
                ring.classList.remove('hover');
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        const animationFrame = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <>
            <div id="cur" ref={cursorRef}></div>
            <div id="cur-ring" ref={ringRef}></div>
        </>
    );
}
