const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

const TESTIMONIALS = [
  {
    name: 'Pujan Kumar Saha',
    role: 'SEO | AEO | GEO Growth Specialist',
    relationship: 'Managed Sawon directly · Nov 2022',
    img: 'testimonial-image.jpg',
    quote:
      'Sawon Saha is a motivated, forward thinking and intelligent SEO specialist who has lots of knowledge in his field. Proactive, energetic and totally organized. Brilliant SEO specialist. He showed a high level of SEO audit, on-site SEO, off-site SEO, link building, content strategy and other technical skills and was a valuable contributor to our projects.',
  },
  {
    name: 'Arindam Saha',
    role: 'Brand | Advertising | Digital Marketing',
    relationship: 'Managed Sawon directly · Jan 2025',
    img: 'testimonial-image-2.jpg',
    quote:
      'Sawon was part of my team from the very beginning. He quickly became renowned among his colleagues for his stunning learning ability and impeccable execution of his duties, especially in the field of SEO. I can confidently say that he was the fastest learner I have ever worked with.',
  },
  {
    name: 'Shariful Islam',
    role: 'Sr. Brand & Communication Executive, Crown Cement PLC',
    relationship: "Sawon's client · Aug 2023",
    img: 'testimonial-image-3.png',
    quote:
      "I've closely collaborated with Sawon Saha on Mir Group's SEO projects. His profound expertise in SEO, SEM, SEO Copywriting, and SEO Audits has consistently driven outstanding success in our Google search results. Beyond his technical skills, his cooperative nature and professionalism highlight his excellence.",
  },
  {
    name: 'Parveen Abedin',
    role: 'Digital Strategy & Research Specialist | AI & Transformation Expert',
    relationship: 'Senior to Sawon · Nov 2022',
    img: 'testimonial-image.jpg',
    quote:
      'Sawon is a hardworking professional who has a very strong understanding of how SEO works for businesses. Through his expert skills, he has improved the search engine rankings for many brands. I would recommend him as a great SEO expert due to his passion and consistent efficiency.',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonial-section-2">
      <div className="container">
        <div className="section-title text-center">
          <span className="eyebrow">testimonials</span>
          <h2>What Clients &amp; Colleagues Say</h2>
        </div>
        {/* slider-active.js / main.js wires up the swiper on .testimonial-wrapper */}
        <div className="testimonial-wrapper testimonial-slider">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testimonial-box-items">
              <img src={`${LIVE}/quote-icon.png`} alt="Quote" width={40} height={30} />
              <p>{t.quote}</p>
              <div className="testimonial-author d-flex align-items-center gap-3">
                <img
                  src={`${LIVE}/${t.img}`}
                  alt={t.name}
                  width={60}
                  height={60}
                  style={{ borderRadius: '50%' }}
                />
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                  <br />
                  <small style={{ opacity: 0.6 }}>{t.relationship}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
