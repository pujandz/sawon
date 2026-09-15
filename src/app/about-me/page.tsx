import type { Metadata } from 'next';
import WorkExperience from '@/components/sections/WorkExperience';
import Testimonials from '@/components/sections/Testimonials';

const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

export const metadata: Metadata = {
  title: 'About Sawon Saha – SEO Team Lead & AEO Specialist',
  description: 'Learn about Sawon Saha, a results-driven SEO Team Lead and AEO Specialist from Bangladesh with 3+ years of experience driving organic growth.',
};

const APPROACH = [
  { title: 'Data-Driven', img: 'approach1.jpg' },
  { title: 'Results-Focused', img: 'approach2.jpg' },
  { title: 'Continuous Learning', img: 'approach3.jpg' },
];

const FAQS = [
  { q: 'What is your SEO process?', a: 'I start with a deep audit and competitor analysis, then build a custom roadmap with technical fixes, content strategy, and link acquisition — measuring results monthly.' },
  { q: 'What SEO tools do you use?', a: 'Ahrefs, SEMrush, Google Search Console, Screaming Frog, Moz Pro, Google Analytics 4, and Looker Studio for reporting.' },
  { q: 'How long until I see SEO results?', a: 'Most campaigns show meaningful improvement in 3–6 months, with significant growth by month 6–12. Technical fixes can show within weeks.' },
  { q: 'Do you work with international clients?', a: 'Yes — while based in Bangladesh, I work with clients in the US, UK, Canada, Australia, UAE, and more via Zoom, Slack, and email.' },
  { q: 'What industries do you specialize in?', a: 'E-commerce, SaaS, local services, real estate, healthcare, legal, and B2B sectors — each requiring unique SEO strategies.' },
];

export default function AboutMePage() {
  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <h1>About Me</h1>
          <a href={`${LIVE}/Revox-Resume.pdf`}>Based in Bangladesh · Download Resume</a>
          <h3>
            ✨ Hey! <strong>I&rsquo;m Sawon Saha.</strong> I believe SEO is
            more than rankings — it&rsquo;s about connecting businesses with
            the right people at the right moment in their search journey.
            From technical foundations to content strategy and AEO, I bring
            a data-driven approach that consistently drives measurable growth.
          </h3>
          <img src={`${LIVE}/about.jpg`} alt="Sawon Saha" width={900} height={500} />
        </div>
      </section>

      <section className="about-approach-section">
        <div className="container">
          <h2>My Approach to SEO and the Philosophy Behind It</h2>
          <ul>
            <li>Data-Driven Strategy</li>
            <li>Technical Excellence</li>
            <li>Transparent Reporting</li>
          </ul>
          <a href="/contact-us" className="theme-btn">
            let&rsquo;s talk about your project
          </a>

          <div className="approach-grid d-flex flex-wrap gap-4">
            {APPROACH.map((a) => (
              <div key={a.title} className="approach-item">
                <img src={`${LIVE}/${a.img}`} alt={a.title} width={300} height={240} />
                <h3>{a.title}</h3>
                <p>Every successful SEO campaign begins with understanding your business goals and audience intent — then building a strategy that compounds over time.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkExperience />

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {FAQS.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}
