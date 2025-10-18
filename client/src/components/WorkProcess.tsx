import { Card } from "@/components/ui/card";
import { Users, Award, Zap, Clock } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Highly skilled team",
    description: "Proin et convallis tincidunt tincidunt. Viverra ut ullamcorp faucibus dictum. Integer in egestas volutpat.",
    icon: Users,
  },
  {
    number: "02",
    title: "Positive reputation",
    description: "Proin et convallis tincidunt tincidunt. Viverra ut ullamcorp faucibus dictum. Integer in egestas volutpat.",
    icon: Award,
  },
  {
    number: "03",
    title: "Fast and reliable",
    description: "Proin et convallis tincidunt tincidunt. Viverra ut ullamcorp faucibus dictum. Integer in egestas volutpat.",
    icon: Zap,
  },
  {
    number: "04",
    title: "24/7 availability",
    description: "Proin et convallis tincidunt tincidunt. Viverra ut ullamcorp faucibus dictum. Integer in egestas volutpat.",
    icon: Clock,
  },
];

export default function WorkProcess() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Work Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-[Poppins]">
            We take care of your every appliances
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-6 text-center relative overflow-hidden group hover-elevate" data-testid={`card-process-${index}`}>
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 font-[Poppins]">{step.number}</div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Step</p>
                  <h3 className="text-lg font-bold text-foreground mb-3 font-[Poppins]">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
