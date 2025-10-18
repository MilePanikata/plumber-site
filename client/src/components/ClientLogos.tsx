import { Wrench, Droplets, Droplet, Hammer, Home, Shield, Zap, Waves } from "lucide-react";

export default function ClientLogos() {
  const logos = [
    { name: "KOHLER", icon: Droplets },
    { name: "AMERICAN STANDARD", icon: Shield },
    { name: "MOEN", icon: Droplet },
    { name: "DELTA FAUCET", icon: Waves },
    { name: "PFISTER", icon: Wrench },
    { name: "GROHE", icon: Droplets },
    { name: "RHEEM", icon: Zap },
    { name: "FERGUSON", icon: Home },
  ];

  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="flex gap-16 animate-marquee">
            {[...logos, ...logos].map((logo, index) => {
              const Icon = logo.icon;
              return (
                <div key={index} className="flex-shrink-0 flex items-center justify-center gap-3 h-12 min-w-[180px]">
                  <Icon className="w-6 h-6 text-muted-foreground/40" />
                  <span className="text-muted-foreground/50 font-bold text-base uppercase tracking-wider whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              );
            })}
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
