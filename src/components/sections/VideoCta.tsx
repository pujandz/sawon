const CDN = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

export default function VideoCta() {
  return (
    <div className="video-section fix">
      <div className="video-wrapper">
        <div className="video-thumb fix">
          <img
            data-speed="0.8"
            src={`${CDN}/video-image.jpg`}
            alt="Video Background"
          />
          <div className="video">
            <a
              href="https://www.youtube.com/watch?v=R0mku_PtK1E"
              className="ripple video-btn video-popup"
            >
              <i className="fas fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
