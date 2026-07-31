export const practice = {
  kicker: 'The practice',
  heading: 'Three fields, cross-pollinating. Ideas from one sharpen the others.',
  sub: 'Ancient epistemology tightens our AI. Aerospace-grade rigor tunes our control systems. Causal thinking from physics reshapes how businesses decide. We consult across all three.',
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
      title: 'Decisions that deliver value',
      body: 'Causal inference when correlation lies, world models that plan in imagination, and the storytelling that makes analytics land in the boardroom.',
      link: { label: 'See fintech →', href: '#pillar-fintech' },
      icon: 'fintech',
      accent: 'accentDeep',
    },
  ],
} as const;

export const services = {
  kicker: 'Consulting',
  heading: 'Bring us the hard problem.',
  sub: 'Engagements from a two-day teardown to a multi-month build. We prototype fast, ship tested, and leave you the code and the reasoning. Problems that straddle two disciplines are a specialty — but a hard problem inside one is just as welcome.',
  columns: [
    {
      title: 'AI — Foundation Models, Research Engineering & Safety',
      colorVar: 'var(--color-accent-700)',
      items: [
        'Foundation-model research & from-scratch pretraining',
        'Domain fine-tuning & reasoning engines',
        'Mechanistic interpretability audits, jailbreak hardening & red-teaming',
        'Agent plugins, skills & MCP tooling for Claude Code',
      ],
    },
    {
      title: 'Deep-Tech Engineering',
      colorVar: 'var(--color-accent-2-700)',
      items: [
        'Aerodynamics, turbomachinery & energy-cycle analysis',
        'RL & optimal control for industrial systems',
        'Digital twins & surrogate modeling',
        'Predictive maintenance & remote condition monitoring',
      ],
    },
    {
      title: 'Fintech & Causal Analytics',
      colorVar: 'var(--color-accent-800)',
      items: [
        'Causal inference from observational data',
        'World models & decision intelligence',
        'Time-series and information-theoretic analytics',
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
    'The through-line is transfer: aerospace analytics informing demand models; 2,500-year-old logic tightening machine reasoning; reinforcement learning running a power plant. We publish in the open because tested ideas travel further — and we consult because the fastest route from idea to product is a team that has already shipped across all three fields. If your hardest problem sits between disciplines, it has come to the right place.',
  ],
  institutions: [
    'Vikram Sarabhai Space Centre, Indian Space Research Organisation',
    'General Electric',
    'Indian Institute of Science',
    "City St George's, University of London",
    'University of York',
  ],
} as const;
