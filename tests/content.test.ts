import { describe, expect, it } from 'vitest';
import { site } from '../src/data/site';
import { pillars, deeptechPublications, deeptechExperience } from '../src/data/research';
import { practice, services, about } from '../src/data/pillars';
import { writing } from '../src/data/writing';
import { appEmbeds, reads, videos } from '../src/data/media';

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
  it('addresses contain no banned location text', () => {
    const text = JSON.stringify(site.addresses);
    expect(text).not.toMatch(/prestige|primrose/i);
    expect(text).toContain('Banashankari');
    expect(text).toContain('Karnataka, India');
  });
  it('footer keeps trademark line and no disavowal', () => {
    expect(site.footer.entity).toContain('trademark registered in the United Kingdom');
    expect(site.footer.entity).not.toMatch(/not affiliated/i);
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
