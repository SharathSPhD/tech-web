export const site = {
  name: 'TechNektar',
  tagline: 'Cross-Pollinating Innovation',
  title: 'TechNektar™ — Where frontier research becomes product',
  description:
    'TechNektar™ is an independent research and engineering consultancy across AI, deep-tech and fintech — foundation models, mechanistic interpretability, fine-tuning, reinforcement-learning control, aerodynamics, turbomachinery and causal analytics.',
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
    sub: 'TechNektar™ works across three fields that feed each other — <strong>AI</strong>, <strong>deep-tech engineering</strong> and <strong>fintech</strong>.',
    primary: { label: 'Explore the work →', href: '#research' },
    secondary: { label: 'Book a conversation', href: '#contact' },
    /** Three tiers, coarse to specific: where we work, what we practise, what we build. */
    capabilities: [
      {
        label: 'Domains',
        items: ['AI', 'Energy', 'Aerospace', 'Power Generation', 'Fintech', 'Neuroscience'],
      },
      {
        label: 'Disciplines',
        items: ['Software', 'Aerodynamics', 'Turbomachinery', 'Trading & Pricing'],
      },
      {
        label: 'Solutions',
        items: [
          'Mechanistic Interpretability',
          'Fine-Tuning',
          'Pretraining',
          'Foundation Models',
          'Design Optimisation',
          'Controls',
          'Analytics',
          'Causal Inference',
        ],
      },
    ],
  },
  // Modelled as fields, not display strings: the footer lines and the
  // schema.org PostalAddress are both derived from these (see addressLines).
  addresses: [
    {
      label: 'London',
      street: '5 Brayford Square',
      locality: 'London',
      postalCode: 'E1 0SG',
      country: 'United Kingdom',
      countryCode: 'GB',
    },
    {
      label: 'Bengaluru',
      street: 'Banashankari',
      locality: 'Bengaluru',
      postalCode: '560109',
      region: 'Karnataka',
      country: 'India',
      countryCode: 'IN',
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
    // Status is deliberately precise: the UK mark is published for opposition,
    // not yet registered — claiming registration early is an offence (TMA 1994 s.95).
    entity:
      'TechNektar™ — UK trade mark application No. UK00004419288 (classes 9, 16, 42), published for opposition on 31 July 2026. An independent research & engineering consultancy; a Udyam-registered micro enterprise based in Bengaluru, India.',
    copyright: '© 2026 TechNektar™ · Cross-Pollinating Innovation',
  },
} as const;

export type Address = (typeof site.addresses)[number];

/** The postal block as displayed, derived from the structured address. */
export function addressLines(addr: Address): string[] {
  const region = 'region' in addr ? addr.region : undefined;
  return [
    site.name,
    addr.street,
    `${addr.locality} ${addr.postalCode}`,
    region ? `${region}, ${addr.country}` : addr.country,
  ];
}
