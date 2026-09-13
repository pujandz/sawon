'use client';

import { useEffect, useRef } from 'react';
import { STATS } from '@/lib/constants';

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sawonsaha', icon: 'in' },
  { label: 'Twitter / X', href: 'https://twitter.com/sawonsaha9', icon: 'X' },
  { label: 'Medium', href: 'https://medium.com/@sawon.s907', icon: 'M' },
];

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
            const p = Math.min((Date.now() - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(eased * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
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
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
      aria-label="Hero – Sawon Saha SEO & AEO Specialist"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="container-max section-padding relative z-10 pt-28 pb-16">
        <div className="max-w-4xl">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 border border-[#222] bg-[#111] text-gray-400 text-xs font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" aria-hidden="true" />
            Available for new projects
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black font-heading text-white leading-[1.05] tracking-tight mb-6">
            Crafting SEO<br />
            Strategies That<br />
            <span className="gradient-text">Drive Growth</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl">
            Results-driven <strong className="text-white">SEO & AEO Specialist</strong> helping businesses maximize
            visibility across Google, AI platforms, and beyond — through keyword research,
            technical SEO, and data-driven optimization.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#portfolio"
              className="btn-primary px-8 py-3.5 text-base"
              aria-label="View Sawon Saha's SEO case studies"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-outline px-8 py-3.5 text-base"
              aria-label="Contact Sawon Saha"
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-xs text-gray-600 uppercase tracking-wider">Follow me</span>
            <div className="h-px w-8 bg-[#222]" aria-hidden="true" />
            <ul className="flex gap-3" role="list">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Sawon Saha on ${s.label}`}
                    className="w-9 h-9 rounded-lg border border-[#222] bg-[#111] hover:border-primary-500/50 hover:text-primary-400 flex items-center justify-center text-gray-500 text-xs font-bold transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-3 gap-6 max-w-md" aria-label="Key statistics">
            {STATS.slice(0, 3).map((stat, i) => (
              <div key={stat.label} className={i < 2 ? 'border-r border-[#222] pr-6' : ''}>
                <div className="text-3xl sm:text-4xl font-black font-heading text-white mb-1">
                  <span data-count={stat.value} data-suffix={stat.suffix} aria-label={`${stat.value}${stat.suffix}`}>
                    0{stat.suffix}
                  </span>
                </div>
                <div className="text-xs text-gray-500 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-gray-600 text-xs">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary-500/50" aria-hidden="true" />
          <span className="rotate-90 origin-center whitespace-nowrap text-[10px] tracking-widest uppercase">Scroll down</span>
        </div>
      </div>
    </section>
  );
}
