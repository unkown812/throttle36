import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Search, ShoppingBag, PhoneCall, Menu, X, ArrowUpRight, Calculator } from 'lucide-react';

interface NavigationProps {
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenValuation: () => void;
  onOpenTestRide: () => void;
  cartCount: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenSearch,
  onOpenCart,
  onOpenValuation,
  onOpenTestRide,
  cartCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Framer Motion scroll progress bar setup
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-40 w-full mix-blend-difference text-[#E3E2DE] px-4 md:px-8 py-4 border-b border-[#E3E2DE]/20 backdrop-blur-xs transition-all">
        
        {/* Top Scroll Progress Line */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#31EF07] origin-left z-50 pointer-events-none"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto flex items-center justify-between">

          
          {/* Left: Branding */}
          <a 
            href="#" 
            className="font-display text-2xl md:text-3xl font-extrabold tracking-tighter uppercase text-[#E3E2DE] flex items-center gap-2 group"
          >
            <span>THROTTLE36</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#E3E2DE] text-[#1B0E0D] font-bold group-hover:bg-[#31EF07] transition-colors">
              S-04
            </span>
          </a>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 font-mono text-xs uppercase tracking-widest font-medium">
            <button 
              onClick={() => scrollToSection('inventory')} 
              className="hover-neon-link cursor-pointer py-1"
            >
              Inventory
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="hover-neon-link cursor-pointer py-1"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('financing')} 
              className="hover-neon-link cursor-pointer py-1"
            >
              Financing
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="hover-neon-link cursor-pointer py-1"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="hover-neon-link cursor-pointer py-1"
            >
              FAQ
            </button>
            <button 
              onClick={onOpenValuation} 
              className="hover-neon-link cursor-pointer py-1 text-[#31EF07]"
            >
              Sell Bike
            </button>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center space-x-3 md:space-x-5">
            <button 
              onClick={onOpenSearch} 
              className="p-2 hover:text-[#31EF07] transition-colors cursor-pointer"
              title="Search Inventory"
            >
              <Search className="w-5 h-5" />
            </button>

            <button 
              onClick={onOpenCart} 
              className="p-2 hover:text-[#31EF07] transition-colors relative cursor-pointer"
              title="Reserved Bikes & Deposits"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#31EF07] text-[#1B0E0D] text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              onClick={onOpenTestRide} 
              className="hidden sm:flex items-center gap-1.5 bg-[#E3E2DE] text-[#1B0E0D] hover:bg-[#31EF07] font-mono text-xs font-bold uppercase px-3 py-2 border-sharp transition-all cursor-pointer"
            >
              <span>Book Ride</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden p-2 hover:text-[#31EF07] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1B0E0D] text-[#E3E2DE] flex flex-col justify-between p-8 pt-20 animate-in fade-in duration-200">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-[#E3E2DE] hover:text-[#31EF07]"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="space-y-6 font-display text-2xl uppercase tracking-tight">
            <p className="font-mono text-xs text-[#31EF07] tracking-widest">// NAVIGATION</p>
            <div>
              <button 
                onClick={() => scrollToSection('inventory')} 
                className="block py-2 text-left hover:text-[#31EF07]"
              >
                01. Certified Inventory
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="block py-2 text-left hover:text-[#31EF07]"
              >
                02. How It Works
              </button>
              <button 
                onClick={() => scrollToSection('financing')} 
                className="block py-2 text-left hover:text-[#31EF07]"
              >
                03. EMI & Financing
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="block py-2 text-left hover:text-[#31EF07]"
              >
                04. Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="block py-2 text-left hover:text-[#31EF07]"
              >
                05. FAQ
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenValuation(); }} 
                className="block py-2 text-left text-[#C72A09] hover:text-[#31EF07]"
              >
                06. Sell Your Superbike
              </button>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#E3E2DE]/20 font-mono text-xs">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenTestRide(); }} 
              className="w-full bg-[#C72A09] hover:bg-[#31EF07] text-[#1B0E0D] font-bold py-3 uppercase tracking-wider transition-colors"
            >
              Book a Test Ride
            </button>
            <a 
              href="tel:+919050752248" 
              className="flex items-center justify-center gap-2 border border-[#E3E2DE] py-3 text-[#E3E2DE] hover:bg-[#E3E2DE] hover:text-[#1B0E0D] transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>+91 90507 52248</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
