import { WHATSAPP_URL } from '@/lib/constants';

export default function Contact() {
  return (
    <section id="contact">
      <div className="label rev">Start Here</div>

      <div className="contact-grid">
        <div className="contact-info">
          <h2 className="contact-cta rev">
            Clarity Before
            <br />
            You <span>Commit</span>
          </h2>

          <p className="contact-sub rev d1">
            Every engagement starts with a conversation. Skip the forms —
            message me directly on WhatsApp and get a straight answer
            within 24 hours.
          </p>

          <div className="contact-links rev d2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="c-link"
            >
              <span className="c-link-label">WhatsApp</span>
              <span className="c-link-val">Chat with me directly</span>
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
          <div className="wa-card">
            <div className="wa-icon" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="30" height="30" fill="#25D366">
                <path d="M16.004 3C9.383 3 4 8.383 4 15.004c0 2.117.555 4.184 1.613 6.004L4 29l8.133-1.578a11.98 11.98 0 0 0 3.87.652h.003C22.625 28.074 28 22.691 28 16.07 28 8.383 22.625 3 16.004 3zm0 2.203c5.99 0 10.793 4.803 10.793 10.793 0 5.99-4.803 10.793-10.793 10.793-1.863 0-3.682-.484-5.297-1.402l-.383-.227-4.883.947.941-4.758-.25-.395a10.77 10.77 0 0 1-1.57-5.683c0-5.99 4.803-10.793 10.793-10.793zm-2.383 5.395c-.27-.012-.539.008-.805.039-.269.03-.604.156-.895.633-.29.477-1.117 1.091-1.117 2.68s1.144 3.11 1.305 3.324c.16.215 2.254 3.441 5.461 4.824.767.332 1.364.531 1.832.68.77.246 1.47.211 2.024.129.617-.092 1.9-.777 2.168-1.527.269-.75.269-1.391.188-1.525-.08-.133-.293-.215-.614-.376-.32-.16-1.9-.937-2.194-1.044-.293-.107-.508-.16-.72.16-.215.32-.83 1.043-1.018 1.258-.188.215-.375.242-.695.08-.32-.16-1.352-.498-2.574-1.588-.952-.848-1.594-1.895-1.782-2.215-.188-.32-.02-.493.14-.652.145-.145.321-.377.482-.566.16-.188.215-.32.32-.536.105-.215.052-.402-.027-.565-.078-.16-.72-1.735-.986-2.375-.258-.623-.52-.54-.72-.55z" />
              </svg>
            </div>
            <h3 className="wa-title">Message me on WhatsApp</h3>
            <p className="wa-desc">
              The fastest way to reach me. Tap the button below and tell me
              what you&apos;re trying to solve — I&apos;ll reply with honest, specific
              guidance.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="fsub wa-cta"
            >
              Chat on WhatsApp →
            </a>
            <p className="wa-note">No forms · No waiting · Direct conversation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
