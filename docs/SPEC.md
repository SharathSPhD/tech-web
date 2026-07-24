# TechNektar Website — Technical Specification

## Source of truth
- Design handoff bundle: `docs/technektar-website-design/project/TechNektar Website.dc.html` (Claude Design export, "Organic" design system).
- Copied into this repo under `docs/design/` for reference.

## Stack
- **Astro 5** (static output). Rationale: single-page marketing/showcase site, zero client
  framework needed except tiny islands (contact-form success state, terminal cursor);
  first-class static deploys to GitHub Pages / Vercel / Cloudflare.
- **TypeScript** throughout; content is **config-driven**: every card, link, metric and
  section heading lives in typed data modules under `src/data/`, never hard-coded in
  components. Components are pure renderers.
- **Testing**: Vitest (content-integrity unit tests over `src/data`), Playwright
  (E2E smoke over the built site).
- **CI/CD**: GitHub Actions — test → build → deploy to GitHub Pages.
  `vercel.json` included so the repo can be imported into Vercel unchanged.

## Design tokens
From `_ds/organic-*/styles.css` — reproduced verbatim in `src/styles/tokens.css`:
warm paper palette (`--color-bg:#f5ead8`), terracotta accent (`#c67139`), olive
accent-2 (`#7a8a5e`), neutral + two accent OKLCH ramps, Caprasimo headings,
Figtree body, JetBrains Mono for data/terminal, radii/shadows/spacing as exported.
Dark "terminal" cards use fixed `#17120d` ground with `#f6a06b`/`#aebf92` accents.

## Page structure (single page, anchor navigation)
1. **Nav** — sticky, blurred; logo, Practice/Research/Demos/Writing anchors, "Work with us" CTA.
2. **Hero** — 2-col: editorial intro (H1 "We turn deep research into systems that ship")
   + animated Pramana epistemic-trace terminal panel.
3. **Practice** — three pillar cards: AI / Deep-Tech / Fintech, anchor-linked to research.
4. **Research** — per-pillar groups:
   - AI: (a) mech-interp & safety arc — Active Circuit Discovery → Prayoga → Prabodha
     (dark terminal cards with metrics); (b) reasoning/fine-tuning/foundation —
     Pramana, PWM, Prabhāsa-Saṃskṛtam; (c) Claude Code plugins — TRIZ Engine,
     Pratyakṣa, AttractorFlow, OpenClaw Swarm.
   - Deep-Tech: sCO2RL feature card (+39% vs ZN-PID, 0 violations, 0.046 ms p99),
     publications & patent list + Google Scholar, three experience cards
     (industry / postdoc / teaching), all institutions unabbreviated.
   - Fintech: DreamPrice feature card, ccmMul, information-entropy pricing case study.
5. **Demos** — prabodha + DreamPrice framed browser-chrome cards with **real
   screenshots** (captured via Chrome, stored in `public/screenshots/`), YouTube
   playlist embed (lazy, click-to-load facade for performance).
6. **Writing** — Substack, Medium, Jekyll blog, podcast (Apple/Spotify/Amazon),
   AI-architecture essays, "The Proven Word" book card (Amazon IN, Amazon UK/EU,
   Apple Books).
7. **Services** — three consulting pillars with bullet offerings.
8. **About** — practice story, institution chips, framed logo.
9. **Contact** — email, London correspondence + Bengaluru registered addresses,
   form (name/email/message) posting to FormSubmit with JS success state and
   mailto fallback; footer with TM line and social links.

## Content model (`src/data/`)
- `site.ts` — nav, hero, contact, footer, social links.
- `pillars.ts` — practice cards + services offerings.
- `research.ts` — typed `Project[]` per pillar: `{slug, name, kicker, title, blurb,
  metrics[], links[], tone: 'dark'|'warm'|'plain'}`.
- `writing.ts` — publishing outlets, essays, book.
- `demos.ts` — demo cards + screenshot paths + YouTube playlist id.
All URLs live only here; the integrity test suite asserts shape, non-empty copy,
https links, and absence of placeholder text.

## Non-functional
- Fully responsive (fluid `clamp()` type, auto-fit grids); no horizontal scroll at 360–1440 px.
- Lighthouse targets: Perf ≥ 90, A11y ≥ 95, SEO ≥ 95. Semantic landmarks, alt text,
  focus-visible outlines, reduced-motion respect for cursor blink.
- OpenGraph/meta: title, description, logo-derived og image.
- No personal name in site copy (per client direction); entity lines exactly as design.
