import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import remodelingImg from "@assets/generated_images/Bathroom_remodeling_service_work_f513cec0.png";
import basementImg from "@assets/generated_images/Basement_plumbing_pipes_installation_e240005d.png";
import installationImg from "@assets/generated_images/Kitchen_faucet_installation_closeup_26de36ef.png";
import waterLineImg from "@assets/generated_images/Water_line_repair_outdoor_303b3ae9.png";
import gasLineImg from "@assets/generated_images/Gas_line_service_work_16075700.png";
import kitchenImg from "@assets/generated_images/Kitchen_plumbing_under_sink_2a66a288.png";

const services = [
  {
    id: "faucet-leak-repairs",
    title: "Faucet & leak repairs",
    description: "Restore your plumbing fixtures to optimal condition. Our precise and efficient repairs help conserve water and enhance the functionality of your plumbing system.",
    image: installationImg,
  },
  {
    id: "remodeling-service",
    title: "Remodeling Service",
    description: "We work closely with you to design and install plumbing systems that meet your aesthetic and functional needs, your spaces into modern, efficient areas.",
    image: remodelingImg,
  },
  {
    id: "sewer-repair-cleaning",
    title: "Sewer Repair & Cleaning",
    description: "Our team is available 24/7 to tackle leaks, burst pipes, and other critical plumbing problems, ensuring your home or business.",
    image: basementImg,
  },
  {
    id: "drain-cleaning-repairs",
    title: "Drain Cleaning & Repairs",
    description: "Using advanced tools and techniques, we remove blockages and buildup from your pipes, restoring proper flow and preventing future issues.",
    image: kitchenImg,
  },
  {
    id: "water-line-repair",
    title: "Water Line Repair",
    description: "Our technicians ensure your water heater operates efficiently, providing you with reliable hot water including installation, repair, and maintenance.",
    image: waterLineImg,
  },
  {
    id: "gas-line-services",
    title: "Gas Line Services",
    description: "We ensure your gas lines are safely and efficiently installed or serviced, offering you reliable performance for all your gas-powered appliances.",
    image: gasLineImg,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Service</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-[Poppins]">Our Service</h1>
            </div>
            <div>
              <p className="text-muted-foreground">
                We offer experienced technicians quickly identify the source of leaks and provide effective solutions to restore your plumbing system.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link key={index} href={`/service/${service.id}`}>
                <Card className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group" data-testid={`card-service-${index}`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight className="w-6 h-6 text-navy" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3 font-[Poppins]">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-white/80 text-lg mb-4">Looking for Plumbing Services?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[Poppins]">Let's discuss the details</h2>
              <Link href="/contact">
                <Button className="bg-white text-primary hover-elevate active-elevate-2 font-medium rounded-full" data-testid="button-get-quote-cta">
                  Get A Quote
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex-shrink-0"></div>
              <div>
                <p className="text-white font-semibold mb-1">This is Wade Warren, Chief Repair at Feexaro.</p>
                <p className="text-white/80 text-sm">I am here to answer all your questions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
