const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

const PREVIEW_IMAGES = ['c1.png', 'c2.png', 'c7.png', 'c4.png', 'c3.png', 'c6.png'];

const EXPERIENCE: {
  company: string;
  period: string;
  location: string;
  role: string;
  img: string;
  alt: string;
  desc?: string;
  points?: string[];
}[] = [
  {
    company: 'Algomindz',
    period: 'Feb 2025 – Present',
    location: 'Dhaka, Bangladesh (Remote)',
    role: 'SEO Team Lead',
    img: 'info-1.png',
    alt: 'Algomindz',
    desc: 'Algomindz empowers businesses to thrive in a competitive digital landscape through a strategic blend of Answer Engine Optimization (AEO) and SEO. By combining data-driven insights with ethical marketing, we help top-tier companies maximize visibility across both AI platforms and traditional search engines.',
  },
  {
    company: 'Digitomark',
    period: 'Mar 2022 – Jan 2025',
    location: 'Dhaka, Bangladesh (Remote)',
    role: 'Search Engine Optimization Specialist',
    img: 'info-2.png',
    alt: 'Digitomark',
    desc: 'Digitomark is a leading full-service digital marketing agency based in Bangladesh, renowned for its innovative and result-driven approach in the digital marketing landscape.',
    points: [
      'SEO project management',
      'Meet with clients to determine their needs',
      'Developing and implementing SEO strategies',
      'Onsite SEO & technical SEO',
      'Competitors analysis',
      'Improving website performance',
      'Collaborating with the marketing team',
      'Keep up to date with latest SEO trends & algorithm updates',
    ],
  },
  {
    company: 'Dcastalia Limited',
    period: 'Jan 2022 – Apr 2023',
    location: 'Dhaka, Bangladesh',
    role: 'Search Engine Optimization Executive',
    img: 'info-6.png',
    alt: 'Dcastalia Limited',
    desc: 'Dcastalia Limited is an honest, transparent, and result-driven Software Development Company in Bangladesh. Delivering a personal, passionate & tailored service to each and every client, based in Bangladesh or abroad.',
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
                        <span>{e.period} &nbsp;·&nbsp; {e.location}</span>
                      </div>
                    </div>

                    <div className="info-item">
                      <h5>{e.role}</h5>
                      <div className="text-cont">
                        {e.desc && <p className={e.points ? 'mb-4' : ''}>{e.desc}</p>}
                        {e.points && (
                          <ul style={{ listStyle: 'disc', paddingLeft: '1.25em', margin: 0 }}>
                            {e.points.map((p, i) => (
                              <li key={i} style={{ marginBottom: '6px' }}>{p}</li>
                            ))}
                          </ul>
                        )}
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
