'use client';

import { NAVIGATION } from '@/lib/constants';

export default function Navigation() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        ASHOK <em>VERMA</em>
      </a>

      <ul className="nav-links">
        {NAVIGATION.map((item) => (
          <li key={item.label}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta">
        Let&apos;s Talk
      </a>
    </nav>
  );
}
