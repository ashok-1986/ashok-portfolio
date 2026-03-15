export default function Contact() {
  return (
    <section id="contact" className="relative py-[120px] px-[60px] bg-[#190805] min-h-[80vh]">
      <div className="contact-grid grid grid-cols-1 md:grid-cols-2 gap-[120px] w-full max-w-[1200px] mt-16">
        <div>
          <h2 className="contact-cta text-[clamp(44px,6.5vw,84px)] font-black uppercase tracking-[-0.035em] leading-[0.92] text-[#F0F3F5] mb-9">
            Let&apos;s Build <span className="text-[#FC4F2F]">Clarity</span>
          </h2>
          <p className="contact-sub text-[16px] leading-[1.78] text-[rgba(240,243,245,0.55)] max-w-[380px] mb-12">
            Ready to turn your digital noise into strategic intelligence? Let&apos;s talk.
          </p>

          <div className="contact-links flex flex-col gap-4.5">
            <a href="mailto:verma.86ashok@gmail.com" className="c-link flex items-center gap-4 no-underline transition-opacity hover:opacity-70">
              <span className="c-link-label text-[9.5px] font-bold tracking-[0.3em] uppercase text-[#FC4F2F] min-w-[72px]">Email</span>
              <span className="c-link-val text-[14px] text-[rgba(240,243,245,0.55)]">verma.86ashok@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/ashokverma" target="_blank" rel="noopener noreferrer" className="c-link flex items-center gap-4 no-underline transition-opacity hover:opacity-70">
              <span className="c-link-label text-[9.5px] font-bold tracking-[0.3em] uppercase text-[#FC4F2F] min-w-[72px]">LinkedIn</span>
              <span className="c-link-val text-[14px] text-[rgba(240,243,245,0.55)]">Ashok Verma</span>
            </a>
            <a href="https://alchemetryx.com" target="_blank" rel="noopener noreferrer" className="c-link flex items-center gap-4 no-underline transition-opacity hover:opacity-70">
              <span className="c-link-label text-[9.5px] font-bold tracking-[0.3em] uppercase text-[#FC4F2F] min-w-[72px]">Company</span>
              <span className="c-link-val text-[14px] text-[rgba(240,243,245,0.55)]">alchemetryx.com</span>
            </a>
          </div>
        </div>

        <form className="cf flex flex-col gap-7">
          <div className="fg flex flex-col gap-2">
            <label className="fl text-[9.5px] font-bold tracking-[0.3em] uppercase text-[#FC4F2F]">Name</label>
            <input type="text" className="fi bg-transparent border-none border-b border-[rgba(240,243,245,0.1)] text-[#F0F3F5] font-sans text-[15px] py-3 outline-none transition-all w-full focus:border-b-[#FC4F2F]" placeholder="Your name" />
          </div>
          <div className="fg flex flex-col gap-2">
            <label className="fl text-[9.5px] font-bold tracking-[0.3em] uppercase text-[#FC4F2F]">Email</label>
            <input type="email" className="fi bg-transparent border-none border-b border-[rgba(240,243,245,0.1)] text-[#F0F3F5] font-sans text-[15px] py-3 outline-none transition-all w-full focus:border-b-[#FC4F2F]" placeholder="your@email.com" />
          </div>
          <div className="fg flex flex-col gap-2">
            <label className="fl text-[9.5px] font-bold tracking-[0.3em] uppercase text-[#FC4F2F]">Message</label>
            <textarea className="ft bg-transparent border-none border-b border-[rgba(240,243,245,0.1)] text-[#F0F3F5] font-sans text-[15px] py-3 outline-none transition-all w-full resize-none min-h-[90px] focus:border-b-[#FC4F2F]" placeholder="Tell me about your project..." rows={4}></textarea>
          </div>
          <button type="submit" className="fsub inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-[#190805] bg-[#FC4F2F] border-none px-11 py-4 transition-all self-start hover:opacity-85 hover:translate-y-[-2px]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
