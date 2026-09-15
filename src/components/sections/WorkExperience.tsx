const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

const PREVIEW_IMAGES = ['c1.png', 'c2.png', 'c7.png', 'c4.png', 'c2.png', 'c3.png', 'c6.png'];

const EXPERIENCE = [
  {
    company: 'Algomindz',
    period: 'Mar 2023 – Present',
    role: 'SEO Team Lead',
    img: 'info-1.png',
    alt: 'Algomindz',
    points: [
      'Lead a team of SEO specialists delivering multi-client organic growth campaigns.',
      'Built AI-powered AEO strategies to capture Google AI Overview placements.',
    ],
  },
  {
    company: 'Freelance / Agency',
    period: 'Jan 2022 – Feb 2023',
    role: 'Senior SEO Consultant',
    img: 'info-2.png',
    alt: 'Freelance',
    points: [
      'Delivered 320%+ organic traffic growth for e-commerce clients in 8 months.',
      'Executed full-funnel keyword mapping and topic cluster strategies for SaaS brands.',
    ],
  },
  {
    company: 'Digital Marketing Agency',
    period: 'Jun 2021 – Dec 2021',
    role: 'SEO Specialist',
    img: 'info-6.png',
    alt: 'Agency',
    points: [
      'Managed on-page SEO and technical audits for 15+ client websites simultaneously.',
      'Increased Google Maps rankings from page 3 to top 3 for local service businesses.',
    ],
  },
  {
    company: 'Content & SEO Studio',
    period: 'Jan 2021 – May 2021',
    role: 'SEO Analyst',
    img: 'info-4.png',
    alt: 'Studio',
    points: [
      'Conducted competitive gap analyses using Ahrefs and SEMrush.',
      'Produced monthly performance reports tracking KPIs across 10+ client accounts.',
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className="work-experience-section-1 style-2 fix section-padding">
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

        <div className="feature-work-experience-wrap fix">
          <div className="feature-work-experience-preview">
            <div className="feature-work-experience-preview-slider fw_preview_slider_active">
              <div className="swiper-wrapper">
                {PREVIEW_IMAGES.map((img, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="feature-work-experience-preview-slider-item wa-fix wa-img-cover">
                      <img src={`${LIVE}/${img}`} alt={`Experience ${i + 1}`} />
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
                        <img src={`${LIVE}/${e.img}`} alt={e.alt} />
                      </div>
                      <div className="info-content">
                        <h3>{e.company}</h3>
                        <span>{e.period}</span>
                      </div>
                    </div>

                    <div className="info-item">
                      <h5>{e.role}</h5>
                      <div className="text-cont">
                        {e.points.map((p, i) => (
                          <p key={i} className={i < e.points.length - 1 ? 'mb-4' : ''}>{p}</p>
                        ))}
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
