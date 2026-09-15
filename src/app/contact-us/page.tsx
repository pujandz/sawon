'use client';

import { useState } from 'react';

const LIVE = 'https://revox.baseecom.com/wp-content/uploads/2026/01';
const BUDGETS = ['$299/mo', '$599/mo', '$999/mo', 'Custom'];

export default function ContactUsPage() {
  const [budget, setBudget] = useState(BUDGETS[0]);
  const [status, setStatus] = useState<null | 'sending' | 'sent' | 'error'>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    (payload as Record<string, string>).budget = budget;

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
      <section className="contact-section">
        <div className="container d-flex flex-wrap">
          <div className="contact-thumb">
            <img src={`${LIVE}/contact.png`} alt="Contact" width={480} height={520} />
            <ul>
              <li>3+ years of <strong>SEO experience</strong></li>
              <li>80+ successfully <strong>projects delivered</strong></li>
            </ul>
          </div>

          <div className="contact-form-wrap">
            <h1>Contact for SEO Work</h1>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row d-flex gap-3">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-row d-flex gap-3">
                <input type="text" name="subject" placeholder="Subject" />
                <input type="tel" name="phone" placeholder="Phone" />
              </div>

              <div className="project-budget">
                <span className="label">monthly SEO budget</span>
                <div className="budget-options d-flex gap-2">
                  {BUDGETS.map((b) => (
                    <label key={b} className="budget-option">
                      <input
                        type="radio"
                        name="budget"
                        value={b}
                        checked={budget === b}
                        onChange={() => setBudget(b)}
                      />
                      {b}
                    </label>
                  ))}
                </div>
              </div>

              <textarea name="message" placeholder="Tell me about your SEO goals..." rows={5} />

              <button type="submit" className="theme-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'sending…' : 'send message'}
              </button>

              {status === 'sent' && <p className="form-note success">Message sent — I&apos;ll get back to you within 24 hours!</p>}
              {status === 'error' && <p className="form-note error">Something went wrong. Please email me directly at sawon.s907@gmail.com</p>}
            </form>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.937219038!2d88.9523!3d24.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzM3LjEiTiA4OMKwNTcnMDguMyJF!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Naogaon, Bangladesh"
        />
      </section>
    </main>
  );
}
