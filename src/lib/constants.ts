export const NAVIGATION = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Career', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const;

export const STATS = [
  { number: '15', suffix: '+', label: 'Years In Digital Analytics' },
  { number: '30', suffix: '%', label: 'CAC Reduction Delivered' },
  { number: '50', suffix: '+', label: 'Projects Transformed' },
] as const;

export const EXPERTISE = [
  {
    num: '01',
    label: '01',
    title: 'Analytics Strategy',
    body: 'GA4, Adobe Analytics, BigQuery — I architect the full pipeline. Not just implementation, but the operational logic that turns data into decisions.',
    tags: ['GA4', 'BigQuery', 'Looker Studio', 'Alteryx'],
  },
  {
    num: '02',
    label: '02',
    title: 'Marketing Automation',
    body: 'CleverTap, MoEngage, Braze. I build engagement systems that scale personalization without scaling headcount.',
    tags: ['CleverTap', 'MoEngage', 'Braze', 'Segment'],
  },
  {
    num: '03',
    label: '03',
    title: 'Conversion Optimization',
    body: 'VWO, Hotjar, session replays. I find where your funnel leaks and fix it with data-backed experiments, not guesses.',
    tags: ['VWO', 'Hotjar', 'Optimizely', 'Google Optimize'],
  },
] as const;

export const EXPERIENCE = [
  {
    period: '2019 — Present',
    role: 'Founder',
    company: 'Alchemetryx Consulting',
    desc: 'Built a analytics consultancy for owner-led SMEs. Reduced CAC by 30% for clients. Built systems that reduced founder dependency on gut feel.',
    metric: '30% avg. CAC reduction',
  },
  {
    period: '2015 — 2019',
    role: 'Head of Digital Analytics',
    company: 'BookMyShow',
    desc: 'Led analytics for India\'s largest ticketing platform. Managed team of 8. Built real-time dashboards used by C-suite daily.',
    metric: '10M+ monthly transactions',
  },
  {
    period: '2012 — 2015',
    role: 'Senior Analytics Manager',
    company: 'L&T Finance',
    desc: 'First analytics hire. Built the entire digital measurement framework from scratch.',
    metric: 'First analytics hire',
  },
  {
    period: '2010 — 2012',
    role: 'Digital Analyst',
    company: 'Fichmu Foods',
    desc: 'Solo analyst for FMCG brand. E-commerce analytics, supply chain optimization, pricing strategy.',
    metric: 'Solo analyst',
  },
] as const;
