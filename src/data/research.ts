export interface ProjectLink {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  note?: string;
  tone?: 'good' | 'dim' | 'warn';
}

export interface Project {
  slug: string;
  kicker: string;
  meta?: string;
  title: string;
  blurb: string;
  metrics?: Metric[];
  links: ProjectLink[];
  tone: 'dark' | 'warm' | 'plain';
  accent?: 'orange' | 'green';
  /** path under public/, e.g. 'figures/prayoga.png' — shown as the card visual */
  figure?: string;
  figureAlt?: string;
}

export interface ResearchTheme {
  label: string;
  projects: Project[];
  columnsMin?: number;
}

export interface Pillar {
  id: string;
  number: string;
  name: string;
  strap: string;
  accentVar: string;
  themes: ResearchTheme[];
}

export const researchIntro = {
  kicker: 'Research & systems',
  heading: '30+ open-source projects, papers and apps — every claim gated to evidence.',
};

export const pillars: Pillar[] = [
  {
    id: 'pillar-ai',
    number: '01',
    name: 'Artificial Intelligence',
    strap: 'from understanding LLMs → to breaking them → to defending them',
    accentVar: 'var(--color-accent-500)',
    themes: [
      {
        label: 'Mechanistic interpretability & AI safety',
        columnsMin: 300,
        projects: [
          {
            slug: 'active-circuit-discovery',
            kicker: 'active-circuit-discovery',
            meta: 'Python · Colab',
            title: 'Active Circuit Discovery',
            blurb:
              "An active-inference (POMDP) agent walks attribution graphs to find the features that causally drive a model's answer — on Gemma-2-2B and Llama-3.2, built on Anthropic's circuit-tracer.",
            metrics: [
              { value: '+30.4%', note: 'vs random', tone: 'good' },
              { value: 'p<10⁻¹⁵', note: 'causal steering', tone: 'good' },
            ],
            links: [
              { label: 'GitHub ↗', href: 'https://github.com/SharathSPhD/ActiveCIrcuitDiscovery' },
              {
                label: 'Run in Colab ↗',
                href: 'https://colab.research.google.com/github/SharathSPhD/ActiveCIrcuitDiscovery/blob/main/notebooks/01_circuit_discovery_gemma.ipynb',
              },
            ],
            tone: 'dark',
            accent: 'orange',
          },
          {
            slug: 'prayoga',
            kicker: 'prayoga',
            meta: 'MDPI Symmetry',
            title: 'Refusal as a Broken Symmetry',
            blurb:
              'Refusal turns out to be a measurable, ablatable, dosable residual-stream direction — a shared necessary core across model families, linking jailbreak, hypnosis and vaśīkaraṇa.',
            metrics: [
              { value: 'EC50 0.329', tone: 'good' },
              { value: 'R²=0.996', tone: 'good' },
            ],
            links: [
              { label: 'Live site ↗', href: 'https://sharathsphd.github.io/prayoga/' },
              { label: 'Preprint ↗', href: 'https://www.preprints.org/manuscript/202607.0139' },
            ],
            tone: 'dark',
            accent: 'orange',
            figure: 'figures/prayoga.png',
            figureAlt: 'Prayoga graphical abstract — refusal direction geometry across model families',
          },
          {
            slug: 'prabodha',
            kicker: 'prabodha',
            meta: 'defense platform',
            title: 'Prabodha — the recognition-gated moat',
            blurb:
              'A bring-your-model jailbreak-hardening platform. The activation-level moat cuts attack success as hard as brute-force hardening — at zero benign over-refusal.',
            metrics: [
              { value: 'ASR 0.50→0.25', tone: 'warn' },
              { value: 'over-refusal 0.00', tone: 'good' },
            ],
            links: [
              { label: 'Launch app ↗', href: 'https://prabodha-live.vercel.app' },
              { label: 'Run it here ↓', href: '#media' },
            ],
            tone: 'dark',
            accent: 'orange',
            figure: 'figures/prabodha.png',
            figureAlt: 'Prabodha system architecture — recognition-gated steering of a frozen LLM',
          },
        ],
      },
      {
        label: 'LLM reasoning & fine-tuning · foundation models',
        columnsMin: 280,
        projects: [
          {
            slug: 'pramana',
            kicker: 'pramana · Zenodo',
            title: 'Pramana — epistemic reasoning engine',
            blurb:
              'Fine-tunes LLMs to reason in the 6-phase Navya-Nyāya method — doubt, evidence, syllogism, counterfactual, fallacy check, verdict — instead of probabilistic chain-of-thought. Llama-3.2-3B & DeepSeek-R1-Distill.',
            links: [
              { label: 'GitHub ↗', href: 'https://github.com/SharathSPhD/pramana' },
              { label: 'Paper ↗', href: 'https://zenodo.org/records/18524794' },
            ],
            tone: 'warm',
          },
          {
            slug: 'pwm',
            kicker: 'PWM · live site',
            title: 'Pratyabhijñā World Model',
            blurb:
              'A Dreamer-class creative world model coupled to a frozen 120B LLM through a learned Vimarśa bridge. The world model imagines; the LLM speaks. 9 of 10 split hypotheses pass — with the negative honestly shipped.',
            links: [
              { label: 'Live site ↗', href: 'https://sharathsphd.github.io/pratyabhijna-world-model/' },
            ],
            tone: 'warm',
            figure: 'figures/pwm.png',
            figureAlt: 'PWM world-model reasoning trace',
          },
          {
            slug: 'prabhasa-babylm',
            kicker: 'prabhāsa-babylm · PSALM',
            title: 'A foundation model, built from scratch',
            blurb:
              "Pāṇinian Structured pretraining for small LAnguage Models: a ~200M model pre-pretrained on grammar-generated Sanskrit with gold parses, then real Sanskrit + English (BabyLM), with a 6-phase Navya-Nyāya reasoning scaffold and a Z3 epistemic kernel.",
            links: [
              { label: 'GitHub ↗', href: 'https://github.com/SharathSPhD/prabhasa-babylm' },
            ],
            tone: 'warm',
            figure: 'figures/psalm.png',
            figureAlt: 'Prabhāsa-BabyLM BLiMP results by training arm',
          },
        ],
      },
      {
        label: 'Creative & applied AI systems',
        columnsMin: 260,
        projects: [
          {
            slug: 'pranava',
            kicker: 'pranava · Śabda-ALM',
            title: 'Sound as meaning',
            blurb:
              'A speech-centred audio language model on a Sanskrit byte-core. The Sphoṭa-Lens localizes where meaning emerges (layer 13, 11× above chance) — and adaptation beats scaling.',
            links: [
              { label: 'Live site ↗', href: 'https://sharathsphd.github.io/pranava/' },
              { label: 'GitHub ↗', href: 'https://github.com/SharathSPhD/pranava' },
            ],
            tone: 'warm',
            figure: 'figures/pranava.png',
            figureAlt: 'Sphoṭa-Lens meaning-emergence by layer',
          },
          {
            slug: 'pce',
            kicker: 'pratyabhijñā · plugin',
            title: 'Pratyabhijñā Creative Engine',
            blurb:
              'Recursive self-reflexivity for LLM creative cognition — a Claude Code plugin that generates, judges and consolidates through a recognition cascade.',
            links: [
              { label: 'Live site ↗', href: 'https://sharathsphd.github.io/pratyabhijna/' },
              { label: 'Essay ↗', href: 'https://medium.com/@sharath.ai.colab/pratyabhij%C3%B1%C4%81-creative-engine-69531916e845' },
            ],
            tone: 'warm',
          },
          {
            slug: 'neo-fm',
            kicker: 'neo-fm',
            title: 'India-first AI music platform',
            blurb:
              'Composition-aware instrumental and lyrical generation tuned to Indian traditions — a Next.js app orchestrating a DGX-hosted model fleet, end-to-end in ~39 seconds.',
            links: [{ label: 'GitHub ↗', href: 'https://github.com/SharathSPhD/neo-fm' }],
            tone: 'warm',
          },
          {
            slug: 'kundali',
            kicker: 'kundali · live app',
            title: 'A machine-verified computation engine',
            blurb:
              'Classical jyotiṣa as rigorous software: 196 passing tests, Lean 4 proofs with zero sorry, LLM narration verified against engine output — a template for verifiable domain engines.',
            links: [{ label: 'Launch app ↗', href: 'https://kundali-five.vercel.app' }],
            tone: 'warm',
          },
        ],
      },
      {
        label: 'Claude Code plugins & agent orchestration',
        columnsMin: 230,
        projects: [
          {
            slug: 'triz-engine',
            kicker: '',
            title: 'TRIZ Engine',
            blurb:
              'Systematic contradiction resolution with the 40 Inventive Principles — 327 tests passing, benchmarked on 4,900+ problems.',
            links: [{ label: 'GitHub ↗', href: 'https://github.com/SharathSPhD/triz-engine' }],
            tone: 'plain',
          },
          {
            slug: 'pratyaksha',
            kicker: '',
            title: 'Pratyakṣa',
            blurb:
              'Long-context discipline for Claude Code — Avacchedaka-typed retrieval, Khyātivāda hallucination taxonomy.',
            links: [
              {
                label: 'GitHub ↗',
                href: 'https://github.com/SharathSPhD/pratyaksha-context-eng-harness',
              },
            ],
            tone: 'plain',
          },
          {
            slug: 'attractor-flow',
            kicker: '',
            title: 'AttractorFlow',
            blurb:
              'Steers multi-agent trajectories with dynamical-systems theory — Lyapunov exponents classify seven regimes and trigger interventions.',
            links: [{ label: 'GitHub ↗', href: 'https://github.com/SharathSPhD/attractor-flow' }],
            tone: 'plain',
          },
          {
            slug: 'openclaw',
            kicker: '',
            title: 'OpenClaw Swarm',
            blurb:
              'Multi-agent Claude orchestration — role-based routing, Docker sandboxing, Telegram control, live telemetry.',
            links: [{ label: 'GitHub ↗', href: 'https://github.com/SharathSPhD/openclaw-swarm' }],
            tone: 'plain',
          },
        ],
      },
    ],
  },
  {
    id: 'pillar-deeptech',
    number: '02',
    name: 'Deep-Tech Engineering',
    strap: 'supercritical-CO₂ power, turbomachinery, digital twins',
    accentVar: 'var(--color-accent-2-500)',
    themes: [
      {
        label: '',
        columnsMin: 300,
        projects: [
          {
            slug: 'sco2rl',
            kicker: 'sCO2RL / RLpower',
            meta: 'DGX Spark GB10',
            title: 'Teaching an AI to run a power plant',
            blurb:
              'Deep RL controls a supercritical-CO₂ Brayton cycle recovering waste heat from steel-furnace exhaust — trained in a physics-faithful OpenModelica digital twin, deployed at sub-millisecond latency.',
            metrics: [
              { value: '+39%', note: 'vs ZN-PID', tone: 'good' },
              { value: '0', note: 'violations / 140 ep', tone: 'good' },
              { value: '0.046ms', note: 'TensorRT p99', tone: 'good' },
            ],
            links: [
              { label: 'GitHub ↗', href: 'https://github.com/SharathSPhD/RLpower' },
              {
                label: 'Read the story ↗',
                href: 'https://medium.com/@sharath.ai.colab/teaching-an-ai-to-run-a-power-plant-inside-sco2rl-6d89d9db3b97',
              },
            ],
            tone: 'dark',
            accent: 'green',
            figure: 'figures/sco2rl.png',
            figureAlt: 'sCO2RL system architecture — RL agent in an OpenModelica digital twin loop',
          },
        ],
      },
    ],
  },
  {
    id: 'pillar-fintech',
    number: '03',
    name: 'Fintech & Causal Analytics',
    strap: 'pricing world models, causal inference, information theory',
    accentVar: 'var(--color-accent-800)',
    themes: [
      {
        label: '',
        columnsMin: 300,
        projects: [
          {
            slug: 'dreamprice',
            kicker: 'dreamprice',
            meta: 'HuggingFace demo',
            title: 'DreamPrice — a causal pricing world model',
            blurb:
              "DreamerV3 + Mamba-2, Hausman-IV causal identification and MOPO pessimism learn a retail-pricing policy entirely in imagination — from Dominick's historical scanner data.",
            metrics: [
              { value: 'WMAPE 0.73', note: '13-week horizon', tone: 'good' },
              { value: '93 stores', note: "Dominick's", tone: 'dim' },
            ],
            links: [
              { label: 'Try the demo ↗', href: 'https://huggingface.co/spaces/qbz506/dreamprice-demo' },
              { label: 'GitHub ↗', href: 'https://github.com/SharathSPhD/dreamprice' },
            ],
            tone: 'dark',
            accent: 'orange',
          },
          {
            slug: 'ccmmul',
            kicker: 'ccmMul',
            title: 'Multivariate causal inference',
            blurb:
              'Convergent Cross Mapping for time-series causality — who is really driving whom, when correlation lies. Correlation plots, forecasts, MAE/RMSE summaries.',
            links: [{ label: 'GitHub ↗', href: 'https://github.com/SharathSPhD/ccmMul' }],
            tone: 'warm',
          },
          {
            slug: 'coffee-causality',
            kicker: 'coffee-causality · series',
            title: 'The Coffee-Shop Mystery',
            blurb:
              'Causal inference taught through a café: correlation traps, instrumental variables, double ML and transfer entropy — as Medium essays, YouTube episodes and an executable Jupyter Book.',
            links: [
              {
                label: 'Part A ↗',
                href: 'https://medium.com/@sharath.ai.colab/the-coffee-shop-mystery-part-a-enter-cafe-chaos-90832c944e74',
              },
              {
                label: 'Part D ↗',
                href: 'https://medium.com/@sharath.ai.colab/the-coffee-shop-mystery-part-d-flow-dance-52a5a37d0af7',
              },
              {
                label: 'Jupyter Book ↗',
                href: 'https://sharathsphd.github.io/coffee_causality/intro.html',
              },
            ],
            tone: 'warm',
          },
          {
            slug: 'entropy-pricing',
            kicker: 'Case study',
            title: 'Information-entropy pricing',
            blurb:
              'An information-theoretic approach to retail price optimization — 5–10% volume uplift with margin growth.',
            links: [],
            tone: 'warm',
          },
        ],
      },
    ],
  },
];

