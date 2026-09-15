import type { Metadata } from 'next';
import Pricing from '@/components/sections/Pricing';
import { SERVICES, STATS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SEO Services – Sawon Saha',
  description: 'Comprehensive SEO services including Technical SEO, On-Page optimization, Link Building, Local SEO, Keyword Research, and SEO Audits.',
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <h1>Driving Search Visibility Through Proven SEO Strategies</h1>
        </div>
      </section>

      <section className="counters-section">
        <div className="container d-flex flex-wrap gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="counter-item">
              <h2>{s.value}{s.suffix}</h2>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="service-list-section">
        <div className="container">
          <span className="eyebrow">what i do?</span>
          <h2>Comprehensive SEO Services Tailored to Your Goals</h2>
          <p>
            End-to-end search optimization strategies
            <br />
            that increase organic visibility, drive qualified traffic,
            <br />
            and convert searchers into customers
          </p>

          <div className="service-cards-grid d-flex flex-wrap gap-4" style={{ marginTop: '3rem' }}>
            {SERVICES.map((s) => (
              <div key={s.id} className="service-card-item">
                <span className="service-icon" style={{ fontSize: '2rem' }}>{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
                <ul>
                  {s.features.slice(0, 3).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href={`/services/${s.id}`} className="theme-btn" style={{ marginTop: '1rem', display: 'inline-block' }}>
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />
    </main>
  );
}
