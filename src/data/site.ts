export const site = {
  name: 'TechNektar',
  tagline: 'Cross-Pollinating Innovation',
  title: 'TechNektar™ — Where frontier research becomes product',
  description:
    'TechNektar™ is an independent research & engineering consultancy working across AI, deep-tech engineering and fintech — publishing open research and shipping evidence-gated systems.',
  email: 'info@technektar.com',
  nav: [
    { label: 'Practice', href: '#practice' },
    { label: 'Research', href: '#research' },
    { label: 'Media', href: '#media' },
    { label: 'Writing', href: '#writing' },
  ],
  cta: { label: 'Work with us', href: '#contact' },
  hero: {
    badge: 'Research & Engineering',
    heading: 'Where frontier research becomes product',
    sub: 'TechNektar™ works across three fields that feed each other — <strong>AI</strong>, <strong>deep-tech engineering</strong> and <strong>fintech</strong>. Our own research goes out into the world as papers, code, apps and podcasts; client work stays confidential, and yours to keep.',
    primary: { label: 'Explore the work →', href: '#research' },
    secondary: { label: 'Book a conversation', href: '#contact' },
    chips: ['Mechanistic Interpretability', 'RL Control', 'Causal Inference', 'World Models'],
  },
  addresses: [
    {
      label: 'London · correspondence',
      lines: ['TechNektar', '5 Brayford Square', 'London E1 0SG', 'United Kingdom'],
    },
    {
      label: 'Bengaluru · registered',
      lines: ['TechNektar', 'Banashankari', 'Bengaluru 560109', 'Karnataka, India'],
    },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/SharathSPhD' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/technektar' },
    { label: 'X', href: 'https://x.com/Dr_SharathS' },
    { label: 'Scholar', href: 'https://scholar.google.com/citations?user=dcyu5ucAAAAJ&hl=en' },
    { label: 'Substack', href: 'https://technektar.substack.com/' },
    { label: 'YouTube', href: 'https://www.youtube.com/playlist?list=PLDVuUgaLkOL1O58tGrO9MZ0RCqO3fxq43' },
  ],
  footer: {
    entity:
      'TechNektar™ is a trademark registered in the United Kingdom. An independent research & engineering consultancy, registered in Bengaluru, India.',
    copyright: '© 2026 TechNektar™ · Cross-Pollinating Innovation',
  },
} as const;
