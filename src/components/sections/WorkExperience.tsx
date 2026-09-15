const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

const EXPERIENCE = [
  {
    company: 'Algomindz',
    period: 'Mar 2023 – Present',
    role: 'SEO Team Lead',
    img: 'info-1.png',
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
    points: [
      'Conducted competitive gap analyses using Ahrefs and SEMrush.',
      'Produced monthly performance reports tracking KPIs across 10+ client accounts.',
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className="work-experience-section">
      <div className="container">
        <div className="section-title text-center">
          <span className="eyebrow">Work Experience</span>
          <h2>A proven SEO specialist with 3+ years of driving organic growth</h2>
        </div>

        <div className="work-experience-timeline">
          {EXPERIENCE.map((e) => (
            <div key={e.company} className="work-experience-item d-flex flex-wrap align-items-center">
              <img src={`${LIVE}/${e.img}`} alt={e.company} width={60} height={60} />
              <div>
                <h3>{e.company}</h3>
                <span className="period">{e.period}</span>
                <h5>{e.role}</h5>
                {e.points.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
