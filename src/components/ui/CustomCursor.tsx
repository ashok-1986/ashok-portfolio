'use client';

import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let cx = 0;
        let cy = 0;
        let rx = 0;
        let ry = 0;

        const handleMouseMove = (e: MouseEvent) => {
            cx = e.clientX;
            cy = e.clientY;
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${cx}px, ${cy}px)`;
            }
        };

        const animateRing = () => {
            rx += (cx - rx) * 0.13;
            ry += (cy - ry) * 0.13;
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
            }
            requestAnimationFrame(animateRing);
        };

        const handleMouseEnter = () => {
            if (dotRef.current) {
                dotRef.current.style.width = '18px';
                dotRef.current.style.height = '18px';
            }
            if (ringRef.current) {
                ringRef.current.style.width = '56px';
                ringRef.current.style.height = '56px';
                ringRef.current.style.borderColor = 'var(--edge)';
            }
        };

        const handleMouseLeave = () => {
            if (dotRef.current) {
                dotRef.current.style.width = '10px';
                dotRef.current.style.height = '10px';
            }
            if (ringRef.current) {
                ringRef.current.style.width = '38px';
                ringRef.current.style.height = '38px';
                ringRef.current.style.borderColor = 'rgba(252,79,47,.4)';
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        requestAnimationFrame(animateRing);

        const interactiveElements = document.querySelectorAll('a, button, .card, .tilt');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-[10px] h-[10px] bg-[#fb4f2f] rounded-full pointer-events-none z-[9999] transition-[width,height] duration-300 -translate-x-1/2 -translate-y-1/2"
                id="cur"
            />
            <div
                ref={ringRef}
                className="fixed top-0 left-0 w-[38px] h-[38px] border border-[rgba(252,79,47,.4)] rounded-full pointer-events-none z-[9998] transition-[width,height,border-color] duration-300 -translate-x-1/2 -translate-y-1/2"
                id="cur-ring"
            />
            <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, .card, .tilt {
          cursor: none;
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
