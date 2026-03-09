import { Phone, Instagram, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="flex items-center gap-6">
          <a href="tel:010-6283-3743" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition text-sm">
            <Phone className="w-4 h-4" /> 010-6283-3743
          </a>
          <a href="mailto:ssiz4333@gmail.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition text-sm">
            <Mail className="w-4 h-4" /> ssiz4333@gmail.com
          </a>
          <a
            href="https://www.instagram.com/erang_coach"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition text-sm"
          >
            <Instagram className="w-4 h-4" /> @erang_coach
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-primary-foreground/15 text-center">
        <p className="text-primary-foreground/50 text-xs">
          © 2026 정종범 웰니스 코칭. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