export const deeptechPublications = {
  kicker: 'Peer-reviewed · 2017–2021',
  title: 'Published research & a patent',
  items: [
    'EOS-based analytical optimization of the sCO₂ Brayton cycle — <em>J. Supercritical Fluids</em>, 2021',
    '10 MW recompression sCO₂ cycle for tropical climates — <em>Applied Thermal Engineering</em>, 2021',
    'Novel sCO₂ axial turbine design — <em>ASME Turbo Expo</em>, 2019',
    'Novel cycles for waste-heat recovery — <em>Indian Patent</em>, 2019',
  ],
  scholar: {
    label: 'All publications on Google Scholar ↗',
    href: 'https://scholar.google.com/citations?user=dcyu5ucAAAAJ&hl=en',
  },
};

export const deeptechExperience = [
  {
    title: 'Decades in industry',
    body: 'Aero gas-turbine diagnostics & prognostics at General Electric; inertial-navigation avionics for launch vehicles at the Vikram Sarabhai Space Centre, Indian Space Research Organisation.',
  },
  {
    title: 'Postdoctoral research',
    body: 'sCO₂ turbomachinery for industrial waste-heat recovery at the University of York; multi-institution European consortium leadership.',
  },
  {
    title: 'University research & teaching',
    body: "Research and student supervision at the Indian Institute of Science and City St George's, University of London — bridging research and industry practice.",
  },
];
