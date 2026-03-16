'use client';

import { useState } from 'react';
import CalBooking from '@/components/ui/CalBooking';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', business: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', business: '', email: '', message: '' });
    } catch (err: unknown) {
      console.error('Form Error:', err);
      setStatus('error');
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setErrorMessage(message);
    }
  };

  return (
    <section id="contact">
      <div className="label rev">Start Here</div>
      <div className="contact-grid">
        <div className="contact-info">
          <h2 className="contact-cta rev">
            Clarity<br />Before<br />You <span>Commit</span>
          </h2>
          <p className="contact-sub rev d1">
            Every engagement begins with understanding your business as it actually is. No assumptions. No templates. Just clear thinking applied specifically to you.
          </p>

          <div className="contact-booking rev d2">
            <CalBooking buttonText="Schedule a 1:1 Clarity Session →" />
            <p className="booking-note">Skip the form and book directly into my calendar.</p>
          </div>

          <div className="contact-links rev d2">
            <a href="mailto:verma.86ashok@gmail.com" className="c-link">
              <span className="c-link-label">Email</span>
              <span className="c-link-val">verma.86ashok@gmail.com</span>
            </a>
            <a
              href="https://alchemetryx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="c-link"
            >
              <span className="c-link-label">Website</span>
              <span className="c-link-val">alchemetryx.com</span>
            </a>
            <a
              href="https://linkedin.com/in/averma1986"
              target="_blank"
              rel="noopener noreferrer"
              className="c-link"
            >
              <span className="c-link-label">LinkedIn</span>
              <span className="c-link-val">averma1986</span>
            </a>
            <div className="c-link">
              <span className="c-link-label">Based</span>
              <span className="c-link-val">Mumbai · Serving UK SMEs</span>
            </div>
          </div>
        </div>

        <div className="contact-form-container rev d1">
          {status === 'success' ? (
            <div className="form-success">
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
              <button
                onClick={() => setStatus('idle')}
                className="fsub"
                style={{ marginTop: '20px' }}
              >
                Send Another →
              </button>
            </div>
          ) : (
            <form className="cf" onSubmit={handleSubmit}>
              <div className="fg">
                <label className="fl" htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  className="fi"
                  placeholder="What should I call you?"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="fg">
                <label className="fl" htmlFor="contact-business">Your Business</label>
                <input
                  id="contact-business"
                  type="text"
                  className="fi"
                  placeholder="Company or website"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                />
              </div>
              <div className="fg">
                <label className="fl" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  className="fi"
                  placeholder="Where can I reach you?"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="fg">
                <label className="fl" htmlFor="contact-message">What&apos;s the problem?</label>
                <textarea
                  id="contact-message"
                  className="ft"
                  placeholder="Describe what isn't working. No jargon needed."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              {status === 'error' && (
                <p className="form-error" style={{ color: '#FC4F2F', marginBottom: '15px' }}>
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                className="fsub"
                id="fsub"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
