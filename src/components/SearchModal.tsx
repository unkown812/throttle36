import React, { useState } from 'react';
import { Superbike } from '../types';
import { Search, X, ArrowUpRight, Gauge } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  bikes: Superbike[];
  onClose: () => void;
  onSelectBike: (bike: Superbike) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  bikes,
  onClose,
  onSelectBike
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const matches = bikes.filter(b => 
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.brand.toLowerCase().includes(query.toLowerCase()) ||
    b.year.toString().includes(query) ||
    b.engineCC.toString().includes(query)
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-start justify-center p-4 pt-16 overflow-y-auto animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-[#1B0E0D] text-[#E3E2DE] border-2 border-[#E3E2DE]/30 p-6 sm:p-8 space-y-6">
        
        {/* Search Input Bar */}
        <div className="flex items-center justify-between border-b-2 border-[#31EF07] pb-3">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-6 h-6 text-[#31EF07]" />
            <input
              type="text"
              autoFocus
              placeholder="SEARCH MAKE, MODEL, YEAR, CC (E.G. DUCATI, ZX-10R, 1000CC)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-[#E3E2DE] placeholder-[#E3E2DE]/40 font-display text-xl sm:text-2xl uppercase font-bold outline-none"
            />
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 text-[#E3E2DE] hover:text-[#31EF07] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto space-y-3 custom-scrollbar">
          {matches.length === 0 ? (
            <div className="py-12 text-center font-mono text-xs text-[#E3E2DE]/60">
              NO MATCHING SUPERBIKES FOUND FOR "{query.toUpperCase()}".
            </div>
          ) : (
            matches.map(bike => (
              <div
                key={bike.id}
                onClick={() => { onSelectBike(bike); onClose(); }}
                className="p-4 border border-[#E3E2DE]/20 bg-black/40 hover:border-[#31EF07] transition-all flex items-center justify-between gap-4 cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <img 
                    src={bike.heroImage} 
                    alt={bike.title}
                    className="w-16 h-12 object-cover border border-[#E3E2DE]/30 grayscale group-hover:grayscale-0 transition-all"
                  />

                  <div>
                    <div className="font-display text-lg font-bold uppercase text-[#E3E2DE] group-hover:text-[#31EF07] transition-colors">
                      {bike.title}
                    </div>
                    <div className="font-mono text-xs text-[#E3E2DE]/60 flex items-center gap-2">
                      <span>{bike.year}</span>
                      <span>•</span>
                      <span>{bike.engineCC} CC</span>
                      <span>•</span>
                      <span>{bike.powerBHP} BHP</span>
                    </div>
                  </div>
                </div>

                <div className="font-mono text-sm font-bold text-[#31EF07] shrink-0 flex items-center gap-2">
                  <span>₹{bike.priceLakh} LAKH</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
