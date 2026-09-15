import Link from 'next/link';

interface Post {
  title: string;
  slug: string;
  category: string;
  date: string;
  img: string;
  excerpt?: string;
}

export default function News({ posts = [] as Post[] }) {
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
            {posts.length === 0 ? (
              <div className="col-xl-12">
                <p>New articles coming soon.</p>
              </div>
            ) : (
              posts.map((p) => (
                <div key={p.slug} className="col-xl-4 col-lg-6">
                  <article className="news-main-box-items">
                    <img src={p.img} alt={p.title} width={360} height={240} />
                    <span className="news-meta">{p.category} &middot; {p.date}</span>
                    <h3>
                      <Link href={`/${p.slug}`}>{p.title}</Link>
                    </h3>
                  </article>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
