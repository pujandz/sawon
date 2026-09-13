'use client';

import { useRef, useEffect } from 'react';

const SKILLS = [
  { name: 'Technical SEO', level: 95 },
  { name: 'On-Page Optimization', level: 98 },
  { name: 'Link Building', level: 90 },
  { name: 'Local SEO', level: 92 },
  { name: 'Content Strategy', level: 88 },
  { name: 'Analytics & Reporting', level: 94 },
];

const CERTIFICATIONS = [
  { name: 'Google Analytics 4 Certified', issuer: 'Google', year: '2024' },
  { name: 'Google Search Ads Certified', issuer: 'Google', year: '2024' },
  { name: 'HubSpot SEO Certified', issuer: 'HubSpot', year: '2024' },
  { name: 'SEMrush SEO Toolkit', issuer: 'SEMrush', year: '2023' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const bars = sectionRef.current?.querySelectorAll<HTMLElement>('[data-width]');
    if (!bars) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const bar = entry.target as HTMLElement;
          const w = bar.dataset.width ?? '0';
          setTimeout(() => {
            bar.style.width = w + '%';
          }, 200);
          observer.unobserve(bar);
        });
      },
      { threshold: 0.3 }
    );

    bars.forEach((bar) => observer.observe(bar));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-white"
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/Person"
    >
      <meta itemProp="name" content="Sawon Saha" />
      <meta itemProp="jobTitle" content="SEO Specialist" />
      <meta itemProp="url" content="https://sawonsaha.com" />

      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image / Visual */}
          <div className="relative">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl overflow-hidden shadow-2xl">
                {/* Profile placeholder – replace with actual photo */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800">
                  <span className="text-9xl font-bold text-white/20 font-heading select-none">SS</span>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 max-w-[160px]">
                <div className="text-3xl font-bold gradient-text font-heading">5+</div>
                <div className="text-xs text-gray-500 mt-0.5">Years of SEO Excellence</div>
              </div>
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-sm">★</span>)}
                </div>
                <div className="text-xs text-gray-500">47 happy clients</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
              About Me
            </span>
            <h2 id="about-heading" className="section-title mb-6">
              Your Growth-Focused{' '}
              <span className="gradient-text">SEO Partner</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                I&apos;m <strong className="text-gray-900" itemProp="name">Sawon Saha</strong>, a
                dedicated SEO specialist based in{' '}
                <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="addressLocality">Dhaka</span>,{' '}
                  <span itemProp="addressCountry">Bangladesh</span>
                </span>
                . With over 5 years of hands-on experience, I&apos;ve helped 150+ businesses —
                from local shops to global SaaS companies — achieve measurable organic growth.
              </p>
              <p>
                My approach combines deep technical expertise with a genuine understanding of
                business goals. I don&apos;t just chase rankings — I build sustainable SEO systems
                that drive qualified traffic, generate leads, and grow revenue.
              </p>
              <p>
                I stay ahead of every Google algorithm update and emerging trend (including AI
                search and Answer Engine Optimization) to ensure your website is always
                positioned for long-term success.
              </p>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                Certifications
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-start gap-2 bg-gray-50 rounded-xl p-3"
                    itemProp="hasCredential"
                    itemScope
                    itemType="https://schema.org/EducationalOccupationalCredential"
                  >
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-800" itemProp="name">
                        {cert.name}
                      </p>
                      <p className="text-xs text-gray-500">{cert.issuer} &bull; {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                Core Skills
              </h3>
              <div className="space-y-3">
                {SKILLS.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: '0%' }}
                        data-width={skill.level}
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name}: ${skill.level}%`}
                      />
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
