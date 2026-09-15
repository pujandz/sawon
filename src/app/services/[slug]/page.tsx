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
      <section className="page-banner">
        <div className="container">
          <span style={{ fontSize: '3rem' }}>{service.icon}</span>
          <h1>{service.title}</h1>
          <p>{service.shortDesc}</p>
        </div>
      </section>

      <section className="service-details-section">
        <div className="container">
          <div className="service-details-wrapper d-flex flex-wrap gap-4">
            <div className="service-details-content">
              <h2>What&rsquo;s Included</h2>
              <p>{service.description}</p>
              <ul style={{ marginTop: '1.5rem' }}>
                {service.features.map((f) => (
                  <li key={f} style={{ marginBottom: '0.5rem' }}>✓ {f}</li>
                ))}
              </ul>
              <Link href="/contact-us" className="theme-btn" style={{ marginTop: '2rem', display: 'inline-block' }}>
                Get Started
              </Link>
            </div>

            <div className="service-details-sidebar">
              <h4>All Services</h4>
              <ul>
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/services/${s.id}`}
                      style={{ fontWeight: s.id === params.slug ? 700 : 400 }}
                    >
                      {s.icon} {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
