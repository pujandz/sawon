const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

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

export default function Marquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-wrapper">
        {/* Two identical sets for seamless CSS scroll-left loop (0% → -50%) */}
        <div className="marquee-content">
          {ITEMS.map((item) => (
            <div key={item} className="marquee-text">
              <img src={`${LIVE}/star.png`} alt="" width={20} height={20} />
              <h3>{item}</h3>
            </div>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {ITEMS.map((item) => (
            <div key={`dup-${item}`} className="marquee-text">
              <img src={`${LIVE}/star.png`} alt="" width={20} height={20} />
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
