import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-top d-flex flex-wrap justify-content-between">
            <div className="footer-widget footer-about">
              <Link href="/" className="footer-logo">
                <img src="/assets/img/logo/white-icon.svg" alt="Sawon Saha" />
              </Link>
              <p>Ready to grow your search traffic?</p>
              <h3>LET&rsquo;S WORK TOGETHER</h3>
            </div>

            <div className="footer-widget">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-me">About Me</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/portfolio-grid">Portfolio</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact-us">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-widget">
              <h4>Services</h4>
              <ul>
                <li><Link href="/services/technical-seo">Technical SEO</Link></li>
                <li><Link href="/services/on-page-seo">On-Page SEO</Link></li>
                <li><Link href="/services/link-building">Link Building</Link></li>
                <li><Link href="/services/local-seo">Local SEO</Link></li>
                <li><Link href="/services/keyword-research">Keyword Research</Link></li>
                <li><Link href="/services/seo-audit">SEO Audit</Link></li>
              </ul>
            </div>

            <div className="footer-widget">
              <h4>Contact Me</h4>
              <ul>
                <li>
                  <a href="tel:+8801674484996">+880 1674-484996</a>
                </li>
                <li>
                  <a href="mailto:sawon.s907@gmail.com">sawon.s907@gmail.com</a>
                </li>
              </ul>
              <div className="footer-socials d-flex gap-2" style={{ marginTop: '1rem' }}>
                <a href="https://linkedin.com/in/sawonsaha" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/sawonsaha9" aria-label="Twitter">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://quora.com/profile/Sawon-Saha-1" aria-label="Quora">
                  <i className="fa-brands fa-quora"></i>
                </a>
                <a href="https://medium.com/@sawon.s907" aria-label="Medium">
                  <i className="fa-brands fa-medium"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom text-center d-flex justify-content-between flex-wrap">
            <p>Copyright &copy; {new Date().getFullYear()} Sawon Saha. All rights reserved.</p>
            <div className="footer-bottom-links d-flex gap-3">
              <Link href="/contact-us">Terms &amp; Conditions</Link>
              <Link href="/contact-us">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
