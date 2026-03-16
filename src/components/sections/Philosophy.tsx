'use client';

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-[200px] px-[30px] md:px-[60px] bg-[#190805] flex items-center justify-center text-center flex-col gap-12 overflow-hidden">
      {/* Grid background effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(240,243,245,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(240,243,245,0.2) 1px, transparent 1px)', backgroundSize: '80px 80px' }}>
      </div>

      <div className="relative z-10 max-w-[1000px]">
        <h2 className="text-[clamp(32px,5.5vw,72px)] text-[#F0F3F5] leading-[1.1] font-semibold uppercase tracking-tight mb-8">
          "Businesses were sold <br />
          <span className="text-[#FC4F2F]">products</span> <br />
          when they needed <span className="text-[#FC4F2F]">systems</span>. <br />
          That gap is where <br />
          Alchemetryx lives."
        </h2>

        <div className="flex items-center justify-center gap-4 mt-12 opacity-40">
          <div className="w-8 h-[1px] bg-[#F0F3F5]"></div>
          <cite className="text-[10px] md:text-[12px] font-semibold tracking-[0.3em] uppercase text-[#F0F3F5] not-italic">
            Ashok Verma · Founder, Alchemetryx Consulting
          </cite>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#FC4F2F] shadow-[0_0_10px_#FC4F2F]"></div>
      </div>
    </section>
  );
}
