import { Star } from "lucide-react";

export default function MarqueeBanner() {
  const items = Array(4).fill("Changing rooms");

  return (
    <section className="py-8 bg-orange overflow-hidden">
      <div className="relative">
        <div className="flex gap-8 animate-marquee-fast">
          {[...items, ...items, ...items].map((text, index) => (
            <div key={index} className="flex items-center gap-4 flex-shrink-0">
              <h3 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap font-[Poppins]">{text}</h3>
              <Star className="w-6 h-6 text-white fill-white flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 20s linear infinite;
          width: fit-content;
        }
      `}</style>
    </section>
  );
}
