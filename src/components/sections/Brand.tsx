const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

const BRANDS = [
  'brand-1.png',
  'brand-2.png',
  'brand-8.png',
  'brand-7.png',
  'brand-6.png',
  'brand-4.png',
  'brand-3.png',
  'brand-7.png',
];

export default function Brand() {
  return (
    <section className="brand-section">
      <div className="container">
        <p className="brand-text text-center">
          tools &amp; platforms I&nbsp;<strong>work with daily</strong>
        </p>
        <div className="brand-box d-flex flex-wrap justify-content-between align-items-center">
          {BRANDS.map((b, i) => (
            <img key={i} src={`${LIVE}/${b}`} alt={`Tool ${i + 1}`} width={110} height={50} />
          ))}
        </div>
      </div>
    </section>
  );
}
