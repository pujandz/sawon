const D = '/assets/img/decorations';
const T = '/assets/img/tools';

const SKILLS = [
  { label: 'Ahrefs',          pct: 95, icon: `${T}/ahrefs.webp` },
  { label: 'SEMrush',         pct: 93, icon: `${T}/semrush.webp` },
  { label: 'Screaming Frog',  pct: 88, icon: `${T}/screaming-frog.webp` },
  { label: 'Search Console',  pct: 98, icon: `${T}/search-console.webp` },
  { label: 'Moz Pro',         pct: 85, icon: `${T}/moz.webp` },
];

export default function About() {
  return (
    <section className="about-section section-padding">
      <div className="circle-shape">
        <img src={`${D}/circle-shape.png`} alt="Circle shape" />
      </div>

      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-left-items">
                <div className="section-title mb-0 wow fadeInUp" data-wow-delay=".3s">
                  <h6>about myself</h6>
                </div>

                <ul className="top-text wow fadeInUp" data-wow-delay=".5s">
                  <li><span>3+ years of</span> experience</li>
                  <li><span>80+ successfully</span> projects done</li>
                </ul>

                <h3 className="favorite-tools-heading wow fadeInUp" data-wow-delay=".6s">
                  <span>my</span> favorite tools
                </h3>

                <div className="row g-3 wow fadeInUp" data-wow-delay=".7s">
                  {SKILLS.map((s) => (
                    <div key={s.label} className="col-6">
                      <div className="skill-counter skill-counter-icon">
                        <div className="skill-tool-icon">
                          <img src={s.icon} alt="" aria-hidden="true" width={44} height={44} loading="lazy" decoding="async" />
                        </div>
                        <div className="content">
                          <h2><span className="count">{s.pct}</span>%</h2>
                          <p>{s.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="vec-shape">
                  <img src={`${D}/vec-shape.png`} alt="Vector shape" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title mb-4">
                  <h2 className="hero_title tv_hero_title hero_title_1">
                    A Professional Overview of <span>My</span>{' '}
                    <span className="no-break">Background</span> and Expertise
                  </h2>
                </div>

                <p className="wow fadeInUp" data-wow-delay=".3s">
                  A results-driven SEO Team Lead &amp; AEO Specialist based in Bangladesh
                  with 3+ years of experience, crafting search strategies that drive
                  measurable organic growth. Blending technical expertise with
                  content and data analysis.
                </p>

                <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                  Currently leading the SEO team at Algomindz, I help businesses maximize
                  visibility across both traditional search engines and AI-powered answer
                  engines like Google AI Overviews and Perplexity.
                </p>

                <div className="about-btn wow fadeInUp" data-wow-delay=".7s">
                  <a href="/about-me" className="theme-btn">
                    get to know me <i aria-hidden="true" className="fa-solid fa-arrow-up-right"></i>
                  </a>
                  <a href="mailto:sawon.s907@gmail.com" className="theme-btn">
                    download cv <i aria-hidden="true" className="fa-solid fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
