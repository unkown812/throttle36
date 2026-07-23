import React from 'react';
import { Phone, Mail, MapPin, Clock, Headset, Instagram, Youtube, Facebook, ArrowUpRight } from 'lucide-react';

interface ContactFooterProps {
  onOpenValuation: () => void;
  onOpenTestRide: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  onOpenValuation,
  onOpenTestRide
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#E3E2DE] text-[#1B0E0D] pt-16 pb-8 px-4 md:px-8 border-t-2 border-[#1B0E0D] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-[#1B0E0D]/20">
          
          {/* Column 1: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#1B0E0D]">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 font-mono text-xs uppercase text-[#1B0E0D]/80">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover-neon-link text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('inventory')} className="hover-neon-link text-left">
                  Superbike Inventory
                </button>
              </li>
              <li>
                <button onClick={onOpenValuation} className="hover-neon-link text-left text-[#C72A09] font-bold">
                  Sell Your Bike
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('financing')} className="hover-neon-link text-left">
                  Financing & EMI
                </button>
              </li>
              <li>
                <button onClick={onOpenTestRide} className="hover-neon-link text-left">
                  Book a Test Ride
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Studio Location & Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#1B0E0D]">
              STUDIO CONTACT
            </h3>
            <ul className="space-y-2.5 font-mono text-xs text-[#1B0E0D]/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C72A09] shrink-0" />
                <a href="tel:+919050752248" className="font-bold hover:text-[#C72A09]">+91 90507 52248</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C72A09] shrink-0" />
                <a href="mailto:hello@throttle36.com" className="hover:text-[#C72A09]">hello@throttle36.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C72A09] shrink-0 mt-0.5" />
                <span>Faridabad - Gurgaon Rd, Baliawas, Gurugram, Bandhwari, Haryana 122101</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C72A09] shrink-0" />
                <span>Open 24 Hours // 7 Days</span>
              </li>
            </ul>

            <div className="inline-flex items-center gap-2 bg-[#1B0E0D] text-[#31EF07] px-3 py-1 font-mono text-[11px] font-bold uppercase">
              <Headset className="w-3.5 h-3.5" /> 24/7 CONCIERGE SUPPORT
            </div>
          </div>

          {/* Column 3: Follow Us Social Links */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#1B0E0D]">
              FOLLOW US
            </h3>
            <ul className="space-y-2 font-mono text-xs uppercase text-[#1B0E0D]/80">
              <li>
                <a href="https://instagram.com/throttle36_" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#C72A09]">
                  <Instagram className="w-4 h-4" /> Instagram (@throttle36_)
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-[#C72A09]">
                  <Youtube className="w-4 h-4" /> YouTube Channel
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-[#C72A09]">
                  <Facebook className="w-4 h-4" /> Facebook Page
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio Verification & GPS */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#1B0E0D]">
              VISIT OUR STUDIO
            </h3>
            <p className="font-mono text-xs text-[#1B0E0D]/70">
              Experience the machines in person. Walk-ins and track bookings welcome 24 hours a day at our Gurugram flagship studio.
            </p>
            <a 
              href="https://maps.google.com/?q=Throttle36+Gurugram" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#1B0E0D] text-[#E3E2DE] hover:bg-[#C72A09] font-mono text-xs font-bold uppercase px-4 py-2.5 transition-colors"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-[#1B0E0D]/60 gap-2">
          <div>© 2026 THROTTLE36. ALL RIGHTS RESERVED.</div>
          <div>SEASON 04 BRUTALIST DESIGN SYSTEM // GURUGRAM, INDIA</div>
        </div>

        {/* Massive Ghost Title at Very Bottom */}
        <div className="pt-8 text-center overflow-hidden">
          <div className="font-display text-[14vw] sm:text-[12vw] lg:text-[10vw] font-extrabold text-[#D9D9D9] uppercase tracking-tighter leading-none select-none">
            THROTTLE36
          </div>
        </div>

      </div>
    </footer>
  );
};
