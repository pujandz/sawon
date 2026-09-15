import Image from 'next/image';
import Link from 'next/link';

const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

export default function Hero() {
  return (
    <section className="hero-1">
      <div className="container">
        <div className="hero-content-wrap d-flex flex-wrap justify-content-between align-items-center">
          <div className="hero-content">
            <div className="hero-top d-flex align-items-center gap-2">
              <Image
                src={`${LIVE}/vec-shape.png`}
                alt="Shape"
                width={40}
                height={40}
              />
              <span>welcome to my profile</span>
            </div>

            <h1>
              <em>i&rsquo;m</em> Sawon Saha{' '}
              <span>SEO Specialist, AEO Expert, Digital Marketer</span>.
            </h1>

            <div className="hero-btns d-flex align-items-center gap-4">
              <Link href="/portfolio-grid" className="theme-btn">
                view portfolio
              </Link>
              <div className="hero-socials d-flex gap-2">
                <a href="https://linkedin.com/in/sawonsaha" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://twitter.com/sawonsaha9" target="_blank" rel="noreferrer">Twitter</a>
                <a href="https://quora.com/profile/Sawon-Saha-1" target="_blank" rel="noreferrer">Quora</a>
                <a href="https://medium.com/@sawon.s907" target="_blank" rel="noreferrer">Medium</a>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <Image
              src={`${LIVE}/hero-image.png`}
              alt="Sawon Saha – SEO Specialist"
              width={520}
              height={620}
              priority
            />
          </div>
        </div>

        <div className="hero-info-box d-flex align-items-center gap-3">
          <Image src={`${LIVE}/info.png`} alt="Clients" width={60} height={60} />
          <p>
            trusted clients
            <br />
            world wide
          </p>
        </div>
      </div>
    </section>
  );
}
