import { PORTFOLIO_ITEMS } from '@/lib/constants';

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-padding bg-white"
      aria-labelledby="portfolio-heading"
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
            Case Studies
          </span>
          <h2 id="portfolio-heading" className="section-title mb-4">
            Real Results for{' '}
            <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="section-subtitle">
            Every number below represents a real client, a real challenge, and a measurable
            outcome. No vanity metrics — just revenue-driving SEO results.
          </p>
        </div>

        {/* Portfolio items */}
        <div className="space-y-8" role="list" aria-label="SEO case studies">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <article
              key={item.id}
              role="listitem"
              className="card hover:shadow-lg transition-all duration-300 overflow-hidden"
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left – Context */}
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center text-primary-700 font-bold font-heading">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3
                        className="font-bold text-gray-900 font-heading"
                        itemProp="name"
                      >
                        {item.client}
                      </h3>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                        {item.industry}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Challenge
                      </p>
                      <p className="text-sm text-gray-700" itemProp="description">
                        {item.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Solution
                      </p>
                      <p className="text-sm text-gray-700">{item.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-primary-50 text-primary-700 px-2.5 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right – Results */}
                <div className="lg:col-span-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Results Achieved
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {item.results.map((result) => (
                      <div
                        key={result.metric}
                        className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-5 text-center border border-primary-100"
                        itemScope
                        itemType="https://schema.org/QuantitativeValue"
                      >
                        <div
                          className="text-2xl font-bold gradient-text font-heading mb-1"
                          itemProp="value"
                        >
                          {result.change}
                        </div>
                        <div className="text-xs font-semibold text-gray-700 mb-0.5">
                          {result.metric}
                        </div>
                        {result.period && (
                          <div className="text-xs text-gray-500">in {result.period}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want results like these for your business?
          </p>
          <a
            href="#contact"
            className="btn-primary text-base"
            aria-label="Contact Sawon Saha to discuss your SEO project"
          >
            Let&apos;s Grow Your Traffic
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
