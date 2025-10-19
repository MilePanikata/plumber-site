export default function ClientLogos() {
  const logos = [
    { name: "KOHLER", color: "text-[#1e3a5f]" },
    { name: "AMERICAN STANDARD", color: "text-[#2563eb]", isScript: true },
    { name: "MOEN", color: "text-[#475569]" },
    { name: "DELTA", color: "text-[#1e293b]" },
    { name: "PFISTER", color: "text-[#dc2626]" },
    { name: "GROHE", color: "text-[#334155]" },
    { name: "RHEEM", color: "text-[#dc2626]" },
    { name: "FERGUSON", color: "text-[#1e40af]" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-muted/50 to-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="flex gap-20 animate-marquee items-center">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[180px]">
                <span 
                  className={`text-2xl font-bold tracking-wide whitespace-nowrap ${logo.color} ${logo.isScript ? 'font-[serif] italic' : ''}`}
                >
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
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          width: fit-content;
        }
      `}</style>
    </section>
  );
}
