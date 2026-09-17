import Link from 'next/link';

const POSTS = [
  {
    id: 1,
    title: 'How to Build a Winning SEO Strategy That Drives Organic Growth in 2025',
    slug: 'blog',
    category: 'SEO Strategy',
    date: 'Jan 15, 2025',
    img: '/assets/img/portfolio/project-01-4.jpg',
  },
  {
    id: 2,
    title: 'AEO vs SEO: What Every Marketer Needs to Know About AI Search',
    slug: 'blog',
    category: 'AEO',
    date: 'Feb 03, 2025',
    img: '/assets/img/portfolio/project-02-3.jpg',
  },
  {
    id: 3,
    title: 'Technical SEO Audit Checklist: 30 Steps to a Perfectly Optimised Site',
    slug: 'blog',
    category: 'Technical SEO',
    date: 'Mar 20, 2025',
    img: '/assets/img/portfolio/project-03-4.jpg',
  },
];

export default function News() {
  return (
    <section className="news-section section-padding fix">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h6 className="has-icon">
              <i aria-hidden="true" className="subtitle-icon fa-solid fa-arrow-up-right"></i>
              news &amp; blog
            </h6>
            <h2 className="hero_title tv_hero_title hero_title_1">
              latest news <span>&amp; article</span>
            </h2>
          </div>

          <Link href="/blog" className="theme-btn">
            view all news <i aria-hidden="true" className="fa-solid fa-arrow-up-right"></i>
          </Link>
        </div>

        <div className="tp-service-pin">
          <div className="row">
            {POSTS.map((p, idx) => (
              <div key={p.id} className="col-xl-12">
                <article className="news-main-box-items tp-service-panel">
                  <div className="news-content">
                    <h3>
                      <Link href={`/${p.slug}`}>{p.title}</Link>
                    </h3>
                    {idx === POSTS.length - 1 && (
                      <ul>
                        <li>
                          <div className="client-info">
                            <img src={"/assets/img/decorations/contact.png"} alt="Sawon Saha" />
                            <div className="client-content">
                              <span className="name">Sawon Saha</span>
                              <p>Authored By</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <span>{p.category}</span>
                        </li>
                        <li>
                          <span className="color-2">{p.date}</span>
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className="news-image">
                    <img src={p.img} alt={p.title} />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
