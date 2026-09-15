import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header id="header-sticky" className="header-2 defult-header inner-page-style">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link href="/" className="header-logo">
                <img src="/assets/img/logo/white-icon.svg" alt="Sawon Saha" />
              </Link>

              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu" className="menu-main-menu-container">
                    <ul className="defult-header">
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/about-me">About Me</Link></li>
                      <li className="menu-item-has-children">
                        <Link href="/services">Services</Link>
                        <ul className="sub-menu">
                          <li><Link href="/services">All Services</Link></li>
                          <li><Link href="/services/technical-seo">Technical SEO</Link></li>
                          <li><Link href="/services/on-page-seo">On-Page SEO</Link></li>
                          <li><Link href="/services/link-building">Link Building</Link></li>
                          <li><Link href="/services/local-seo">Local SEO</Link></li>
                          <li><Link href="/services/seo-audit">SEO Audit</Link></li>
                        </ul>
                      </li>
                      <li><Link href="/portfolio-grid">Portfolio</Link></li>
                      <li><Link href="/blog">Blog</Link></li>
                      <li><Link href="/contact-us">Contact</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="header-right d-flex justify-content-end align-items-center mt-0">
                <Link href="/contact-us" className="theme-btn">
                  Hire Me <i className="fa-solid fa-arrow-up-right"></i>
                </Link>
                <div className="header__hamburger my-auto">
                  <div className="sidebar__toggle">
                    <img src="/assets/img/bar.svg" alt="menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas sidebar */}
      <div className="fix-area">
        <div className="offcanvas__info style-2">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="/assets/img/logo/white-icon.svg" alt="Sawon Saha" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                SEO Team Lead & AEO Specialist based in Bangladesh.
                Helping businesses grow through data-driven search optimization.
              </p>
              <div className="mobile-menu fix mb-3"></div>
              <div className="offcanvas__contact">
                <h4>Naogaon, Rajshahi, Bangladesh</h4>
                <p>Open for freelance & full-time opportunities</p>
                <a href="mailto:sawon.s907@gmail.com">sawon.s907@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>
    </>
  );
}
