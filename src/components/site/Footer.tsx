import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-sm">
              Engineering automation, IoT, and EduTech systems precision-built for businesses that demand more.
            </p>
            <div className="flex items-center gap-3 text-muted-foreground">
              <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={18} /></a>
              <a href="#" aria-label="GitHub" className="hover:text-primary transition-colors"><Github size={18} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4 font-sans">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
              <li><Link to="/clients" className="hover:text-primary">Clients</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4 font-sans">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Sri Lanka</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> hello@neoflowlabs.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} NeoFlow Labs. All rights reserved.</p>
          <p>Built in Sri Lanka · Engineering for the world.</p>
        </div>
      </div>
    </footer>
  );
}