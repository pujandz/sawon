'use client';

import { useState } from 'react';

const D = '/assets/img/decorations';

export default function ContactUsPage() {
  const [status, setStatus] = useState<null | 'sending' | 'sent' | 'error'>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <main>
      {/* Page title — clears the absolute-positioned header and gives
          consistent top spacing with other inner pages */}
      <section className="project-inner-page-wrapper section-padding fix">
        <div className="container">
          <h1>Contact</h1>
        </div>
      </section>

      <section className="contact-inner-page-wrapper" style={{ marginTop: 0 }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5">
              <div className="contact-image">
                <img src={`${D}/contact.png`} alt="Sawon Saha" />
                <ul>
                  <li>3+ Years <b>SEO Experience</b></li>
                  <li>80+ Projects <b>Delivered</b></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-7 col-lg-7">
              <form onSubmit={handleSubmit}>
                <div className="form-clt">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                    <div className="col-md-6">
                      <input type="tel" name="phone" placeholder="Phone Number" />
                    </div>
                    <div className="col-12">
                      <textarea name="message" placeholder="Tell me about your SEO goals..." />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="theme-btn" disabled={status === 'sending'}>
                        {status === 'sending' ? 'sending…' : 'send message'}
                        <i aria-hidden="true" className="fa-solid fa-arrow-up-right"></i>
                      </button>
                    </div>
                    {status === 'sent' && (
                      <div className="col-12">
                        <p style={{ color: 'var(--theme)' }}>Message sent — I&apos;ll reply within 24 hours!</p>
                      </div>
                    )}
                    {status === 'error' && (
                      <div className="col-12">
                        <p style={{ color: '#ff4444' }}>Something went wrong. Email me at sawon.s907@gmail.com</p>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
