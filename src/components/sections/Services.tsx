'use client';

import { useState } from 'react';
import { SERVICES, PROCESS_STEPS } from '@/lib/constants';

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="section-padding bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
            What I Do
          </span>
          <h2 id="services-heading" className="section-title mb-4">
            SEO Services That{' '}
            <span className="gradient-text">Drive Real Results</span>
          </h2>
          <p className="section-subtitle">
            From technical foundations to content and links — I offer end-to-end SEO services
            tailored to your specific goals and industry.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          role="list"
          aria-label="SEO services offered by Sawon Saha"
        >
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              role="listitem"
              className={`card cursor-pointer group transition-all duration-300 ${
                activeService === service.id
                  ? 'border-primary-300 shadow-lg shadow-primary-100 ring-1 ring-primary-300'
                  : 'hover:border-primary-200 hover:shadow-md'
              }`}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              itemScope
              itemType="https://schema.org/Service"
            >
              <meta itemProp="serviceType" content="SEO" />
              <div className="text-4xl mb-4" aria-hidden="true">{service.icon}</div>
              <h3
                className="text-xl font-bold font-heading text-gray-900 mb-2 group-hover:text-primary-700 transition-colors"
                itemProp="name"
              >
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4" itemProp="description">
                {service.shortDesc}
              </p>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeService === service.id ? 'max-h-96' : 'max-h-0'
                }`}
                aria-hidden={activeService !== service.id}
              >
                <p className="text-gray-600 text-sm leading-relaxed mb-4 pt-2 border-t border-gray-100">
                  {service.description}
                </p>
                <ul className="space-y-1.5" role="list">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary-600 mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="mt-4 text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1 transition-colors"
                aria-expanded={activeService === service.id}
                aria-label={`${activeService === service.id ? 'Collapse' : 'Expand'} details for ${service.title}`}
              >
                {activeService === service.id ? 'Show less' : 'Learn more'}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeService === service.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </article>
          ))}
        </div>

        {/* Process */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">
              My SEO Process
            </h3>
            <p className="text-gray-600">
              A transparent, structured approach from discovery to sustained growth.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.step} className="relative text-center">
                {index < PROCESS_STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-0 h-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                )}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-200">
                  <span className="text-white text-xl font-bold font-heading">{step.step}</span>
                </div>
                <h4 className="font-bold text-gray-900 font-heading mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
