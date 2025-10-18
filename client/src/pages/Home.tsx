import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import ServicesGrid from "@/components/ServicesGrid";
import AboutSection from "@/components/AboutSection";
import WorkProcess from "@/components/WorkProcess";
import MarqueeBanner from "@/components/MarqueeBanner";
import Testimonials from "@/components/Testimonials";
import TeamGrid from "@/components/TeamGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ClientLogos />
      <ServicesGrid />
      <AboutSection />
      <WorkProcess />
      <MarqueeBanner />
      <Testimonials />
      <TeamGrid />
      <Footer />
    </div>
  );
}
