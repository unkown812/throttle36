import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, ShieldCheck, Zap, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onValuationClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onValuationClick
}) => {
  return (
    <section className="relative min-h-screen w-full bg-[#1B0E0D] text-[#E3E2DE] flex flex-col justify-between overflow-hidden border-b border-[#E3E2DE]/30">
      
      {/* High-Contrast Grayscale Background Image with Motion Zoom */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2000&auto=format&fit=crop" 
          alt="Superbike Hero Background"
          className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-1000 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B0E0D] via-[#1B0E0D]/40 to-[#1B0E0D]/80" />
      </motion.div>

      {/* Top Technical Metadata Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-7xl w-full mx-auto px-4 md:px-8 pt-8 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#E3E2DE]/70 border-b border-[#E3E2DE]/20 pb-4"
      >
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-[#31EF07] animate-pulse"></span>
          <span>SEASON 04 // 2026 EDITION</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>150-PT CERTIFIED</span>
          <span>PAN-INDIA LOGISTICS</span>
          <span>GURUGRAM HQ</span>
        </div>
      </motion.div>

      {/* Center Main Split-Indented Headline */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 md:px-8 my-auto py-12 flex flex-col justify-center">
        
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="font-display uppercase tracking-tighter leading-[0.82] select-none text-[#E3E2DE]"
        >
          <motion.h1 
            variants={{ hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0 } }}
            className="text-[14vw] sm:text-[12vw] lg:text-[11vw] text-[#E3E2DE] block"
          >
            RIDE YOUR DREAM
          </motion.h1>
          <motion.h1 
            variants={{ hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0 } }}
            className="text-[14vw] sm:text-[12vw] lg:text-[11vw] text-[#C72A09] block pl-[12vw] sm:pl-[18vw] lg:pl-[20vw] transition-all duration-500 hover:text-[#31EF07]"
          >
            SUPERBIKE,
          </motion.h1>
          <motion.h1 
            variants={{ hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0 } }}
            className="text-[14vw] sm:text-[12vw] lg:text-[11vw] text-[#E3E2DE] block"
          >
            WITHOUT THE WAIT.
          </motion.h1>
        </motion.div>

        {/* Sub-headline & Key Value Proposition */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-end"
        >
          <div className="md:col-span-8 space-y-3">
            <p className="font-sans text-base sm:text-xl text-[#E3E2DE]/90 font-medium max-w-2xl leading-snug">
              India’s most trusted pre-owned superbike studio. Fully inspected with 150-point diagnostic reports, transparent deals, and doorstep delivery anywhere in India.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs uppercase text-[#E3E2DE]/80">
              <span className="flex items-center gap-1.5 bg-[#E3E2DE]/10 px-3 py-1 border border-[#E3E2DE]/20">
                <ShieldCheck className="w-3.5 h-3.5 text-[#31EF07]" /> 150-Point Inspection
              </span>
              <span className="flex items-center gap-1.5 bg-[#E3E2DE]/10 px-3 py-1 border border-[#E3E2DE]/20">
                <Zap className="w-3.5 h-3.5 text-[#31EF07]" /> Instant Financing
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-end">
            <button
              onClick={onExploreClick}
              className="w-full bg-[#C72A09] hover:bg-[#31EF07] text-[#1B0E0D] font-mono text-sm font-bold uppercase tracking-wider py-4 px-6 flex items-center justify-between border-sharp transition-all duration-300 group cursor-pointer"
            >
              <span>Explore Inventory</span>
              <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              onClick={onValuationClick}
              className="w-full bg-transparent hover:bg-[#E3E2DE] text-[#E3E2DE] hover:text-[#1B0E0D] border border-[#E3E2DE] font-mono text-sm font-bold uppercase tracking-wider py-4 px-6 flex items-center justify-between transition-colors duration-300 cursor-pointer"
            >
              <span>Sell Your Bike</span>
              <span className="text-xs text-[#31EF07] font-mono font-normal">ESTIMATE</span>
            </button>
          </div>
        </motion.div>

      </div>

      {/* Bottom Technical Metadata Bar & Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 w-full bg-[#1B0E0D] border-t border-[#E3E2DE]/20 py-4 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#E3E2DE]/70 gap-4">
          <div className="flex items-center gap-6">
            <div>
              <span className="text-[#31EF07] font-bold">LATITUDE:</span> 28.4595° N
            </div>
            <div>
              <span className="text-[#31EF07] font-bold">LONGITUDE:</span> 77.0266° E
            </div>
          </div>

          <button 
            onClick={onExploreClick}
            className="flex items-center gap-2 text-[#E3E2DE] hover:text-[#31EF07] transition-colors cursor-pointer"
          >
            <span>SCROLL TO DISCOVER</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </motion.div>

    </section>
  );
};

