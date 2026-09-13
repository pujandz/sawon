'use client';

import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, scaleIn, stagger, VP } from '@/lib/animations';

const JOURNEY = [
  {
    type: 'work',
    role: 'SEO Team Lead',
    org: 'Algomindz',
    period: 'Feb 2025 – Present',
    location: 'Dhaka, Bangladesh (Remote)',
    details: [
      'Leading SEO & AEO strategy for top-tier international clients.',
      'Combining data-driven insights with ethical marketing to maximize visibility across AI and traditional search engines.',
      'Managing a team of SEO specialists and overseeing campaign delivery.',
    ],
  },
  {
    type: 'work',
    role: 'SEO Specialist',
    org: 'Digitomark',
    period: 'Mar 2022 – Jan 2025',
    location: 'Dhaka, Bangladesh (Remote)',
    details: [
      'Developed and implemented comprehensive SEO strategies for diverse client portfolios.',
      'Managed on-site SEO, technical audits, competitor analysis, and site performance improvements.',
      'Collaborated with content and marketing teams to align SEO with broader digital goals.',
    ],
  },
  {
    type: 'work',
    role: 'SEO Executive',
    org: 'Dcastalia Limited',
    period: 'Jan 2022 – Apr 2023',
    location: 'Dhaka, Bangladesh',
    details: [
      'Executed on-page and off-page SEO strategies for software industry clients.',
      'Improved organic rankings across multiple niches through keyword research and content optimization.',
    ],
  },
  {
    type: 'edu',
    role: 'BBA – Department of Accounting',
    org: 'National University of Bangladesh',
    period: '2018 – 2025',
    location: 'Naogaon, Rajshahi, Bangladesh',
    details: [
      'Bachelor of Business Administration with a focus on accounting principles and business analytics.',
      'Complemented academic studies with extensive self-learning in digital marketing and SEO.',
    ],
  },
  {
    type: 'cert',
    role: 'Google Analytics Certification',
    org: 'Google',
    period: '2023',
    location: 'Online',
    details: [
      'Certified in Google Analytics — data collection, processing, reporting, and advanced analysis.',
    ],
  },
  {
    type: 'cert',
    role: 'Fundamentals of Digital Marketing',
    org: 'Google',
    period: '2019 – Present',
    location: 'Online',
    details: ['Google-certified foundation in digital marketing principles and strategy.'],
  },
];

const TYPE_COLOR: Record<string, string> = {
  work: 'bg-primary-500 border-primary-500',
  edu: 'bg-blue-500 border-blue-500',
  cert: 'bg-purple-500 border-purple-500',
};

const TYPE_LABEL: Record<string, string> = {
  work: 'Work',
  edu: 'Education',
  cert: 'Certification',
};

export default function Journey() {
  return (
    <section
      id="journey"
      className="section-padding bg-[#0d0d0d]"
      aria-labelledby="journey-heading"
    >
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <motion.span variants={fadeUp} className="section-label">My Journey</motion.span>
          <motion.h2 variants={fadeUp} id="journey-heading" className="section-title mb-4">
            A timeline of my professional experience,{' '}
            <span className="gradient-text">education & achievements</span>
          </motion.h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line — draws in as it scrolls */}
          <motion.div
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-[#1e1e1e] sm:-translate-x-0.5"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />

          <ol className="space-y-10" aria-label="Career and education timeline">
            {JOURNEY.map((item, index) => {
              const isRight = index % 2 !== 0;
              const cardVariant = isRight ? fadeLeft : fadeRight;

              return (
                <li
                  key={index}
                  className="relative grid sm:grid-cols-2 gap-6 sm:gap-12 pl-12 sm:pl-0"
                >
                  {/* Dot */}
                  <motion.div
                    className={`absolute left-3 sm:left-1/2 top-5 w-3 h-3 rounded-full border-2 sm:-translate-x-1/2 z-10 ${TYPE_COLOR[item.type]}`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={VP}
                    transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden="true"
                  />

                  {/* Card */}
                  <div className={`${isRight ? 'sm:col-start-1 sm:text-right' : 'sm:col-start-2'} sm:col-span-1`}>
                    {!isRight && <div className="hidden sm:block" aria-hidden="true" />}
                    <motion.div
                      className={`card ${isRight ? 'sm:ml-0 sm:mr-0' : ''}`}
                      variants={cardVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={VP}
                      whileHover={{ y: -4, borderColor: 'rgba(34,197,94,0.18)' }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className={`flex items-start gap-2 mb-3 ${isRight ? 'sm:flex-row-reverse' : ''}`}>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded text-black ${
                            item.type === 'work'
                              ? 'bg-primary-500'
                              : item.type === 'edu'
                              ? 'bg-blue-500'
                              : 'bg-purple-500'
                          }`}
                        >
                          {TYPE_LABEL[item.type]}
                        </span>
                        <span className="text-xs text-gray-600">{item.period}</span>
                      </div>
                      <h3 className="text-base font-bold text-white font-heading mb-0.5">{item.role}</h3>
                      <p className="text-sm text-primary-400 mb-1">{item.org}</p>
                      <p className="text-xs text-gray-600 mb-3">{item.location}</p>
                      <ul className="space-y-1">
                        {item.details.map((d, i) => (
                          <li key={i} className="text-xs text-gray-500 flex gap-2">
                            <span className="text-primary-500 mt-0.5 flex-shrink-0" aria-hidden="true">›</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Empty col for alternating layout */}
                  {isRight && <div className="hidden sm:block sm:col-start-2" aria-hidden="true" />}
                  {!isRight && <div className="hidden sm:block sm:col-start-1" aria-hidden="true" />}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
