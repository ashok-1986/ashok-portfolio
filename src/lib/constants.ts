export const NAVIGATION = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Career', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const;

export const STATS = [
  { number: '15', suffix: '+', label: 'Years In Digital Analytics' },
  { number: '30', suffix: '%', label: 'CAC Reduction Delivered' },
  { number: '20', suffix: '%', label: 'Conversion Lift Achieved' },
] as const;

export const EXPERTISE = [
  {
    num: '01',
    slug: 'decision-intelligence',
    label: 'Decision Intelligence',
    title: 'You Have Data.\nYou Don\'t Have Clarity.',
    body: 'I build the instrumentation, dashboards, and KPI frameworks that turn your analytics stack into actual decisions — not just reporting theatre. GA4 audits, BigQuery pipelines, Looker Studio. All wired to answer the one question that matters: what do I do next?',
    tags: ['GA4 Audits', 'BigQuery', 'Looker Studio', 'KPI Design'],
  },
  {
    num: '02',
    slug: 'digital-platforms',
    label: 'Digital Platforms',
    title: 'Every Pound\nAccountable.',
    body: 'Websites that track properly. Campaigns that convert, not just impress. Social channels that compound. I design the digital infrastructure that makes every marketing decision rooted in evidence — not gut feeling and hope.',
    tags: ['GTM', 'WordPress', 'SEO', 'Campaign Analytics'],
  },
  {
    num: '03',
    slug: 'intelligent-automation',
    label: 'Intelligent Automation',
    title: 'Systems That\nScale Without You.',
    body: 'Marketing automation that actually personalizes. Retention strategies built on real customer behaviour. Less manual work, more intelligent follow-through. A business that runs on systems — not on your constant attention.',
    tags: ['CleverTap', 'MoEngage', 'VWO', 'Email Automation'],
  },
] as const;

export const CASE_STUDIES = {
  'decision-intelligence': {
    title: 'Decision Intelligence',
    subtitle: 'From Reporting Theatre to Strategic Clarity',
    client: 'Alchemetryx Strategy',
    year: '2024',
    challenge: 'Many SMEs collect data but fail to derive actionable insights, leading to "reporting theatre" where dashboards looked pretty but didn\'t drive growth.',
    solution: 'Implemented end-to-end Decision Intelligence frameworks. This involved rigorous GA4 audits, BigQuery data warehousing for historical depth, and custom KPI dashboards in Looker Studio designed for executive decision-making.',
    results: [
      'Eliminated 40% of redundant reporting hours',
      'Unified data across 3 distinct marketing channels',
      'Enabled real-time ROI tracking for high-ticket services'
    ],
    tags: ['GA4 Audits', 'BigQuery', 'Looker Studio', 'Decision Design']
  },
  'digital-platforms': {
    title: 'Digital Platforms',
    subtitle: 'Making Every Marketing Pound Accountable',
    client: 'Fichmu Foods (Case Study)',
    year: '2022',
    challenge: 'Customer Acquisition Costs (CAC) were rising without a clear understanding of which channels were actually driving high-value customers.',
    solution: 'Rebuilt the digital tracking infrastructure from the ground up using GTM and GA4. Implemented advanced e-commerce tracking and attribution modeling to identify the true source of conversions.',
    results: [
      '30% Reduction in Customer Acquisition Cost (CAC)',
      '20% Lift in conversion rate via attribution optimization',
      'Clean, reliable data for all performance marketing spend'
    ],
    tags: ['GTM', 'Conversion Optimization', 'Attribution Modeling', 'GA4']
  },
  'intelligent-automation': {
    title: 'Intelligent Automation',
    subtitle: 'Systems That Scale Without Constant Oversight',
    client: 'BookMyShow & L&T (Career Highlights)',
    year: '2020-2023',
    challenge: 'Manual marketing operations limited speed and personalization, resulting in missed opportunities for re-engagement and retention.',
    solution: 'Designed and deployed intelligent automation layers using CleverTap and MoEngage. Built behavioural triggers based on real-time user actions to deliver personalized re-engagement campaigns.',
    results: [
      '10% Increase in customer engagement metrics',
      'Identified and recovered 15% of abandoned checkout value',
      'Automated 80% of routine re-engagement communications'
    ],
    tags: ['CleverTap', 'MoEngage', 'Retention Strategy', 'Automation']
  }
} as const;

export const EXPERIENCE = [
  {
    period: 'Jan 2024 — Present',
    role: 'Founder & Principal',
    company: 'Alchemetryx Consulting · Mumbai',
    desc: 'Building the consulting practice I always wanted to find. GA4 audits, analytics strategy, and business systems design for UK owner-led SMEs. Helping businesses stop confusing data collection with decision-making.',
    metric: 'alchemetryx.com',
  },
  {
    period: 'Aug 2022 — Jul 2023',
    role: 'Team Manager',
    company: 'L&T Finance · Mumbai',
    desc: 'Built KPIs that raised customer engagement by 10%. Implemented marketing automation end-to-end. Delivered a complete BigQuery data pipeline in 3 months.',
    metric: '+10% Customer Engagement',
  },
  {
    period: 'May 2020 — May 2022',
    role: 'Head of Analytics & Strategy',
    company: 'Fichmu Foods · Navi Mumbai',
    desc: 'Reduced CAC by 30% through email marketing redesign. Drove 20% conversion lift on paid advertising. Built the entire digital marketing framework from zero.',
    metric: '30% CAC Reduction · 20% Conversion Lift',
  },
  {
    period: 'Jul 2014 — Mar 2020',
    role: 'Senior Manager, Digital Analytics',
    company: 'BookMyShow · Mumbai',
    desc: 'Led analytics instrumentation for one of India\'s largest ticketing platforms. Improved website conversion rates by 10%. Implemented marketing automation with 100% data capture accuracy.',
    metric: '6 Years · +10% Conversion',
  },
  {
    period: 'Nov 2013 — Jul 2014',
    role: 'Digital & Customer Analytics',
    company: 'PrettySecrets.com · Mumbai',
    desc: 'Built KPI frameworks across multiple teams. Led tag implementation strategy and customer retention programs built on real engagement data.',
    metric: 'Multi-team KPI Architecture',
  },
  {
    period: 'Jul 2009 — Nov 2013',
    role: 'Analyst → Sr. Analyst → Assoc. Manager',
    company: 'Interactive Avenues & eClerx · Mumbai',
    desc: 'Where it all started. Web analytics from scoping to implementation. Automated dashboards. Campaign optimisation. Voice of Customer analysis. Four years of building the foundation.',
    metric: 'The Foundation — 4 Years',
  },
] as const;
