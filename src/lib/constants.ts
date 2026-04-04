export const NAVIGATION = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Career', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const;

export const STATS = [
  { number: '15', suffix: '+', label: 'Years In Analytics' },
  { number: '50', suffix: '+', label: 'Brands Worked With' },
  { number: '30', suffix: '%', label: 'Avg. CAC Reduction' },
  { number: '100', suffix: '%', label: 'Data Capture Accuracy' },
] as const;

export const EXPERTISE = [
  {
    num: '01',
    slug: 'decision-intelligence',
    label: 'Decision Intelligence',
    title: "You Have Data.\nYou Don't Have Clarity.",
    body: 'I build the instrumentation, dashboards, and KPI frameworks that turn your analytics stack into actual decisions — not just reporting theatre. GA4 audits, BigQuery pipelines, Looker Studio. All wired to answer the one question that matters: what do I do next?',
    tags: ['GA4 Audits', 'BigQuery', 'Looker Studio', 'KPI Design'],
  },
  {
    num: '02',
    slug: 'digital-platforms',
    label: 'Digital Platforms',
    title: "Every Pound\nAccountable.",
    body: 'Websites that track properly. Campaigns that convert, not just impress. Social channels that compound. I design the digital infrastructure that makes every marketing decision rooted in evidence — not gut feeling and hope.',
    tags: ['GTM', 'WordPress', 'SEO', 'Campaign Analytics'],
  },
  {
    num: '03',
    slug: 'intelligent-automation',
    label: 'Intelligent Automation',
    title: "Systems That\nScale Without You.",
    body: 'Marketing automation that actually personalises. Retention strategies built on real customer behaviour. Less manual work, more intelligent follow-through. A business that runs on systems — not on your constant attention.',
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

export const TESTIMONIALS = [
  {
    name: "Sunil Joshi",
    role: "Former CTO",
    company: "BookMyShow",
    content: "Ashok has a unique ability to bridge the gap between technical complexity and business growth. His work on our analytics infrastructure was pivotal in how we understood our customers.",
    image: "/images/sunil.jpg"
  },
  {
    name: "Sarah Jenkins",
    role: "Owner",
    company: "UK SME Client",
    content: "We were drowning in data but starving for insights. Ashok simplified everything. We now have a clear dashboard that tells us exactly where to invest our marketing budget.",
    image: "/images/sarah.jpg"
  },
  {
    name: "Rajesh Kumar",
    role: "Marketing Director",
    company: "Fichmu Foods",
    content: "The 30% reduction in CAC wasn't an accident. It was the direct result of the attribution models and automation Ashok built for us. He is a systems thinker through and through.",
    image: "/images/rajesh.jpg"
  }
] as const;

export const EXPERIENCE = [
  {
    id: 'alchemetryx-founder',
    period: 'Jun 2024 — Present',
    role: 'Founder & Principal',
    company: 'Alchemetryx Consulting · London / Mumbai',
    desc: 'Building the consulting practice I always wanted to find. Full-stack tracking audits (GA4, Adobe Analytics, GTM). Custom dashboards and KPI frameworks. Marketing automation with Make.com, HubSpot, Mailchimp. AI-powered workflows and agentic implementations. 90-Day Blueprint — diagnose friction, build transferable architecture.',
    metric: 'alchemetryx.com',
  },
  {
    id: 'seamless-ai-partner',
    period: 'Aug 2024 — Mar 2025',
    role: 'Strategic Partner',
    company: 'Seamless.AI · United States',
    desc: 'Helped sales professionals crush quotas and maximise revenue using AI-powered prospecting and total addressable market acquisition.',
    metric: 'AI Sales Partnership',
  },
  {
    id: 'lt-finance-manager',
    period: 'Aug 2022 — Jul 2023',
    role: 'Team Manager',
    company: 'L&T Finance · Mumbai',
    desc: 'Built KPIs for campaign initiatives. Implemented marketing automation for personalised campaigns and CRM. BigQuery data pipeline delivered in 3 months. Collaborated across Lines of Business to drive data-informed decisions.',
    metric: '+10% Customer Engagement',
  },
  {
    id: 'fichmu-foods-vp',
    period: 'May 2020 — Apr 2023',
    role: 'VP Analytics',
    company: 'Fichmu Foods · Mumbai',
    desc: 'Established digital marketing strategy framework. Managed Google Ads and social paid campaigns. Email marketing campaigns with segmentation and analysis. A/B testing and CRO audits. Reduced CAC by 30% through attribution redesign.',
    metric: '30% CAC Reduction · 20% Conversion Lift',
  },
  {
    id: 'bookmyshow-analytics',
    period: 'Jul 2014 — Mar 2020',
    role: 'Senior Manager, Digital Analytics',
    company: 'BookMyShow · Mumbai',
    desc: "Led analytics instrumentation for India's largest ticketing platform. Governed Google Analytics, GTM, and clickstream for web, mobile web, and app. Identified traffic trends and conversion opportunities. Built C-suite dashboards synthesising data from multiple sources. +10% website conversion rate improvement.",
    metric: '5 Years 9 Months · +10% Conversion',
  },
  {
    id: 'mtc-ecom-manager',
    period: 'Nov 2013 — Jul 2014',
    role: 'Manager, Analytics & Retention',
    company: 'MTC Ecom (PrettySecrets) · Mumbai',
    desc: 'ROI-driven insights for online ecosystem. KPI frameworks for Marketing and Customer Service teams. Tag implementation strategy. Retention strategy built on engagement, loyalty, value and sentiment data.',
    metric: 'Multi-team KPI Architecture',
  },
  {
    id: 'interactive-avenues-assistant',
    period: 'Dec 2012 — Oct 2013',
    role: 'Assistant Manager',
    company: 'Interactive Avenues · Mumbai',
    desc: 'Managed multiple web analytics projects. Initial scoping, implementation, tag audits, analysis and optimisation. Dashboard creation and automation. SEM analysis across campaign, adgroup and keyword performance.',
    metric: 'Agency Analytics Lead',
  },
  {
    id: 'eclerx-analyst',
    period: 'Jul 2009 — Dec 2012',
    role: 'Web Analyst → Sr Analyst → Assoc Manager',
    company: 'eClerx · Mumbai',
    desc: 'Where it all started. Handled 5-6 web analytics and VoC projects with 10+ headcount. Fortune 500 clients. Omniture, Google Analytics. Automated dashboards, segmentation, forecasting. Voice of Customer analysis for 4 clients. Analyst of the Year 2011-2012.',
    metric: 'Analyst of the Year 2011-12',
  },
] as const;
