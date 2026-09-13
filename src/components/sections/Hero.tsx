'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { STATS } from '@/lib/constants';
import { fadeUp, stagger } from '@/lib/animations';

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
      {/* Animated background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], scale: [1, 0.92, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="container-max section-padding relative z-10 pt-28 pb-16">
        <motion.div
          className="max-w-4xl"
          variants={stagger(0.12)}
          initial="hidden"
          animate="visible"
        >
          {/* Available badge */}
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 border border-[#222] bg-[#111] text-gray-400 text-xs font-medium px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" aria-hidden="true" />
              Available for new projects
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black font-heading text-white leading-[1.05] tracking-tight mb-6"
          >
            Crafting SEO<br />
            Strategies That<br />
            <span className="gradient-text">Drive Growth</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl"
          >
            Results-driven <strong className="text-white">SEO & AEO Specialist</strong> helping businesses maximize
            visibility across Google, AI platforms, and beyond — through keyword research,
            technical SEO, and data-driven optimization.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
            <motion.a
              href="#portfolio"
              className="btn-primary px-8 py-3.5 text-base"
              aria-label="View Sawon Saha's SEO case studies"
              whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(34,197,94,0.35)' }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-outline px-8 py-3.5 text-base"
              aria-label="Contact Sawon Saha"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-16">
            <span className="text-xs text-gray-600 uppercase tracking-wider">Follow me</span>
            <div className="h-px w-8 bg-[#222]" aria-hidden="true" />
            <ul className="flex gap-3" role="list">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <motion.a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Sawon Saha on ${s.label}`}
                    className="w-9 h-9 rounded-lg border border-[#222] bg-[#111] flex items-center justify-center text-gray-500 text-xs font-bold"
                    whileHover={{ scale: 1.15, borderColor: 'rgba(34,197,94,0.5)', color: '#4ade80' }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    {s.icon}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp}>
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
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-gray-600 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-transparent to-primary-500/50"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ originY: 0 }}
            aria-hidden="true"
          />
          <span className="rotate-90 origin-center whitespace-nowrap text-[10px] tracking-widest uppercase">Scroll down</span>
        </motion.div>
      </div>
    </section>
  );
}
