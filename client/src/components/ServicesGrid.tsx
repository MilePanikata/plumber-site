import { Card } from "@/components/ui/card";
import remodelingImg from "@assets/generated_images/Bathroom_remodeling_service_work_f513cec0.png";
import basementImg from "@assets/generated_images/Basement_plumbing_pipes_installation_e240005d.png";
import installationImg from "@assets/generated_images/Kitchen_faucet_installation_closeup_26de36ef.png";
import waterLineImg from "@assets/generated_images/Water_line_repair_outdoor_303b3ae9.png";
import gasLineImg from "@assets/generated_images/Gas_line_service_work_16075700.png";
import kitchenImg from "@assets/generated_images/Kitchen_plumbing_under_sink_2a66a288.png";

const services = [
  {
    title: "Remodeling Service",
    description: "General plumbing includes piping, toilet installation & washers.",
    image: remodelingImg,
  },
  {
    title: "Basement Plumbing",
    description: "General plumbing includes piping, toilet installation & washers.",
    image: basementImg,
  },
  {
    title: "Installation & Replace",
    description: "General plumbing includes piping, toilet installation & washers.",
    image: installationImg,
  },
  {
    title: "Water Line Repair",
    description: "Professional water line repair and replacement services.",
    image: waterLineImg,
  },
  {
    title: "Gas Line Services",
    description: "Safe and reliable gas line installation and maintenance.",
    image: gasLineImg,
  },
  {
    title: "Kitchen Plumbing",
    description: "Complete kitchen plumbing solutions for your home.",
    image: kitchenImg,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-[Poppins]">
            Services designed to meet <br className="hidden md:block" />all your needs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
              data-testid={`card-service-${index}`}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 font-[Poppins]">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
