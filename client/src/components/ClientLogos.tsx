import kohlerLogo from "@assets/generated_images/Kohler_logo_clean_design_d6d11dbf.png";
import deltaLogo from "@assets/generated_images/Delta_logo_clean_design_67e1cd2f.png";
import groheLogo from "@assets/generated_images/Grohe_logo_clean_design_c1e5176e.png";
import rheemLogo from "@assets/generated_images/Rheem_logo_clean_design_07f81d3f.png";
import fergusonLogo from "@assets/generated_images/Ferguson_logo_clean_design_760de0bb.png";
import moenLogo from "@assets/generated_images/Moen_professional_logo_07605519.png";
import americanStandardLogo from "@assets/generated_images/American_Standard_logo_32f3eef7.png";
import pfisterLogo from "@assets/generated_images/Pfister_professional_logo_cbbe92e8.png";

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
    <section className="py-16 bg-gradient-to-b from-muted/50 to-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="flex gap-20 animate-marquee items-center">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center h-20 min-w-[200px]">
                <img 
                  src={logo.image} 
                  alt={logo.name} 
                  className="h-16 w-auto object-contain"
                />
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
