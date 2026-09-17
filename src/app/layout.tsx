import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE_CONFIG } from '@/lib/constants';
import {
  getPersonSchema,
  getProfessionalServiceSchema,
  getWebSiteSchema,
} from '@/lib/schema';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Preloader from '@/components/layout/Preloader';
import ScriptLoader from '@/components/layout/ScriptLoader';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name} – SEO & AEO Specialist`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'SEO specialist Bangladesh',
    'SEO expert Dhaka',
    'search engine optimization Bangladesh',
    'technical SEO consultant',
    'local SEO Bangladesh',
    'link building services',
    'on-page SEO optimization',
    'keyword research Bangladesh',
    'SEO audit service',
    'digital marketing SEO',
    'Sawon Saha SEO',
    'best SEO specialist Bangladesh',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} – SEO Specialist in Bangladesh`,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    creator: SITE_CONFIG.twitterHandle,
    site: SITE_CONFIG.twitterHandle,
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  category: 'SEO Services',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Theme: read localStorage before hydration to prevent flash */}
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}` }} />
        {/* Fonts — single Google Fonts request for both families.
            Big Shoulders Display: heading weights 700/800/900.
            Kanit: body weights 400/500/600/700 (was 18 weights, now 8).
            Both families share one HTTP/2 connection; cdnfonts CDN removed. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="/assets/img/sawon-saha.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Kanit:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        />

        <link rel="stylesheet" href="/assets/css/bootstrap.min.css?v=2" />
        <link rel="stylesheet" href="/assets/css/all.min.css?v=2" />
        <link rel="stylesheet" href="/assets/css/animate.css?v=2" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css?v=2" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css?v=2" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css?v=2" />
        <link rel="stylesheet" href="/assets/css/nice-select.css?v=2" />
        <link rel="stylesheet" href="/assets/css/slick.css?v=2" />
        <link rel="stylesheet" href="/assets/css/main.css?v=2" />

        {/* Inline override — after all <link> tags so it wins the cascade unconditionally.
            Fixes stale-cached main.css that shipped with lime-green --theme: #BFF747. */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root { --theme: #6C5DFA !important; }
          .marquee-section { background-color: #6C5DFA !important; }
          .cta-text-items h3, .cta-text-items h3 a { color: #6C5DFA !important; border-color: #6C5DFA !important; }
          .theme-btn { background-color: #6C5DFA !important; border-color: #6C5DFA !important; color: #fff !important; }
          .theme-btn i { color: #fff !important; }
          .marquee-star i { color: #6C5DFA !important; }
          .news-main-box-items .news-content ul li span { background: #6C5DFA !important; }
        ` }} />

        <link rel="icon" href="/assets/img/logo/white-icon.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/assets/img/logo/white-icon.webp" />
        <link rel="manifest" href="/manifest.json" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getPersonSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getProfessionalServiceSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }}
        />
      </head>
      <body>
        <Preloader />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
        <button id="back-top" className="back-to-top show">
          <i className="fa-regular fa-arrow-up"></i>
        </button>
        <div id="scroll-progress-bar"></div>
        <ScriptLoader />
      </body>
    </html>
  );
}
