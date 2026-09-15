const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

const TESTIMONIALS = [
  {
    name: 'Pujan Kumar Saha',
    role: 'SEO | AEO | GEO Growth Specialist',
    img: 'testimonial-image.jpg',
    quote: 'Sawon Saha is a motivated, forward thinking and intelligent SEO specialist who has lots of knowledge in his field. Proactive, energetic and totally organized. Brilliant SEO specialist. He showed a high level of SEO audit, on-site SEO, off-site SEO, link building, content strategy and other technical skills.',
  },
  {
    name: 'Arindam Saha',
    role: 'Brand | Advertising | Digital Marketing',
    img: 'testimonial-image-2.jpg',
    quote: 'Sawon was part of my team from the very beginning. He quickly became renowned among his colleagues for his stunning learning ability and impeccable execution of his duties, especially in the field of SEO. I can confidently say that he was the fastest learner I have ever worked with.',
  },
  {
    name: 'Shariful Islam',
    role: 'Sr. Brand & Communication Executive, Crown Cement PLC',
    img: 'testimonial-image-3.png',
    quote: "I've closely collaborated with Sawon Saha on Mir Group's SEO projects. His profound expertise in SEO, SEM, SEO Copywriting, and SEO Audits has consistently driven outstanding success in our Google search results. Beyond his technical skills, his cooperative nature and professionalism highlight his excellence.",
  },
  {
    name: 'Parveen Abedin',
    role: 'Digital Strategy & Research Specialist | AI & Transformation Expert',
    img: 'testimonial-image.jpg',
    quote: 'Sawon is a hardworking professional who has a very strong understanding of how SEO works for businesses. Through his expert skills, he has improved the search engine rankings for many brands. I would recommend him as a great SEO expert due to his passion and consistent efficiency.',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonial-section fix section-padding pt-0">
      <div className="container">
        <div className="testimonial-wrapper">
          <div className="array-button">
            <button className="array-prev">
              <i aria-hidden="true" className="fa-solid fa-arrow-up-left"></i>
            </button>
            <button className="array-next">
              <i aria-hidden="true" className="fa-solid fa-arrow-down-right"></i>
            </button>
          </div>

          <div className="swiper-pagination"></div>

          <div className="swiper testimonial-slider">
            <div className="swiper-wrapper">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="swiper-slide">
                  <div className="testimonial-box-items">
                    <div className="thumb">
                      <img src={`${LIVE}/${t.img}`} alt={t.name} />
                      <div className="info-title">
                        <h4>{t.name}</h4>
                        <span>{t.role}</span>
                      </div>
                    </div>

                    <div className="content">
                      <div className="quote-icon">
                        <img src={`${LIVE}/quote-icon.png`} alt="Quote Icon" />
                      </div>
                      <p>{t.quote}</p>
                      <div className="clutech-image">
                        <img src={`${LIVE}/clutech.png`} alt="Company Logo" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
