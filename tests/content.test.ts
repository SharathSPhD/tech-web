import { describe, expect, it } from 'vitest';
import { addressLines, site } from '../src/data/site';
import { pillars, deeptechPublications, deeptechExperience } from '../src/data/research';
import { practice, services, about } from '../src/data/pillars';
import { writing } from '../src/data/writing';
import { appEmbeds, reads, stats, talks, videos } from '../src/data/media';

const allProjects = pillars.flatMap((p) => p.themes.flatMap((t) => t.projects));

const externalLinks: string[] = [
  ...site.social.map((s) => s.href),
  ...allProjects.flatMap((p) => p.links.map((l) => l.href)),
  deeptechPublications.scholar.href,
  ...writing.outlets.map((o) => o.href),
  ...writing.podcast.platforms.map((p) => p.href),
  ...writing.book.stores.map((s) => s.href),
  ...appEmbeds.flatMap((a) => [a.embedUrl, a.openUrl]),
  ...reads.flatMap((r) => [r.href, ...r.items.map((i) => i.href)]),
];

describe('site config', () => {
  it('has nav entries matching section anchors', () => {
    for (const item of site.nav) expect(item.href).toMatch(/^#[a-z]+$/);
  });
  it('has a valid contact email', () => {
    expect(site.email).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]+$/);
  });
  it('addresses render correctly and contain no banned location text', () => {
    const rendered = site.addresses.map((a) => addressLines(a).join('\n'));
    expect(rendered.join(' ')).not.toMatch(/prestige|primrose/i);
    expect(rendered[0]).toBe('TechNektar\n5 Brayford Square\nLondon E1 0SG\nUnited Kingdom');
    expect(rendered[1]).toBe('TechNektar\nBanashankari\nBengaluru 560109\nKarnataka, India');
  });
  it('footer states the trade mark accurately and carries no disavowal', () => {
    expect(site.footer.entity).toContain('UK00004419288');
    expect(site.footer.entity).toContain('published for opposition');
    expect(site.footer.entity).not.toMatch(/not affiliated/i);
  });
  it('never claims the mark is registered while it is only published', () => {
    // UK Trade Marks Act 1994 s.95 — representing a mark as registered before
    // registration is an offence. Guard every user-visible string.
    const all = [
      JSON.stringify(site),
      JSON.stringify(practice),
      JSON.stringify(services),
      JSON.stringify(about),
    ].join(' ');
    expect(all).not.toMatch(/registered trade ?mark/i);
    expect(all).not.toMatch(/trade ?mark registered/i);
    expect(all).not.toContain('®');
  });
  it('publishes no private registration data', () => {
    const all = JSON.stringify(site);
    expect(all).not.toMatch(/BBRPS0350L/i); // PAN
    expect(all).not.toMatch(/10791610000671/); // bank account
    expect(all).not.toMatch(/HDFC0001079/); // IFSC
    expect(all).not.toMatch(/9986526623/); // personal mobile
    expect(all).not.toMatch(/sharath\.sathish@/i); // personal email
    expect(all).not.toMatch(/UDYAM-KR-03-0729811/); // registration id withheld by choice
  });
  it('addresses carry no correspondence/registered qualifiers', () => {
    for (const addr of site.addresses) {
      expect(addr.label).not.toMatch(/correspondence|registered/i);
    }
    expect(site.addresses.map((a) => a.label)).toEqual(['London', 'Bengaluru']);
  });
  it('hero capabilities are tiered domains → disciplines → solutions', () => {
    const labels = site.hero.capabilities.map((c) => c.label);
    expect(labels).toEqual(['Domains', 'Disciplines', 'Solutions']);
    const flat = site.hero.capabilities.flatMap((c) => c.items as readonly string[]);
    for (const expected of ['AI', 'Aerospace', 'Turbomachinery', 'Foundation Models']) {
      expect(flat).toContain(expected);
    }
  });
});

