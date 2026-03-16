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
            <img src="/images/about.png" alt="Ashok Verma Portrait" />
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
              I am <strong>Ashok Verma</strong> — analytics consultant, systems thinker,
              and founder of Alchemetryx Consulting.
            </p>
            <p className="rev">
              For 15 years I have sat inside businesses — from BookMyShow to L&amp;T Finance —
              and watched companies collect mountains of data while making decisions based on
              gut instinct.
            </p>
            <p className="rev">
              I built Alchemetryx to fix that. My work lives at the intersection of{' '}
              <strong>digital analytics, marketing automation, and business strategy</strong>{' '}
              — with one purpose: making your data work for your decisions.
            </p>
          </div>

          <div className="cert-row rev">
            <div className="cert">Google Analytics Certified</div>
            <div className="cert">Google Tag Manager</div>
            <div className="cert">HubSpot Marketing Automation</div>
            <div className="cert">BigQuery · SQL</div>
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
