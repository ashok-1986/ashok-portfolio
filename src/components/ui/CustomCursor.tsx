'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [cursorText, setCursorText] = useState('');
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;
        if (!cursor || !follower) return;

        // Movement logic
        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'none'
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.4,
                ease: 'power3.out'
            });
        };

        // Hover logic
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const hoverElement = target.closest('a, button, .card-link, [data-cursor]');

            if (hoverElement) {
                setIsHovering(true);
                const text = hoverElement.getAttribute('data-cursor');
                setCursorText(text || '');

                gsap.to(follower, {
                    scale: 3,
                    backgroundColor: 'rgba(252, 79, 47, 0.1)',
                    borderColor: 'rgba(252, 79, 47, 0.5)',
                    duration: 0.3
                });
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const hoverElement = target.closest('a, button, .card-link, [data-cursor]');

            if (hoverElement) {
                setIsHovering(false);
                setCursorText('');

                gsap.to(follower, {
                    scale: 1,
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(240, 243, 245, 0.2)',
                    duration: 0.3
                });
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor-point" />
            <div ref={followerRef} className="custom-cursor-follower">
                {cursorText && <span className="cursor-text">{cursorText}</span>}
            </div>
        </>
    );
}
