
const BRANDS = [
  { file: 'brand-1.png', alt: 'Brand 1' },
  { file: 'brand-2.png', alt: 'Brand 2' },
  { file: 'brand-8.png', alt: 'Brand 3' },
  { file: 'brand-7.png', alt: 'Brand 4' },
  { file: 'brand-6.png', alt: 'Brand 5' },
  { file: 'brand-4.png', alt: 'Brand 6' },
  { file: 'brand-3.png', alt: 'Brand 7' },
  { file: 'brand-7.png', alt: 'Brand 8' },
];

export default function Brand() {
  return (
    <div className="brand-section section-padding">
      <div className="container">
        <div className="brand-text">
          <p>tools &amp; platforms I&nbsp;<b>work with daily</b></p>
        </div>

        <div className="row g-3 g-xl-5">
          {BRANDS.map((b, i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="brand-box">
                <img src={`/assets/img/decorations/${b.file}`} alt={b.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
