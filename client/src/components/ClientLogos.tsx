export default function ClientLogos() {
  const logos = [
    "homemovers",
    "woodware", 
    "plumbing house",
    "plumbing expert",
    "mechanics",
    "homeexpert",
    "client logo",
    "made in webflow"
  ];

  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center h-12 w-32">
                <span className="text-muted-foreground/40 font-semibold text-sm uppercase tracking-wider">{logo}</span>
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
          animation: marquee 30s linear infinite;
          width: fit-content;
        }
      `}</style>
    </section>
  );
}
