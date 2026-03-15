'use client';

import { useEffect } from 'react';
import { NAVIGATION } from '@/lib/constants';

export default function Navigation() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    const ring = document.querySelector('.cursor-ring') as HTMLElement;

    if (!cursor || !ring) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      ring.style.left = `${e.clientX}px`;
      ring.style.top = `${e.clientY}px`;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        cursor.classList.add('hover');
        ring.classList.add('hover');
      } else {
        cursor.classList.remove('hover');
        ring.classList.remove('hover');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-[60px] py-7 flex justify-between items-center">
      <div className="text-[13px] font-medium tracking-[0.25em] uppercase text-[#F0F3F5]">
        Ashok <span className="text-[#FC4F2F]">Verma</span>
      </div>

      <ul className="flex gap-10 list-none">
        {NAVIGATION.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-[11px] font-medium tracking-[0.2em] uppercase text-[rgba(240,243,245,0.55)] no-underline transition-colors hover:text-[#F0F3F5]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="mailto:verma.86ashok@gmail.com"
        className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#190805] bg-[#FC4F2F] px-6 py-2.5 no-underline transition-opacity hover:opacity-85"
      >
        Let's Talk
      </a>
    </nav>
  );
}
