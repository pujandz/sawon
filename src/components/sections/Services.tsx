import Image from 'next/image';
import Link from 'next/link';

const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

const SERVICES = [
  {
    id: 'technical-seo',
    title: 'Technical SEO',
    excerpt:
      'Fix crawl errors, improve Core Web Vitals, implement structured data, and ensure flawless indexability — the technical foundation of every successful SEO campaign.',
  },
  {
    id: 'on-page-seo',
    title: 'On-Page SEO',
    excerpt:
      'Optimize title tags, meta descriptions, headings, internal linking, and content structure so every page ranks for the right queries and satisfies user intent.',
  },
  {
    id: 'link-building',
    title: 'Link Building',
    excerpt:
      'Build high-authority, editorial backlinks through digital PR, guest posting, broken link reclamation, and HARO outreach to boost domain authority and rankings.',
  },
  {
    id: 'local-seo',
    title: 'Local SEO',
    excerpt:
      'Dominate local search and Google Maps with GBP optimization, citation building, review strategy, and geo-targeted content for local businesses in Bangladesh and beyond.',
  },
  {
    id: 'keyword-research',
    title: 'Keyword Research',
    excerpt:
      'Uncover high-value keywords your ideal customers are searching using Ahrefs, SEMrush, and GSC — mapped across the full buyer journey for maximum ROI.',
  },
  {
    id: 'seo-audit',
    title: 'SEO Audit',
    excerpt:
      'A comprehensive 200+ point audit covering technical health, on-page factors, backlink profile, content gaps, and competitor analysis with a prioritized action plan.',
  },
];

export default function Services() {
  return (
    <section className="service-section">
      <div className="container">
        <div className="section-title text-center">
          <span className="eyebrow">what i do?</span>
          <h2>Transforming Search Presence Into Sustainable Growth</h2>
          <p>
            Data-driven SEO strategies that increase organic traffic,
            <br />
            improve rankings, and deliver measurable business results
            <br />
            across both traditional and AI-powered search engines
          </p>
        </div>

        <div className="service-wrapper d-flex flex-wrap">
          <div className="service-list">
            {SERVICES.map((s) => (
              <div key={s.id} className="service-item">
                <h3>
                  <Link href={`/services/${s.id}`}>{s.title}</Link>
                </h3>
                <p>{s.excerpt}</p>
              </div>
            ))}
          </div>
          <div className="service-thumb">
            <Image
              src={`${LIVE}/choose-us.png`}
              alt="SEO Services"
              width={520}
              height={560}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
