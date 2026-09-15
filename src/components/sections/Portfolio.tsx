import Link from 'next/link';

const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2025/11';

export default function Portfolio() {
  return (
    <section className="project-section tp-project-5-2-area fix section-padding">
      <div className="container">
        <div className="section-title tp-project-5-2-title">
          <h6>my featured projects</h6>
          <h2>works</h2>
        </div>

        {/* Row 1: 2 columns */}
        <div className="design-choose-item-wrap">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="project-box-items design-choose-item-1">
                <div className="thumb">
                  <img src={`${LIVE}/project-01-4.jpg`} alt="E-Commerce SEO" />
                  <div className="content">
                    <p>E-Commerce / SEO</p>
                    <h3><Link href="/portfolio-grid">BDShop BD</Link></h3>
                  </div>
                  <Link href="/portfolio-grid" className="circle-icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="project-box-items design-choose-item-2">
                <div className="thumb">
                  <img src={`${LIVE}/project-02-3.jpg`} alt="Local SEO" />
                  <div className="content">
                    <p>Local / SEO</p>
                    <h3><Link href="/portfolio-grid">AlgoMindz</Link></h3>
                  </div>
                  <Link href="/portfolio-grid" className="circle-icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: full-width featured */}
        <div className="row">
          <div className="col-xl-12">
            <div className="project-box-items top_view">
              <div className="thumb fix">
                <img src={`${LIVE}/project-03-4.jpg`} alt="Technical SEO Audit" />
                <div className="content">
                  <p>Technical / SEO</p>
                  <h3><Link href="/portfolio-grid">Technical SEO Audit</Link></h3>
                </div>
                <Link href="/portfolio-grid" className="circle-icon">
                  <i className="fa-solid fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: 2 columns */}
        <div className="design-choose-item-wrap">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="project-box-items design-choose-item-1">
                <div className="thumb">
                  <img src={`${LIVE}/project-04-4.jpg`} alt="AEO Strategy" />
                  <div className="content">
                    <p>AEO / Strategy</p>
                    <h3><Link href="/portfolio-grid">AEO Strategy</Link></h3>
                  </div>
                  <Link href="/portfolio-grid" className="circle-icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="project-box-items design-choose-item-2">
                <div className="thumb">
                  <img src={`${LIVE}/project-05-4.jpg`} alt="Link Building" />
                  <div className="content">
                    <p>Link Building / SEO</p>
                    <h3><Link href="/portfolio-grid">Link Building</Link></h3>
                  </div>
                  <Link href="/portfolio-grid" className="circle-icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom buttons */}
        <div className="project-btn-all wow fadeInUp" data-wow-delay=".3s">
          <Link href="/portfolio-grid" className="theme-btn">
            view all works <i aria-hidden="true" className="fa-solid fa-arrow-up-right"></i>
          </Link>
          <Link href="/contact-us" className="theme-btn">
            contact with me <i aria-hidden="true" className="fa-solid fa-arrow-up-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
