import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Blog – Sawon Saha',
  description: 'SEO insights, strategies, and tips from Sawon Saha — covering technical SEO, content strategy, AEO, and digital marketing.',
};

export default function BlogPage() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <h1>SEO Insights &amp; Articles</h1>
        </div>
      </section>
      <section className="news-section-2">
        <div className="container">
          <p className="text-center" style={{ padding: '4rem 0', opacity: 0.6 }}>
            New articles coming soon. Follow me on{' '}
            <a href="https://medium.com/@sawon.s907" target="_blank" rel="noreferrer">
              Medium
            </a>{' '}
            for the latest SEO insights.
          </p>
        </div>
      </section>
    </main>
  );
}
