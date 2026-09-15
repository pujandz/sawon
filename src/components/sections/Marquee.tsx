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
      <div className="marquee-wrap d-flex">
        {ITEMS.map((item) => (
          <div key={item} className="marquee-item d-flex align-items-center">
            <img src={`${LIVE}/star.png`} alt="" className="marquee-star" />
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
