import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="9 22 9 12 15 12 15 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground font-[Poppins]">Feexaro</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors" data-testid="link-home">HOME</a>
            <a href="/about-us" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="link-about">ABOUT</a>
            <a href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="link-services">SERVICES</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="link-blog">BLOG</a>
            <a href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="link-contact">CONTACT</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+12122555911" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors" data-testid="link-phone">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+ 1(212) 255-511</span>
            </a>
            <Button className="bg-orange hover-elevate active-elevate-2 text-white font-medium rounded-full" data-testid="button-get-quote">
              GET A QUOTE
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border" data-testid="nav-mobile-menu">
            <div className="flex flex-col gap-4">
              <a href="/" className="text-sm font-medium text-foreground">HOME</a>
              <a href="/about-us" className="text-sm font-medium text-muted-foreground">ABOUT</a>
              <a href="/services" className="text-sm font-medium text-muted-foreground">SERVICES</a>
              <a href="#" className="text-sm font-medium text-muted-foreground">BLOG</a>
              <a href="/contact" className="text-sm font-medium text-muted-foreground">CONTACT</a>
              <a href="tel:+12122555911" className="flex items-center gap-2 text-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+ 1(212) 255-511</span>
              </a>
              <Button className="bg-orange hover-elevate active-elevate-2 text-white font-medium rounded-full w-full">
                GET A QUOTE
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
