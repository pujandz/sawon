
const SKILLS = [
  { icon: 'figma.png', label: 'Ahrefs', pct: 95, extra: 'pl-none' },
  { icon: 'ps.png', label: 'SEMrush', pct: 93, extra: '' },
  { icon: 'ai.png', label: 'Screaming Frog', pct: 88, extra: '' },
  { icon: 'sketch.png', label: 'Search Console', pct: 98, extra: 'pl-none' },
  { icon: 'xd.png', label: 'Moz Pro', pct: 85, extra: '' },
];

export default function About() {
  return (
    <section className="about-section section-padding">
      <div className="circle-shape">
        <img src={"/assets/img/decorations/circle-shape.png"} alt="Circle shape" />
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

                <div className="row g-4 wow fadeInUp" data-wow-delay=".7s">
                  {SKILLS.map((s) => (
                    <div key={s.label} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                      <div className={`skill-counter${s.extra ? ' ' + s.extra : ''}`}>
                        <img src={`/assets/img/decorations/${s.icon}`} alt="Skill icon" />
                        <div className="content">
                          <h2><span className="count">{s.pct}</span>%</h2>
                          <p>{s.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="col-xl-12 d-none d-xxl-block">
                    <div className="middle-line"></div>
                  </div>
                </div>

                <h4 className="title"><span>My</span> Favorite SEO Tools</h4>

                <div className="vec-shape">
                  <img src={"/assets/img/decorations/vec-shape.png"} alt="Vector shape" />
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
