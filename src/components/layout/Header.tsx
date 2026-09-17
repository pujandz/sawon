import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header id="header-sticky" className="header-1">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link href="/" className="offcanvas__logo">
                <img src="/assets/img/logo/white-icon.webp" alt="Sawon Saha" />
              </Link>

              <div className="header-right justify-content-end align-items-center">
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
      <div className="fix-area style-offcanvas-2">
        <div className="header-offcanvas-border">
          <div className="offcanvas__info">
            <Link href="/" className="offcanvas__logo">
              <img src="/assets/img/logo/white-icon.webp" alt="Sawon Saha" />
            </Link>
            <div className="offcanvas__close">
              <button>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="contact-information">
              <h3>Get In Touch</h3>
              <ul className="contact-list">
                <li>
                  <span>Phone</span>
                  <a href="tel:+8801XXXXXXXXX">+880 1XXX-XXXXXX</a>
                </li>
                <li>
                  <span>Email</span>
                  <a href="mailto:sawon.s907@gmail.com">sawon.s907@gmail.com</a>
                </li>
                <li>
                  <span>Address</span>
                  Naogaon, Rajshahi, Bangladesh
                </li>
                <li>
                  <span>Follow us</span>
                  <div className="social-icon">
                    <a href="https://linkedin.com/in/sawonsaha" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://twitter.com/sawonsaha9" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://quora.com/profile/Sawon-Saha-1" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-quora"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="offcanvas__wrapper">
              <div className="offcanvas__content">
                <div className="mobile-menus fix">
                  <nav id="mobile-menus">
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/about-me">About Me</Link></li>
                      <li><Link href="/portfolio">Portfolio</Link></li>
                      <li><Link href="/blog">Blog</Link></li>
                      <li><Link href="/contact-us">Contact</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>
    </>
  );
}
