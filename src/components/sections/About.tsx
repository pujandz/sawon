import Image from 'next/image';
import Link from 'next/link';

const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

const SKILLS = [
  { icon: 'figma.png', label: 'Ahrefs', pct: 95 },
  { icon: 'ps.png', label: 'SEMrush', pct: 93 },
  { icon: 'ai.png', label: 'Screaming Frog', pct: 88 },
  { icon: 'sketch.png', label: 'Google Search Console', pct: 98 },
  { icon: 'xd.png', label: 'Moz Pro', pct: 85 },
];

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-wrapper d-flex flex-wrap">
          <div className="about-thumb">
            <span className="about-eyebrow">about myself</span>
            <ul>
              <li>3+ years of SEO experience</li>
              <li>80+ successfully delivered projects</li>
            </ul>

            <div className="about-skills d-flex flex-wrap gap-4">
              {SKILLS.map((s) => (
                <div key={s.label} className="about-skill-item text-center">
                  <Image
                    src={`${LIVE}/${s.icon}`}
                    alt={s.label}
                    width={40}
                    height={40}
                  />
                  <h4>{s.pct}%</h4>
                  <span>{s.label.split(' ')[0]}</span>
                </div>
              ))}
            </div>
            <p className="about-tools-label">My Favorite SEO Tools</p>
          </div>

          <div className="about-content">
            <h2>A Professional Overview of My Background and Expertise</h2>
            <p>
              A results-driven SEO Team Lead &amp; AEO Specialist based in Bangladesh
              with 3+ years of experience, crafting search strategies that drive
              measurable organic growth. Blending technical expertise with
              content and data analysis.
            </p>
            <p>
              Currently leading the SEO team at Algomindz, I help businesses maximize
              visibility across both traditional search engines and AI-powered answer
              engines like Google AI Overviews and Perplexity.
            </p>
            <div className="about-btns d-flex gap-3">
              <Link href="/about-me" className="theme-btn">
                get to know me
              </Link>
              <a href="mailto:sawon.s907@gmail.com" className="theme-btn theme-btn-alt">
                download cv
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
