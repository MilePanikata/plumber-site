import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Experience</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-[Poppins]">
              We take care of your every appliances
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              From simple repairs to complete renovations, we do it all. Comprehensive plumbing solutions for residential, commercial, and industrial needs. We handle repairs & maintenance for all your appliances with expert efficiency. Trust us to ensure your appliances function perfectly & reliably.
            </p>
            <Button className="bg-orange hover-elevate active-elevate-2 text-white font-medium rounded-full gap-2" data-testid="button-know-more">
              Know More
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="text-center bg-card rounded-lg p-8 border border-card-border">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2 font-[Poppins]">85%</div>
              <p className="text-sm font-semibold text-foreground">Technologies Developed</p>
            </div>
            <div className="text-center bg-card rounded-lg p-8 border border-card-border">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2 font-[Poppins]">90%</div>
              <p className="text-sm font-semibold text-foreground">High-End Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
