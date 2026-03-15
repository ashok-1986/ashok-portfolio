export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-[44px] px-[60px] border-t border-[rgba(240,243,245,0.055)] flex justify-between items-center">
      <div className="fc text-[11px] tracking-[0.12em] text-[rgba(240,243,245,0.18)]">
        © {currentYear} Ashok Verma. All rights reserved.
      </div>
      <div className="fl-row flex gap-7">
        <a href="https://linkedin.com/in/ashokverma" target="_blank" rel="noopener noreferrer" className="text-[11px] tracking-[0.12em] text-[rgba(240,243,245,0.18)] no-underline transition-colors hover:text-[#FC4F2F]">
          LinkedIn
        </a>
        <a href="https://alchemetryx.com" target="_blank" rel="noopener noreferrer" className="text-[11px] tracking-[0.12em] text-[rgba(240,243,245,0.18)] no-underline transition-colors hover:text-[#FC4F2F]">
          Alchemetryx
        </a>
      </div>
    </footer>
  );
}
