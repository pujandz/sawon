'use client';

import { useState, type FormEvent } from 'react';
import { SITE_CONFIG } from '@/lib/constants';

const SERVICES_LIST = ['Technical SEO', 'On-Page SEO', 'Link Building', 'Local SEO', 'Keyword Research', 'SEO Audit', 'AEO Optimization', 'Full SEO Campaign'];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('sent');
  };

  return (
    <section
      id="contact"
      className="section-padding bg-[#0a0a0a]"
      aria-labelledby="contact-heading"
    >
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Contact</span>
          <h2 id="contact-heading" className="section-title mb-4">
            Let&apos;s Work{' '}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subtitle">
            Want to start a project or just chat? Feel free to reach out. I&apos;m always open to
            discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <div className="card">
            <h3 className="text-lg font-bold text-white font-heading mb-6">Send a Message</h3>

            {status === 'sent' ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 bg-primary-500/10 border border-primary-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-white font-bold font-heading mb-2">Message Sent!</h4>
                <p className="text-gray-500 text-sm">I&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="mt-4 text-primary-400 text-sm hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                      Name <span className="text-primary-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name" type="text" required autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#222] rounded-xl text-sm text-white placeholder-gray-700 focus:outline-none focus:border-primary-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                      Email <span className="text-primary-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email" type="email" required autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#222] rounded-xl text-sm text-white placeholder-gray-700 focus:outline-none focus:border-primary-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#222] rounded-xl text-sm text-white focus:outline-none focus:border-primary-500/50 transition-colors"
                  >
                    <option value="" className="bg-[#111]">Select a service…</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s} className="bg-[#111]">{s}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                    Message <span className="text-primary-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message" required rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, goals, and current SEO situation…"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#222] rounded-xl text-sm text-white placeholder-gray-700 focus:outline-none focus:border-primary-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-primary justify-center py-3.5 text-sm disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white font-heading mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {[
                  { icon: '📧', label: 'Email', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                  { icon: '📞', label: 'Phone / WhatsApp', value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone.replace(/\s|-/g, '')}` },
                  { icon: '📍', label: 'Location', value: SITE_CONFIG.location, href: '#' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#111] border border-[#222] flex items-center justify-center flex-shrink-0">
                      <span className="text-base" aria-hidden="true">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-0.5">{item.label}</p>
                      <a href={item.href} className="text-sm text-gray-300 hover:text-primary-400 transition-colors">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {[
                  { label: 'LinkedIn', href: 'https://linkedin.com/in/sawonsaha', icon: 'in' },
                  { label: 'Twitter / X', href: 'https://twitter.com/sawonsaha9', icon: 'X' },
                  { label: 'Medium', href: 'https://medium.com/@sawon.s907', icon: 'M' },
                  { label: 'Quora', href: 'https://quora.com/profile/Sawon-Saha-1', icon: 'Q' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Sawon Saha on ${s.label}`}
                    className="w-9 h-9 rounded-lg border border-[#222] bg-[#111] hover:border-primary-500/50 hover:text-primary-400 flex items-center justify-center text-gray-600 text-xs font-bold transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="card border-primary-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-white font-semibold text-sm">Ready to work together?</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                I&apos;m currently accepting new SEO projects. Typical response time is under 24 hours.
                Let&apos;s discuss your project and build something great together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
