import Link from 'next/link';

const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

export default function Cta() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-text-items text-center">
          <img src={`${LIVE}/cta-icon.svg`} alt="" width={40} height={40} />
          <h2>have an SEO PROJECT in mind?</h2>
          <h3>
            <Link href="/contact-us">let&rsquo;s talk</Link>
          </h3>
          <p>
            Ready to improve your search rankings and drive organic growth?
            <br />
            Get in touch and let&rsquo;s build a strategy that delivers results!
          </p>
          <div className="cta-btns d-flex justify-content-center gap-3">
            <a href="https://wa.me/8801674484996" className="theme-btn theme-btn-alt" target="_blank" rel="noreferrer">
              chat on whatsapp
            </a>
            <Link href="/contact-us" className="theme-btn">
              hire me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
