import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Blog – Sawon Saha',
  description: 'SEO insights, strategies, and tips from Sawon Saha — covering technical SEO, content strategy, AEO, and digital marketing.',
  robots: { index: false, follow: false },
};

export default function BlogPage() {
  return (
    <main>
      <section className="project-inner-page-wrapper section-padding fix">
        <div className="container">
          <h1>SEO Blog</h1>
          <p style={{ marginTop: '1.5rem', color: 'rgba(255,255,255,0.6)' }}>
            New articles coming soon. Follow on{' '}
            <a href="https://medium.com/@sawon.s907" target="_blank" rel="noreferrer" style={{ color: 'var(--theme)' }}>
              Medium
            </a>{' '}
            for the latest SEO insights.
          </p>
        </div>
      </section>
    </main>
  );
}
