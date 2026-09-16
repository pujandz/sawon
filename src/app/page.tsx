import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/Portfolio';
import WorkExperience from '@/components/sections/WorkExperience';
import Award from '@/components/sections/Award';
import Testimonials from '@/components/sections/Testimonials';
import News from '@/components/sections/News';
import TrustedBrandsSection from '@/components/sections/TrustedBrandsSection';
import Cta from '@/components/sections/Cta';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  alternates: { canonical: SITE_CONFIG.url },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <WorkExperience />
      <TrustedBrandsSection />
      <Portfolio />
      <Award />
      <Testimonials />
      <News />
      <Cta />
    </>
  );
}
