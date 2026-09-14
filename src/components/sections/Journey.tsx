'use client';

import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, scaleIn, stagger, VP } from '@/lib/animations';

const EXPERIENCE = [
  {
    role: 'SEO Team Lead',
    org: 'Algomindz',
    period: 'Feb 2025 – Present',
    location: 'Dhaka, Bangladesh (Remote)',
    current: true,
    details: [
      'Lead SEO & AEO strategy for top-tier international clients.',
      'Combine data-driven insights with ethical marketing to maximize visibility across AI platforms and traditional search engines.',
      'Manage a team of SEO specialists and oversee campaign delivery.',
    ],
  },
  {
    role: 'Search Engine Optimization Specialist',
    org: 'Digitomark',
    period: 'Mar 2022 – Jan 2025',
    location: 'Dhaka, Bangladesh (Remote)',
    current: false,
    details: [
      'SEO project management and client consultation to determine needs.',
      'Developed and implemented comprehensive SEO strategies across diverse client portfolios.',
      'Onsite SEO, competitors analysis, technical SEO, and improving website performance.',
      'Collaborated with the marketing team and kept up with latest SEO trends and algorithm updates.',
    ],
  },
  {
    role: 'Search Engine Optimization Executive',
    org: 'Dcastalia Limited',
    period: 'Jan 2022 – Apr 2023',
    location: 'Dhaka, Bangladesh',
    current: false,
    details: [
      'Executed on-page and off-page SEO strategies for software industry clients.',
      'Improved organic rankings across multiple niches through keyword research and content optimization.',
    ],
  },
];

const EDUCATION = [
  {
    degree: 'BBA – Department of Accounting',
    institution: 'National University of Bangladesh',
    period: '2018 – 2025',
    location: 'Naogaon, Rajshahi, Bangladesh',
    details: [
      'Bachelor of Business Administration with a focus on accounting principles and business analytics.',
      'Complemented academic studies with extensive self-learning in digital marketing and SEO.',
    ],
  },
];

