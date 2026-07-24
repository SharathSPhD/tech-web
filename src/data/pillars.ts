export const practice = {
  kicker: 'The practice',
  heading: 'Three fields, cross-pollinating. Ideas from one sharpen the others.',
  sub: 'Ancient epistemology tightens our AI. Aerospace-grade rigor tunes our control systems. Causal thinking from physics reshapes how we price. We consult across all three — and open-source the research.',
  cards: [
    {
      id: 'ai',
      number: '01 — AI',
      title: 'Machines that reason',
      body: 'Mechanistic interpretability & AI safety, LLM fine-tuning, Claude Code tooling, creative world models, and foundation models built from scratch.',
      link: { label: 'See AI research →', href: '#pillar-ai' },
      icon: 'ai',
      accent: 'accent',
    },
    {
      id: 'deeptech',
      number: '02 — DEEP-TECH',
      title: 'Systems that run',
      body: 'Reinforcement-learned control of supercritical-CO₂ power cycles, digital twins & surrogate models, turbomachinery, and two decades of energy engineering.',
      link: { label: 'See deep-tech →', href: '#pillar-deeptech' },
      icon: 'deeptech',
      accent: 'accent2',
    },
    {
      id: 'fintech',
      number: '03 — FINTECH',
      title: 'Prices that learn',
      body: 'Causal world models for retail pricing, convergent cross-mapping for causal inference, information-theoretic pricing, and the storytelling to explain it.',
      link: { label: 'See fintech →', href: '#pillar-fintech' },
      icon: 'fintech',
      accent: 'accentDeep',
    },
  ],
} as const;

export const services = {
  kicker: 'Consulting',
  heading: 'Bring us the problem that sits between fields.',
  sub: 'Engagements from a two-day teardown to a multi-month build. We prototype fast, ship evidence-gated, and leave you the code and the reasoning.',
  columns: [
    {
      title: 'AI R&D & Safety',
      colorVar: 'var(--color-accent-700)',
      items: [
        'Mechanistic interpretability audits',
        'Jailbreak hardening & red-teaming',
        'Domain fine-tuning & reasoning engines',
        'Agent orchestration & Claude Code tooling',
      ],
    },
    {
      title: 'Deep-Tech Engineering',
      colorVar: 'var(--color-accent-2-700)',
      items: [
        'RL & optimal control for industrial systems',
        'Digital twins & surrogate modeling',
        'Turbomachinery & energy-cycle analysis',
        'Prognostics & condition monitoring',
      ],
    },
    {
      title: 'Fintech & Causal Analytics',
      colorVar: 'var(--color-accent-800)',
      items: [
        'Pricing world models & elasticity',
        'Causal inference from observational data',
        'Algorithmic & information-theoretic pricing',
        'Technical explainers & thought leadership',
      ],
    },
  ],
} as const;

export const about = {
  kicker: 'About the practice',
  heading: 'Cross-pollinating innovation, literally.',
  paragraphs: [
    'TechNektar™ is an independent research & engineering practice, led by a data scientist and engineer with a PhD in supercritical-CO₂ power cycles and decades of frontier experience — from inertial-navigation avionics at the Vikram Sarabhai Space Centre, to diagnostics and prognostics at General Electric, to research at world-leading institutions.',
    'The through-line is transfer: aerospace analytics reshaping retail pricing; 2,500-year-old logic tightening machine reasoning; reinforcement learning running a power plant. We openly publish to contribute to open, multi-disciplinary innovation — and consult to transform your idea into a product.',
  ],
  institutions: [
    'Vikram Sarabhai Space Centre, Indian Space Research Organisation',
    'General Electric',
    'Indian Institute of Science',
    "City St George's, University of London",
    'University of York',
  ],
} as const;
