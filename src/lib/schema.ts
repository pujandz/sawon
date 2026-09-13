import { SITE_CONFIG, SERVICES, FAQ_ITEMS } from './constants';

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_CONFIG.url}/#person`,
    name: SITE_CONFIG.name,
    jobTitle: SITE_CONFIG.author.jobTitle,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    image: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/sawon-saha.jpg`,
      width: 400,
      height: 400,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'BD',
    },
    sameAs: SITE_CONFIG.author.sameAs,
    knowsAbout: [
      'Search Engine Optimization',
      'Technical SEO',
      'Link Building',
      'Local SEO',
      'On-Page SEO',
      'Keyword Research',
      'Google Analytics',
      'Content Strategy',
      'Answer Engine Optimization',
      'Core Web Vitals',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Google Analytics Certified',
        credentialCategory: 'certification',
        recognizedBy: { '@type': 'Organization', name: 'Google' },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Google Search Ads Certified',
        credentialCategory: 'certification',
        recognizedBy: { '@type': 'Organization', name: 'Google' },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'HubSpot SEO Certified',
        credentialCategory: 'certification',
        recognizedBy: { '@type': 'Organization', name: 'HubSpot' },
      },
    ],
  };
}

export function getProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_CONFIG.url}/#service`,
    name: `${SITE_CONFIG.name} – SEO Services`,
    description: 'Professional SEO services including technical SEO, on-page optimization, link building, local SEO, and keyword research for businesses in Bangladesh and worldwide.',
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    areaServed: ['Bangladesh', 'United States', 'United Kingdom', 'Australia', 'Canada', 'UAE'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'BD',
    },
    founder: {
      '@id': `${SITE_CONFIG.url}/#person`,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'SEO Services',
      itemListElement: SERVICES.map((s, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.description,
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      reviewCount: '47',
    },
  };
}

export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    author: { '@id': `${SITE_CONFIG.url}/#person` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
