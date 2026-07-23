import React, { useState } from 'react';
import { Superbike } from '../types';
import { playEngineRev } from '../utils/audioSynth';
import { X, Volume2, ShieldCheck, CheckCircle2, ChevronRight, Calculator, Calendar, PhoneCall, ShoppingBag, ArrowRight } from 'lucide-react';

interface SuperbikeDetailModalProps {
  bike: Superbike | null;
  onClose: () => void;
  onReserveDeposit: (bike: Superbike) => void;
  onBookTestRide: (bike: Superbike) => void;
}

export const SuperbikeDetailModal: React.FC<SuperbikeDetailModalProps> = ({
  bike,
  onClose,
  onReserveDeposit,
  onBookTestRide
}) => {
  if (!bike) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeInspectionTab, setActiveInspectionTab] = useState(0);
  const [isRevving, setIsRevving] = useState(false);

  const handleRev = () => {
    setIsRevving(true);
    playEngineRev(bike.engineType);
    setTimeout(() => setIsRevving(false), 1600);
  };

  // Rough EMI estimate for snippet (36 months, 8.5% interest, 20% down)
  const principal = bike.priceRaw * 0.8;
  const monthlyRate = 0.085 / 12;
  const tenureMonths = 36;
  const estimatedEmi = Math.round(
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1)
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-8 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl bg-[#1B0E0D] text-[#E3E2DE] border-2 border-[#E3E2DE]/30 shadow-2xl my-auto max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Top Modal Bar */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-[#E3E2DE]/20 bg-[#1B0E0D]">
          <div className="flex items-center gap-3">
            <span className="bg-[#31EF07] text-[#1B0E0D] font-mono text-[10px] font-bold uppercase px-2 py-0.5">
              INSPECTION REPORT VERIFIED
            </span>
            <span className="font-mono text-xs text-[#E3E2DE]/70 hidden sm:inline">
              VIN: {bike.id.toUpperCase()} // REG: {bike.registrationState}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#E3E2DE] hover:text-[#31EF07] hover:bg-[#E3E2DE]/10 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-8 custom-scrollbar">
          
          {/* Main Grid: Gallery + Bike Header Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Gallery Section */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative aspect-[4/3] bg-black border border-[#E3E2DE]/30 overflow-hidden group">
                <img 
                  src={bike.gallery[activeImageIndex] || bike.heroImage} 
                  alt={bike.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />

                <div className="absolute top-4 right-4 bg-[#1B0E0D]/90 p-2 border border-[#E3E2DE]/30 flex items-center gap-2">
                  <button
                    onClick={handleRev}
                    className={`flex items-center gap-2 font-mono text-xs font-bold uppercase px-3 py-1.5 border-sharp transition-colors ${
                      isRevving ? 'bg-[#31EF07] text-[#1B0E0D]' : 'bg-[#C72A09] hover:bg-[#31EF07] text-[#1B0E0D]'
                    }`}
                  >
                    <Volume2 className={`w-4 h-4 ${isRevving ? 'animate-bounce' : ''}`} />
                    <span>{isRevving ? 'REVVING ENGINE...' : 'SOUND REV'}</span>
                  </button>
                </div>
              </div>

              {/* Thumbnails */}
              {bike.gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {bike.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-20 aspect-[4/3] border-2 overflow-hidden shrink-0 cursor-pointer transition-all ${
                        activeImageIndex === idx ? 'border-[#31EF07] opacity-100' : 'border-[#E3E2DE]/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title & Core Details Section */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <span className="font-mono text-xs uppercase font-bold text-[#C72A09]">
                  {bike.brand} // {bike.year} MODEL
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#E3E2DE] mt-1">
                  {bike.title}
                </h2>
                
                <div className="mt-3 flex items-baseline gap-4">
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#31EF07]">
                    ₹{bike.priceLakh} LAKH
                  </div>
                  <div className="font-mono text-xs text-[#E3E2DE]/60">
                    INR (TAXES INCLUDED)
                  </div>
                </div>
              </div>

              {/* Technical Specs Key Grid */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs border border-[#E3E2DE]/20 p-4 bg-[#1B0E0D]">
                <div>
                  <span className="text-[#E3E2DE]/50 block">ENGINE:</span>
                  <strong className="text-[#E3E2DE] text-sm">{bike.engineCC} CC</strong>
                </div>
                <div>
                  <span className="text-[#E3E2DE]/50 block">POWER:</span>
                  <strong className="text-[#E3E2DE] text-sm">{bike.powerBHP} BHP</strong>
                </div>
                <div>
                  <span className="text-[#E3E2DE]/50 block">ODOMETER:</span>
                  <strong className="text-[#E3E2DE] text-sm">{bike.kmDriven.toLocaleString()} KM</strong>
                </div>
                <div>
                  <span className="text-[#E3E2DE]/50 block">OWNERSHIP:</span>
                  <strong className="text-[#E3E2DE] text-sm">{bike.owners} OWNER(S)</strong>
                </div>
                <div>
                  <span className="text-[#E3E2DE]/50 block">COLOR:</span>
                  <strong className="text-[#E3E2DE] text-sm">{bike.color}</strong>
                </div>
                <div>
                  <span className="text-[#E3E2DE]/50 block">LOCATION:</span>
                  <strong className="text-[#E3E2DE] text-sm">{bike.location}</strong>
                </div>
              </div>

              {/* Quick EMI Box */}
              <div className="p-4 border border-[#31EF07]/40 bg-[#31EF07]/5 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-[#31EF07] font-bold block">// INSTANT FINANCING ESTIMATE</span>
                  <span className="text-[#E3E2DE]">ESTIMATED EMI: <strong>₹{estimatedEmi.toLocaleString()}/MO</strong></span>
                </div>
                <span className="text-[10px] text-[#E3E2DE]/60">@ 8.5% FOR 36 MOS</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onReserveDeposit(bike)}
                  className="w-full bg-[#C72A09] hover:bg-[#31EF07] text-[#1B0E0D] font-mono text-sm font-bold uppercase tracking-wider py-4 px-6 flex items-center justify-center gap-2 border-sharp transition-colors cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Reserve Machine (₹25,000 Hold Deposit)</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => onBookTestRide(bike)}
                    className="w-full bg-transparent hover:bg-[#E3E2DE] text-[#E3E2DE] hover:text-[#1B0E0D] border border-[#E3E2DE] font-mono text-xs font-bold uppercase py-3 px-3 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Test Ride</span>
                  </button>

                  <a
                    href="tel:+919050752248"
                    className="w-full bg-transparent hover:bg-[#31EF07] text-[#E3E2DE] hover:text-[#1B0E0D] border border-[#31EF07] font-mono text-xs font-bold uppercase py-3 px-3 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4 text-[#31EF07] hover:text-[#1B0E0D]" />
                    <span>Call Concierge</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Detailed Specs & 150-Point Inspection Report Tabs */}
          <div className="border-t border-[#E3E2DE]/20 pt-8 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase font-bold text-[#31EF07]">
                  // COMPREHENSIVE DIAGNOSTIC DOSSIER
                </span>
                <h3 className="font-display text-2xl font-extrabold uppercase text-[#E3E2DE]">
                  150-POINT CERTIFICATION & SPECIFICATIONS
                </h3>
              </div>

              {/* Inspection Category Tabs */}
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {bike.inspectionReport.map((rep, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveInspectionTab(idx)}
                    className={`px-3 py-1.5 uppercase font-bold transition-all border cursor-pointer ${
                      activeInspectionTab === idx 
                        ? 'bg-[#31EF07] text-[#1B0E0D] border-[#31EF07]' 
                        : 'bg-transparent text-[#E3E2DE] border-[#E3E2DE]/30 hover:border-[#31EF07]'
                    }`}
                  >
                    {rep.category} ({rep.score}%)
                  </button>
                ))}
              </div>
            </div>

            {/* Inspection Checklist Output */}
            {bike.inspectionReport[activeInspectionTab] && (
              <div className="bg-black/50 border border-[#E3E2DE]/20 p-6 space-y-4">
                <div className="flex items-center justify-between font-mono text-xs border-b border-[#E3E2DE]/15 pb-3">
                  <span className="text-[#31EF07] font-bold">
                    CATEGORY: {bike.inspectionReport[activeInspectionTab].category.toUpperCase()}
                  </span>
                  <span className="text-[#E3E2DE]/70">
                    STATUS: <strong className="text-[#31EF07]">{bike.inspectionReport[activeInspectionTab].status}</strong>
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bike.inspectionReport[activeInspectionTab].items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-[#1B0E0D] border border-[#E3E2DE]/10">
                      <CheckCircle2 className="w-5 h-5 text-[#31EF07] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-mono text-xs font-bold text-[#E3E2DE] uppercase">{item.name}</div>
                        <div className="font-mono text-[11px] text-[#E3E2DE]/70 mt-0.5">{item.condition}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Full Spec Hardware Table */}
            <div className="border border-[#E3E2DE]/20 p-6 font-mono text-xs space-y-3">
              <h4 className="font-display text-lg font-bold uppercase text-[#C72A09]">
                FACTORY PERFORMANCE HARDWARE
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 text-[#E3E2DE]/80">
                <div><span className="text-[#E3E2DE]/40">TOP SPEED:</span> {bike.specs.topSpeed}</div>
                <div><span className="text-[#E3E2DE]/40">MAX TORQUE:</span> {bike.specs.torque}</div>
                <div><span className="text-[#E3E2DE]/40">CURB WEIGHT:</span> {bike.specs.weight}</div>
                <div><span className="text-[#E3E2DE]/40">FRAME ARCHITECTURE:</span> {bike.specs.frame}</div>
                <div><span className="text-[#E3E2DE]/40">EXHAUST SYSTEM:</span> {bike.specs.exhaust}</div>
                <div><span className="text-[#E3E2DE]/40">ELECTRONICS SUITE:</span> {bike.specs.electronics}</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