describe('research projects', () => {
  it('exist across three pillars', () => {
    expect(pillars).toHaveLength(3);
    expect(allProjects.length).toBeGreaterThanOrEqual(11);
  });
  it('every project has non-empty title and blurb', () => {
    for (const p of allProjects) {
      expect(p.title.length).toBeGreaterThan(3);
      expect(p.blurb.length).toBeGreaterThan(30);
    }
  });
  it('contains no placeholder or lorem text', () => {
    const text = JSON.stringify(allProjects);
    expect(text).not.toMatch(/lorem|TODO|placeholder|xxx/i);
  });
  it('unabbreviated institution names are used', () => {
    const text = [
      JSON.stringify(deeptechExperience),
      JSON.stringify(about),
    ].join(' ');
    expect(text).toContain('Vikram Sarabhai Space Centre');
    expect(text).toContain('Indian Space Research Organisation');
    expect(text).toContain('General Electric');
    expect(text).toContain('Indian Institute of Science');
    expect(text).toContain("City St George's, University of London");
    expect(text).toContain('University of York');
    // no bare abbreviations
    expect(text).not.toMatch(/\bISRO\b|\bGE\b|\bIISc\b|\bEPSRC\b/);
  });
  it('postdoc is at City, University of London', () => {
    const postdoc = deeptechExperience.find((e) => e.title.includes('Postdoc'))!;
    expect(postdoc.body).toContain('City, University of London');
    expect(postdoc.body).not.toContain('York');
  });
  it('banned phrasings are gone', () => {
    const text = [
      JSON.stringify(allProjects),
      JSON.stringify(practice),
      JSON.stringify(services),
      JSON.stringify(about),
    ].join(' ');
    expect(text).not.toMatch(/gated to evidence|evidence-gated|honest/i);
    expect(text).not.toMatch(/information-entropy pricing/i);
  });
  it('deep-tech includes the four technektar.dev highlights with figures', () => {
    for (const slug of ['aero-turbine', 'predictive-maintenance', 'gyroscope', 'remote-monitoring']) {
      const p = allProjects.find((x) => x.slug === slug)!;
      expect(p, slug).toBeDefined();
      expect(p.figure, slug).toMatch(/^figures\//);
      expect(JSON.stringify(p.links)).toContain('technektar.dev');
    }
  });
  it('prabhasa-babylm shows the leaderboard rank', () => {
    const p = allProjects.find((x) => x.slug === 'prabhasa-babylm')!;
    expect(p.blurb).toContain('#2');
    expect(p.figure).toContain('babylm-leaderboard');
  });
  it('founder name never appears in site copy', () => {
    const text = [
      JSON.stringify(allProjects.map((p) => ({ t: p.title, b: p.blurb }))),
      JSON.stringify(practice),
      JSON.stringify(services),
      JSON.stringify(about),
      JSON.stringify(site.hero),
    ].join(' ');
    expect(text).not.toMatch(/Sharath|Sathish/);
  });
});

describe('external links', () => {
  it('are all https', () => {
    for (const href of externalLinks) {
      if (href.startsWith('#')) continue;
      if (href.startsWith('mailto:')) continue;
      expect(href, href).toMatch(/^https:\/\//);
    }
  });
  it('include the key destinations', () => {
    const joined = externalLinks.join(' ');
    expect(joined).toContain('github.com/SharathSPhD');
    expect(joined).toContain('huggingface.co/spaces/qbz506/dreamprice-demo');
    expect(joined).toContain('technektar.substack.com');
    expect(joined).toContain('linkedin.com/company/technektar');
    expect(joined).toContain('amzn.in');
    expect(joined).toContain('books.apple.com');
    expect(joined).toContain('scholar.google.com');
  });
});

describe('book', () => {
  it('is The Proven Word with three store links', () => {
    expect(writing.book.title).toBe('The Proven Word');
    expect(writing.book.stores).toHaveLength(3);
  });
});

describe('media hub', () => {
  it('has a full video list with valid ids', () => {
    expect(videos.length).toBeGreaterThanOrEqual(12);
    for (const v of videos) {
      expect(v.id).toMatch(/^[\w-]{11}$/);
      expect(v.title.length).toBeGreaterThan(5);
    }
  });
  it('has embeddable apps including the flagship set', () => {
    const ids = appEmbeds.map((a) => a.id);
    for (const expected of ['prabodha', 'dreamprice', 'triz', 'coffee', 'kundali']) {
      expect(ids).toContain(expected);
    }
  });
  it('reading hub covers Medium, Substack and the blog with real posts', () => {
    expect(reads).toHaveLength(3);
    for (const outlet of reads) expect(outlet.items.length).toBeGreaterThanOrEqual(4);
    const joined = JSON.stringify(reads);
    expect(joined).toContain('Coffee Shop Mystery');
  });
});

describe('public talks', () => {
  it('lists invited talks with a venue and a valid video id', () => {
    expect(talks.length).toBeGreaterThanOrEqual(1);
    for (const t of talks) {
      expect(t.id).toMatch(/^[\w-]{11}$/);
      expect(t.venue.length).toBeGreaterThan(5);
      expect(t.note.length).toBeGreaterThan(20);
    }
  });
  it('includes the Active Inference Institute ModelStream talk', () => {
    const actinf = talks.find((t) => t.venue.includes('Active Inference Institute'));
    expect(actinf).toBeDefined();
    expect(actinf!.id).toBe('U9Z0TIeq1Fc');
  });
});

describe('v4 copy requirements', () => {
  it('practice no longer promises to open-source the research', () => {
    expect(practice.sub).not.toMatch(/open-source the research/i);
  });
  it('fintech card leads on delivered value', () => {
    const fintech = practice.cards.find((c) => c.id === 'fintech')!;
    expect(fintech.title).toBe('Decisions that deliver value');
  });
  it('consulting headline does not require a cross-field problem', () => {
    expect(services.heading).not.toMatch(/between fields/i);
  });
  it('neo-fm is described without a nationality frame', () => {
    const neo = allProjects.find((p) => p.slug === 'neo-fm')!;
    expect(`${neo.title} ${neo.blurb}`).not.toMatch(/india-first/i);
  });
  it('stats band counts a published book', () => {
    const book = stats.find((s) => s.label.includes('book'))!;
    expect(book.label).toBe('published book');
  });
});

describe('v2 content requirements', () => {
  it('never mentions the gated prabhasa-samskrutam repo', () => {
    const text = JSON.stringify(allProjects);
    expect(text).not.toContain('prabhasa-samskrutam');
    expect(text).toContain('prabhasa-babylm');
  });
  it('pratyaksha links to its real repo', () => {
    const p = allProjects.find((x) => x.slug === 'pratyaksha')!;
    expect(p.links[0]!.href).toContain('pratyaksha-context-eng-harness');
  });
  it('fintech includes coffee causality', () => {
    const slugs = allProjects.map((p) => p.slug);
    expect(slugs).toContain('coffee-causality');
  });
});
