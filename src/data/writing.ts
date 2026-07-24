export const writing = {
  kicker: 'Writing & media',
  heading: 'Dense research, made to travel.',
  sub: 'The same ideas, retold for different readers — a podcast, two newsletters, an engineering blog, and a formally-verified book.',
  outlets: [
    {
      kicker: 'Substack',
      title: 'TechNektar Newsletter',
      body: 'Demystifying AI, energy and engineering — the gateway essays. →',
      href: 'https://technektar.substack.com/',
    },
    {
      kicker: 'Medium',
      title: 'Long-form technical essays',
      body: '"Teaching an AI to Run a Power Plant", the Coffee-Shop Mystery causality series. →',
      href: 'https://medium.com/@sharath.ai.colab',
    },
    {
      kicker: 'GitHub Pages · Jekyll',
      title: 'Engineering blog',
      body: 'Clean, accessible notes tagged #ai-ml, #engineering, #data-science. →',
      href: 'https://sharathsphd.github.io',
    },
  ],
  podcast: {
    kicker: 'Podcast',
    title: 'Listen anywhere',
    platforms: [
      {
        label: 'Apple ↗',
        href: 'https://podcasts.apple.com/us/podcast/technektar-cross-pollinating-innovation/id1796260484',
      },
      { label: 'Spotify ↗', href: 'https://open.spotify.com/show/1iOFoT62JGQpynlJfCCiJ1' },
      {
        label: 'Amazon ↗',
        href: 'https://music.amazon.co.uk/podcasts/499f31ac-32d1-4bd9-b199-ccb163f3f941/technektar-cross-pollinating-innovation',
      },
    ],
  },
  essays: {
    kicker: 'AI-architecture essays',
    title: 'Where philosophy meets architecture',
    items: [
      {
        title: 'AI and the Taittirīya Upaniṣad',
        note: 'the five sheaths as a model of layered cognition',
      },
      {
        title: 'Architectures of the Artificial Mind',
        note: 'reading modern AI stacks through classical frameworks',
      },
    ],
  },
  book: {
    kicker: 'Published · a book',
    title: 'The Proven Word',
    spineTitle: 'The Proven Word',
    spineSub: 'VĀKYA-VALLARĪ',
    body: "Vākya-Vallarī — a living, machine-verified edition of Bhartṛhari's Vākyapadīya: all 1,796 kārikās, each accepted reading proved against its contract by a Lean 4 kernel.",
    stores: [
      { label: 'Amazon India ↗', href: 'https://amzn.in/d/08HfhCOr' },
      { label: 'Amazon UK/EU ↗', href: 'https://amzn.eu/d/028wJCMp' },
      { label: 'Apple Books ↗', href: 'https://books.apple.com/us/book/the-proven-word/id6793464647' },
    ],
  },
} as const;
