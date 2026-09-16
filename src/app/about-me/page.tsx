import type { Metadata } from 'next';
import WorkExperience from '@/components/sections/WorkExperience';
import Testimonials from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'About Sawon Saha – SEO Team Lead & AEO Specialist',
  description: 'Learn about Sawon Saha, a results-driven SEO Team Lead and AEO Specialist from Bangladesh with 3+ years of experience driving organic growth.',
};

const FAQS = [
  {
    q: 'What is your SEO process?',
    a: 'I start with a comprehensive technical audit and competitor analysis, then build a custom roadmap covering technical fixes, on-page optimisation, content strategy, and link acquisition — with monthly performance reviews to track and refine results.',
  },
  {
    q: 'What SEO tools do you use?',
    a: 'My core stack includes Ahrefs, SEMrush, Google Search Console, Screaming Frog, Moz Pro, Google Analytics 4, and Looker Studio for client reporting.',
  },
  {
    q: 'How long until I see SEO results?',
    a: 'Technical fixes can show impact within weeks. Most campaigns deliver meaningful ranking improvements in 3–6 months, with strong organic growth typically visible by month 6–12.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes — while based in Dhaka, Bangladesh, I work remotely with clients across the US, UK, Canada, Australia, UAE, and beyond. Communication via Zoom, Slack, and email keeps projects on track.',
  },
  {
    q: 'What industries do you specialise in?',
    a: 'E-commerce, SaaS, local services, real estate, healthcare, legal, and B2B — each vertical needs a different SEO approach, and I tailor strategy accordingly.',
  },
  {
    q: 'What is Answer Engine Optimisation (AEO)?',
    a: 'AEO is the practice of optimising content to appear in AI-generated answers — Google AI Overviews, ChatGPT, Perplexity, and similar. It complements traditional SEO and is increasingly important as AI reshapes how people search.',
  },
];

export default function AboutMePage() {
  return (
    <main>
      <section className="about-section-inner fix">
        <div className="container">
          <div className="about-head">
            <h1>About Me</h1>
          </div>

          <p className="about-sub text_reveal_full">
            Hey! <b>I&rsquo;m Sawon Saha</b> — an SEO Team Lead &amp; AEO Specialist based in Dhaka, Bangladesh.{' '}
            <span>
              With 3+ years across agencies and in-house teams, I help businesses rank higher, attract the right
              audience, and stay visible as search evolves toward AI-driven answers.
            </span>
          </p>

          <div className="about-image">
            <picture>
              <source srcSet="/assets/img/sawon-saha.webp" type="image/webp" />
              <img src="/assets/img/Sawon%20Saha.png" alt="Sawon Saha" loading="lazy" />
            </picture>
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
