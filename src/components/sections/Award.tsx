const ACHIEVEMENTS = [
  { year: '2021', text: 'Google Analytics Individual Qualification (GAIQ) certified' },
  { year: '2022', text: 'SEMrush SEO Toolkit Certification — advanced level' },
  { year: '2023', text: 'Led SEO team at Algomindz — promoted to Team Lead' },
  { year: '2024', text: 'Delivered 80+ successful SEO projects across 10+ industries' },
];

const CERTS = [
  {
    name: 'Google Analytics Individual Qualification',
    issuer: 'Google',
    year: '2021',
    icon: 'fa-solid fa-chart-line',
    accent: '#4285F4',
  },
  {
    name: 'SEO Toolkit Certification',
    issuer: 'SEMrush Academy',
    year: '2022',
    icon: 'fa-solid fa-magnifying-glass-chart',
    accent: '#FF642B',
  },
  {
    name: 'Foundations of Digital Marketing & E-commerce',
    issuer: 'Google · Coursera',
    year: '2022',
    icon: 'fa-solid fa-bullhorn',
    accent: '#34A853',
  },
  {
    name: 'Introduction to Search Engine Optimization',
    issuer: 'Coursera',
    year: '2023',
    icon: 'fa-solid fa-magnifying-glass',
    accent: '#6C5DFA',
  },
];

export default function Award() {
  return (
    <section className="award-section section-padding fix section-bg approach-area">
      <div className="container">
        <div className="award-wrapper">
          <div className="row g-4 align-items-center">

            {/* Left — timeline list */}
            <div className="col-lg-6">
              <div className="section-title">
                <h6>certified &amp; recognised</h6>
                <h2 className="hero_title tv_hero_title hero_title_1">
                  Certifications <span>&amp; Milestones</span>
                </h2>
              </div>
              <div className="award-content approach-wrapper-box fix">
                {ACHIEVEMENTS.map((a) => (
                  <div key={a.year} className="award-list-items approach-box">
                    <p>{a.year}</p>
                    <span>{a.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — certificate cards */}
            <div className="col-lg-6">
              <div className="cert-grid">
                {CERTS.map((cert) => (
                  <div className="cert-card" key={cert.name}>
                    {/* Top accent stripe */}
                    <div className="cert-stripe" style={{ background: cert.accent }} />

                    {/* Header row */}
                    <div className="cert-header">
                      <div className="cert-icon-wrap" style={{ borderColor: cert.accent + '44', background: cert.accent + '18' }}>
                        <i className={cert.icon} style={{ color: cert.accent }} aria-hidden="true" />
                      </div>
                      <span className="cert-year">{cert.year}</span>
                    </div>

                    {/* Certificate label */}
                    <p className="cert-label">Certificate of Achievement</p>
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer" style={{ color: cert.accent }}>{cert.issuer}</p>

                    {/* Footer */}
                    <div className="cert-footer">
                      <div className="cert-seal">
                        <i className="fa-solid fa-circle-check" aria-hidden="true" />
                        <span>Verified</span>
                      </div>
                      <div className="cert-dots" aria-hidden="true">
                        {[...Array(3)].map((_, i) => <span key={i} />)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
