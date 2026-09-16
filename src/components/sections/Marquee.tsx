const ITEMS = [
  'TECHNICAL SEO',
  'ON-PAGE OPTIMIZATION',
  'LINK BUILDING',
  'KEYWORD RESEARCH',
  'SEO AUDIT',
  'LOCAL SEO',
  'AEO SPECIALIST',
  'CONTENT STRATEGY',
  'GOOGLE ANALYTICS',
  'SEMRUSH EXPERT',
  'AHREFS PRO',
  'SCHEMA MARKUP',
  'CORE WEB VITALS',
  'DIGITAL MARKETING',
  'SEARCH VISIBILITY',
  'CONVERSION GROWTH',
];

const Star = () => (
  <span className="marquee-star" aria-hidden="true">
    <i className="fa-solid fa-star-of-life"></i>
  </span>
);

export default function Marquee() {
  return (
    <section className="marquee-section fix">
      <div className="marquee-container">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {ITEMS.map((item) => (
              <div key={item} className="marquee-text">
                <Star />
                <h3>{item}</h3>
              </div>
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {ITEMS.map((item) => (
              <div key={`dup-${item}`} className="marquee-text">
                <Star />
                <h3>{item}</h3>
              </div>
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {ITEMS.map((item) => (
              <div key={`dup2-${item}`} className="marquee-text">
                <Star />
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
