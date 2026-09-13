import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-[#0a0a0a]"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Testimonials</span>
          <h2 id="testimonials-heading" className="section-title mb-4">
            What Clients Say About{' '}
            <span className="gradient-text">My Work</span>
          </h2>
          <p className="section-subtitle">
            Don&apos;t take my word for it — here&apos;s what business owners say after working with me.
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 gap-5"
          role="list"
          aria-label="Client testimonials"
        >
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.id}
              role="listitem"
              className="card hover:border-[#333] transition-all duration-300 group"
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
                  <span key={i} className="text-primary-500" aria-hidden="true">★</span>
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
                <div className="w-9 h-9 bg-gradient-to-br from-primary-600 to-primary-400 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm" itemProp="name">{t.name}</p>
                  <p className="text-gray-600 text-xs" itemProp="jobTitle">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-4 border border-[#1a1a1a] bg-[#111] rounded-2xl px-6 py-4">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <span key={s} className="text-primary-500 text-xl" aria-hidden="true">★</span>
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-bold">5.0 / 5.0</p>
              <p className="text-gray-600 text-xs">Based on 47 client reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
