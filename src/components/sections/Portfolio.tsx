import Link from 'next/link';

const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

const PROJECTS = [
  {
    id: 'ecommerce-seo',
    category: 'E-Commerce SEO',
    name: 'BDShop BD',
    text: 'Technical & On-Page SEO',
    img: `${LIVE}/portfolio-1.jpg`,
    delay: '.3s',
    stats: [
      { value: '+250%', label: 'Organic Traffic' },
      { value: '#1', label: 'Rankings' },
      { value: '180%', label: 'Revenue Growth' },
    ],
  },
  {
    id: 'local-seo',
    category: 'Local SEO',
    name: 'AlgoMindz',
    text: 'Local & Link Building',
    img: `${LIVE}/portfolio-2.jpg`,
    delay: '.5s',
    stats: [
      { value: '+320%', label: 'Local Visits' },
      { value: '50+', label: 'Citations Built' },
      { value: '4.9★', label: 'Google Rating' },
    ],
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-section section-padding fix">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h6 className="has-icon">
              <i aria-hidden="true" className="subtitle-icon fa-solid fa-arrow-up-right"></i>
              my featured projects
            </h6>
          </div>
        </div>

        <div className="row g-4">
          {PROJECTS.map((p) => (
            <div key={p.id} className="col-lg-6 wow fadeInUp" data-wow-delay={p.delay}>
              <div className="view-portfolio-item">
                <div className="top-head">
                  <span>{p.category}</span>
                  <Link href="/portfolio-grid" className="circle-icon">
                    <i aria-hidden="true" className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>

                <div className="thumb">
                  <img src={p.img} alt={p.name} />
                </div>

                <div className="content">
                  <h3>{p.name}</h3>
                  <p className="text">{p.text}</p>
                  <Link href="/portfolio-grid" className="theme-btn">
                    View Case Study <i aria-hidden="true" className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                  <div className="counter-box">
                    {p.stats.map((s, i) => (
                      <>
                        {i > 0 && <div key={`sep-${i}`} className="border-style"></div>}
                        <div key={s.label} className="counter-text">
                          <h5>{s.value}</h5>
                          <p>{s.label}</p>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
