const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

export default function VideoCta() {
  return (
    <section className="video-section">
      <div className="container">
        <div
          className="video-banner"
          style={{
            backgroundImage: `url(${LIVE}/video-image.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* magnific-popup lightbox initialized by main.js on .popup-video */}
          <a
            href="https://www.youtube.com/watch?v=R0mku_PtK1E"
            className="video-popup play-btn"
          >
            <i className="fa-solid fa-play"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
