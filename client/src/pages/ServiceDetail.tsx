import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useParams } from "wouter";
import { CheckCircle2, Phone } from "lucide-react";
import waterLineImg from "@assets/generated_images/Water_line_repair_outdoor_303b3ae9.png";

export default function ServiceDetail() {
  const params = useParams();
  const serviceId = params.id;

  const serviceTitles: { [key: string]: string } = {
    "faucet-leak-repairs": "Faucet & Leak Repairs",
    "remodeling-service": "Remodeling Service",
    "sewer-repair-cleaning": "Sewer Repair & Cleaning",
    "drain-cleaning-repairs": "Drain Cleaning & Repairs",
    "water-line-repair": "Water Line Repair",
    "gas-line-services": "Gas Line Services",
  };

  const title = serviceTitles[serviceId as string] || "Service Details";

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary transition-colors">Service</Link>
            <span>/</span>
            <span className="text-foreground">Service Details</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-[Poppins]">{title}</h1>
              <p className="text-muted-foreground mt-4 max-w-2xl">
                Our technicians ensure your water heater operates efficiently, providing you with reliable hot water including installation, repair, and maintenance.
              </p>
            </div>
            <Button className="bg-primary hover-elevate active-elevate-2 text-white font-medium rounded-full px-8" data-testid="button-get-quote">
              Get A Quote
            </Button>
          </div>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <img src={waterLineImg} alt={title} className="w-full h-96 object-cover rounded-lg" />
              </div>

              <div className="mb-12">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Service Details</p>
                <h2 className="text-3xl font-bold text-foreground mb-6 font-[Poppins]">About this Service</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  At risus viverra adipiscing at in tellus integer feugiat. Nisl pretium fusce id velit ut tortor. Sagittis orci a scelerisque purus semper eget. At lectus urna duis convallis. Porta nibh venenatis cras sed felis eget. Neque laoreet
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Laoreet bibendum adipiscing libero neque dui. Varius non augue lectus consequat sit at feugiat bibendum. Et id at lobortis tristique. Mi tellus egestas
                </p>

                <h3 className="text-xl font-bold text-foreground mb-4 font-[Poppins]">What is included?</h3>
                <p className="text-muted-foreground mb-4">
                  Amet orci euismod in mi elit aliquam. Sit sollicitudin posuere arcu sem facilisis eget sit enim. Ut blandit laoreet bibendum adipiscing libero neque dui.
                </p>
                <ul className="space-y-3 mb-12">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Neque sodales ut etiam sit amet nisl purus. Non tellus orci ac auctor. Et id at lobortis tristique. Mi tellus egestas ac a duis</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Non tellus augue lectus consequat sit at feugiat bibendum</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Non tellus orci ac auctor. Ut blandit laoreet bibendum adipiscing libero neque dui. Et id at lobortis tristique.</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Working Process</p>
                <h2 className="text-3xl font-bold text-foreground mb-6 font-[Poppins]">How We Work</h2>
                <p className="text-muted-foreground mb-8">
                  Sagittis orci a scelerisque purus semper eget. At lectus urna duis convallis. Porta nibh venenatis cras sed felis eget. Neque laoreet
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "Booking & Inspection", desc: "Amet orci euismod in mi elit aliquam. Sit sollicitudin posuere arcu sem facilisis eget sit enim." },
                    { title: "Work Planning", desc: "Amet orci euismod in mi elit aliquam. Sit sollicitudin posuere arcu sem facilisis eget sit enim." },
                    { title: "Fix And Install", desc: "Amet orci euismod in mi elit aliquam. Sit sollicitudin posuere arcu sem facilisis eget sit enim." },
                    { title: "Works Completed", desc: "Amet orci euismod in mi elit aliquam. Sit sollicitudin posuere arcu sem facilisis eget sit enim." },
                  ].map((step, index) => (
                    <Card key={index} className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-primary">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 font-[Poppins]">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Benefits</p>
                <h2 className="text-3xl font-bold text-foreground mb-6 font-[Poppins]">Service Benefits</h2>
                <p className="text-muted-foreground mb-6">
                  At risus viverra adipiscing at in tellus integer feugiat. Nisl pretium fusce id velit ut tortor. Sagittis orci a scelerisque purus semper eget. At lectus urna duis convallis. Porta nibh venenatis cras sed felis eget. Neque laoreet
                </p>
                <ul className="space-y-3">
                  {[
                    "Neque sodales ut etiam sit amet nisl purus. Non tellus orci ac auctor. Et id at lobortis tristique. Mi tellus egestas ac a duis",
                    "Non tellus augue lectus consequat sit at feugiat bibendum",
                    "Non tellus orci ac auctor. Ut blandit laoreet bibendum adipiscing libero neque dui. Et id at lobortis tristique.",
                    "Non tellus augue lectus consequat sit at feugiat bibendum"
                  ].map((benefit, index) => (
                    <li key={index} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <Card className="p-6 sticky top-24">
                <h3 className="text-xl font-bold text-foreground mb-6 font-[Poppins]">Get In Touch</h3>
                <form className="space-y-4">
                  <Input placeholder="Full Name" data-testid="input-name" />
                  <Input placeholder="Phone" data-testid="input-phone" />
                  <Select>
                    <SelectTrigger data-testid="select-service">
                      <SelectValue placeholder="Select A Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remodeling">Remodelling Service</SelectItem>
                      <SelectItem value="faucet">Faucet & Leak Repairs</SelectItem>
                      <SelectItem value="sewer">Sewer Repair & Cleaning</SelectItem>
                      <SelectItem value="drain">Drain Cleaning & Repairs</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Short Note" rows={4} data-testid="textarea-note" />
                  <Button className="w-full bg-primary hover-elevate active-elevate-2 text-white font-medium" data-testid="button-submit">
                    Submit
                  </Button>
                </form>
              </Card>
            </div>
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
                <a href="tel:+1578365379" className="flex items-center gap-2 text-white mt-2 hover:text-white/80 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Call +(1)578-365-379</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
