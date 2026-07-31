/** Interactive media hub: everything here is real, published content. */

export interface Video {
  id: string;
  title: string;
  series?: string;
}

export const videos: Video[] = [
  { id: 'SDoDXkCUw6c', title: 'Ancient Wisdom, Modern AI', series: 'AI' },
  { id: 'FSj2-erH7TY', title: 'DreamPrice: An AI That Learns to Price by Dreaming', series: 'Fintech' },
  { id: 'XGb9E2aZvyo', title: 'AI for Energy', series: 'Deep-tech' },
  { id: 'P-ad6Yab--8', title: 'Architectures of Artificial Mind', series: 'AI' },
  { id: 'aBG8Jo3p3Zk', title: 'Pratyabhijñā Creative Engine', series: 'AI' },
  { id: 'fM2hpqPx8zg', title: 'When AI Agents are "Lost in the Middle"', series: 'AI' },
  { id: '6SgVxW-kK_E', title: 'LLM vs. World Model', series: 'AI' },
  { id: 'vHlqogHL5OA', title: 'AI Learns Minecraft Diamond Collection', series: 'AI' },
  { id: '6a3rFT52QBk', title: 'Café Chaos (Transfer Entropy) · Part 4', series: 'Causality' },
  { id: 'Hj594P8CR7s', title: 'Café Chaos (Causal Analysis) · Part 3', series: 'Causality' },
  { id: 'sE_rV8fELt0', title: 'Oscillatory Odyssey (Swing to Space) · Part 1', series: 'Physics' },
  { id: 'VaqJW0MsTSE', title: 'Oscillatory Odyssey (Spin & Light) · Part 2', series: 'Physics' },
  { id: 'o6fICWAWEGw', title: 'Oscillatory Odyssey (Resonance Rising) · Part 3', series: 'Physics' },
];

export interface Talk {
  id: string;
  title: string;
  venue: string;
  note: string;
}

/** Invited talks and public appearances — same player pattern as `videos`. */
export const talks: Talk[] = [
  {
    id: 'U9Z0TIeq1Fc',
    title: 'Active Circuit Discovery',
    venue: 'Active Inference Institute · ModelStream 010.1',
    note: 'An invited live session on finding the features that causally drive a language model’s answer — active inference over attribution graphs, walked through end to end.',
  },
];

export interface AppEmbed {
  id: string;
  title: string;
  strap: string;
  /** URL loaded inside the iframe */
  embedUrl: string;
  /** URL for the "open in new tab" link */
  openUrl: string;
  tag: string;
}

export const appEmbeds: AppEmbed[] = [
  {
    id: 'prabodha',
    title: 'Prabodha',
    strap: 'Jailbreak-defense workbench — recognition-gated steering, live',
    embedUrl: 'https://prabodha-live.vercel.app',
    openUrl: 'https://prabodha-live.vercel.app',
    tag: 'AI safety',
  },
  {
    id: 'dreamprice',
    title: 'DreamPrice',
    strap: 'Set a price, watch imagined demand and margin respond',
    embedUrl: 'https://qbz506-dreamprice-demo.hf.space',
    openUrl: 'https://huggingface.co/spaces/qbz506/dreamprice-demo',
    tag: 'Fintech',
  },
  {
    id: 'prayoga',
    title: 'Prayoga',
    strap: 'Interactive research essay — refusal as a captured symmetry',
    embedUrl: 'https://sharathsphd.github.io/prayoga/',
    openUrl: 'https://sharathsphd.github.io/prayoga/',
    tag: 'Research site',
  },
  {
    id: 'triz',
    title: 'TRIZ Arena',
    strap: 'Live benchmark dashboard — plugin vs vanilla Claude, with ELO',
    embedUrl: 'https://sharathsphd.github.io/triz-engine/',
    openUrl: 'https://sharathsphd.github.io/triz-engine/',
    tag: 'Tooling',
  },
  {
    id: 'pwm',
    title: 'Pratyabhijñā World Model',
    strap: 'Creative AI through recognition, active inference and memory',
    embedUrl: 'https://sharathsphd.github.io/pratyabhijna-world-model/',
    openUrl: 'https://sharathsphd.github.io/pratyabhijna-world-model/',
    tag: 'Research site',
  },
  {
    id: 'sabda',
    title: 'Śabda-ALM',
    strap: 'Sound as meaning — a speech-centred language model',
    embedUrl: 'https://sharathsphd.github.io/pranava/',
    openUrl: 'https://sharathsphd.github.io/pranava/',
    tag: 'Research site',
  },
  {
    id: 'kundali',
    title: 'Kundali',
    strap: 'Machine-verified jyotiṣa engine — 196 tests, Lean 4 proofs',
    embedUrl: 'https://kundali-five.vercel.app',
    openUrl: 'https://kundali-five.vercel.app',
    tag: 'Applied build',
  },
  {
    id: 'coffee',
    title: 'Coffee Causality',
    strap: 'The Coffee-Shop Mystery as an executable Jupyter Book',
    embedUrl: 'https://sharathsphd.github.io/coffee_causality/intro.html',
    openUrl: 'https://sharathsphd.github.io/coffee_causality/intro.html',
    tag: 'Causality',
  },
];

