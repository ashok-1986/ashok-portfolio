export const NAVIGATION = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const;

export const STATS = [
  { value: '15+', label: 'Years In Digital Analytics' },
  { value: '30%', label: 'CAC Reduction Delivered' },
  { value: '50+', label: 'Projects Transformed' },
] as const;

export const EXPERTISE = [
  {
    number: '01',
    title: 'Analytics Strategy',
    body: 'GA4, Adobe Analytics, BigQuery — I architect the full pipeline. Not just implementation, but the operational logic that turns data into decisions.',
    tools: ['GA4', 'BigQuery', 'Looker Studio', 'Alteryx'],
  },
  {
    number: '02',
    title: 'Marketing Automation',
    body: 'CleverTap, MoEngage, Braze. I build engagement systems that scale personalization without scaling headcount.',
    tools: ['CleverTap', 'MoEngage', 'Braze', 'Segment'],
  },
  {
    number: '03',
    title: 'Conversion Optimization',
    body: 'VWO, Hotjar, session replays. I find where your funnel leaks and fix it with data-backed experiments, not guesses.',
    tools: ['VWO', 'Hotjar', 'Optimizely', 'Google Optimize'],
  },
] as const;

export const EXPERIENCE = [
  {
    period: '2019 — Present',
    role: 'Founder',
    company: 'Alchemetryx Consulting',
    description: 'Built a analytics consultancy for owner-led SMEs. Reduced CAC by 30% for clients. Built systems that reduced founder dependency on gut feel.',
    metric: '30% avg. CAC reduction',
  },
  {
    period: '2015 — 2019',
    role: 'Head of Digital Analytics',
    company: 'BookMyShow',
    description: 'Led analytics for India\'s largest ticketing platform. Managed team of 8. Built real-time dashboards used by C-suite daily.',
    metric: '10M+ monthly transactions',
  },
  {
    period: '2012 — 2015',
    role: 'Senior Analytics Manager',
    company: 'L&T Finance',
    description: 'First analytics hire. Built the entire digital measurement framework from scratch.',
    metric: 'First analytics hire',
  },
  {
    period: '2010 — 2012',
    role: 'Digital Analyst',
    company: 'Fichmu Foods',
    description: 'Solo analyst for FMCG brand. E-commerce analytics, supply chain optimization, pricing strategy.',
    metric: 'Solo analyst',
  },
] as const;
