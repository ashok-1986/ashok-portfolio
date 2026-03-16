import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
      setFormData({ name: '', email: '', message: '' });
    } catch (err: unknown) {
      console.error('Form Error:', err);
      setStatus('error');
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setErrorMessage(message);
    }
  };

  return (
    <section id="contact">
      <div className="contact-grid">
        <div className="contact-info">
          <h2 className="contact-cta rev">
            Let&apos;s Build <span>Clarity</span>
          </h2>
          <p className="contact-sub rev">
            Ready to turn your digital noise into strategic intelligence? Let&apos;s talk.
          </p>

          <div className="contact-links rev">
            <a href="mailto:verma.86ashok@gmail.com" className="c-link">
              <span className="c-link-label">Email</span>
              <span className="c-link-val">verma.86ashok@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/ashokverma"
              target="_blank"
              rel="noopener noreferrer"
              className="c-link"
            >
              <span className="c-link-label">LinkedIn</span>
              <span className="c-link-val">Ashok Verma</span>
            </a>
            <a
              href="https://alchemetryx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="c-link"
            >
              <span className="c-link-label">Company</span>
              <span className="c-link-val">alchemetryx.com</span>
            </a>
          </div>
        </div>

        <div className="contact-form-container rev">
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
                <label className="fl">Name</label>
                <input
                  type="text"
                  className="fi"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="fg">
                <label className="fl">Email</label>
                <input
                  type="email"
                  className="fi"
                  placeholder="your@email.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="fg">
                <label className="fl">Message</label>
                <textarea
                  className="ft"
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
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
