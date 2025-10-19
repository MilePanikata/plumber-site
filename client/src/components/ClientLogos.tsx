import kohlerLogo from "@assets/stock_images/kohler_plumbing_bran_c6e85dcd.jpg";
import americanStandardLogo from "@assets/stock_images/american_standard_hv_26f312f6.jpg";
import moenLogo from "@assets/stock_images/moen_faucet_brand_lo_d7b98f62.jpg";
import deltaLogo from "@assets/stock_images/delta_faucet_company_b494d911.jpg";
import pfisterLogo from "@assets/stock_images/pfister_faucets_bran_0554e817.jpg";
import groheLogo from "@assets/stock_images/grohe_plumbing_fixtu_4b06d664.jpg";
import rheemLogo from "@assets/stock_images/rheem_water_heater_b_09a98ee2.jpg";
import fergusonLogo from "@assets/stock_images/ferguson_enterprises_5e3a2605.jpg";

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
              <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[180px]">
                <img 
                  src={logo.image} 
                  alt={logo.name} 
                  className="h-12 w-auto object-contain logo-blend"
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
        .logo-blend {
          mix-blend-mode: multiply;
          filter: contrast(1.2) brightness(0.95);
        }
      `}</style>
    </section>
  );
}
