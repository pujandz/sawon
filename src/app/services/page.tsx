import type { Metadata } from 'next';
import Link from 'next/link';
import Pricing from '@/components/sections/Pricing';
import { SERVICES, STATS } from '@/lib/constants';

const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

export const metadata: Metadata = {
  title: 'SEO Services – Sawon Saha',
  description: 'Comprehensive SEO services including Technical SEO, On-Page optimization, Link Building, Local SEO, Keyword Research, and SEO Audits.',
  robots: { index: false, follow: false },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="service-inner-wrapper section-padding fix">
        <div className="container">
          <h1>Driving Search Visibility Through Proven SEO Strategies</h1>

          <div className="row g-4" style={{ marginTop: '4rem' }}>
            {SERVICES.map((s) => (
              <div key={s.id} className="col-xl-4 col-lg-6 col-md-6">
                <div className="project-inner-page-box" style={{ flexDirection: 'column', alignItems: 'flex-start', marginTop: 0 }}>
                  <div className="content" style={{ maxWidth: '100%' }}>
                    <span>{s.title}</span>
                    <h3>{s.shortDesc}</h3>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                      {s.features.slice(0, 4).map((f) => (
                        <li key={f} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                          ✓ {f}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/services/${s.id}`} className="arrow-icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />
    </main>
  );
}
