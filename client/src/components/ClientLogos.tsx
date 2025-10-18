import kohlerLogo from "@assets/generated_images/Kohler_logo_clean_design_d6d11dbf.png";
import deltaLogo from "@assets/generated_images/Delta_logo_clean_design_67e1cd2f.png";
import groheLogo from "@assets/generated_images/Grohe_logo_clean_design_c1e5176e.png";
import rheemLogo from "@assets/generated_images/Rheem_logo_clean_design_07f81d3f.png";
import fergusonLogo from "@assets/generated_images/Ferguson_logo_clean_design_760de0bb.png";
import moenLogo from "@assets/image_1760819790922.png";
import americanStandardLogo from "@assets/Screenshot 2025-10-18 at 10.37.46 PM_1760819870582.png";
import pfisterLogo from "@assets/image_1760819823522.png";

export default function ClientLogos() {
  const logos = [
    { name: "Kohler", image: kohlerLogo },
    { name: "American Standard", image: americanStandardLogo },
    { name: "Moen", image: moenLogo },
    { name: "Delta Faucet", image: deltaLogo },
    { name: "Pfister", image: pfisterLogo },
    { name: "Grohe", image: groheLogo },
    { name: "Rheem", image: rheemLogo },
    { name: "Ferguson", image: fergusonLogo },
  ];

  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="flex gap-16 animate-marquee items-center">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center h-16 min-w-[180px]">
                <img 
                  src={logo.image} 
                  alt={logo.name} 
                  className="h-12 w-auto object-contain opacity-40 grayscale hover:opacity-60 hover:grayscale-0 transition-all duration-300"
                />
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
