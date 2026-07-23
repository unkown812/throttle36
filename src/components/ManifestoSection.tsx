import React from 'react';
import { motion } from 'motion/react';

export const ManifestoSection: React.FC = () => {
  return (
    <section className="w-full bg-[#E3E2DE] text-[#1B0E0D] py-16 md:py-24 px-4 md:px-8 border-b border-[#1B0E0D]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Columns 1-4: Manifesto Label & Top Border */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4 border-t-2 border-[#1B0E0D] pt-4"
        >
          <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#1B0E0D] block">
            MANIFESTO // SEASON 04
          </span>
          <p className="font-mono text-xs text-[#1B0E0D]/70 mt-2 max-w-xs">
            THROTTLE36 PHILOSOPHY ON HIGH-PERFORMANCE PRE-OWNED MACHINES.
          </p>
          
          <div className="mt-8 space-y-2 font-mono text-xs text-[#1B0E0D]/80">
            <div className="flex justify-between border-b border-[#1B0E0D]/10 py-1">
              <span>LOCATION:</span>
              <span className="font-bold">GURUGRAM - BALIAWAS</span>
            </div>
            <div className="flex justify-between border-b border-[#1B0E0D]/10 py-1">
              <span>INSPECTION STANDARD:</span>
              <span className="font-bold text-[#C72A09]">150-POINT DIAGNOSTIC</span>
            </div>
            <div className="flex justify-between border-b border-[#1B0E0D]/10 py-1">
              <span>TRANSPARENCY:</span>
              <span className="font-bold">100% VERIFIED</span>
            </div>
          </div>
        </motion.div>

        {/* Columns 5-12: Large-scale Editorial Text */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-8"
        >
          <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] uppercase font-semibold leading-[1.12] tracking-tight indent-12 text-[#1B0E0D]">
            WE REJECT THE CLUTTER OF STANDARD DEALERSHIPS. <span className="text-[#61220F]">THROTTLE36 WAS BUILT ON UNCOMPROMISING TRANSPARENCY</span> AND PURE ENGINE PASSION. EVERY SUPERBIKE IS CURATED LIKE A FINE PIECE OF ENGINEERING ART.
          </p>

          <p className="font-display text-xl sm:text-2xl md:text-3xl uppercase font-medium leading-[1.18] tracking-tight indent-12 text-[#1B0E0D]/90 mt-8">
            OUR 150-POINT CERTIFICATION GUARANTEES <span className="text-[#61220F]">ZERO HIDDEN ACCIDENTS, FACTORY ECU INTEGRITY</span>, AND NATIONWIDE DOORSTEP DELIVERY DIRECT TO YOUR DRIVEWAY.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6 pt-6 border-t border-[#1B0E0D]/15 font-mono text-xs uppercase text-[#1B0E0D]">
            <span className="bg-[#1B0E0D] text-[#E3E2DE] px-3 py-1 font-bold">FOUNDED 2021</span>
            <span className="text-[#61220F] font-bold">GURUGRAM STUDIO</span>
            <span>// 100% ACCIDENT FREE CERTIFICATION</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

