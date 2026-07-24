export const demos = {
  kicker: 'Live & interactive',
  heading: 'See it running.',
  sub: 'Apps and episodes you can open right now.',
  cards: [
    {
      id: 'prabodha',
      chrome: 'prabodha-live.vercel.app',
      screenshot: 'screenshots/prabodha.png',
      alt: 'Prabodha jailbreak-defense workbench — live app screenshot',
      title: 'Prabodha — jailbreak defense workbench',
      body: 'Step through per-token entropy, replay steering runs, and watch the recognition-gated moat separate attacks from benign prompts.',
      cta: { label: 'Launch app ↗', href: 'https://prabodha-live.vercel.app' },
    },
    {
      id: 'dreamprice',
      chrome: 'huggingface.co/spaces',
      screenshot: 'screenshots/dreamprice.png',
      alt: 'DreamPrice pricing sandbox — Gradio demo screenshot',
      title: 'DreamPrice — pricing sandbox',
      body: 'A Gradio demo that rolls the learned world model forward: set a price, watch imagined demand, substitution and margin respond.',
      cta: {
        label: 'Open the space ↗',
        href: 'https://huggingface.co/spaces/qbz506/dreamprice-demo',
      },
    },
  ],
  youtube: {
    playlistId: 'PLDVuUgaLkOL1O58tGrO9MZ0RCqO3fxq43',
    kicker: 'YouTube · playlist',
    title: 'Cross-Pollinating Innovation',
    body: 'Storytelling episodes — the physics of motion, causality in ML, and neuroscience-inspired engineering — with NotebookLM virtual presenters. Watch the full playlist here.',
  },
} as const;
