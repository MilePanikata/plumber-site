import kohlerLogo from "@assets/generated_images/Kohler_transparent_logo_969fdcd9.png";
import deltaLogo from "@assets/generated_images/Delta_transparent_logo_7953cfaf.png";
import groheLogo from "@assets/generated_images/Grohe_transparent_logo_7ffa27ae.png";
import rheemLogo from "@assets/generated_images/Rheem_transparent_logo_b261ab53.png";
import fergusonLogo from "@assets/generated_images/Ferguson_transparent_logo_833072e3.png";
import moenLogo from "@assets/generated_images/Moen_transparent_logo_935046c6.png";
import americanStandardLogo from "@assets/generated_images/American_Standard_transparent_logo_21dd5a42.png";
import pfisterLogo from "@assets/generated_images/Pfister_transparent_logo_a6c25e61.png";

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
