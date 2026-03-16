'use client';

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-[240px] px-[30px] md:px-[60px] bg-[#190805] flex items-center justify-center text-center flex-col overflow-hidden">
      {/* Grid background effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(240,243,245,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(240,243,245,0.2) 1px, transparent 1px)', backgroundSize: '80px 80px' }}>
      </div>

      <div className="relative z-10 max-w-[900px]">
        <h2 className="text-[clamp(28px,4vw,52px)] text-[#F0F3F5] leading-[1.2] font-semibold uppercase tracking-tight mb-10">
          "BUSINESSES WERE SOLD PRODUCTS <br className="hidden md:block" />
          WHEN THEY NEEDED SYSTEMS. <br className="hidden md:block" />
          THAT GAP IS WHERE <br className="hidden md:block" />
          ALCHEMETRYX LIVES."
        </h2>

        <div className="flex items-center justify-center gap-4 opacity-50">
          <cite className="text-[10px] md:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#F0F3F5] not-italic">
            Ashok Verma · Founder, Alchemetryx Consulting
          </cite>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#FC4F2F] shadow-[0_0_12px_#FC4F2F]"></div>
      </div>
    </section>
  );
}
