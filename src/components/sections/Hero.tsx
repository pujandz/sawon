const D = '/assets/img/decorations';

export default function Hero() {
  return (
    <section className="hero-section hero-1 hero-section1 fix">
      <div className="line-shape">
        <img src={`${D}/line-shape.png`} alt="Line Shape" />
      </div>

      <div className="hero-info">
        <img src={`${D}/info.png`} alt="Hero Info" />
        <span>trusted clients <br /> world wide</span>
      </div>

      <div className="vec-shape float-bob-x">
        <img src={`${D}/vec-shape.png`} alt="Vector Shape" />
      </div>

      <div className="container">
        <div className="row g-0 align-items-center">
          <div className="col-xl-5">
            <div className="hero-content">
              <p className="wow fadeInUp">welcome to my profile</p>

              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                <b>i&apos;m</b> Sawon Saha <br />
                <strong id="typing-text" data-words="SEO Specialist.,AEO Expert.,Digital Marketer.">&nbsp;</strong>
              </h1>

              <a
                href="/portfolio"
                className="theme-btn wow fadeInUp"
                data-wow-delay=".5s"
              >
                view portfolio <i aria-hidden="true" className="fa-solid fa-arrow-up-right"></i>
              </a>

              <div className="social-link wow fadeInUp" data-wow-delay=".7s">
                <a href="https://linkedin.com/in/sawonsaha" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://twitter.com/sawonsaha9" target="_blank" rel="noreferrer">Twitter</a>
                <a href="https://quora.com/profile/Sawon-Saha-1" target="_blank" rel="noreferrer">Quora</a>
                <a href="https://medium.com/@sawon.s907" target="_blank" rel="noreferrer">Medium</a>
              </div>
            </div>
          </div>

          {/* Description: comes right after content on mobile (order-1), moves to last column on xl */}
          <div className="col-xl-3 order-1 order-xl-2">
            <div className="content wow fadeInUp" data-wow-delay=".3s">
              <p>A results-driven SEO Team Lead &amp; AEO Specialist with 3+ years of experience crafting search strategies that drive measurable organic growth.</p>
            </div>
          </div>

          {/* Portrait: always last on mobile (order-2), moves to centre column on xl */}
          <div className="col-xl-4 order-2 order-xl-1">
            <div className="hero-image image-wrapper">
              <picture>
                <source srcSet="/assets/img/sawon-saha.webp" type="image/webp" />
                <img
                  className="hero-portrait"
                  src="/assets/img/Sawon%20Saha.png"
                  alt="Sawon Saha – SEO Specialist"
                  fetchPriority="high"
                  loading="eager"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
