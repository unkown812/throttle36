import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Superbike, FilterState } from '../types';
import { NeonBadge } from './NeonBadge';
import { playEngineRev, play5SecondHoverRev } from '../utils/audioSynth';
import { Search, Filter, Volume2, ShieldCheck, ArrowUpRight, Gauge, Cpu, Radio, Zap } from 'lucide-react';

interface ProductGridProps {
  bikes: Superbike[];
  onSelectBike: (bike: Superbike) => void;
  onBookTestRide: (bike: Superbike) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  bikes,
  onSelectBike,
  onBookTestRide
}) => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    brand: 'ALL',
    minPrice: 0,
    maxPrice: 30,
    minYear: 2018,
    engineCC: 'ALL',
    statusOnly: 'ALL'
  });

  const [activeRevId, setActiveRevId] = useState<string | null>(null);
  const [hoveringBikeId, setHoveringBikeId] = useState<string | null>(null);
  const activeAudioHandle = useRef<{ stop: () => void } | null>(null);

  // Filtered bikes
  const filteredBikes = useMemo(() => {
    return bikes.filter(bike => {
      // Search
      if (filters.search && !bike.title.toLowerCase().includes(filters.search.toLowerCase()) && !bike.brand.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }
      // Brand
      if (filters.brand !== 'ALL' && bike.brand !== filters.brand) {
        return false;
      }
      // Price
      if (bike.priceLakh < filters.minPrice || bike.priceLakh > filters.maxPrice) {
        return false;
      }
      // Status
      if (filters.statusOnly !== 'ALL' && bike.status !== filters.statusOnly) {
        return false;
      }
      return true;
    });
  }, [bikes, filters]);

  const brands = ['ALL', 'Kawasaki', 'BMW', 'Ducati', 'Yamaha', 'Aprilia', 'Honda', 'MV Agusta'];

  const handleRevClick = (e: React.MouseEvent, bike: Superbike) => {
    e.stopPropagation();
    // Stop hover rev if active
    if (activeAudioHandle.current) {
      activeAudioHandle.current.stop();
      activeAudioHandle.current = null;
    }
    setActiveRevId(bike.id);
    playEngineRev(bike.engineType);
    setTimeout(() => setActiveRevId(null), 1600);
  };

  const handleMouseEnterCard = (bike: Superbike) => {
    // If audio is already playing, stop previous
    if (activeAudioHandle.current) {
      activeAudioHandle.current.stop();
      activeAudioHandle.current = null;
    }
    setHoveringBikeId(bike.id);
    const audioHandle = play5SecondHoverRev(bike.engineType);
    activeAudioHandle.current = audioHandle;
  };

  const handleMouseLeaveCard = (bikeId: string) => {
    if (hoveringBikeId === bikeId) {
      setHoveringBikeId(null);
      if (activeAudioHandle.current) {
        activeAudioHandle.current.stop();
        activeAudioHandle.current = null;
      }
    }
  };

  return (
    <section id="inventory" className="w-full bg-[#E3E2DE] text-[#1B0E0D] py-16 px-4 md:px-8 border-b border-[#1B0E0D]/20">
      
      {/* Header & Filter Controls */}
      <div className="max-w-7xl mx-auto space-y-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#1B0E0D] pb-6 gap-6"
        >
          <div>
            <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#C72A09] flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#31EF07]" /> // FEATURED INVENTORY (SEASON 04)
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#1B0E0D] mt-1">
              CERTIFIED SUPERBIKES
            </h2>
          </div>

          <p className="font-mono text-xs text-[#1B0E0D]/70 max-w-xs text-right hidden md:block">
            SHOWING {filteredBikes.length} OF {bikes.length} FULLY INSPECTION-CERTIFIED MACHINES. HOVER CARDS TO TRIGGER 5-SEC EXHAUST REV.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#1B0E0D] text-[#E3E2DE] p-4 md:p-6 border-sharp space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#E3E2DE]/50" />
              <input
                type="text"
                placeholder="SEARCH MAKE, MODEL (E.G. ZX-10R, PANIGALE, S1000RR)..."
                value={filters.search}
                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                className="w-full bg-[#1B0E0D] text-[#E3E2DE] placeholder-[#E3E2DE]/40 font-mono text-xs border border-[#E3E2DE]/30 pl-9 pr-3 py-2.5 focus:border-[#31EF07] outline-none"
              />
            </div>

            {/* Brand Filter Pill Buttons */}
            <div className="md:col-span-7 flex flex-wrap gap-2 items-center">
              <span className="font-mono text-xs text-[#31EF07] font-bold uppercase mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> BRAND:
              </span>
              {brands.map(b => (
                <button
                  key={b}
                  onClick={() => setFilters(prev => ({ ...prev, brand: b }))}
                  className={`
                    font-mono text-xs uppercase px-3 py-1.5 transition-all cursor-pointer border-sharp
                    ${filters.brand === b 
                      ? 'bg-[#31EF07] text-[#1B0E0D] font-bold' 
                      : 'bg-transparent text-[#E3E2DE] border border-[#E3E2DE]/30 hover:border-[#31EF07]'}
                  `}
                >
                  {b}
                </button>
              ))}
            </div>

          </div>

          {/* Secondary Filters */}
          <div className="pt-3 border-t border-[#E3E2DE]/15 flex flex-wrap items-center justify-between font-mono text-xs gap-4 text-[#E3E2DE]/80">
            <div className="flex items-center gap-4">
              <span>MAX PRICE: <strong className="text-[#31EF07]">₹{filters.maxPrice} LAKH</strong></span>
              <input 
                type="range" 
                min="10" 
                max="30" 
                step="1"
                value={filters.maxPrice}
                onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
                className="accent-[#31EF07] cursor-pointer w-28 sm:w-40"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs uppercase text-[#E3E2DE]/60">STATUS:</span>
              <button 
                onClick={() => setFilters(prev => ({ ...prev, statusOnly: prev.statusOnly === 'AVAILABLE' ? 'ALL' : 'AVAILABLE' }))}
                className={`px-2.5 py-1 text-[11px] font-bold uppercase border cursor-pointer ${filters.statusOnly === 'AVAILABLE' ? 'bg-[#C72A09] text-[#1B0E0D] border-[#C72A09]' : 'border-[#E3E2DE]/30'}`}
              >
                {filters.statusOnly === 'AVAILABLE' ? 'SHOWING AVAILABLE ONLY' : 'ALL STATUSES'}
              </button>
            </div>
          </div>

        </motion.div>

        {/* Asymmetrical 12-Column Grid with Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-6">
          {filteredBikes.length === 0 ? (
            <div className="col-span-12 py-16 text-center border-2 border-dashed border-[#1B0E0D]/30 p-8">
              <p className="font-display text-2xl font-bold text-[#1B0E0D]">NO SUPERBIKES MATCH YOUR SEARCH CRITERIA</p>
              <button 
                onClick={() => setFilters({ search: '', brand: 'ALL', minPrice: 0, maxPrice: 30, minYear: 2018, engineCC: 'ALL', statusOnly: 'ALL' })}
                className="mt-4 font-mono text-xs uppercase font-bold bg-[#1B0E0D] text-[#E3E2DE] hover:bg-[#31EF07] hover:text-[#1B0E0D] px-4 py-2 border-sharp transition-colors"
              >
                RESET ALL FILTERS
              </button>
            </div>
          ) : (
            filteredBikes.map((bike, index) => {
              // Asymmetric Layout Math: Alternate 7-col (4:5) and 5-col (3:4 with offset)
              const isEven = index % 2 === 0;
              const colSpanClass = isEven ? 'md:col-span-7' : 'md:col-span-5 md:mt-24';
              const aspectClass = isEven ? 'aspect-[4/3] sm:aspect-[16/10]' : 'aspect-[4/3]';
              const isHovering = hoveringBikeId === bike.id;

              return (
                <motion.div 
                  key={bike.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: (index % 2) * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.008 }}
                  className={`group cursor-pointer ${colSpanClass} flex flex-col justify-between relative`}
                  onClick={() => onSelectBike(bike)}
                  onMouseEnter={() => handleMouseEnterCard(bike)}
                  onMouseLeave={() => handleMouseLeaveCard(bike.id)}
                >
                  
                  {/* Image Container with Neon Badge & Hover Scale */}
                  <div className="relative overflow-hidden bg-[#1B0E0D] border-2 border-[#1B0E0D] shadow-xl">
                    
                    {/* High-Contrast Grayscale Image */}
                    <div className={`${aspectClass} overflow-hidden relative`}>
                      <img 
                        src={bike.heroImage} 
                        alt={bike.title}
                        className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                        loading="lazy"
                      />
                      
                      {/* Dark Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B0E0D]/90 via-transparent to-black/20 group-hover:opacity-60 transition-opacity" />
                    </div>

                    {/* Top Right Neon Quick View Badge */}
                    <div className="absolute top-3 right-3 z-20">
                      <NeonBadge text="QUICK VIEW" />
                    </div>

                    {/* Top Left Static Certification Badge */}
                    <div className="absolute top-3 left-3 z-20 font-mono text-[10px] font-bold uppercase bg-[#1B0E0D] text-[#E3E2DE] px-2.5 py-1 border border-[#E3E2DE]/30">
                      {bike.badge}
                    </div>

                    {/* 5-SEC AUDIO HOVER EQUALIZER OVERLAY */}
                    <AnimatePresence>
                      {isHovering && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-12 left-3 right-3 z-30 bg-[#31EF07] text-[#1B0E0D] p-2 border border-[#1B0E0D] font-mono text-xs flex items-center justify-between shadow-2xl"
                        >
                          <div className="flex items-center gap-2 font-bold uppercase">
                            <Radio className="w-4 h-4 animate-pulse text-[#C72A09]" />
                            <span>5S EXHAUST REV AUDIO ACTIVE ({bike.engineType})</span>
                          </div>

                          {/* Equalizer Bars */}
                          <div className="flex items-end gap-1 h-4">
                            <span className="w-1 bg-[#1B0E0D] animate-[bounce_0.6s_infinite_100ms] h-full" />
                            <span className="w-1 bg-[#1B0E0D] animate-[bounce_0.6s_infinite_300ms] h-3" />
                            <span className="w-1 bg-[#1B0E0D] animate-[bounce_0.6s_infinite_200ms] h-full" />
                            <span className="w-1 bg-[#1B0E0D] animate-[bounce_0.6s_infinite_400ms] h-2" />
                            <span className="w-1 bg-[#1B0E0D] animate-[bounce_0.6s_infinite_150ms] h-full" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom Image Overlay Bar: Specs & Sound Simulator */}
                    <div className="absolute bottom-0 inset-x-0 p-3 bg-[#1B0E0D]/90 border-t border-[#E3E2DE]/20 text-[#E3E2DE] font-mono text-xs flex items-center justify-between z-20">
                      <div className="flex items-center gap-3 text-[11px]">
                        <span className="flex items-center gap-1 text-[#31EF07]">
                          <Gauge className="w-3.5 h-3.5" /> {bike.engineCC} CC
                        </span>
                        <span>•</span>
                        <span>{bike.powerBHP} BHP</span>
                        <span>•</span>
                        <span>{bike.kmDriven.toLocaleString()} KM</span>
                      </div>

                      {/* Engine Rev Sound Simulator Button */}
                      <button
                        onClick={(e) => handleRevClick(e, bike)}
                        className={`
                          flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase border-sharp transition-colors
                          ${activeRevId === bike.id || isHovering ? 'bg-[#31EF07] text-[#1B0E0D]' : 'bg-[#C72A09] hover:bg-[#31EF07] text-[#1B0E0D]'}
                        `}
                        title="Simulate Superbike Exhaust Rev Sound"
                      >
                        <Volume2 className={`w-3 h-3 ${activeRevId === bike.id || isHovering ? 'animate-bounce' : ''}`} />
                        <span>{activeRevId === bike.id ? 'REVVING...' : isHovering ? 'HOVER REVVING (5S)' : 'REV ENGINE'}</span>
                      </button>
                    </div>

                  </div>

                  {/* Product Details Section with Hover Border Accent */}
                  <div className="pt-4 space-y-2 border-b-2 border-[#1B0E0D] group-hover:border-[#C72A09] pb-4 transition-colors duration-300">
                    
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#1B0E0D] group-hover:text-[#C72A09] transition-colors">
                        {bike.title}
                      </h3>
                      
                      <div className="font-mono text-lg sm:text-xl font-bold text-[#1B0E0D] shrink-0">
                        ₹{bike.priceLakh} LAKH
                      </div>
                    </div>

                    <div className="flex items-center justify-between font-mono text-xs text-[#1B0E0D]/70 uppercase pt-1">
                      <div className="flex items-center gap-2">
                        <span>YEAR: {bike.year}</span>
                        <span>|</span>
                        <span>REG: {bike.registrationState}</span>
                      </div>

                      <span className="flex items-center gap-1 text-[#C72A09] font-bold group-hover:text-[#1B0E0D] transition-colors">
                        DETAILS <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                  </div>

                </motion.div>
              );
            })
          )}
        </div>

      </div>

    </section>
  );
};

