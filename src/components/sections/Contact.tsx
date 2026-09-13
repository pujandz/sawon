'use client';

import { useState, type FormEvent } from 'react';
import { SITE_CONFIG } from '@/lib/constants';

const SERVICES_LIST = [
  'Technical SEO',
  'On-Page SEO',
  'Link Building',
  'Local SEO',
  'Keyword Research',
  'SEO Audit',
  'Full SEO Campaign',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    service: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Replace with your form submission endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('sent');
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-primary-950 via-gray-950 to-gray-900"
      aria-labelledby="contact-heading"
    >
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary-400 bg-primary-950 border border-primary-800 px-3 py-1 rounded-full mb-4">
              Get In Touch
            </span>
            <h2 id="contact-heading" className="section-title text-white mb-4">
              Let&apos;s Grow Your{' '}
              <span className="gradient-text">Organic Traffic</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Ready to dominate Google rankings? Tell me about your project and I&apos;ll get
              back to you within 24 hours with a tailored plan.
            </p>

            <div className="space-y-6" itemScope itemType="https://schema.org/Person">
              {[
                {
                  icon: '📧',
                  label: 'Email',
                  value: SITE_CONFIG.email,
                  href: `mailto:${SITE_CONFIG.email}`,
                  itemprop: 'email',
                },
                {
                  icon: '📞',
                  label: 'Phone / WhatsApp',
                  value: SITE_CONFIG.phone,
                  href: `tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`,
                  itemprop: 'telephone',
                },
                {
                  icon: '📍',
                  label: 'Location',
                  value: SITE_CONFIG.location,
                  href: '#',
                  itemprop: 'addressLocality',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      className="text-white font-medium hover:text-primary-400 transition-colors"
                      itemProp={item.itemprop}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-white/5 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-white font-medium text-sm">Currently Available</span>
              </div>
              <p className="text-gray-400 text-sm">
                I&apos;m accepting new SEO projects. Typical response time: &lt;24 hours.
              </p>
            </div>
          </div>

          {/* Right – Form */}
          <div className="bg-white rounded-3xl p-8">
            {status === 'sent' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-heading mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-primary-600 text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact Sawon Saha">
                <h3 className="text-xl font-bold text-gray-900 font-heading mb-6">
                  Start Your SEO Journey
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Website URL
                  </label>
                  <input
                    id="website"
                    type="url"
                    autoComplete="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select a service</option>
                      {SERVICES_LIST.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Monthly Budget
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select budget</option>
                      <option value="$300-$500">$300 – $500</option>
                      <option value="$500-$1000">$500 – $1,000</option>
                      <option value="$1000-$2500">$1,000 – $2,500</option>
                      <option value="$2500+">$2,500+</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tell Me About Your Goals <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"
                    placeholder="Tell me about your business, current SEO situation, and what results you're looking to achieve..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-primary justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="mt-3 text-xs text-gray-400 text-center">
                  No spam, ever. I&apos;ll only use your info to respond to your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
