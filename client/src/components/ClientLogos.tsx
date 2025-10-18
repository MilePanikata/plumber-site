import kohlerLogo from "@assets/stock_images/kohler_plumbing_logo_04512f98.jpg";
import deltaLogo from "@assets/stock_images/delta_faucet_plumbin_04eed6e4.jpg";
import groheLogo from "@assets/stock_images/grohe_plumbing_logo__5b7dbcd7.jpg";
import rheemLogo from "@assets/stock_images/rheem_water_heater_l_7b203471.jpg";
import fergusonLogo from "@assets/stock_images/ferguson_plumbing_su_48912dd1.jpg";
import moenLogo from "@assets/stock_images/moen_plumbing_faucet_ad574ab2.jpg";
import americanStandardLogo from "@assets/stock_images/american_standard_pl_142fe225.jpg";
import pfisterLogo from "@assets/stock_images/pfister_plumbing_fau_3807ea2a.jpg";

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
