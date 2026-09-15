import Link from 'next/link';

const PLANS = [
  {
    name: 'Starter Plan',
    price: '$299',
    period: 'per month',
    popular: false,
    features: [
      'Technical SEO Audit',
      'On-Page Optimization (up to 10 pages)',
      'Keyword Research & Mapping',
      'Monthly Performance Report',
      'Email Support',
    ],
  },
  {
    name: 'Growth Plan',
    price: '$599',
    period: 'per month',
    popular: true,
    features: [
      'Full Technical SEO',
      'On-Page Optimization (unlimited pages)',
      'Link Building (5 links/month)',
      'Content Strategy & Brief',
      'Weekly Progress Reports',
      'Priority Support',
    ],
  },
  {
    name: 'Enterprise Plan',
    price: '$999',
    period: 'per month',
    popular: false,
    features: [
      'Everything in Growth',
      'Link Building (15+ links/month)',
      'AEO & AI Search Optimization',
      'Competitor Gap Analysis',
      'Dedicated Account Manager',
      'Custom Strategy Sessions',
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="section-title text-center">
          <span className="eyebrow">choose your plan</span>
          <h2>Flexible SEO packages for growing businesses</h2>
        </div>

        <div className="pricing-box-items d-flex flex-wrap justify-content-center gap-4">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`pricing-content${p.popular ? ' most-popular' : ''}`}
            >
              {p.popular && <span className="badge">most popular</span>}
              <h3>{p.price}</h3>
              <span>{p.period}</span>
              <h4>{p.name}</h4>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link href="/contact-us" className="theme-btn">
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <p className="pricing-note text-center">
          Custom packages available — contact me to discuss your specific needs
        </p>
      </div>
    </section>
  );
}
