import type { Metadata } from 'next';
import WorkExperience from '@/components/sections/WorkExperience';
import Testimonials from '@/components/sections/Testimonials';

const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

export const metadata: Metadata = {
  title: 'About Sawon Saha – SEO Team Lead & AEO Specialist',
  description: 'Learn about Sawon Saha, a results-driven SEO Team Lead and AEO Specialist from Bangladesh with 3+ years of experience driving organic growth.',
};

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
      <section className="about-section-inner fix">
        <div className="container">
          <div className="about-head">
            <h1>About Me</h1>
          </div>

          <p className="about-sub">
            Hey! <b>I&rsquo;m Sawon Saha.</b> I believe SEO is more than rankings —{' '}
            <span>it&rsquo;s about connecting businesses with the right people at the right moment.</span>
          </p>

          <div className="about-image">
            <img src={`${LIVE}/about.jpg`} alt="Sawon Saha" />
          </div>
        </div>
      </section>

      <WorkExperience />

      <section className="faq-inner-page-wrapper section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <h6>faq</h6>
            <h2 className="hero_title tv_hero_title hero_title_1">
              Frequently <span>asked questions</span>
            </h2>
          </div>

          <div className="accordion-box">
            {FAQS.map((f, i) => (
              <div key={i} className="accordion block">
                <div className="acc-btn">
                  {f.q}
                  <div className="icon"><i className="fa-solid fa-plus"></i></div>
                </div>
                <div className="acc-content">
                  <div className="content">
                    <p className="text">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}
