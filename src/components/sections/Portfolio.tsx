import { PORTFOLIO_ITEMS } from '@/lib/constants';

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-padding bg-[#0a0a0a]"
      aria-labelledby="portfolio-heading"
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Case Studies</span>
          <h2 id="portfolio-heading" className="section-title mb-4">
            Featured{' '}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects I&apos;ve worked on. I&apos;m always looking to work on new, interesting,
            and meaningful SEO challenges.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-6" role="list" aria-label="SEO case studies">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <article
              key={item.id}
              role="listitem"
              className="card hover:border-[#333] transition-all duration-300 group"
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                {/* Left – Project image placeholder */}
                <div className="lg:col-span-2">
                  <div className="aspect-video rounded-xl overflow-hidden bg-[#1a1a1a] border border-[#222] relative flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">
                        {index === 0 ? '🛒' : index === 1 ? '💻' : '🏠'}
                      </div>
                      <p className="text-xs text-gray-600">{item.industry}</p>
                    </div>
                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-primary-500 text-black text-[10px] font-bold px-2 py-1 rounded">
                      {item.tags[0]}
                    </div>
                  </div>
                </div>

                {/* Right – Details */}
                <div className="lg:col-span-3">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3
                        className="text-xl font-bold text-white font-heading group-hover:text-primary-400 transition-colors mb-1"
                        itemProp="name"
                      >
                        {item.client}
                      </h3>
                      <p className="text-xs text-gray-600">{item.industry}</p>
                    </div>
                    <div className="flex gap-1 text-gray-600 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-primary-500">★</span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed mb-6" itemProp="description">
                    <strong className="text-gray-300">Challenge: </strong>{item.challenge}
                    {' · '}
                    <strong className="text-gray-300">Solution: </strong>{item.solution}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-3">
                    {item.results.map((r) => (
                      <div
                        key={r.metric}
                        className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-3 text-center"
                      >
                        <p className="text-lg font-black gradient-text font-heading">{r.change}</p>
                        <p className="text-[10px] text-gray-600 mt-0.5">{r.metric}</p>
                        {r.period && <p className="text-[10px] text-gray-700">in {r.period}</p>}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] border border-[#222] text-gray-500 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-10">
          <a href="#contact" className="btn-outline text-sm">
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
