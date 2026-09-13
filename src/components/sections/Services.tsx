'use client';

import { useState } from 'react';

const TOOL_CATEGORIES = [
  {
    id: 'all',
    label: 'All',
  },
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
  {
    id: 'technical-seo',
    icon: '⚙️',
    title: 'Technical SEO',
    desc: 'Core Web Vitals, crawl optimization, structured data, site speed, and mobile-first indexing.',
  },
  {
    id: 'on-page',
    icon: '📄',
    title: 'On-Page SEO',
    desc: 'Keyword mapping, meta optimization, content structure, and internal linking strategies.',
  },
  {
    id: 'link-building',
    icon: '🔗',
    title: 'Link Building',
    desc: 'White-hat backlink acquisition via digital PR, guest posting, and HARO outreach.',
  },
  {
    id: 'local-seo',
    icon: '📍',
    title: 'Local SEO',
    desc: 'Google Business Profile, citation building, review management, and local content.',
  },
  {
    id: 'aeo',
    icon: '🤖',
    title: 'AEO',
    desc: 'Optimizing for AI search (ChatGPT, Perplexity, Google AI Overviews) and voice results.',
  },
  {
    id: 'seo-audit',
    icon: '🧪',
    title: 'SEO Audit',
    desc: '200+ point audit covering technical health, content gaps, and competitor analysis.',
  },
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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">What I Do</span>
          <h2 id="services-heading" className="section-title mb-4">
            Tools & Technologies{' '}
            <span className="gradient-text">I Work With</span>
          </h2>
          <p className="section-subtitle">
            I&apos;m constantly learning and expanding my skill set. Here are the tools and
            technologies I use to deliver impactful SEO results.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TOOL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-primary-500 border-primary-500 text-black'
                  : 'border-[#222] text-gray-400 hover:border-[#333] hover:text-white bg-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tools grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {filtered.map((tool) => (
            <div key={tool.name} className="card">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-white text-sm">{tool.name}</span>
                <span className="text-xs text-primary-400">{tool.level}%</span>
              </div>
              <div className="h-1 bg-[#222] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"
                  style={{ width: `${tool.level}%` }}
                  role="progressbar"
                  aria-valuenow={tool.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${tool.name} proficiency: ${tool.level}%`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">Services</span>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">
            SEO Services I Offer
          </h3>
          <p className="section-subtitle">
            End-to-end SEO services tailored to your business goals and industry.
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
          aria-label="SEO services"
        >
          {SEO_SERVICES.map((s) => (
            <article
              key={s.id}
              role="listitem"
              className="card group hover:border-primary-500/30 hover:bg-[#111] cursor-default"
              itemScope
              itemType="https://schema.org/Service"
            >
              <span className="text-3xl mb-4 block" aria-hidden="true">{s.icon}</span>
              <h4
                className="font-bold text-white font-heading mb-2 group-hover:text-primary-400 transition-colors"
                itemProp="name"
              >
                {s.title}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed" itemProp="description">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
