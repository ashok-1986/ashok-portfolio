'use client';

import { NAVIGATION } from '@/lib/constants';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[500] px-[30px] md:px-[60px] py-[20px] md:py-[26px] flex justify-between items-center bg-gradient-to-b from-[rgba(25,8,5,0.95)] to-transparent">
      <a href="/" className="nav-logo relative font-bold tracking-[0.28em] uppercase text-[#F0F3F5] transition-opacity hover:opacity-80">
        Ashok <em>Verma</em>
      </a>

      <ul className="hidden lg:flex gap-10 list-none m-0 p-0">
        {NAVIGATION.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-[10.5px] font-semibold tracking-[0.22em] uppercase text-[rgba(240,243,245,0.7)] no-underline transition-colors hover:text-[#F0F3F5]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="mailto:verma.86ashok@gmail.com"
        className="nav-cta relative inline-block text-[9px] md:text-[10.5px] font-bold tracking-[0.18em] uppercase text-[#190805] bg-[#FC4F2F] px-[18px] md:px-[26px] py-[9px] md:py-[11px] no-underline transition-opacity hover:opacity-80"
      >
        Let's Talk
      </a>
    </nav>
  );
}
