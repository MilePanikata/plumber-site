export default function ClientLogos() {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/50 to-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="flex gap-20 animate-marquee items-center">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-20 items-center">
                {/* Kohler */}
                <div className="flex-shrink-0 flex items-center justify-center min-w-[160px]">
                  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#1e3a5f" letterSpacing="2">KOHLER</text>
                  </svg>
                </div>

                {/* American Standard */}
                <div className="flex-shrink-0 flex items-center justify-center min-w-[200px]">
                  <svg width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="25" fontFamily="Georgia, serif" fontSize="22" fontStyle="italic" fontWeight="600" fill="#2563eb">American Standard</text>
                    <text x="0" y="42" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b" letterSpacing="1.5">HEATING & AIR CONDITIONING</text>
                  </svg>
                </div>

                {/* Moen */}
                <div className="flex-shrink-0 flex items-center justify-center min-w-[140px]">
                  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="#5f7a8f" letterSpacing="1">MOEN</text>
                    <circle cx="130" cy="10" r="6" stroke="#5f7a8f" strokeWidth="1.5" fill="none"/>
                    <text x="126" y="14" fontFamily="Arial, sans-serif" fontSize="10" fill="#5f7a8f">®</text>
                  </svg>
                </div>

                {/* Delta */}
                <div className="flex-shrink-0 flex items-center justify-center min-w-[140px]">
                  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 20 L14 8 L20 20 Z" fill="#1e293b"/>
                    <text x="28" y="30" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#1e293b" letterSpacing="1">DELTA</text>
                  </svg>
                </div>

                {/* Pfister */}
                <div className="flex-shrink-0 flex items-center justify-center min-w-[140px]">
                  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="8" width="8" height="24" fill="#dc2626"/>
                    <text x="16" y="30" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="600" fill="#1f2937" letterSpacing="0.5">Pfister</text>
                  </svg>
                </div>

                {/* Grohe */}
                <div className="flex-shrink-0 flex items-center justify-center min-w-[140px]">
                  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#334155" letterSpacing="3">GROHE</text>
                  </svg>
                </div>

                {/* Rheem */}
                <div className="flex-shrink-0 flex items-center justify-center min-w-[140px]">
                  <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#dc2626" letterSpacing="2">RHEEM</text>
                  </svg>
                </div>

                {/* Ferguson */}
                <div className="flex-shrink-0 flex items-center justify-center min-w-[160px]">
                  <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold" fill="#1e40af" letterSpacing="1.5">FERGUSON</text>
                  </svg>
                </div>
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
