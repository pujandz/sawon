import Link from 'next/link';

const D = '/assets/img/decorations';

const STARTER_FEATURES = [
  'Technical SEO Audit',
  'On-Page Optimization (up to 10 pages)',
  'Keyword Research & Mapping',
  'Monthly Performance Report',
  'Email Support',
];

const GROWTH_FEATURES = [
  'Full Technical SEO',
  'On-Page Optimization (unlimited pages)',
  'Link Building (5 links/month)',
  'Content Strategy & Brief',
  'Weekly Progress Reports',
  'Priority Support',
];

export default function Pricing() {
  return (
    <section className="pricing-section section-padding fix">
      <div className="container">
        <div className="row g-4 align-items-center">

          {/* Starter Plan */}
          <div className="col-xl-4 col-lg-6 col-md-6 order-2 order-xl-1 wow fadeInUp" data-wow-delay="0.3s">
            <div className="pricing-box-items active">
              <div className="pricing-header">
                <h2>$299</h2>
                <p>per month</p>
              </div>

              <Link href="/contact-us" className="circle-icon">
                <i aria-hidden="true" className="fa-solid fa-arrow-up-right"></i>
              </Link>

              <ul>
                {STARTER_FEATURES.map((f) => (
                  <li key={f}>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                    {f}
                  </li>
                ))}
              </ul>

              <h2>Starter Plan</h2>
            </div>
          </div>

          {/* Center info column */}
          <div className="col-xl-4 col-lg-6 col-md-6 order-1 order-xl-2 wow fadeInUp" data-wow-delay="0.5s">
            <div className="pricing-content">
              <div className="section-title">
                <h6>choose your plan</h6>
                <h2 className="hero_title tv_hero_title hero_title_1">
                  flexible pricing <span>for</span>{' '}
                  <span className="no-break">growing businesses</span>
                </h2>
              </div>
              <div className="shape-1">
                <img src={`${D}/vec-shape.png`} alt="Shape" />
              </div>
              <div className="client-info">
                <div className="client-image">
                  <img src={`${D}/info.png`} alt="Happy customers" />
                </div>
                <p>join 5 000+ <br />happy customers</p>
              </div>
            </div>
          </div>

          {/* Growth Plan */}
          <div className="col-xl-4 col-lg-6 col-md-6 order-3 order-xl-3 wow fadeInUp" data-wow-delay="0.7s">
            <div className="pricing-box-items style-2">
              <div className="pricing-header">
                <h2>$599</h2>
                <p>per month</p>
              </div>

              <Link href="/contact-us" className="circle-icon">
                <i aria-hidden="true" className="fa-solid fa-arrow-up-right"></i>
              </Link>

              <ul>
                {GROWTH_FEATURES.map((f) => (
                  <li key={f}>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                    {f}
                  </li>
                ))}
              </ul>

              <h2>Growth Plan</h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
