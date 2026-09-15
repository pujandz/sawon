const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

export default function Hero() {
  return (
    <section className="hero-section hero-1 hero-section1 fix">
      <div className="line-shape">
        <img src={`${LIVE}/line-shape.png`} alt="Line Shape" />
      </div>

      <div className="hero-info">
        <img src={`${LIVE}/info.png`} alt="Hero Info" />
        <span>trusted clients <br /> world wide</span>
      </div>

      <div className="vec-shape float-bob-x">
        <img src={`${LIVE}/vec-shape.png`} alt="Vector Shape" />
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

          <div className="col-xl-4 order-2 order-xl-1">
            <div className="hero-image image-wrapper">
              <img
                className="animated-image"
                src="/assets/img/Sawon-Saha.png"
                alt="Sawon Saha – SEO Specialist"
              />
            </div>
          </div>

          <div className="col-xl-3 order-1 order-xl-2">
            <div className="content wow fadeInUp" data-wow-delay=".3s">
              <p>A results-driven SEO Team Lead &amp; AEO Specialist with 3+ years of experience crafting search strategies that drive measurable organic growth.</p>

              <a
                href="https://www.youtube.com/watch?v=R0mku_PtK1E"
                className="video-btn video-popup"
              >
                <span className="icon">
                  <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                  </svg>
                </span>
                <span className="text">Show Reel</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
