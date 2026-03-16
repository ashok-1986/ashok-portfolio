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
    label: 'Decision Intelligence',
    title: 'You Have Data.\nYou Don\'t Have Clarity.',
    body: 'I build the instrumentation, dashboards, and KPI frameworks that turn your analytics stack into actual decisions — not just reporting theatre. GA4 audits, BigQuery pipelines, Looker Studio. All wired to answer the one question that matters: what do I do next?',
    tags: ['GA4 Audits', 'BigQuery', 'Looker Studio', 'KPI Design'],
  },
  {
    num: '02',
    label: 'Digital Platforms',
    title: 'Every Pound\nAccountable.',
    body: 'Websites that track properly. Campaigns that convert, not just impress. Social channels that compound. I design the digital infrastructure that makes every marketing decision rooted in evidence — not gut feeling and hope.',
    tags: ['GTM', 'WordPress', 'SEO', 'Campaign Analytics'],
  },
  {
    num: '03',
    label: 'Intelligent Automation',
    title: 'Systems That\nScale Without You.',
    body: 'Marketing automation that actually personalizes. Retention strategies built on real customer behaviour. Less manual work, more intelligent follow-through. A business that runs on systems — not on your constant attention.',
    tags: ['CleverTap', 'MoEngage', 'VWO', 'Email Automation'],
  },
] as const;

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
