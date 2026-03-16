'use client';

export default function Contact() {
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

        <form className="cf rev">
          <div className="fg">
            <label className="fl">Name</label>
            <input type="text" className="fi" placeholder="Your name" />
          </div>
          <div className="fg">
            <label className="fl">Email</label>
            <input type="email" className="fi" placeholder="your@email.com" />
          </div>
          <div className="fg">
            <label className="fl">Message</label>
            <textarea
              className="ft"
              placeholder="Tell me about your project..."
              rows={4}
            ></textarea>
          </div>
          <button type="submit" className="fsub">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}
