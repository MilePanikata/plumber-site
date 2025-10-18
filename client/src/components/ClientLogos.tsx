export default function ClientLogos() {
  const logos = [
    { name: "KOHLER", style: "font-[serif] font-bold tracking-tight" },
    { name: "AMERICAN STANDARD", style: "font-bold tracking-wide" },
    { name: "MOEN", style: "font-bold tracking-wider" },
    { name: "DELTA", style: "font-bold tracking-wide" },
    { name: "PFISTER", style: "font-[serif] font-semibold tracking-normal" },
    { name: "GROHE", style: "font-bold tracking-widest" },
    { name: "RHEEM", style: "font-bold tracking-wide" },
    { name: "FERGUSON", style: "font-bold tracking-wider" },
  ];

  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="flex gap-16 animate-marquee items-center">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center h-16 min-w-[160px]">
                <span className={`text-muted-foreground/40 text-xl uppercase ${logo.style} whitespace-nowrap`}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: fit-content;
        }
      `}</style>
    </section>
  );
}
