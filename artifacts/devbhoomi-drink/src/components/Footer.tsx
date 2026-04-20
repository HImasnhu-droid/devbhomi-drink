import React from "react";
import { Instagram, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 relative z-10">
        
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img src="/logo.jpg" alt="Devbhoomi Drink" className="w-16 h-16 rounded-full border-2 border-background/20 object-cover" />
            <div>
              <h3 className="font-devanagari text-3xl font-black leading-none text-secondary">देवभूमि</h3>
              <p className="font-cursive text-2xl text-background/80">drink</p>
            </div>
          </div>
          <p className="text-background/60 max-w-xs">
            The taste of the Himalayas in a bottle. Pure, natural, mountain-spring fresh.
          </p>
        </div>

        {/* Links / Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-secondary uppercase tracking-wider">Availability</h4>
          <p className="flex items-center gap-2 text-background/80">
            <MapPin className="w-5 h-5 text-primary" />
            Available all over India
          </p>
          <div className="inline-block mt-2 text-xs px-2 py-1 rounded bg-background/10 text-background/60">
            Central FSSAI Licensed
          </div>
        </div>

        {/* Connect */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-secondary uppercase tracking-wider">Connect</h4>
          <a 
            href="https://www.instagram.com/devbhoomidrink?igsh=MW0zenhkeW54emo0dw==" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-background/80 hover:text-secondary transition-colors"
          >
            <Instagram className="w-5 h-5" />
            @devbhoomidrink
          </a>
          <p className="text-background/60 mt-4">
            Visit <span className="font-semibold text-background">Pahadi Punch</span> in Rishikesh<br />
            Ph: 9411190278
          </p>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-background/10 text-center text-background/40 text-sm">
        &copy; {new Date().getFullYear()} Devbhoomi Drink. All rights reserved.
      </div>
    </footer>
  );
}
