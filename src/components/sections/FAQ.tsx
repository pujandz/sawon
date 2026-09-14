'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '@/lib/constants';
import { getFAQSchema } from '@/lib/schema';
import { fadeUp, stagger, VP } from '@/lib/animations';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-padding bg-[var(--bg-alt)]"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }}
      />

      <div className="container-max">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left */}
          <motion.div
            className="lg:col-span-2"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <motion.span variants={fadeUp} className="section-label">FAQ</motion.span>
            <motion.h2 variants={fadeUp} id="faq-heading" className="section-title mb-4">
              Common SEO{' '}
              <span className="gradient-text">Questions</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mb-6">
              Got questions about SEO? I&apos;ve answered the most common ones. Still not sure?
              Reach out directly.
            </motion.p>
            <motion.div variants={fadeUp}>
              <motion.a
                href="#contact"
                className="btn-primary text-sm"
                whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(14,165,233,0.3)' }}
                whileTap={{ scale: 0.97 }}
              >
                Ask Me Anything
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="lg:col-span-3"
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <dl className="space-y-2" aria-label="Frequently asked SEO questions">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className={`border rounded-xl overflow-hidden ${
                      isOpen ? 'border-primary-500/30 bg-[var(--bg-surface)]' : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)]'
                    }`}
                    animate={{ borderColor: isOpen ? 'rgba(14,165,233,0.3)' : undefined }}
                    transition={{ duration: 0.2 }}
                  >
                    <dt>
                      <button
                        className="w-full flex items-center justify-between gap-4 p-5 text-left"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        id={`faq-question-${index}`}
                      >
                        <span className="font-medium text-white text-sm sm:text-base">
                          {item.question}
                        </span>
                        <motion.span
                          className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center ${
                            isOpen ? 'border-primary-500 bg-primary-500/10 text-primary-400' : 'border-[var(--border-strong)] text-gray-600'
                          }`}
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          aria-hidden="true"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v12M6 12h12" />
                          </svg>
                        </motion.span>
                      </button>
                    </dt>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.dd
                          id={`faq-answer-${index}`}
                          role="region"
                          aria-labelledby={`faq-question-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.dd>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
