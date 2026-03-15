export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-[120px] px-[60px] bg-[rgba(252,79,47,0.03)] border-t border-[rgba(252,79,47,0.12)] border-b border-[rgba(252,79,47,0.12)] flex items-center justify-center text-center flex-col gap-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(252,79,47,0.06),transparent)]"></div>
      
      <blockquote className="phil-quote text-[clamp(24px,3.8vw,54px)] font-extrabold uppercase tracking-[-0.025em] leading-[1.15] max-w-[880px] relative">
        &ldquo;Clarity <em className="text-[#FC4F2F] not-italic">before</em> you commit. That&apos;s the <em className="text-[#FC4F2F] not-italic">only</em> promise that matters.&rdquo;
      </blockquote>
      
      <cite className="phil-attr text-[10px] font-semibold tracking-[0.32em] uppercase text-[rgba(240,243,245,0.3)] not-italic">
        Ashok Verma — Founder, Alchemetryx
      </cite>
    </section>
  );
}
