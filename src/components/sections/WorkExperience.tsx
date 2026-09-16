const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01'; // line-shape decorative image

const COMPANIES = [
  '/assets/img/companies/Algomindz.png',
  '/assets/img/companies/Digitomark.png',
  '/assets/img/companies/Dcastalia.png',
];

const EXPERIENCE: {
  company: string;
  period: string;
  location: string;
  role: string;
  img: string;
  alt: string;
  desc?: string;
}[] = [
  {
    company: 'Algomindz',
    period: 'Feb 2025 – Present',
    location: 'Dhaka, Bangladesh (Remote)',
    role: 'SEO Team Lead',
    img: COMPANIES[0],
    alt: 'Algomindz',
    desc: 'Algomindz helps top-tier businesses maximise visibility across AI platforms and traditional search engines through a strategic blend of AEO and data-driven SEO.',
  },
  {
    company: 'Digitomark',
    period: 'Mar 2022 – Jan 2025',
    location: 'Dhaka, Bangladesh (Remote)',
    role: 'SEO Specialist',
    img: COMPANIES[1],
    alt: 'Digitomark',
    desc: 'Managed SEO projects end-to-end — strategy, technical audits, competitor analysis, and client reporting — driving measurable organic growth for multiple clients.',
  },
  {
    company: 'Dcastalia Limited',
    period: 'Jan 2022 – Apr 2023',
    location: 'Dhaka, Bangladesh',
    role: 'SEO Executive',
    img: COMPANIES[2],
    alt: 'Dcastalia Limited',
    desc: 'A transparent, result-driven software development company in Bangladesh delivering tailored digital solutions.',
  },
];

export default function WorkExperience() {
  return (
    <section className="work-experience-section-1 style-2 section-padding">
      <div className="line-shape">
        <img src={`${LIVE}/line-shape.png`} alt="Line Shape" />
      </div>

      <div className="container">
        <div className="section-title text-center">
          <h6>work experience</h6>
          <h2 className="hero_title tv_hero_title hero_title_1">
            A proven SEO specialist <span>with 3+ years</span> of expertise
          </h2>
        </div>

        <div className="feature-work-experience-wrap" style={{ position: 'relative' }}>
          {/*
            Thumbs Swiper: main.js needs .fw_preview_slider_active to init
            the main slider with fade + thumbs. We omit the
            feature-work-experience-preview-slider class so main.js does NOT
            run the circular GSAP positioning that scatters balls outside the dome.
          */}
          <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', zIndex: -1 }}>
            <div className="fw_preview_slider_active">
              <div className="swiper-wrapper">
                {COMPANIES.map((src, i) => (
                  <div key={i} className="swiper-slide">
                    <img src={src} alt="" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Static company balls at 9, 12, 3 o'clock arc positions */}
          {([
            { src: COMPANIES[0], alt: EXPERIENCE[0].company, left: 'calc(18% - 36px)', top: 'calc(42% - 36px)' },
            { src: COMPANIES[1], alt: EXPERIENCE[1].company, left: 'calc(50% - 36px)', top: '-20px'            },
            { src: COMPANIES[2], alt: EXPERIENCE[2].company, left: 'calc(82% - 36px)', top: 'calc(42% - 36px)' },
          ]).map(({ src, alt, left, top }) => (
            <div key={alt} style={{
              position: 'absolute', left, top,
              width: 72, height: 72, borderRadius: '50%', overflow: 'hidden',
              background: '#1c1c1c', border: '2px solid rgba(255,255,255,0.12)',
              zIndex: 5,
            }}>
              <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          ))}

          <div className="feature-work-experience-main-slider fw_main_slider_active wa-fix">
            <div className="swiper-wrapper">
              {EXPERIENCE.map((e) => (
                <div key={e.company} className="swiper-slide">
                  <div className="feature-work-experience-main-slider-single">
                    <div className="client-info-items">
                      <div className="client-img">
                        <img src={e.img} alt={e.alt} />
                      </div>
                      <div className="info-content">
                        <h3>{e.company}</h3>
                        <span>{e.period} &nbsp;·&nbsp; {e.location}</span>
                      </div>
                    </div>

                    <div className="info-item">
                      <h5>{e.role}</h5>
                      <div className="text-cont">
                        {e.desc && <p>{e.desc}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
