const ACHIEVEMENTS = [
  { year: '2021', text: 'Google Analytics Individual Qualification (GAIQ) certified' },
  { year: '2022', text: 'SEMrush SEO Toolkit Certification — advanced level' },
  { year: '2023', text: 'Led SEO team at Algomindz — promoted to Team Lead' },
  { year: '2024', text: 'Delivered 80+ successful SEO projects across 10+ industries' },
];

const BADGES = [
  { icon: 'fa-solid fa-chart-line',          label: 'Analytics',  delay: '0s'      },
  { icon: 'fa-solid fa-magnifying-glass',     label: 'SEO',        delay: '0.75s'   },
  { icon: 'fa-solid fa-robot',               label: 'AEO',        delay: '1.5s'    },
  { icon: 'fa-solid fa-ranking-star',        label: 'Rankings',   delay: '2.25s'   },
];

const CERTS = [
  'GAIQ · Google',
  'SEO Toolkit · SEMrush',
  'Digital Marketing · Coursera',
  'SEO Foundations · Coursera',
];

export default function Award() {
  return (
    <section className="award-section section-padding fix section-bg approach-area">
      <div className="container">
        <div className="award-wrapper">
          <div className="row g-4 align-items-center">

            {/* Left — timeline */}
            <div className="col-lg-6">
              <div className="section-title">
                <h6>certified &amp; recognised</h6>
                <h2 className="hero_title tv_hero_title hero_title_1">
                  Certifications <span>&amp; Milestones</span>
                </h2>
              </div>
              <div className="award-content approach-wrapper-box fix">
                {ACHIEVEMENTS.map((a) => (
                  <div key={a.year} className="award-list-items approach-box">
                    <p>{a.year}</p>
                    <span>{a.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — animated certificate */}
            <div className="col-lg-6">
              <div className="av-card">
                {/* Decorative corner SVGs */}
                <svg className="av-corner av-corner-tl" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <path d="M2 38 L2 8 Q2 2 8 2 L38 2" stroke="rgba(108,93,250,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <circle cx="2" cy="2" r="2" fill="#6C5DFA" opacity="0.6"/>
                </svg>
                <svg className="av-corner av-corner-tr" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <path d="M38 38 L38 8 Q38 2 32 2 L2 2" stroke="rgba(108,93,250,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <circle cx="38" cy="2" r="2" fill="#6C5DFA" opacity="0.6"/>
                </svg>
                <svg className="av-corner av-corner-bl" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <path d="M2 2 L2 32 Q2 38 8 38 L38 38" stroke="rgba(108,93,250,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <circle cx="2" cy="38" r="2" fill="#6C5DFA" opacity="0.6"/>
                </svg>
                <svg className="av-corner av-corner-br" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <path d="M38 2 L38 32 Q38 38 32 38 L2 38" stroke="rgba(108,93,250,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <circle cx="38" cy="38" r="2" fill="#6C5DFA" opacity="0.6"/>
                </svg>

                {/* Header */}
                <div className="av-header">
                  <span className="av-dot" /><span className="av-dot" /><span className="av-dot" />
                  <span className="av-label">Certificate of Excellence</span>
                  <span className="av-dot" /><span className="av-dot" /><span className="av-dot" />
                </div>

                {/* Ring with floating badges */}
                <div className="av-ring-outer">
                  <div className="av-ring-wrap">
                    <svg className="av-ring-svg" viewBox="0 0 200 200" aria-hidden="true">
                      <defs>
                        <linearGradient id="avRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#6C5DFA" />
                          <stop offset="60%" stopColor="#A78BFA" />
                          <stop offset="100%" stopColor="#6C5DFA" />
                        </linearGradient>
                        <linearGradient id="avGlowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgba(108,93,250,0.08)" />
                          <stop offset="100%" stopColor="rgba(108,93,250,0.02)" />
                        </linearGradient>
                        <filter id="avGlow">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                      {/* Filled centre disk */}
                      <circle cx="100" cy="100" r="82" fill="url(#avGlowGrad)" />
                      {/* Track ring */}
                      <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(108,93,250,0.1)" strokeWidth="2" />
                      {/* Animated progress ring */}
                      <circle className="av-ring-progress" cx="100" cy="100" r="88"
                              fill="none" stroke="url(#avRingGrad)" strokeWidth="2.5"
                              strokeLinecap="round" strokeDasharray="553" strokeDashoffset="553"
                              filter="url(#avGlow)" />
                      {/* Tick marks at 0°/90°/180°/270° */}
                      {[0, 90, 180, 270].map((deg) => {
                        const r = Math.PI * deg / 180;
                        const x1 = 100 + 82 * Math.cos(r);
                        const y1 = 100 + 82 * Math.sin(r);
                        const x2 = 100 + 92 * Math.cos(r);
                        const y2 = 100 + 92 * Math.sin(r);
                        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(108,93,250,0.4)" strokeWidth="1.5" />;
                      })}
                    </svg>

                    {/* Floating badges on the ring */}
                    {BADGES.map((b, i) => {
                      const positions = [
                        { top: '-18px', left: 'calc(50% - 18px)' },
                        { top: 'calc(50% - 18px)', right: '-18px' },
                        { bottom: '-18px', left: 'calc(50% - 18px)' },
                        { top: 'calc(50% - 18px)', left: '-18px' },
                      ];
                      return (
                        <div key={b.label} className="av-badge" style={{ ...positions[i], animationDelay: b.delay }}
                             title={b.label} aria-label={b.label}>
                          <i className={b.icon} aria-hidden="true" />
                        </div>
                      );
                    })}

                    {/* Centre text */}
                    <div className="av-center">
                      <i className="fa-solid fa-star av-star" aria-hidden="true" />
                      <span className="av-center-title">SEO &amp; AEO</span>
                      <span className="av-center-sub">Expert</span>
                    </div>
                  </div>
                </div>

                {/* Cert chips */}
                <div className="av-chips">
                  {CERTS.map((c) => (
                    <span key={c} className="av-chip">{c}</span>
                  ))}
                </div>

                {/* Stats */}
                <div className="av-stats">
                  {[['4', 'Certifications'], ['3+', 'Years Exp.'], ['80+', 'Projects']].map(([n, l]) => (
                    <div key={l} className="av-stat">
                      <strong>{n}</strong>
                      <span>{l}</span>
                    </div>
                  ))}
                </div>

                {/* Verified footer */}
                <div className="av-verified">
                  <i className="fa-solid fa-circle-check" aria-hidden="true" />
                  <span>Verified by industry-leading platforms</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
