import { Card } from "@/components/ui/card";
import { Share2, Facebook, Twitter, Youtube } from "lucide-react";
import { useState } from "react";
import team1 from "@assets/generated_images/Male_plumber_professional_headshot_f08fbb0e.png";
import team2 from "@assets/generated_images/Male_handyman_professional_headshot_98a8019c.png";
import team3 from "@assets/generated_images/Male_technician_professional_headshot_91007341.png";
import team4 from "@assets/generated_images/Handyman_professional_portrait_smiling_43d6764e.png";

const team = [
  { name: "Robert Jhonson", role: "Handy Man", image: team1 },
  { name: "Marko Daniel", role: "Plumber", image: team2 },
  { name: "Sony Miltar", role: "Plumber", image: team3 },
  { name: "Jake Nicholson", role: "Professional Staff", image: team4 },
  { name: "Connor Grimes", role: "Handy Man", image: team1 },
];

export default function TeamGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Team Member</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-[Poppins]">
            Meet our dedicated and <br className="hidden md:block" />skilled team
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate cursor-pointer transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-testid={`card-team-${index}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-navy/80 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                      <Share2 className="w-8 h-8 text-white" />
                      <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors" data-testid={`button-youtube-${index}`}>
                          <Youtube className="w-5 h-5 text-white" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors" data-testid={`button-twitter-${index}`}>
                          <Twitter className="w-5 h-5 text-white" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors" data-testid={`button-facebook-${index}`}>
                          <Facebook className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
