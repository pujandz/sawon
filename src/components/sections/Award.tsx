const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

const ACHIEVEMENTS = [
  { year: '2021', text: 'Google Analytics Individual Qualification (GAIQ) certified' },
  { year: '2022', text: 'SEMrush SEO Toolkit Certification — advanced level' },
  { year: '2023', text: 'Led SEO team at Algomindz — promoted to Team Lead' },
  { year: '2024', text: 'Delivered 80+ successful SEO projects across 10+ industries' },
];

export default function Award() {
  return (
    <section className="award-section">
      <div className="container">
        <div className="award-wrapper d-flex flex-wrap align-items-center">
          <div className="award-content">
            <span className="eyebrow">achievements</span>
            <h2>Certifications &amp; Milestones</h2>
            <ul>
              {ACHIEVEMENTS.map((a) => (
                <li key={a.year} className="d-flex align-items-center gap-3">
                  <strong>{a.year}</strong>
                  <span>{a.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <img src={`${LIVE}/award.png`} alt="Achievements" width={420} height={420} />
        </div>
      </div>
    </section>
  );
}
