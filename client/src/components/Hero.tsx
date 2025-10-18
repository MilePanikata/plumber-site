import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Plumber_consulting_with_customer_kitchen_9a3e5f69.png";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] bg-navy-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh] py-16">
          <div>
            <div className="inline-block bg-muted/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-white/90">TRUSTED PLUMBERS</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[Poppins] leading-tight">
              We're a different kind of handyman service.
            </h1>
            
            <p className="text-lg text-white/80 mb-8 max-w-lg">
              Expert plumbing, heating, and drain services with decades of experience.
            </p>
            
            <Button className="bg-primary hover-elevate active-elevate-2 text-white font-medium text-base px-8 rounded-full h-12 gap-2" data-testid="button-our-services">
              OUR SERVICES
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-full">
              <img src={heroImage} alt="Professional plumber at work" className="w-full h-64 object-cover rounded-lg" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 flex flex-col items-center justify-center text-center">
                <div className="flex gap-1 mb-3 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 fill-orange" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-semibold text-white mb-1">Based on 645 reviews</p>
                <p className="text-xs text-white/70">Trustpilot</p>
              </div>
              
              <div className="bg-muted/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-orange" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-white">Committed to high quality services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
