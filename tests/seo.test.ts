import { describe, expect, it } from 'vitest';
import { buildJsonLd } from '../src/data/seo';

const ORIGIN = 'https://www.technektar.com';
const graph = buildJsonLd(ORIGIN)['@graph'] as Array<Record<string, any>>;
const byType = (t: string) =>
  graph.find((n) => (Array.isArray(n['@type']) ? n['@type'].includes(t) : n['@type'] === t))!;

describe('structured data', () => {
  it('is a valid schema.org graph', () => {
    const doc = buildJsonLd(ORIGIN);
    expect(doc['@context']).toBe('https://schema.org');
    expect(Array.isArray(doc['@graph'])).toBe(true);
    // Must survive a JSON round-trip — this is what ships in the <script> tag.
    expect(() => JSON.parse(JSON.stringify(doc))).not.toThrow();
    for (const node of graph) expect(node['@type']).toBeDefined();
  });

  it('describes the organization with both offices', () => {
    const org = byType('Organization');
    expect(org.name).toBe('TechNektar');
    expect(org.email).toBe('info@technektar.com');
    expect(org.address).toHaveLength(2);
    const [london, bengaluru] = org.address;
    expect(london).toMatchObject({
      addressLocality: 'London',
      postalCode: 'E1 0SG',
      addressCountry: 'GB',
    });
    expect(bengaluru).toMatchObject({
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560109',
      addressCountry: 'IN',
    });
    expect(org.sameAs.length).toBeGreaterThanOrEqual(5);
    expect(org.knowsAbout).toContain('Turbomachinery');
    expect(org.makesOffer).toHaveLength(3);
  });

  it('lists the research catalogue', () => {
    const list = byType('ItemList');
    expect(list.numberOfItems).toBeGreaterThanOrEqual(15);
    expect(list.itemListElement[0].item.name.length).toBeGreaterThan(3);
  });

  it('exposes talks as VideoObjects', () => {
    const video = byType('VideoObject');
    expect(video.embedUrl).toContain('U9Z0TIeq1Fc');
    expect(video.name).toContain('Active Inference Institute');
  });

  it('answers common questions for answer engines', () => {
    const faq = byType('FAQPage');
    expect(faq.mainEntity.length).toBeGreaterThanOrEqual(5);
    for (const q of faq.mainEntity) {
      expect(q.name.endsWith('?')).toBe(true);
      expect(q.acceptedAnswer.text.length).toBeGreaterThan(20);
    }
  });

  it('never leaks private registration data into structured output', () => {
    const raw = JSON.stringify(buildJsonLd(ORIGIN));
    expect(raw).not.toMatch(/BBRPS0350L|10791610000671|HDFC0001079|9986526623/);
  });
});
