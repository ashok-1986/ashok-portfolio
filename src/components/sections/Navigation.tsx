'use client';

import { useState, useEffect } from 'react';
import { NAVIGATION } from '@/lib/constants';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const sections = ['hero', 'about', 'expertise', 'experience', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={`nav-bar${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="nav-logo">
        ASHOK <em>VERMA</em>
      </a>

      <ul className="nav-links">
        {NAVIGATION.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={activeSection === item.href.replace('#', '') ? 'active' : ''}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta">
        Let&apos;s Talk
      </a>
    </nav>
  );
}
