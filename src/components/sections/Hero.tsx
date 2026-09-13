'use client';

import { useEffect, useRef } from 'react';
import { STATS } from '@/lib/constants';

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counters = statsRef.current?.querySelectorAll<HTMLElement>('[data-count]');
    if (!counters) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = Number(el.dataset.count);
          const suffix = el.dataset.suffix ?? '';
          const duration = 2000;
          const start = Date.now();

          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-950 via-primary-950 to-gray-900"
      aria-label="Hero section – Sawon Saha SEO Specialist"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-accent-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-800/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-max section-padding relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
              Available for new projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-6 animate-fade-up">
              SEO Specialist{' '}
              <span className="gradient-text block sm:inline">in Bangladesh</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-8 animate-fade-up animation-delay-100 max-w-xl">
              Hi, I&apos;m <strong className="text-white">Sawon Saha</strong> — I help businesses
              grow organic traffic, dominate Google rankings, and convert more visitors into
              customers through data-driven SEO strategies.
            </p>

            <div className="flex flex-wrap gap-4 mb-12 animate-fade-up animation-delay-200">
              <a
                href="#contact"
                className="btn-primary text-base px-8 py-3.5 shadow-lg shadow-primary-900/50"
                aria-label="Contact Sawon Saha for an SEO consultation"
              >
                Get Free SEO Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#portfolio"
                className="btn-outline border-white/40 text-white hover:bg-white/10 text-base px-8 py-3.5"
                aria-label="View Sawon Saha's SEO case studies"
              >
                View Case Studies
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 animate-fade-up animation-delay-300">
              {[
                { label: 'Google Certified', icon: '✓' },
                { label: 'HubSpot Certified', icon: '✓' },
                { label: '5-Star Reviews', icon: '★' },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-1.5 text-white/70 text-sm">
                  <span className="text-green-400 font-bold">{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right – Stats & Visual */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-float">
                🚀 Rankings Boosted
              </div>

              <div ref={statsRef} className="grid grid-cols-2 gap-6" aria-label="Key statistics">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 bg-white/5 rounded-2xl border border-white/10"
                  >
                    <div className="text-4xl font-bold font-heading text-white mb-1">
                      <span
                        data-count={stat.value}
                        data-suffix={stat.suffix}
                        aria-label={`${stat.value}${stat.suffix}`}
                      >
                        0{stat.suffix}
                      </span>
                    </div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white text-lg font-bold">S</div>
                  <div>
                    <p className="text-white font-semibold text-sm">Sawon Saha</p>
                    <p className="text-white/60 text-xs">SEO Specialist, Dhaka BD</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-sm" aria-hidden="true">★</span>
                  ))}
                  <span className="text-white/60 text-xs ml-1 self-center">(47 reviews)</span>
                </div>
              </div>

              {/* Tools */}
              <div className="mt-6">
                <p className="text-white/50 text-xs mb-3 uppercase tracking-wider">Tools I use</p>
                <div className="flex flex-wrap gap-2">
                  {['Ahrefs', 'SEMrush', 'GSC', 'GA4', 'Screaming Frog', 'Surfer SEO'].map((tool) => (
                    <span
                      key={tool}
                      className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full border border-white/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-xs"
            aria-label="Scroll down to learn more about Sawon Saha"
          >
            <span>Scroll to explore</span>
            <div className="w-5 h-8 border-2 border-current rounded-full flex items-start justify-center pt-1">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
