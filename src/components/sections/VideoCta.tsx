const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';

export default function VideoCta() {
  return (
    <div className="video-section fix">
      <div className="video-wrapper">
        <div className="video-thumb fix">
          <img
            data-speed="0.8"
            src={`${LIVE}/video-image.jpg`}
            alt="Video Background"
          />
          <div className="video">
            <a
              href="https://www.youtube.com/watch?v=R0mku_PtK1E"
              className="ripple video-btn video-popup"
            >
              <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
