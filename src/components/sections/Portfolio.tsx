import Link from 'next/link';

const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

const PROJECTS = [
  {
    id: 'ecommerce-seo',
    category: 'E-Commerce SEO',
    name: 'BDShop BD',
    text: 'Technical & On-Page SEO',
    img: `${LIVE}/portfolio-1.jpg`,
    href: '/portfolio-grid',
  },
  {
    id: 'local-seo',
    category: 'Local SEO',
    name: 'AlgoMindz',
    text: 'Local & Link Building',
    img: `${LIVE}/portfolio-2.jpg`,
    href: '/portfolio-grid',
  },
  {
    id: 'technical-seo',
    category: 'Technical SEO',
    name: 'Client Project',
    text: 'Technical SEO Audit',
    img: `${LIVE}/portfolio-3.jpg`,
    href: '/portfolio-grid',
  },
];

export default function Portfolio() {
  return (
    <div className="gt-vertical-portfolio fix">
      <div className="swiper gt-vertical-portfolio-slider">
        <div className="swiper-wrapper">
          {PROJECTS.map((p) => (
            <div key={p.id} className="swiper-slide">
              <div className="slide-inner">
                <img src={p.img} alt={p.name} />
              </div>
              <div className="gt-vertical-portfolio__content">
                <div className="gt-vertical-portfolio__content-title">
                  <Link href={p.href}>{p.name}</Link>
                </div>
                <div className="hero-content">
                  <h6>{p.category}</h6>
                  <p>{p.text}</p>
                  <Link href={p.href} className="theme-btn">
                    View Case Study <i aria-hidden="true" className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prev / Next arrows */}
        <div className="array-button">
          <div className="array-prev">
            <i className="fa-solid fa-arrow-up"></i>
          </div>
          <div className="array-next">
            <i className="fa-solid fa-arrow-down"></i>
          </div>
        </div>

        {/* Pagination */}
        <div className="gt-vertical-portfolio-pagination"></div>

        {/* Slider arrows bottom-right */}
        <div className="gt-vertical-portfolio__slider__arrow">
          <div className="gt-vertical-portfolio__slider__arrow-prev array-prev">
            <i className="fa-solid fa-arrow-up"></i> PREV
          </div>
          <div className="gt-vertical-portfolio__slider__arrow-next array-next">
            NEXT <i className="fa-solid fa-arrow-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
