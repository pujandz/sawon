import Link from 'next/link';

const PLANS = [
  {
    name: 'Starter Plan',
    price: '$299',
    period: 'per month',
    style2: false,
    delay: '0.3s',
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
    style2: true,
    delay: '0.5s',
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
    style2: false,
    delay: '0.7s',
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
    <section className="pricing-section section-padding fix">
      <div className="container">
        <div className="row g-4 align-items-center">
          {PLANS.map((p) => (
            <div key={p.name} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={p.delay}>
              <div className={`pricing-box-items${p.style2 ? ' style-2' : ' active'}`}>
                <div className="pricing-header">
                  <h2>{p.price}</h2>
                  <p>{p.period}</p>
                </div>

                <Link href="/contact-us" className="circle-icon">
                  <i aria-hidden="true" className="fa-solid fa-arrow-up-right"></i>
                </Link>

                <ul>
                  {p.features.map((f) => (
                    <li key={f}>
                      <i className="fa-solid fa-circle-arrow-right"></i>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="pricing-content">
                  <div className="pricing-box-professional">
                    <h4>{p.name}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
