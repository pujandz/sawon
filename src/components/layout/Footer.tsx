import Link from 'next/link';
import { SITE_CONFIG, NAV_LINKS, SERVICES } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#060606] border-t border-[#111]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 bg-primary-500 rounded-full flex items-center justify-center text-black font-bold text-base group-hover:bg-primary-400 transition-colors">
                S
              </div>
              <span className="text-white font-bold text-xl font-heading">Sawon Saha</span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              SEO & AEO Specialist in Bangladesh helping businesses grow organic traffic and
              dominate search results through data-driven strategies.
            </p>
            <address className="not-italic text-sm space-y-2">
              <p>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-600 hover:text-primary-400 transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p>
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s|-/g, '')}`} className="text-gray-600 hover:text-primary-400 transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </p>
              <p className="text-gray-600">{SITE_CONFIG.location}</p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold font-heading text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-primary-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold font-heading text-sm mb-4 uppercase tracking-wider">
              Get In Touch
            </h3>
            <ul className="space-y-2" role="list">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-sm text-gray-600 hover:text-primary-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold font-heading text-sm mb-4 uppercase tracking-wider">
              Follow Me
            </h3>
            <ul className="flex gap-3 mb-6" role="list">
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com/in/sawonsaha', icon: 'in' },
                { label: 'Twitter / X', href: 'https://twitter.com/sawonsaha9', icon: 'X' },
                { label: 'Medium', href: 'https://medium.com/@sawon.s907', icon: 'M' },
                { label: 'Quora', href: 'https://quora.com/profile/Sawon-Saha-1', icon: 'Q' },
              ].map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Sawon Saha on ${social.label}`}
                    className="w-9 h-9 rounded-lg border border-[#1a1a1a] hover:border-primary-500/50 hover:text-primary-400 flex items-center justify-center text-gray-600 text-xs font-bold transition-all"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-700 mb-3">Ready to grow your organic traffic?</p>
            <a href="#contact" className="btn-primary text-xs py-2 px-4">
              Start a Project
            </a>
          </div>
        </div>

        <div className="border-t border-[#111] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-700">
          <p>
            &copy; {year} <span itemProp="name">{SITE_CONFIG.name}</span>. All rights reserved.
          </p>
          <p>SEO & AEO Specialist &bull; Naogaon, Rajshahi, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
