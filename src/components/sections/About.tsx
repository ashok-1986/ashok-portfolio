'use client';

import Image from 'next/image';

const CERTS = [
  'Google Analytics Certified',
  'Google Tag Manager',
  'Intro to Generative AI — Google',
  'Intro to Responsible AI',
  'B.E. Electronics — Mumbai University',
  'Analyst of the Year 2011-12',
];

const SKILLS = [
  'GA4 & Adobe Analytics',
  'Google Tag Manager',
  'BigQuery & SQL',
  'Looker Studio',
  'Marketing Automation',
  'Make.com & Zapier',
  'HubSpot & Mailchimp',
  'CRO & A/B Testing',
  'WordPress & Elementor',
  'Agentic AI Workflows',
  'Data Pipeline Design',
  'Decision Intelligence',
];

export default function About() {
  return (
    <section id="about">
      <div className="about-label rev">The Founder</div>

      {/* Three column layout */}
      <div className="about-grid">

        {/* LEFT — text */}
        <div className="about-left rev">
          <h2 className="about-heading">About Me</h2>
          <p className="about-intro">
            I am Ashok Verma — analytics consultant, systems architect,
            and founder of Alchemetryx Consulting. After 15 years watching
            SMEs pour money into tools that amplified chaos, I built
            Alchemetryx to fix the real problem: disconnected systems
            killing decisions and growth.
          </p>
          <p className="about-intro">
            We don&apos;t sell AI hype. We design simple, integrated systems
            that turn fragmented workflows into a single source of truth.
            Think: 10-15 hours reclaimed weekly, 20-40% lead leaks plugged,
            and decisions that stick — without owner dependency.
          </p>
          <div className="about-arrow">→</div>
        </div>

        {/* CENTER — stat card + main photo */}
        <div className="about-center rev">
          <div className="about-stat-card">
            <div className="stat-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                stroke="#FC4F2F" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a10 10 0 0 1 10 10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className="stat-number">15+</div>
            <p className="stat-desc">Years delivering analytics outcomes for enterprise and SME clients</p>
          </div>

          <div className="about-photo-main">
            <Image
              src="/images/about.png"
              alt="Ashok Verma"
              fill
              sizes="30vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center top',
                filter: 'brightness(0.75) contrast(1.1) saturate(0.4)',
              }}
            />
          </div>
        </div>

        {/* RIGHT — small photo + bullets */}
        <div className="about-right rev">
          <div className="about-photo-small">
            <Image
              src="/images/photo4.jpg"
              alt="Ashok Verma"
              fill
              sizes="20vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center top',
                filter: 'brightness(0.75) contrast(1.1) saturate(0.4)',
              }}
            />
            <div className="photo-arrow-btn">↗</div>
          </div>


          <div className="about-bullets">
            <div className="about-bullet">
              <span className="bullet-icon">+</span>
              <p>With 15+ years of experience, I specialise in decision intelligence, digital analytics, and marketing automation that solves real operational problems.</p>
            </div>
            <div className="about-bullet">
              <span className="bullet-icon">+</span>
              <p>I work closely with UK owner-led SMEs, blending systems thinking with strategy to deliver predictable growth — without owner dependency.</p>
            </div>
          </div>

          <div className="about-stats-row">
            <div className="about-stat-item">
              <span className="stat-val">50<em>+</em></span>
              <span className="stat-lbl">Brands Worked With</span>
            </div>
            <div className="about-stat-item">
              <span className="stat-val">30<em>%</em></span>
              <span className="stat-lbl">Avg. CAC Reduction</span>
            </div>
            <div className="about-stat-item">
              <span className="stat-val">100<em>%</em></span>
              <span className="stat-lbl">Data Accuracy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="about-certs rev">
        {CERTS.map((cert) => (
          <span key={cert} className="cert-badge">{cert}</span>
        ))}
      </div>

      {/* Skills grid */}
      <div className="skills-grid rev">
        {SKILLS.map((skill) => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  );
}
