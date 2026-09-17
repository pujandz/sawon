import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfolio – SEO Case Studies | Sawon Saha',
  description: 'Browse Sawon Saha\'s SEO case studies: e-commerce growth, local SEO, technical audits, and AEO strategies delivering measurable organic results.',
  robots: { index: false, follow: false },
};

const PH = '/assets/img/placeholder.svg';

const PROJECTS = [
  {
    title: 'E-Commerce SEO Recovery',
    slug: 'ecommerce-seo-recovery',
    cat: 'E-Commerce SEO',
    img: PH,
    result: '+320% organic traffic in 8 months',
  },
  {
    title: 'SaaS Brand Authority Building',
    slug: 'saas-brand-authority',
    cat: 'SaaS SEO',
    img: PH,
    result: 'DA 0 → 42 in 12 months',
  },
  {
    title: 'Local Service Business Maps Ranking',
    slug: 'local-service-maps-ranking',
    cat: 'Local SEO',
    img: PH,
    result: 'Page 3 → #1 in Google Maps',
  },
  {
    title: 'Fintech Content Strategy',
    slug: 'fintech-content-strategy',
    cat: 'SaaS SEO',
    img: PH,
    result: '+890% organic sign-ups',
  },
  {
    title: 'Bangladesh Retail Chain Local SEO',
    slug: 'bangladesh-retail-local-seo',
    cat: 'Local SEO',
    img: PH,
    result: '+560% calls from Google Maps',
  },
  {
    title: 'Fashion E-Commerce Growth',
    slug: 'fashion-ecommerce-growth',
    cat: 'E-Commerce SEO',
    img: PH,
    result: '+180 keywords in Top 10',
  },
];

export default function PortfolioPage() {
  return (
    <main>
      {/* Page title */}
      <section className="project-inner-page-wrapper section-padding fix">
        <div className="container">
          <h1>portfolio</h1>
        </div>
      </section>

      {/* Project grid */}
      <section className="project-section-555 section-padding pt-0 fix">
        <div className="container">
          <div className="row g-4">
            {PROJECTS.map((p) => (
              <div key={p.slug} className="col-xl-4 col-lg-6 col-md-6">
                <div className="project-box-items-555">
                  <div className="thumb">
                    <img src={p.img} alt={p.title} />
                  </div>
                  <div className="content">
                    <p>{p.cat}</p>
                    <h3>
                      <Link href={`/works/${p.slug}`}>{p.title}</Link>
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>{p.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
