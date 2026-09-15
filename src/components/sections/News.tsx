import Link from 'next/link';

interface Post {
  title: string;
  slug: string;
  category: string;
  date: string;
  img: string;
}

export default function News({ posts = [] as Post[] }) {
  return (
    <section className="news-section-2">
      <div className="container">
        <div className="section-title text-center">
          <span className="eyebrow">news &amp; blog</span>
          <h2>Latest SEO Insights &amp; Articles</h2>
        </div>

        {posts.length === 0 ? (
          <p className="text-center" style={{ opacity: 0.6 }}>New articles coming soon.</p>
        ) : (
          <div className="news-box-items-2 d-flex flex-wrap gap-4">
            {posts.map((p) => (
              <article key={p.slug} className="news-main-box-items">
                <img src={p.img} alt={p.title} width={360} height={240} />
                <span className="news-meta">
                  {p.category} &middot; {p.date}
                </span>
                <h3>
                  <Link href={`/${p.slug}`}>{p.title}</Link>
                </h3>
              </article>
            ))}
          </div>
        )}

        <div className="text-center" style={{ marginTop: '2rem' }}>
          <Link href="/blog" className="theme-btn">
            view all articles
          </Link>
        </div>
      </div>
    </section>
  );
}
