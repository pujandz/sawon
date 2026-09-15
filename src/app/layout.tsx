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
        {/* Revox theme fonts — must load before main.css which references them */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/big-shoulders-display" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />

        {/* Revox theme CSS — exact order from original theme */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
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
        <Header />
        <main>{children}</main>
        <Footer />
        <ScriptLoader />
      </body>
    </html>
  );
}
