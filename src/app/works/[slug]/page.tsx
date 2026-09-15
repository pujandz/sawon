import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const UP = 'https://server1.liushibd.com/wp-content/uploads/2025/11';

const PROJECTS = [
  {
    slug: 'ecommerce-seo-recovery',
    title: 'E-Commerce SEO Recovery',
    cat: 'E-Commerce SEO',
    img: `${UP}/project-05-2.jpg`,
    client: 'E-Commerce Brand',
    challenge: 'Organic traffic had dropped 40% after a Google algorithm update.',
    solution: 'Full technical audit, content pruning, E-E-A-T improvements, and high-authority link building.',
    results: [
      { metric: 'Organic Traffic', change: '+320%', period: '8 months' },
      { metric: 'Keyword Rankings (Top 10)', change: '+180 keywords', period: '' },
      { metric: 'Monthly Revenue from SEO', change: '+$45,000', period: '' },
    ],
    tags: ['Technical SEO', 'Link Building', 'E-Commerce'],
  },
  {
    slug: 'saas-brand-authority',
    title: 'SaaS Brand Authority Building',
    cat: 'SaaS SEO',
    img: `${UP}/project-04-3.jpg`,
    client: 'SaaS Company',
    challenge: 'Brand-new website with zero domain authority in a crowded niche.',
    solution: 'Topic cluster strategy, programmatic SEO, digital PR, and conversion-focused landing pages.',
    results: [
      { metric: 'Domain Authority', change: '0 → 42', period: '12 months' },
      { metric: 'Organic Sign-ups', change: '+890%', period: '12 months' },
      { metric: 'Featured Snippets', change: '34 won', period: '' },
    ],
    tags: ['Content Strategy', 'Digital PR', 'SaaS'],
  },
  {
    slug: 'local-service-maps-ranking',
    title: 'Local Service Business Maps Ranking',
    cat: 'Local SEO',
    img: `${UP}/project-03-2-1024x460.jpg`,
    client: 'Local Home Services',
    challenge: 'Invisible in local search; competitors dominating Google Maps.',
    solution: 'Google Business Profile optimization, local citation building, review strategy, and local content.',
    results: [
      { metric: 'Google Maps Ranking', change: 'Page 3 → #1', period: '3 months' },
      { metric: 'Phone Calls from GMB', change: '+560%', period: '' },
      { metric: 'Local Keyword Rankings', change: '+94 keywords', period: '' },
    ],
    tags: ['Local SEO', 'GBP', 'Citation Building'],
  },
  {
    slug: 'fintech-content-strategy',
    title: 'Fintech Content Strategy',
    cat: 'SaaS SEO',
    img: `${UP}/project-02-4.jpg`,
    client: 'Fintech Startup',
    challenge: 'Low organic visibility competing against established financial brands.',
    solution: 'Topical authority mapping, expert-authored long-form content, and E-E-A-T optimization.',
    results: [
      { metric: 'Organic Sessions', change: '+445%', period: '10 months' },
      { metric: 'Organic Sign-ups', change: '+890%', period: '' },
      { metric: 'Domain Rating', change: '12 → 38', period: '' },
    ],
    tags: ['Content Strategy', 'E-E-A-T', 'Fintech'],
  },
  {
    slug: 'bangladesh-retail-local-seo',
    title: 'Bangladesh Retail Chain Local SEO',
    cat: 'Local SEO',
    img: `${UP}/project-01-4.jpg`,
    client: 'Multi-location Retail Chain',
    challenge: 'Multiple locations not appearing in local pack despite strong brand presence.',
    solution: 'Multi-location GBP management, NAP consistency audit, review campaigns, and local schema markup.',
    results: [
      { metric: 'Local Pack Appearances', change: '+380%', period: '4 months' },
      { metric: 'Store Visits from Maps', change: '+215%', period: '' },
      { metric: 'Review Score', change: '3.2 → 4.7', period: '' },
    ],
    tags: ['Local SEO', 'Multi-location', 'GBP'],
  },
  {
    slug: 'fashion-ecommerce-growth',
    title: 'Fashion E-Commerce Growth',
    cat: 'E-Commerce SEO',
    img: `${UP}/project-01-5-1024x460.jpg`,
    client: 'Fashion E-Commerce Brand',
    challenge: 'High bounce rate and low conversion from organic traffic.',
    solution: 'Technical UX audit, Core Web Vitals improvements, category page optimization, and structured data for products.',
    results: [
      { metric: 'Organic Revenue', change: '+267%', period: '6 months' },
      { metric: 'Bounce Rate', change: '-35%', period: '' },
      { metric: 'Top 10 Keywords', change: '+180 keywords', period: '' },
    ],
    tags: ['E-Commerce', 'Core Web Vitals', 'Technical SEO'],
  },
];

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} – Case Study | Sawon Saha`,
    description: `${project.challenge} See how SEO drove ${project.results[0].change} ${project.results[0].metric}.`,
  };
}

export default function WorkDetailPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">{project.cat}</span>
          <h1>{project.title}</h1>
          <p>Client: {project.client}</p>
        </div>
      </section>

      <section className="portfolio-details-section">
        <div className="container">
          <img src={project.img} alt={project.title} width={900} height={500} style={{ width: '100%', height: 'auto', marginBottom: '3rem' }} />

          <div className="portfolio-details-wrapper d-flex flex-wrap gap-4">
            <div className="portfolio-details-content">
              <h2>The Challenge</h2>
              <p>{project.challenge}</p>

              <h2 style={{ marginTop: '2rem' }}>The Solution</h2>
              <p>{project.solution}</p>

              <h2 style={{ marginTop: '2rem' }}>Results</h2>
              <div className="results-grid d-flex flex-wrap gap-3" style={{ marginTop: '1rem' }}>
                {project.results.map((r) => (
                  <div key={r.metric} className="result-item" style={{ padding: '1.5rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', minWidth: '200px' }}>
                    <h3 style={{ color: 'var(--theme-color, #0ea5e9)', fontSize: '1.5rem' }}>{r.change}</h3>
                    <p>{r.metric}</p>
                    {r.period && <small style={{ opacity: 0.6 }}>{r.period}</small>}
                  </div>
                ))}
              </div>

              <div className="tags d-flex flex-wrap gap-2" style={{ marginTop: '2rem' }}>
                {project.tags.map((t) => (
                  <span key={t} style={{ padding: '0.25rem 0.75rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', fontSize: '0.85rem' }}>{t}</span>
                ))}
              </div>

              <Link href="/portfolio-grid" className="theme-btn" style={{ marginTop: '2rem', display: 'inline-block' }}>
                ← Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
