import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="9 22 9 12 15 12 15 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold font-[Poppins]">Feexaro</span>
            </div>
            <p className="text-white/70 text-sm mb-6">Expert plumbing, heating, and drain services with decades of experience.</p>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" data-testid="button-facebook">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" data-testid="button-twitter">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" data-testid="button-instagram">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" data-testid="button-linkedin">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 font-[Poppins]">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Team</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 font-[Poppins]">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Remodeling</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Basement Plumbing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Installation</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Water Line Repair</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 font-[Poppins]">Newsletter</h3>
            <p className="text-white/70 text-sm mb-4">Subscribe to get the latest news and updates.</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                data-testid="input-newsletter-email"
              />
              <Button className="bg-orange hover-elevate active-elevate-2 text-white font-medium flex-shrink-0" data-testid="button-subscribe">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/70 text-sm">© 2025 Feexaro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
