const D = '/assets/img/decorations';

const SERVICES = [
  {
    id: 'technical-seo',
    title: 'Technical SEO',
    excerpt: 'Fix crawl errors, improve Core Web Vitals, implement structured data, and ensure flawless indexability — the technical foundation of every successful SEO campaign.',
    delay: '0.3s',
  },
  {
    id: 'on-page-seo',
    title: 'On-Page SEO',
    excerpt: 'Optimize title tags, meta descriptions, headings, internal linking, and content structure so every page ranks for the right queries and satisfies user intent.',
    delay: '0.5s',
  },
  {
    id: 'link-building',
    title: 'Link Building',
    excerpt: 'Build high-authority, editorial backlinks through digital PR, guest posting, broken link reclamation, and HARO outreach to boost domain authority and rankings.',
    delay: '0.7s',
  },
  {
    id: 'local-seo',
    title: 'Local SEO',
    excerpt: 'Dominate local search and Google Maps with GBP optimization, citation building, review strategy, and geo-targeted content for businesses in Bangladesh and beyond.',
    delay: '0.9s',
  },
];

export default function Services() {
  return (
    <section className="choose-us-section fix section-padding">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h6>what i do?</h6>
            <h2 className="hero_title tv_hero_title hero_title_1">
              Transforming Search Presence <span>Into Sustainable Growth</span>
            </h2>
          </div>

          <p className="wow fadeInUp" data-wow-delay=".3s">
            Data-driven SEO strategies that increase organic traffic, <br />
            improve rankings, and deliver measurable business results <br />
            across both traditional and AI-powered search engines
          </p>
        </div>

        <div className="choose-us-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <ul className="choose-us-box-list">
                {SERVICES.map((s) => (
                  <li key={s.id} className="wow fadeInUp" data-wow-delay={s.delay}>
                    <div className="content">
                      <h2><a href={`/services/${s.id}`}>{s.title}</a></h2>
                      <p>{s.excerpt}</p>
                    </div>
                    <a href={`/services/${s.id}`} className="arrow-icon">
                      <i aria-hidden="true" className="fa-solid fa-arrow-up-right"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="choose-us-image fix">
                <img
                  data-speed=".7"
                  src={`${D}/choose-us.png`}
                  alt="SEO Services"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
