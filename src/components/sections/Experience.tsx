'use client';

import { EXPERIENCE } from '@/lib/constants';

export default function Experience() {
  return (
    <section id="experience">
      <div className="label rev">Career Journey</div>
      <h2 className="sec-title rev">Experience</h2>

      <div className="timeline">
        {EXPERIENCE.map((item, index) => (
          <div key={index} className="t-item rev">
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
