'use client';

import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';
import { fadeUp, stagger, scaleIn, VP } from '@/lib/animations';

const LinkedInLogo = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4"
    fill="#0A66C2"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-[var(--bg-base)]"
      aria-labelledby="testimonials-heading"
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
          <motion.span variants={fadeUp} className="section-label">Testimonials</motion.span>
          <motion.h2 variants={fadeUp} id="testimonials-heading" className="section-title mb-4">
            What Clients Say About{' '}
            <span className="gradient-text">My Work</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            Don&apos;t take my word for it — here&apos;s what business owners say after working with me.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-5"
          role="list"
          aria-label="Client testimonials"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          {TESTIMONIALS.map((t) => (
            <motion.blockquote
              key={t.id}
              role="listitem"
              variants={scaleIn}
              className="card group flex flex-col"
              whileHover={{ y: -6, borderColor: 'rgba(14,165,233,0.2)' }}
              transition={{ duration: 0.25 }}
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Top row: stars + source badge */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="flex gap-1"
                  aria-label={`${t.rating} out of 5 stars`}
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  <meta itemProp="ratingValue" content={String(t.rating)} />
                  <meta itemProp="bestRating" content="5" />
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-primary-500"
                      aria-hidden="true"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={VP}
                      transition={{ delay: i * 0.07 + 0.2, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                {/* Source badge */}
                {t.source && (
                  <motion.a
                    href={t.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verified on ${t.source}`}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-xs font-medium text-gray-500 hover:border-[#0A66C2]/40 hover:text-[#0A66C2] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.15 }}
                  >
                    <LinkedInLogo />
                    <span>{t.source}</span>
                  </motion.a>
                )}
              </div>

              <p
                className="text-gray-400 leading-relaxed mb-6 text-sm group-hover:text-gray-300 transition-colors flex-1"
                itemProp="reviewBody"
              >
                &ldquo;{t.text}&rdquo;
              </p>

              <footer
                className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)]"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <motion.div
                  className="w-9 h-9 bg-gradient-to-br from-primary-600 to-primary-400 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.2 }}
                >
                  {t.name.charAt(0)}
                </motion.div>
                <div>
                  <p className="text-white font-semibold text-sm" itemProp="name">{t.name}</p>
                  <p className="text-gray-500 text-xs" itemProp="jobTitle">{t.role}</p>
                  {t.relationship && (
                    <p className="text-gray-600 text-[11px] mt-0.5">{t.relationship}</p>
                  )}
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/sawonsaha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 border border-[var(--border-subtle)] bg-[var(--bg-surface)] rounded-2xl px-6 py-4 group"
            whileHover={{ scale: 1.03, borderColor: 'rgba(10,102,194,0.3)' }}
            transition={{ duration: 0.25 }}
            aria-label="View all recommendations on LinkedIn"
          >
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <span key={s} className="text-primary-500 text-xl" aria-hidden="true">★</span>
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-bold">5.0 / 5.0</p>
              <p className="text-gray-600 text-xs">Based on 47 client reviews</p>
            </div>
            <div className="flex items-center gap-1.5 ml-2 text-gray-500 group-hover:text-[#0A66C2] transition-colors text-xs font-medium">
              <LinkedInLogo />
              <span>View on LinkedIn</span>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
