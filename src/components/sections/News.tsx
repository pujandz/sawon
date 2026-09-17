import Link from 'next/link';

const POSTS = [
  {
    id: 1,
    title: 'How to Build a Winning SEO Strategy That Drives Organic Growth in 2025',
    slug: 'blog',
    category: 'SEO Strategy',
    date: 'Jan 15, 2025',
    img: null,
  },
  {
    id: 2,
    title: 'AEO vs SEO: What Every Marketer Needs to Know About AI Search',
    slug: 'blog',
    category: 'AEO',
    date: 'Feb 03, 2025',
    img: null,
  },
  {
    id: 3,
    title: 'Technical SEO Audit Checklist: 30 Steps to a Perfectly Optimised Site',
    slug: 'blog',
    category: 'Technical SEO',
    date: 'Mar 20, 2025',
    img: null,
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

        <div className="blog-list">
          {POSTS.map((p) => (
            <article key={p.id} className="blog-card">
              <div className="blog-card__body">
                <h3 className="blog-card__title">
                  <Link href={`/${p.slug}`}>{p.title}</Link>
                </h3>

                <div className="blog-card__meta">
                  <div className="blog-card__author">
                    <img
                      src="/assets/img/decorations/contact.png"
                      alt="Sawon Saha"
                      className="blog-card__avatar"
                    />
                    <div>
                      <span className="blog-card__author-name">Sawon Saha</span>
                      <span className="blog-card__authored-by">Authored By</span>
                    </div>
                  </div>

                  <div className="blog-card__badges">
                    <span className="blog-badge blog-badge--cat">{p.category}</span>
                    <span className="blog-badge blog-badge--date">{p.date}</span>
                  </div>
                </div>
              </div>

              <div className="blog-card__image">
                {p.img ? (
                  <img src={p.img} alt={p.title} loading="lazy" />
                ) : (
                  <div className="blog-card__placeholder" aria-hidden="true">
                    <span>800 × 450</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
