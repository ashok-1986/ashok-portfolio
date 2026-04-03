'use client';

import { STATS } from '@/lib/constants';

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

const CERTS = [
  'Google Analytics Certified',
  'Google Tag Manager',
  'Intro to Generative AI — Google',
  'Intro to Large Language Models',
  'Intro to Responsible AI',
  'B.E. Electronics — University of Mumbai',
];

export default function About() {
  return (
    <section id="about">
      <div className="label rev">The Founder</div>

      <div className="about-grid">
        <div className="about-photo-wrap">
          <div className="about-photo-frame rev">
            <img src="/images/about.png" alt="Ashok Verma Portrait" className="portfolio-photo" />
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
              I am <strong>Ashok Verma</strong> — analytics consultant, systems architect,
              and founder of Alchemetryx Consulting.
            </p>
            <p className="rev">
              For 15 years I have sat inside businesses — from BookMyShow
              to L&amp;T Finance to Fichmu Foods — watching companies collect
              mountains of data while making decisions based on gut instinct.
              10-15 hours lost weekly to manual drudgery. 20-40% lead leaks.
              Growth that feels reactive, not predictable.
            </p>
            <p className="rev">
              I built Alchemetryx to fix that. My work lives at the
              intersection of decision intelligence, digital platforms, and
              intelligent automation — with one purpose: turning your fragmented
              workflows into a single source of truth. Simple. Integrated.
              Transferable.
            </p>
          </div>

          <div className="cert-row rev">
            {CERTS.map((cert) => (
              <div key={cert} className="cert">{cert}</div>
            ))}
          </div>

          <div className="skills-grid rev">
            {SKILLS.map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
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
