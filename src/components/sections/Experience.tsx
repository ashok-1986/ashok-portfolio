'use client';

import { EXPERIENCE } from '@/lib/constants';

export default function Experience() {
  return (
    <section id="experience">
      <div className="label rev">Career Arc</div>
      <h2 className="sec-title rev d1">Where I&apos;ve<br /><em>Been</em></h2>

      <div className="timeline">
        {/* Animated scanning line */}
        <div className="t-line" />

        {EXPERIENCE.map((item) => (
          <div key={item.id} className="t-item rev">
            <div className="t-dot"></div>
            <div className="t-period">{item.period}</div>
            <h3 className="t-role">{item.role}</h3>
            <div className="t-co">{item.company}</div>
            <p className="t-desc">{item.desc}</p>
            <div className="t-metric">{item.metric}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
