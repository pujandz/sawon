'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
      const current = sections.find((s) => {
        const el = document.getElementById(s);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md border-b border-[var(--border-subtle)]' : 'bg-transparent'
      }`}
      style={isScrolled ? { backgroundColor: 'var(--header-bg)' } : {}}
      role="banner"
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-max section-padding py-0">
        <nav className="flex items-center justify-between h-16 lg:h-20" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Sawon Saha – Home">
            <motion.div
              className="w-9 h-9 bg-primary-500 rounded-full flex items-center justify-center text-black font-bold text-base"
              whileHover={{ scale: 1.1, rotate: 8 }}
              transition={{ duration: 0.2 }}
            >
              S
            </motion.div>
            <span className="font-bold text-lg font-heading text-white hidden sm:block">
              Sawon Saha
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <motion.button
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-primary-400' : 'text-gray-400 hover:text-white'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        aria-hidden="true"
                      />
                    )}
                  </motion.button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <motion.button
              onClick={() => handleNavClick('#contact')}
              className="hidden sm:inline-flex btn-primary py-2 px-5 text-sm"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34,197,94,0.3)' }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me
            </motion.button>
            <button
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <motion.span
                  className="block h-px bg-current"
                  animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className="block h-px bg-current"
                  animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className="block h-px bg-current"
                  animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden pb-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <ul className="bg-[var(--bg-surface)] rounded-xl border border-[var(--border)] p-2" role="list">
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.25 }}
                    >
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          isActive ? 'text-primary-400 bg-primary-500/10' : 'text-gray-400 hover:text-white hover:bg-[var(--bg-elevated)]'
                        }`}
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  );
                })}
                <motion.li
                  className="pt-2 border-t border-[var(--border)] mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 }}
                >
                  <button onClick={() => handleNavClick('#contact')} className="w-full btn-primary justify-center text-sm">
                    Hire Me
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
