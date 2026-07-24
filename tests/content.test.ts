import { describe, expect, it } from 'vitest';
import { site } from '../src/data/site';
import { pillars, deeptechPublications, deeptechExperience } from '../src/data/research';
import { practice, services, about } from '../src/data/pillars';
import { writing } from '../src/data/writing';
import { demos } from '../src/data/demos';

const allProjects = pillars.flatMap((p) => p.themes.flatMap((t) => t.projects));

const externalLinks: string[] = [
  ...site.social.map((s) => s.href),
  ...allProjects.flatMap((p) => p.links.map((l) => l.href)),
  deeptechPublications.scholar.href,
  ...writing.outlets.map((o) => o.href),
  ...writing.podcast.platforms.map((p) => p.href),
  ...writing.book.stores.map((s) => s.href),
  ...demos.cards.map((c) => c.cta.href),
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

describe('demos', () => {
  it('reference screenshots under screenshots/', () => {
    for (const card of demos.cards) {
      expect(card.screenshot).toMatch(/^screenshots\/.+\.(png|jpg|webp)$/);
      expect(card.alt.length).toBeGreaterThan(10);
    }
  });
  it('has a YouTube playlist id', () => {
    expect(demos.youtube.playlistId).toMatch(/^PL[\w-]+$/);
  });
});
