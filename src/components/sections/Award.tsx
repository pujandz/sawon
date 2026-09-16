const ACHIEVEMENTS = [
  { year: '2021', text: 'Google Analytics Individual Qualification (GAIQ) certified' },
  { year: '2022', text: 'SEMrush SEO Toolkit Certification — advanced level' },
  { year: '2023', text: 'Led SEO team at Algomindz — promoted to Team Lead' },
  { year: '2024', text: 'Delivered 80+ successful SEO projects across 10+ industries' },
];

export default function Award() {
  return (
    <section className="award-section section-padding fix section-bg approach-area">
      <div className="container">
        <div className="award-wrapper">
          <div className="row g-4 align-items-center">
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

            <div className="col-lg-6">
              <div className="award-image">
                <img src="/assets/img/certifications.svg" alt="Certifications and Milestones" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
