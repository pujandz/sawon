'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/lib/constants';
import { getFAQSchema } from '@/lib/schema';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-padding bg-[#0d0d0d]"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }}
      />

      <div className="container-max">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-2">
            <span className="section-label">FAQ</span>
            <h2 id="faq-heading" className="section-title mb-4">
              Common SEO{' '}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="section-subtitle mb-6">
              Got questions about SEO? I&apos;ve answered the most common ones. Still not sure?
              Reach out directly.
            </p>
            <a href="#contact" className="btn-primary text-sm">
              Ask Me Anything
            </a>
          </div>

          {/* Right */}
          <div className="lg:col-span-3">
            <dl className="space-y-2" aria-label="Frequently asked SEO questions">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                      isOpen ? 'border-primary-500/30 bg-[#111]' : 'border-[#1a1a1a] bg-[#111] hover:border-[#2a2a2a]'
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
                        <span className="font-medium text-white text-sm sm:text-base">
                          {item.question}
                        </span>
                        <span
                          className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                            isOpen ? 'border-primary-500 bg-primary-500/10 text-primary-400 rotate-45' : 'border-[#333] text-gray-600'
                          }`}
                          aria-hidden="true"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v12M6 12h12" />
                          </svg>
                        </span>
                      </button>
                    </dt>
                    <dd
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                      hidden={!isOpen}
                    >
                      <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">
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
