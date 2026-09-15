import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import WorkExperience from '@/components/sections/WorkExperience';
import Award from '@/components/sections/Award';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import VideoCta from '@/components/sections/VideoCta';
import News from '@/components/sections/News';
import Brand from '@/components/sections/Brand';
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
      <Services />
      <WorkExperience />
      <Award />
      <Pricing />
      <Testimonials />
      <VideoCta />
      <News />
      <Brand />
      <Cta />
    </>
  );
}
