import { Card } from "@/components/ui/card";
import { useState } from "react";
import testimonial1 from "@assets/generated_images/Female_client_testimonial_portrait_ef97b24a.png";
import testimonial2 from "@assets/generated_images/Male_client_testimonial_portrait_d2a187c5.png";
import testimonial3 from "@assets/generated_images/Young_woman_client_portrait_6038bdee.png";

const testimonials = [
  {
    rating: 5,
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    image: testimonial1,
    name: "Tina Johansson",
    location: "Client, USA",
  },
  {
    rating: 5,
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    image: testimonial2,
    name: "Arnold Wilson",
    location: "Client, USA",
  },
  {
    rating: 5,
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    image: testimonial3,
    name: "Ariella Olive",
    location: "Client, USA",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-[Poppins]">
            What our client's <br className="hidden md:block" />have to say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover-elevate" data-testid={`card-testimonial-${index}`}>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-orange" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground italic mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? "bg-primary" : "bg-muted"
              }`}
              data-testid={`button-testimonial-dot-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
