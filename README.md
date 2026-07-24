# TechNektar Website

Single-page site for **TechNektar™ — Cross-Pollinating Innovation**, built with
Astro from the Claude Design handoff in `docs/design/`.

- **Config-driven**: all copy, links and metrics live in `src/data/*.ts`;
  components in `src/components/` are pure renderers.
- **Design tokens**: `src/styles/tokens.css` (Organic design system).
- **Screenshots**: `node scripts/capture-screenshots.mjs` re-captures the live
  app previews in `public/screenshots/`.

## Commands

```bash
npm install        # deps
npm run dev        # local dev server
npm test           # content-integrity unit tests (Vitest)
npm run build      # static build to dist/ (BASE_PATH=/tech-web by default)
npm run test:e2e   # Playwright smoke tests against the built site
```

## Deployment

Pushes to `main` run tests, build, and deploy to **GitHub Pages**
(`https://sharathsphd.github.io/tech-web/`) via `.github/workflows/deploy.yml`.

The repo is also Vercel-ready: import it in the Vercel dashboard and
`vercel.json` builds with root base path (for technektar.com).

## Docs

- `docs/SPEC.md` — technical specification
- `docs/PRD.md` — product requirements
- `docs/design/` — original design handoff (do not edit)
