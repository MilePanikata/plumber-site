import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkProcess from "@/components/WorkProcess";
import TeamGrid from "@/components/TeamGrid";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";
import MarqueeBanner from "@/components/MarqueeBanner";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@assets/generated_images/Handyman_professional_portrait_smiling_43d6764e.png";
import aboutImg from "@assets/generated_images/Plumber_in_blue_uniform_portrait_4555c196.png";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="About Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-[Poppins]">About Us</h1>
        </div>
      </section>

      {/* Our Experience Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Image with badge */}
            <div className="relative">
              <div className="relative">
                <img src={aboutImg} alt="Professional handyman" className="w-full aspect-[3/4] object-cover rounded-lg" />
                {/* Badge positioned at top-left */}
                <div className="absolute -top-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg z-10">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-1 font-[Poppins]">25+</div>
                    <p className="text-xs font-medium whitespace-nowrap">Years as a Trusted</p>
                    <p className="text-xs font-medium whitespace-nowrap">Provider</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <div className="inline-block bg-muted px-4 py-2 rounded-full mb-4">
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider">Our Experience</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-[Poppins] leading-tight">
                We take care of your every appliances
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We handle repairs & maintenance for all your appliances with expert efficiency Trust us ensure your appliances function perfectly & reliably Plumbing service encompass a wide range of tasks related to the installation.
              </p>

              {/* Two-column checkboxes */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">Highly-trained</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">Highly-trained</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">No extra charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">No extra charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">Same-day services</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">Same-day services</span>
                </div>
              </div>

              <Button className="bg-orange hover-elevate active-elevate-2 text-white font-medium rounded-full gap-2" data-testid="button-know-more">
                Know More
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <MarqueeBanner />
      
      <WorkProcess />

      {/* CTA Section */}
      <section className="py-16 bg-navy-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark opacity-95"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold font-[Poppins]">
                Looking for a reliable plumbing service?
              </h2>
            </div>
            <div className="flex items-center gap-6 bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                <svg className="w-8 h-8 text-orange" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <div>
                <p className="text-base font-bold">Trusted by more than 2,000</p>
                <p className="text-base font-bold">satisfied customers</p>
              </div>
            </div>
            <Link href="/contact">
              <Button className="bg-white text-navy hover-elevate active-elevate-2 font-medium rounded-full gap-2" data-testid="button-appointment">
                Appointment
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TeamGrid />
      
      <Testimonials />
      
      <div className="bg-background">
        <ClientLogos />
      </div>

      <Footer />
    </div>
  );
}
