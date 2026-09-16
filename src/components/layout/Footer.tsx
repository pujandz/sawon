import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-section fix pb-0">
      <div className="container">
        <div className="footer-wrapper wow fadeInUp" data-wow-delay=".3s">
          <ul className="footer-menu-list">
            <li><Link href="/">home</Link></li>
            <li><Link href="/about-me">ABOUT ME</Link></li>
            <li><Link href="/portfolio">PORTFOLIO</Link></li>
            <li><Link href="/blog">news &amp; blog</Link></li>
            <li><Link href="/contact-us">CONTACT US</Link></li>
          </ul>

          <div className="icon-items-area">
            <div className="icon-items">
              <a href="https://linkedin.com/in/sawonsaha" target="_blank" rel="noreferrer" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://linkedin.com/in/sawonsaha" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div className="icon-items">
              <a href="https://twitter.com/sawonsaha9" target="_blank" rel="noreferrer" className="icon">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://twitter.com/sawonsaha9" target="_blank" rel="noreferrer">Twitter</a>
            </div>
            <div className="icon-items">
              <a href="https://quora.com/profile/Sawon-Saha-1" target="_blank" rel="noreferrer" className="icon">
                <i className="fa-brands fa-quora"></i>
              </a>
              <a href="https://quora.com/profile/Sawon-Saha-1" target="_blank" rel="noreferrer">Quora</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom wow fadeInUp" data-wow-delay=".3s">
          <p>Copyright &copy; <span>Sawon Saha</span></p>

          <Link href="/" className="footer-logo">
            <img src="/assets/img/logo/white-icon.png" alt="Sawon Saha" />
          </Link>

          <ul>
            <li><Link href="/contact-us">Terms &amp; Conditions</Link></li>
            <li><Link href="/contact-us">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
