import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import heroImg from "@assets/generated_images/Handyman_professional_portrait_smiling_43d6764e.png";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Contact Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-[Poppins]">Contact Us</h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-8 text-center hover-elevate">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-[Poppins]">Mail us 24/7</h3>
              <p className="text-sm text-muted-foreground mb-1">no-reply@pbminfo.com</p>
              <p className="text-sm text-muted-foreground">no-reply@pbmadmin.com</p>
            </Card>

            <Card className="p-8 text-center hover-elevate">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-[Poppins]">Call us 24/7</h3>
              <p className="text-sm text-muted-foreground mb-1">Phone: (+55) 654 - 545 - 5418</p>
              <p className="text-sm text-muted-foreground">Mobile: (+01) 654 - 545 - 1235</p>
            </Card>

            <Card className="p-8 text-center hover-elevate">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-[Poppins]">Our Locations</h3>
              <p className="text-sm text-muted-foreground mb-1">4821 Ride Top, Anch St, Alaska</p>
              <p className="text-sm text-muted-foreground">997998, USA main city.</p>
            </Card>

            <Card className="p-8 text-center hover-elevate">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-[Poppins]">24/7 availability</h3>
              <p className="text-sm text-muted-foreground mb-1">Mon to Fri - 09:00am To 06:00pm</p>
              <p className="text-sm text-muted-foreground">Sat to Sun - 09:00am To 01:00am</p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="inline-block bg-muted px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Contact Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-[Poppins]">
                Happy to Answer All Your Questions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.
              </p>
            </div>

            <Card className="p-8 bg-muted/30">
              <h3 className="text-xl font-bold text-foreground mb-6 font-[Poppins]">Send a message to staff</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Your email address will not be published. Required fields are marked *
              </p>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name *" data-testid="input-first-name" />
                  <Input placeholder="Last Name *" data-testid="input-last-name" />
                </div>
                <Input type="email" placeholder="Email *" data-testid="input-email" />
                <Input placeholder="Subject" data-testid="input-subject" />
                <Textarea placeholder="Your Message *" rows={5} data-testid="textarea-message" />
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="save-info" className="mt-1" data-testid="checkbox-save-info" />
                  <label htmlFor="save-info" className="text-sm text-muted-foreground">
                    Save my name, email, and website in this browser for the next time I comment.
                  </label>
                </div>
                <Button className="w-full bg-orange hover-elevate active-elevate-2 text-white font-medium" data-testid="button-submit">
                  Submit
                </Button>
              </form>
            </Card>
          </div>

          <div className="mb-16">
            <div className="w-full h-96 bg-muted rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52901.38154186229!2d-149.9036289!3d61.2180556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x56c8917604b33f41%3A0x257dba5aa78868e3!2sAnchorage%2C%20AK%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
          </div>

          <ClientLogos />
        </div>
      </section>

      <Footer />
    </div>
  );
}
