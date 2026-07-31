import { addressLines, site } from './site';
import { about, services } from './pillars';
import { pillars } from './research';
import { talks, videos } from './media';
import { writing } from './writing';

/**
 * Structured data is derived from the same modules that render the page, so
 * markup and machine-readable metadata cannot drift apart. Everything here is
 * emitted as a single JSON-LD @graph in the document head.
 */
export function buildJsonLd(origin: string) {
  const url = `${origin}/`;
  const orgId = `${origin}/#organization`;
  const siteId = `${origin}/#website`;

  const allProjects = pillars.flatMap((p) => p.themes.flatMap((t) => t.projects));

  const organization = {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': orgId,
    name: site.name,
    alternateName: 'TechNektar™',
    url,
    logo: `${origin}/logo.jpg`,
    image: `${origin}/logo.jpg`,
    description: site.description,
    slogan: site.tagline,
    email: site.email,
    knowsAbout: site.hero.capabilities.flatMap((tier) => tier.items as readonly string[]),
    address: site.addresses.map((addr) => ({
      '@type': 'PostalAddress',
      streetAddress: addr.street,
      addressLocality: addr.locality,
      ...('region' in addr ? { addressRegion: addr.region } : {}),
      postalCode: addr.postalCode,
      addressCountry: addr.countryCode,
    })),
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    sameAs: site.social.map((s) => s.href),
    makesOffer: services.columns.map((col) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: col.title,
        serviceType: col.title,
        description: col.items.join('; '),
      },
    })),
  };

  const website = {
    '@type': 'WebSite',
    '@id': siteId,
    url,
    name: site.title,
    description: site.description,
    publisher: { '@id': orgId },
    inLanguage: 'en',
  };

  const webPage = {
    '@type': 'WebPage',
    '@id': `${origin}/#webpage`,
    url,
    name: site.title,
    description: site.description,
    isPartOf: { '@id': siteId },
    about: { '@id': orgId },
    primaryImageOfPage: `${origin}/logo.jpg`,
  };

  const research = {
    '@type': 'ItemList',
    '@id': `${origin}/#research`,
    name: 'Open research, systems and applications',
    numberOfItems: allProjects.length,
    itemListElement: allProjects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'CreativeWork',
        name: p.title,
        description: p.blurb,
        ...(p.links[0] ? { url: p.links[0].href } : {}),
        ...(p.figure ? { image: `${origin}/${p.figure}` } : {}),
        creator: { '@id': orgId },
      },
    })),
  };

  const talkItems = talks.map((t) => ({
    '@type': 'VideoObject',
    name: `${t.title} — ${t.venue}`,
    description: t.note,
    embedUrl: `https://www.youtube.com/embed/${t.id}`,
    url: `https://www.youtube.com/watch?v=${t.id}`,
    thumbnailUrl: `https://i.ytimg.com/vi/${t.id}/hqdefault.jpg`,
    uploadDate: '2026-01-01',
    publisher: { '@id': orgId },
  }));

  const book = {
    '@type': 'Book',
    name: writing.book.title,
    description: writing.book.body,
    image: `${origin}/covers/proven-word.jpg`,
    author: { '@id': orgId },
    offers: writing.book.stores.map((s) => ({
      '@type': 'Offer',
      url: s.href,
      availability: 'https://schema.org/InStock',
    })),
  };

  /** Answer-engine fodder: the questions a prospective client actually asks. */
  const faq = {
    '@type': 'FAQPage',
    '@id': `${origin}/#faq`,
    mainEntity: [
      {
        q: 'What does TechNektar do?',
        a: `${site.name} is an independent research and engineering consultancy working across three fields: artificial intelligence, deep-tech engineering and fintech. It takes frontier research through to working, tested systems.`,
      },
      {
        q: 'What AI work does TechNektar take on?',
        a: services.columns[0]!.items.join('; ') + '.',
      },
      {
        q: 'What engineering domains does TechNektar cover?',
        a: services.columns[1]!.items.join('; ') + '.',
      },
      {
        q: 'Where is TechNektar based?',
        a: 'TechNektar works from London, United Kingdom and Bengaluru, India, and takes on engagements worldwide.',
      },
      {
        q: 'How large are typical engagements?',
        a: services.sub,
      },
      {
        q: 'What experience is behind the practice?',
        a: about.paragraphs[0]!,
      },
    ].map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website, webPage, research, book, faq, ...talkItems],
  };
}

/** Count used only for the llms.txt summary. */
export const videoCount = videos.length;
