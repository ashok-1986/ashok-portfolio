'use client';

import { STATS } from '@/lib/constants';

export default function About() {
  return (
    <section id="about">
      <div className="label rev">The Founder</div>

      <div className="about-grid">
        <div className="about-photo-wrap">
          <div className="about-photo-frame rev">
            {/* Cinematic grayscale portrait placeholder */}
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" alt="Ashok Verma" />
            <div className="fr-tl"></div>
            <div className="fr-br"></div>
          </div>
        </div>

        <div className="about-content">
          <h2 className="about-statement rev">
            Not A<br />
            <span className="o">Tool</span><br />
            Seller.<br />
            A System<br />
            Builder.
          </h2>

          <div className="about-body">
            <p className="rev">
              I&apos;m <strong>Ashok Verma</strong>, founder of Alchemetryx Consulting.
              For 15 years I&apos;ve sat inside the machine — at BookMyShow, L&T Finance,
              Fichmu Foods — watching businesses collect data and do nothing with it.
            </p>
            <p className="rev">
              That&apos;s the problem I built Alchemetryx to solve.
              <strong>Not dashboards. Not reports. Systems.</strong>
              Operational clarity that reduces owner dependency, speeds up decisions,
              and makes growth predictable.
            </p>
            <p className="rev">
              I work with UK-based owner-led SMEs who are drowning in tools
              and starving for direction.
              <strong>Clarity before you commit</strong> — that&apos;s the promise.
            </p>
          </div>

          <div className="cert-row rev">
            <div className="cert">GA4 Certified</div>
            <div className="cert">Gen AI — Google</div>
            <div className="cert">Coursera Analytics</div>
            <div className="cert">B.E. Electronics</div>
          </div>
        </div>
      </div>

      <div className="stat-strip">
        {STATS.map((stat, index) => (
          <div key={index} className={`stat-item rev d${index}`}>
            <div className="stat-num">
              {stat.number}<em>{stat.suffix}</em>
            </div>
            <div className="stat-lbl">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
