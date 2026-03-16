'use client';

import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.rev').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="relative py-[120px] px-[60px] bg-[#190805] min-h-[80vh] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_50%,rgba(252,79,47,0.06),transparent_60%)]"></div>

      <div className="contact-grid grid grid-cols-1 md:grid-cols-2 gap-[120px] w-full max-w-[1200px] mt-16 relative z-10">
        <div className="rev d1">
          <h2 className="contact-cta text-[clamp(44px,6.5vw,84px)] font-semibold text-[#F0F3F5] mb-9">
            Let&apos;s Build <span className="text-[#FC4F2F]">Clarity</span>
          </h2>
          <p className="contact-sub text-[16px] font-light leading-[1.78] text-[rgba(240,243,245,0.7)] max-w-[380px] mb-12">
            Ready to turn your digital noise into strategic intelligence? Let&apos;s talk.
          </p>

          <div className="contact-links flex flex-col gap-6">
            <a href="mailto:verma.86ashok@gmail.com" className="c-link flex items-center gap-4 no-underline group">
              <span className="display-font text-[9.5px] font-semibold tracking-[0.3em] text-[#FC4F2F] min-w-[84px]">Email</span>
              <span className="text-[14px] text-[rgba(240,243,245,0.6)] transition-colors group-hover:text-[#F0F3F5]">verma.86ashok@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/ashokverma" target="_blank" rel="noopener noreferrer" className="c-link flex items-center gap-4 no-underline group">
              <span className="display-font text-[9.5px] font-semibold tracking-[0.3em] text-[#FC4F2F] min-w-[84px]">LinkedIn</span>
              <span className="text-[14px] text-[rgba(240,243,245,0.6)] transition-colors group-hover:text-[#F0F3F5]">Ashok Verma</span>
            </a>
            <a href="https://alchemetryx.com" target="_blank" rel="noopener noreferrer" className="c-link flex items-center gap-4 no-underline group">
              <span className="display-font text-[9.5px] font-semibold tracking-[0.3em] text-[#FC4F2F] min-w-[84px]">Company</span>
              <span className="text-[14px] text-[rgba(240,243,245,0.6)] transition-colors group-hover:text-[#F0F3F5]">alchemetryx.com</span>
            </a>
          </div>
        </div>

        <form className="cf rev d2 flex flex-col gap-8">
          <div className="fg flex flex-col gap-3">
            <label className="display-font text-[10px] font-semibold tracking-[0.3em] text-[#FC4F2F]">Name</label>
            <input type="text" className="fi bg-transparent border-none border-b border-[rgba(240,243,245,0.15)] text-[#F0F3F5] font-sans text-[15px] py-4 outline-none transition-all w-full focus:border-[#FC4F2F]" placeholder="Your name" />
          </div>
          <div className="fg flex flex-col gap-3">
            <label className="display-font text-[10px] font-semibold tracking-[0.3em] text-[#FC4F2F]">Email</label>
            <input type="email" className="fi bg-transparent border-none border-b border-[rgba(240,243,245,0.15)] text-[#F0F3F5] font-sans text-[15px] py-4 outline-none transition-all w-full focus:border-[#FC4F2F]" placeholder="your@email.com" />
          </div>
          <div className="fg flex flex-col gap-3">
            <label className="display-font text-[10px] font-semibold tracking-[0.3em] text-[#FC4F2F]">Message</label>
            <textarea className="ft bg-transparent border-none border-b border-[rgba(240,243,245,0.15)] text-[#F0F3F5] font-sans text-[15px] py-4 outline-none transition-all w-full resize-none min-h-[100px] focus:border-[#FC4F2F]" placeholder="Tell me about your project..." rows={4}></textarea>
          </div>
          <button type="submit" className="btn-fire self-start mt-4">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
