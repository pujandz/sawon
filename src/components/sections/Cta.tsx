import Link from 'next/link';

const CDN = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

export default function Cta() {
  return (
    <section className="cta-section section-padding fix">
      <div className="shape-1">
        <img src={`${CDN}/line-shape.png`} alt="Shape 1" />
      </div>
      <div className="shape-2">
        <img src={`${CDN}/shape-1.png`} alt="Shape 2" />
      </div>
      <div className="shape-3">
        <img src={`${CDN}/shape-2.png`} alt="Shape 3" />
      </div>
      <div className="shape-4">
        <img src={`${CDN}/shape-3.png`} alt="Shape 4" />
      </div>
      <div className="shape-5">
        <img src={`${CDN}/shape-4.png`} alt="Shape 5" />
      </div>
      <div className="shape-6">
        <img src={`${CDN}/shape-5.png`} alt="Shape 6" />
      </div>

      <div className="row">
        <div className="col-xl-12">
          <div className="cta-text-items text-center">
            <div className="icon">
              <i className="fa-regular fa-envelope"></i>
            </div>

            <h2 className="text_invert-2">have an SEO PROJECT in mind?</h2>

            <h3 className="footer-big-text wt-about-title2">
              <Link href="/contact-us">let&apos;s talk</Link>
            </h3>

            <p className="wow fadeInUp" data-wow-delay=".3s">
              Ready to improve your search rankings and drive organic growth? <br />
              Get in touch and let&apos;s build a strategy that delivers results!
            </p>

            <div className="cta-btn wow fadeInUp" data-wow-delay=".5s">
              <a
                href="https://wa.me/8801674484996"
                className="theme-btn"
                target="_blank"
                rel="noreferrer"
              >
                chat on whatsapp <i aria-hidden="true" className="fa-solid fa-arrow-up-right"></i>
              </a>
              <Link href="/contact-us" className="theme-btn">
                hire me <i aria-hidden="true" className="fa-solid fa-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
