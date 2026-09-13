import Link from 'next/link';
import { SITE_CONFIG, NAV_LINKS, SERVICES } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-950 text-gray-300"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="text-white font-bold text-xl font-heading">Sawon Saha</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              SEO Specialist in Bangladesh helping businesses grow organic traffic and revenue
              through data-driven strategies.
            </p>
            <address className="not-italic text-sm space-y-2">
              <p>
                <span className="text-gray-500">Email: </span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p>
                <span className="text-gray-500">Phone: </span>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </p>
              <p>
                <span className="text-gray-500">Location: </span>
                {SITE_CONFIG.location}
              </p>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold font-heading mb-4">Navigation</h3>
            <ul className="space-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold font-heading mb-4">SEO Services</h3>
            <ul className="space-y-2" role="list">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm hover:text-primary-400 transition-colors"
                    aria-label={`Learn about ${s.title} service`}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="text-white font-semibold font-heading mb-4">Connect</h3>
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
                    className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-primary-600 flex items-center justify-center text-sm font-bold transition-colors"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mb-3">Ready to grow your organic traffic?</p>
            <a href="#contact" className="btn-primary text-sm py-2">
              Start a Project
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>
            &copy; {year}{' '}
            <span itemProp="name">{SITE_CONFIG.name}</span>. All rights reserved.
          </p>
          <p>
            SEO Specialist &bull; Dhaka, Bangladesh &bull;{' '}
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
