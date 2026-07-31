import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { about, practice, services } from '../data/pillars';
import { pillars } from '../data/research';
import { reads, talks, videos } from '../data/media';
import { writing } from '../data/writing';

export const prerender = true;

/**
 * /llms.txt — a curated, markdown summary for AI assistants and answer engines
 * (see llmstxt.org). Generated from the same content modules the page renders,
 * so it stays accurate without a second copy to maintain.
 */
export const GET: APIRoute = () => {
  const L: string[] = [];
  const push = (s = '') => L.push(s);

  push(`# ${site.name}`);
  push();
  push(`> ${site.description}`);
  push();
  push(
    `${site.name}™ is an independent research and engineering consultancy working from London (United Kingdom) and Bengaluru (India), taking engagements worldwide. Contact: ${site.email}`
  );
  push();

  push('## What we work on');
  push();
  for (const tier of site.hero.capabilities) {
    push(`- **${tier.label}:** ${(tier.items as readonly string[]).join(', ')}`);
  }
  push();

  push('## Practice areas');
  push();
  for (const card of practice.cards) {
    push(`### ${card.title}`);
    push(card.body);
    push();
  }

  push('## Consulting services');
  push();
  for (const col of services.columns) {
    push(`### ${col.title}`);
    for (const item of col.items) push(`- ${item}`);
    push();
  }

  push('## Open research, systems and applications');
  push();
  for (const pillar of pillars) {
    push(`### ${pillar.number} — ${pillar.name} (${pillar.strap})`);
    push();
    for (const theme of pillar.themes) {
      for (const p of theme.projects) {
        const links = p.links.filter((l) => !l.href.startsWith('#'));
        const linkText = links.length ? ` — ${links.map((l) => l.href).join(' , ')}` : '';
        const metrics = p.metrics?.length
          ? ` [${p.metrics.map((m) => `${m.value}${m.note ? ` ${m.note}` : ''}`).join('; ')}]`
          : '';
        push(`- **${p.title}**: ${p.blurb}${metrics}${linkText}`);
      }
    }
    push();
  }

  push('## Talks');
  push();
  for (const t of talks) {
    push(`- **${t.title}** (${t.venue}): ${t.note} — https://www.youtube.com/watch?v=${t.id}`);
  }
  push();

  push('## Writing and media');
  push();
  for (const outlet of reads) {
    push(`### ${outlet.outlet} — ${outlet.href}`);
    for (const item of outlet.items) push(`- ${item.title}: ${item.href}`);
    push();
  }
  push(`### Book`);
  push(
    `- **${writing.book.title}**: ${writing.book.body} — ${writing.book.stores
      .map((s) => s.href)
      .join(' , ')}`
  );
  push();
  push(`### Episodes`);
  push(
    `${videos.length} storytelling episodes on YouTube covering AI, energy, causality and physics.`
  );
  push();

  push('## About');
  push();
  for (const para of about.paragraphs) {
    push(para);
    push();
  }
  push(`Experience spans: ${about.institutions.join('; ')}.`);
  push();

  push('## Legal');
  push();
  push(site.footer.entity);
  push();

  return new Response(L.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
