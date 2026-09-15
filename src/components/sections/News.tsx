import Link from 'next/link';

const LIVE_IMG = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

interface Post {
  title: string;
  slug: string;
  category: string;
  date: string;
  img: string;
  authorImg?: string;
  authorName?: string;
  authorRole?: string;
}

const PLACEHOLDER_POSTS: Post[] = [
  {
    title: 'How to Build a Winning SEO Strategy in 2025',
    slug: 'blog',
    category: 'SEO Strategy',
    date: 'Jan 15, 2025',
    img: `${LIVE_IMG}/news-1.jpg`,
    authorImg: `${LIVE_IMG}/client-1.png`,
    authorName: 'Sawon Saha',
    authorRole: 'SEO Specialist',
  },
  {
    title: 'AEO vs SEO: What Every Marketer Needs to Know',
    slug: 'blog',
    category: 'AEO',
    date: 'Feb 3, 2025',
    img: `${LIVE_IMG}/news-2.jpg`,
    authorImg: `${LIVE_IMG}/client-2.png`,
    authorName: 'Sawon Saha',
    authorRole: 'AEO Expert',
  },
  {
    title: 'Technical SEO Audit Checklist for 2025',
    slug: 'blog',
    category: 'Technical SEO',
    date: 'Mar 20, 2025',
    img: `${LIVE_IMG}/news-3.jpg`,
    authorImg: `${LIVE_IMG}/client-3.png`,
    authorName: 'Sawon Saha',
    authorRole: 'Digital Marketer',
  },
];

export default function News({ posts = PLACEHOLDER_POSTS as Post[] }) {
  const items = posts.length > 0 ? posts : PLACEHOLDER_POSTS;

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
            {items.map((p) => (
              <div key={p.slug + p.title} className="col-xl-12">
                <article className="news-main-box-items tp-service-panel">
                  <div className="news-content">
                    <ul>
                      <li className="client-info">
                        {p.authorImg && (
                          <img src={p.authorImg} alt={p.authorName ?? 'Author'} />
                        )}
                        <span>{p.authorName ?? p.category}</span>
                      </li>
                      <li>{p.date}</li>
                    </ul>
                    <h3>
                      <Link href={`/${p.slug}`} className="tp_text_invert">{p.title}</Link>
                    </h3>
                  </div>
                  <div className="news-image">
                    <Link href={`/${p.slug}`}>
                      <img src={p.img} alt={p.title} />
                    </Link>
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