const CERTIFICATIONS = [
  {
    name: 'Google Analytics Certification',
    issuer: 'Google',
    year: '2023',
    color: '#4285F4',
    icon: 'GA4',
    detail: 'Data collection, processing, reporting & advanced analysis.',
  },
  {
    name: 'Foundations of Digital Marketing & E-commerce',
    issuer: 'Google · Coursera',
    year: '2022',
    color: '#34A853',
    icon: 'DM',
    detail: 'Google-certified course covering digital marketing foundations and e-commerce strategy.',
  },
  {
    name: 'Introduction to Search Engine Optimization',
    issuer: 'Coursera',
    year: '2020',
    color: '#0056D2',
    icon: 'SEO',
    detail: 'Core principles of SEO including on-page, off-page, and technical fundamentals.',
  },
  {
    name: 'The Fundamentals of Digital Marketing',
    issuer: 'Google',
    year: '2019',
    color: '#FBBC05',
    icon: 'FDM',
    detail: 'Google-certified foundation in digital marketing principles and strategy.',
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Journey() {
  return (
    <section
      id="journey"
      className="section-padding bg-[var(--bg-alt)]"
      aria-labelledby="journey-heading"
    >
      <div className="container-max">
        {/* Section header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <motion.span variants={fadeUp} className="section-label">My Journey</motion.span>
          <motion.h2 variants={fadeUp} id="journey-heading" className="section-title mb-4">
            Experience, education &{' '}
            <span className="gradient-text">achievements</span>
          </motion.h2>
        </motion.div>

        {/* ── Work Experience ─────────────────────────────────────────── */}
        <motion.div
          className="mb-16"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <span className="text-lg" aria-hidden="true">💼</span>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Work Experience
            </h3>
            <div className="flex-1 h-px bg-[var(--border)]" aria-hidden="true" />
          </motion.div>

          <div className="relative pl-8">
            {/* Vertical spine */}
            <motion.div
              className="absolute left-0 top-2 bottom-2 w-px bg-[var(--border)]"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 1.1, ease: EASE }}
              aria-hidden="true"
            />

            <ol className="space-y-6" aria-label="Work experience">
              {EXPERIENCE.map((job, i) => (
                <motion.li
                  key={job.org}
                  variants={fadeLeft}
                  className="relative"
                >
                  {/* Dot on spine */}
                  <motion.span
                    className={`absolute -left-8 top-5 w-3 h-3 rounded-full border-2 z-10 ${
                      job.current
                        ? 'bg-primary-500 border-primary-500'
                        : 'bg-[var(--bg-alt)] border-[var(--border-strong)]'
                    }`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={VP}
                    transition={{ delay: i * 0.1 + 0.15, duration: 0.35, ease: EASE }}
                    aria-hidden="true"
                  />

                  <motion.div
                    className={`card border-l-2 ${
                      job.current ? 'border-l-primary-500' : 'border-l-[var(--border-strong)]'
                    }`}
                    whileHover={{ y: -3, borderColor: 'rgba(14,165,233,0.25)' }}
                    transition={{ duration: 0.22 }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <h4 className="font-bold text-white font-heading text-base">{job.role}</h4>
                          {job.current && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-primary-500/10 text-primary-400 border border-primary-500/20 px-2 py-0.5 rounded-full">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" aria-hidden="true" />
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-primary-400">{job.org}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xs font-medium text-gray-400">{job.period}</p>
                        <p className="text-xs text-gray-600 mt-0.5">{job.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {job.details.map((d, di) => (
                        <li key={di} className="flex gap-2 text-xs text-gray-500 leading-relaxed">
                          <span className="text-primary-500 mt-0.5 shrink-0" aria-hidden="true">›</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>

        {/* ── Education + Certifications ──────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Academic Background */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-lg" aria-hidden="true">🎓</span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Academic Background
              </h3>
              <div className="flex-1 h-px bg-[var(--border)]" aria-hidden="true" />
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <motion.div
                  key={edu.institution}
                  className="card relative overflow-hidden"
                  whileHover={{ y: -3, borderColor: 'rgba(59,130,246,0.25)' }}
                  transition={{ duration: 0.22 }}
                >
                  {/* Blue accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400" aria-hidden="true" />

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3 pt-1">
                    <div>
                      <h4 className="font-bold text-white font-heading text-sm leading-snug mb-0.5">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-blue-400">{edu.institution}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-medium text-gray-400">{edu.period}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{edu.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mt-2">
                    {edu.details.map((d, i) => (
                      <li key={i} className="flex gap-2 text-xs text-gray-500 leading-relaxed">
                        <span className="text-blue-500 mt-0.5 shrink-0" aria-hidden="true">›</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Training */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-lg" aria-hidden="true">🏅</span>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Certifications & Training
              </h3>
              <div className="flex-1 h-px bg-[var(--border)]" aria-hidden="true" />
            </div>

            <motion.div
              className="grid gap-4"
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
            >
              {CERTIFICATIONS.map((cert) => (
                <motion.div
                  key={cert.name}
                  variants={scaleIn}
                  className="card group flex gap-4 items-start"
                  whileHover={{ y: -3, borderColor: 'rgba(168,85,247,0.25)' }}
                  transition={{ duration: 0.22 }}
                >
                  {/* Issuer badge */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0"
                    style={{ backgroundColor: cert.color + '22', border: `1px solid ${cert.color}33` }}
                  >
                    <span style={{ color: cert.color }}>{cert.icon}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm font-bold text-white font-heading leading-snug">
                        {cert.name}
                      </h4>
                      <span className="text-xs text-gray-600 shrink-0">{cert.year}</span>
                    </div>
                    <p className="text-xs font-semibold mb-1.5" style={{ color: cert.color }}>
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">{cert.detail}</p>
                    {/* Verified badge */}
                    <div className="flex items-center gap-1 mt-2">
                      <svg className="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[10px] text-purple-400 font-medium">Verified Certificate</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
