'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, scaleIn, stagger, VP } from '@/lib/animations';

const TOOL_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'research', label: 'Research' },
  { id: 'technical', label: 'Technical' },
  { id: 'content', label: 'Content' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'cms', label: 'CMS' },
];

const TOOLS = [
  { name: 'Ahrefs', level: 95, category: 'research' },
  { name: 'SEMrush', level: 92, category: 'research' },
  { name: 'Moz Pro', level: 85, category: 'research' },
  { name: 'Screaming Frog', level: 93, category: 'technical' },
  { name: 'Google Search Console', level: 98, category: 'analytics' },
  { name: 'PageSpeed Insights', level: 90, category: 'technical' },
  { name: 'Surfer SEO', level: 88, category: 'content' },
  { name: 'Frase', level: 85, category: 'content' },
  { name: 'Google Analytics 4', level: 94, category: 'analytics' },
  { name: 'Looker Studio', level: 82, category: 'analytics' },
  { name: 'WordPress', level: 90, category: 'cms' },
  { name: 'Schema Pro', level: 86, category: 'technical' },
];

const SEO_SERVICES = [
  { id: 'technical-seo', icon: '⚙️', title: 'Technical SEO', desc: 'Core Web Vitals, crawl optimization, structured data, site speed, and mobile-first indexing.' },
  { id: 'on-page', icon: '📄', title: 'On-Page SEO', desc: 'Keyword mapping, meta optimization, content structure, and internal linking strategies.' },
  { id: 'link-building', icon: '🔗', title: 'Link Building', desc: 'White-hat backlink acquisition via digital PR, guest posting, and HARO outreach.' },
  { id: 'local-seo', icon: '📍', title: 'Local SEO', desc: 'Google Business Profile, citation building, review management, and local content.' },
  { id: 'aeo', icon: '🤖', title: 'AEO', desc: 'Optimizing for AI search (ChatGPT, Perplexity, Google AI Overviews) and voice results.' },
  { id: 'seo-audit', icon: '🧪', title: 'SEO Audit', desc: '200+ point audit covering technical health, content gaps, and competitor analysis.' },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? TOOLS
    : TOOLS.filter((t) => t.category === activeCategory);

  return (
    <section
      id="services"
      className="section-padding bg-[#0d0d0d]"
      aria-labelledby="services-heading"
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
          <motion.span variants={fadeUp} className="section-label">What I Do</motion.span>
          <motion.h2 variants={fadeUp} id="services-heading" className="section-title mb-4">
            Tools & Technologies{' '}
            <span className="gradient-text">I Work With</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            I&apos;m constantly learning and expanding my skill set. Here are the tools and
            technologies I use to deliver impactful SEO results.
          </motion.p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {TOOL_CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              variants={scaleIn}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-200 ${
                activeCategory === cat.id
                  ? 'bg-primary-500 border-primary-500 text-black'
                  : 'border-[#222] text-gray-400 hover:border-[#333] hover:text-white bg-transparent'
              }`}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Tools grid — AnimatePresence for category transitions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 min-h-[200px]">
          <AnimatePresence mode="popLayout">
            {filtered.map((tool) => (
              <motion.div
                key={tool.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="card"
                whileHover={{ y: -4, borderColor: 'rgba(34,197,94,0.25)' }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-white text-sm">{tool.name}</span>
                  <span className="text-xs text-primary-400">{tool.level}%</span>
                </div>
                <div className="h-1 bg-[#222] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${tool.level}%` }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    role="progressbar"
                    aria-valuenow={tool.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${tool.name} proficiency: ${tool.level}%`}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Services header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <motion.span variants={fadeUp} className="section-label">Services</motion.span>
          <motion.h3 variants={fadeUp} className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">
            SEO Services I Offer
          </motion.h3>
          <motion.p variants={fadeUp} className="section-subtitle">
            End-to-end SEO services tailored to your business goals and industry.
          </motion.p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
          aria-label="SEO services"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {SEO_SERVICES.map((s) => (
            <motion.article
              key={s.id}
              role="listitem"
              variants={fadeUp}
              className="card group cursor-default"
              whileHover={{ y: -6, borderColor: 'rgba(34,197,94,0.3)' }}
              transition={{ duration: 0.25 }}
              itemScope
              itemType="https://schema.org/Service"
            >
              <motion.span
                className="text-3xl mb-4 block"
                aria-hidden="true"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {s.icon}
              </motion.span>
              <h4
                className="font-bold text-white font-heading mb-2 group-hover:text-primary-400 transition-colors"
                itemProp="name"
              >
                {s.title}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed" itemProp="description">
                {s.desc}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
