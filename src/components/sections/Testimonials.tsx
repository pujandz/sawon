import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-gray-950"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary-400 bg-primary-950 border border-primary-800 px-3 py-1 rounded-full mb-4">
            Testimonials
          </span>
          <h2 id="testimonials-heading" className="section-title text-white mb-4">
            What Clients Say About{' '}
            <span className="gradient-text">My SEO Work</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Don&apos;t take my word for it — here&apos;s what business owners say after working with me.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid md:grid-cols-2 gap-6"
          role="list"
          aria-label="Client testimonials"
          itemScope
          itemType="https://schema.org/AggregateRating"
        >
          <meta itemProp="ratingValue" content="5" />
          <meta itemProp="reviewCount" content="47" />
          <meta itemProp="bestRating" content="5" />

          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.id}
              role="listitem"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary-700/50 transition-colors"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div
                className="flex gap-1 mb-4"
                aria-label={`Rated ${t.rating} out of 5 stars`}
                itemProp="reviewRating"
                itemScope
                itemType="https://schema.org/Rating"
              >
                <meta itemProp="ratingValue" content={String(t.rating)} />
                <meta itemProp="bestRating" content="5" />
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg" aria-hidden="true">★</span>
                ))}
              </div>

              <p
                className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base"
                itemProp="reviewBody"
              >
                &ldquo;{t.text}&rdquo;
              </p>

              <footer
                className="flex items-center gap-3"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm" itemProp="name">
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-xs" itemProp="jobTitle">
                    {t.role}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Average rating summary */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((s) => (
                <span key={s} className="text-yellow-400 text-xl" aria-hidden="true">★</span>
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-bold">5.0 / 5.0</p>
              <p className="text-gray-400 text-xs">Based on 47 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