export interface Article {
  title: string;
  href: string;
  note?: string;
}

export const reads: { outlet: string; kicker: string; href: string; items: Article[] }[] = [
  {
    outlet: 'Medium',
    kicker: 'Long-form essays',
    href: 'https://medium.com/@sharath.ai.colab',
    items: [
      {
        title: 'DreamPrice: An AI That Learns to Price by Dreaming',
        href: 'https://medium.com/@sharath.ai.colab/dreamprice-an-ai-that-learns-to-price-by-dreaming-e9b1e99eea0d',
      },
      {
        title: 'The Coffee Shop Mystery — Part A: Enter Café Chaos',
        href: 'https://medium.com/@sharath.ai.colab/the-coffee-shop-mystery-part-a-enter-cafe-chaos-90832c944e74',
        note: 'causal-inference series',
      },
      {
        title: 'The Coffee Shop Mystery — Part D: Flow Dance',
        href: 'https://medium.com/@sharath.ai.colab/the-coffee-shop-mystery-part-d-flow-dance-52a5a37d0af7',
        note: 'transfer entropy',
      },
      {
        title: 'When the Context Window Is Big and the Agent Is Still Confused',
        href: 'https://medium.com/@sharath.ai.colab/when-the-context-window-is-big-and-the-agent-is-still-confused-7cfba674b6b5',
      },
      {
        title: 'Pratyabhijñā Creative Engine',
        href: 'https://medium.com/@sharath.ai.colab/pratyabhij%C3%B1%C4%81-creative-engine-69531916e845',
      },
      {
        title: 'Rivers of Thought: Beyond Generative AI',
        href: 'https://medium.com/@sharath.ai.colab/rivers-of-thought-beyond-generative-ai-88e95c82cf76',
      },
    ],
  },
  {
    outlet: 'Substack',
    kicker: 'TechNektar newsletter · text + podcast',
    href: 'https://technektar.substack.com/',
    items: [
      {
        title: 'Teaching an AI to Run a Power Plant: Inside sCO2RL',
        href: 'https://technektar.substack.com/p/teaching-an-ai-to-run-a-power-plant',
      },
      {
        title: 'Architectures of Artificial Mind',
        href: 'https://technektar.substack.com/p/architectures-of-artificial-mind-0bf',
      },
      {
        title: 'Ancient Epistemology for Modern AI: Navya-Nyāya for LLMs',
        href: 'https://technektar.substack.com/p/ancient-epistemology-for-modern-ai-b9c',
      },
      {
        title: 'DreamPrice: An AI That Learns to Price by Dreaming',
        href: 'https://technektar.substack.com/p/dreamprice-an-ai-that-learns-to-price-2ba',
      },
      {
        title: 'AI for Energy',
        href: 'https://technektar.substack.com/p/ai-for-energy-3a0',
      },
    ],
  },
  {
    outlet: 'Portfolio',
    kicker: 'technektar.dev · case studies',
    href: 'https://www.technektar.dev',
    items: [
      {
        title: 'Turbine blades, wind-tunnel proven',
        href: 'https://www.technektar.dev/case-studies/connected-example.html',
        note: 'aerodynamics · arXiv 2407.11210',
      },
      {
        title: 'Predicting turbine failure without failure data',
        href: 'https://www.technektar.dev/case-studies/improver-innovator-gan.html',
        note: 'predictive maintenance · contest winner',
      },
      {
        title: 'The gyroscope insight behind landmark missions',
        href: 'https://www.technektar.dev/case-studies/critical-thinker-isro.html',
        note: 'avionics',
      },
      {
        title: 'Remote monitoring that pays for itself',
        href: 'https://www.technektar.dev/case-studies/connected-turbine-monitoring.html',
        note: 'industrial IoT',
      },
    ],
  },
];

export const mediaHub = {
  kicker: 'Live & interactive',
  heading: 'Don’t take our word for it — run it, watch it, read it.',
  sub: 'Every claim on this page opens into something you can use right now: live apps, research sites, storytelling episodes, invited talks and essays.',
  tabs: { watch: 'Watch', run: 'Run', read: 'Read', talks: 'Talks' },
} as const;

export const stats = [
  { value: '30+', label: 'open-source systems' },
  { value: '8', label: 'live apps & research sites' },
  { value: '5', label: 'peer-reviewed papers + a patent' },
  { value: '13', label: 'storytelling episodes' },
  { value: '1', label: 'published book' },
] as const;
