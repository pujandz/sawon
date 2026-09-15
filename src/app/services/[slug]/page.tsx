import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.id === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} – Sawon Saha`,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES.find((s) => s.id === params.slug);
  if (!service) notFound();

  return (
    <main>
      <section className="service-inner-wrapper section-padding fix">
        <div className="container">
          <h1>{service.title}</h1>

          <div className="project-inner-page-box">
            <div className="thumb">
              <img
                src={`https://revox.baseecom.com/wp-content/uploads/2025/11/project-03-4.jpg`}
                alt={service.title}
              />
            </div>
            <div className="content">
              <span>{service.title}</span>
              <h3>{service.shortDesc}</h3>
              <p style={{ color: '#888', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.7 }}>
                {service.description}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                {service.features.map((f) => (
                  <li key={f} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    ✓ {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact-us" className="arrow-icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </Link>
            </div>
          </div>

          <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
            <h4 style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              All Services
            </h4>
            <div className="d-flex flex-wrap gap-3">
              {SERVICES.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.id}`}
                  style={{
                    padding: '0.4rem 1rem',
                    borderRadius: '999px',
                    border: `1px solid ${s.id === params.slug ? 'var(--theme)' : 'rgba(255,255,255,0.2)'}`,
                    color: s.id === params.slug ? 'var(--theme)' : 'rgba(255,255,255,0.6)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                  }}
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
