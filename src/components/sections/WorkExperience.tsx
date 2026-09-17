const D = '/assets/img/decorations';

const COMPANIES = [
  '/assets/img/companies/Algomindz.png',
  '/assets/img/companies/Digitomark.png',
  '/assets/img/companies/Dcastalia.png',
];

// 9 slides so GSAP circular positioning (radius=450, 1050px wrapper) places
// 5 balls in the visible top arc of the dome (wrap height=585px clips the rest).
const PREVIEW_SLIDES = [...COMPANIES, ...COMPANIES, ...COMPANIES];

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
        <img src={`${D}/line-shape.png`} alt="Line Shape" />
      </div>

      <div className="container">
        <div className="section-title text-center">
          <h6>work experience</h6>
          <h2 className="hero_title">
            A proven SEO specialist <span>with 3+ years</span> of expertise
          </h2>
        </div>

        <div className="feature-work-experience-wrap fix">
          <div className="feature-work-experience-preview">
            <div className="feature-work-experience-preview-slider fw_preview_slider_active">
              <div className="swiper-wrapper">
                {PREVIEW_SLIDES.map((src, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="feature-work-experience-preview-slider-item">
                      <img src={src} alt="" aria-hidden="true" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

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
