# TechNektar Website — Product Requirements

## Goal
A single-page site for TechNektar™ — an independent research & engineering
consultancy — that converts credibility into conversations. The showcase (papers,
apps, plugins, book, podcast) *is* the sales pitch: visitors should leave believing
"these people turn frontier research into shipped systems, across fields."

## Audience
1. Prospective consulting clients (AI leads, energy/industrial engineering managers,
   retail/pricing analytics heads).
2. Research collaborators and reviewers following a paper/preprint link.
3. Press/podcast listeners looking for the entity behind the content.

## Positioning (copy principles)
- Three pillars — **AI · Deep-Tech · Fintech** — explicitly cross-pollinating:
  ancient epistemology tightening AI, aerospace rigor tuning control, causal
  physics reshaping pricing.
- Evidence-gated voice: every claim carries a number, a link, or a demo.
- "We openly publish to contribute to open, multi-disciplinary innovation — and
  consult to transform your idea into a product."
- Never name the founder in copy; institutions written out in full
  (Vikram Sarabhai Space Centre, Indian Space Research Organisation; General
  Electric; Indian Institute of Science; City St George's, University of London;
  University of York).
- TechNektar™ is a UK-registered trademark; practice registered in Bengaluru
  (Banashankari, Bengaluru 560109, Karnataka, India), London correspondence
  (5 Brayford Square, London E1 0SG).

## Must-haves (v1)
- All sections of the approved design, pixel-faithful, fully responsive.
- Real material only: verified links to GitHub repos, preprints/papers, HF space,
  live apps, YouTube playlist, podcast platforms, book stores.
- Real screenshots (not placeholders) in the demo/preview cards.
- Working contact path: form + mailto:info@technektar.com.
- Deployed and publicly reachable; verified in a real browser.

## Nice-to-haves (later)
- Blog/writing previews with fetched metadata; custom domain (technektar.com);
  analytics; per-project detail pages; dark theme.

## Success criteria
- `npm test` green (content integrity), `npm run build` clean, Playwright smoke green.
- Deployed URL renders correctly at 360/768/1280 widths in Chrome.
- Every outbound link resolves (checked at build/test time).
