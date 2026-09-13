'use client';

import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';
import { fadeUp, stagger, scaleIn, VP } from '@/lib/animations';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-[#0a0a0a]"
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
              className="card group"
              whileHover={{ y: -6, borderColor: 'rgba(34,197,94,0.2)' }}
              transition={{ duration: 0.25 }}
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Stars */}
              <div
                className="flex gap-1 mb-5"
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

              <p
                className="text-gray-400 leading-relaxed mb-6 text-sm group-hover:text-gray-300 transition-colors"
                itemProp="reviewBody"
              >
                &ldquo;{t.text}&rdquo;
              </p>

              <footer
                className="flex items-center gap-3 pt-4 border-t border-[#1a1a1a]"
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
                  <p className="text-gray-600 text-xs" itemProp="jobTitle">{t.role}</p>
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
          <motion.div
            className="inline-flex items-center gap-4 border border-[#1a1a1a] bg-[#111] rounded-2xl px-6 py-4"
            whileHover={{ scale: 1.03, borderColor: 'rgba(34,197,94,0.2)' }}
            transition={{ duration: 0.25 }}
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
