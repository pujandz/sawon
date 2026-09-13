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

const HIGHLIGHTS = [
  { icon: '🎯', title: 'Data-Driven', desc: 'Every decision backed by analytics and real search data.' },
  { icon: '⚡', title: 'AEO Focused', desc: 'Optimizing for AI search engines and voice results.' },
  { icon: '📈', title: 'ROI Oriented', desc: 'SEO strategies tied directly to revenue and growth.' },
  { icon: '🤝', title: 'Collaborative', desc: 'Transparent communication and client-first approach.' },
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
          setTimeout(() => { bar.style.width = w + '%'; }, 200);
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
      className="section-padding bg-[#0a0a0a]"
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/Person"
    >
      <meta itemProp="name" content="Sawon Saha" />
      <meta itemProp="jobTitle" content="SEO Team Lead & AEO Specialist" />
      <meta itemProp="url" content="https://sawonsaha.com" />

      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left – Photo + stats */}
          <div>
            {/* Photo frame */}
            <div className="relative mb-8 max-w-sm">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#111] border border-[#222] relative">
                {/* Profile placeholder — replace with <Image> once photo is available */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#111] to-[#1a1a1a]">
                  <span className="text-8xl font-black text-white/5 font-heading select-none">SS</span>
                </div>
                {/* Green corner accent */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary-500 rounded-tl" aria-hidden="true" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary-500 rounded-br" aria-hidden="true" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#111] border border-[#222] rounded-xl px-4 py-3">
                <p className="text-2xl font-black text-primary-400 font-heading">3+</p>
                <p className="text-xs text-gray-500">Years Experience</p>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-3">
              {HIGHLIGHTS.map((h) => (
                <div key={h.title} className="card p-4">
                  <span className="text-xl mb-2 block" aria-hidden="true">{h.icon}</span>
                  <p className="text-sm font-semibold text-white mb-1">{h.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Content */}
          <div>
            <span className="section-label">About Me</span>
            <h2 id="about-heading" className="section-title mb-6">
              Passionate about creating{' '}
              <span className="gradient-text">impactful SEO solutions</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed mb-8 text-sm sm:text-base">
              <p>
                I&apos;m <strong className="text-white" itemProp="name">Sawon Saha</strong>, a
                results-driven SEO & AEO Specialist from{' '}
                <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="addressLocality">Naogaon</span>,{' '}
                  <span itemProp="addressRegion">Rajshahi</span>,{' '}
                  <span itemProp="addressCountry">Bangladesh</span>
                </span>. Currently serving as{' '}
                <strong className="text-white">SEO Team Lead at Algomindz</strong>, I help
                top-tier companies maximize visibility across AI platforms and traditional
                search engines through data-driven, ethical SEO strategies.
              </p>
              <p>
                My journey started in 2022 at Dcastalia Limited and Digitomark, where I honed
                skills across technical SEO, on-page optimization, link building, and competitor
                analysis. I&apos;m adept at staying ahead of algorithm updates and emerging trends
                like Answer Engine Optimization to ensure maximum organic visibility.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                Core Skills
              </h3>
              <div className="space-y-4">
                {SKILLS.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-gray-300">{skill.name}</span>
                      <span className="text-gray-600 text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full transition-all duration-1000 ease-out"
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

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary text-sm">
                Work With Me
              </a>
              <a href="#portfolio" className="btn-outline text-sm">
                See My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
