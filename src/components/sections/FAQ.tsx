'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/lib/constants';
import { getFAQSchema } from '@/lib/schema';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="section-padding bg-white"
      aria-labelledby="faq-heading"
    >
      {/* FAQ structured data for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }}
      />

      <div className="container-max">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-2">
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
              FAQ
            </span>
            <h2 id="faq-heading" className="section-title mb-4">
              Common SEO{' '}
              <span className="gradient-text">Questions Answered</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Got questions about SEO? I&apos;ve answered the most common ones below. If you
              have a specific question, feel free to reach out directly.
            </p>
            <a
              href="#contact"
              className="btn-primary text-sm"
              aria-label="Ask Sawon Saha your SEO questions"
            >
              Ask Me Anything
            </a>
          </div>

          {/* Right – Accordion */}
          <div className="lg:col-span-3">
            <dl className="space-y-3" aria-label="Frequently asked questions about SEO">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
                      isOpen
                        ? 'border-primary-200 bg-primary-50/50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <dt>
                      <button
                        className="w-full flex items-center justify-between gap-4 p-5 text-left"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        id={`faq-question-${index}`}
                      >
                        <span className="font-semibold text-gray-900 text-sm sm:text-base">
                          {item.question}
                        </span>
                        <span
                          className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? 'border-primary-600 bg-primary-600 text-white rotate-45'
                              : 'border-gray-300 text-gray-500'
                          }`}
                          aria-hidden="true"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v12M6 12h12" />
                          </svg>
                        </span>
                      </button>
                    </dt>
                    <dd
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96' : 'max-h-0'
                      }`}
                      hidden={!isOpen}
                    >
                      <p className="px-5 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
