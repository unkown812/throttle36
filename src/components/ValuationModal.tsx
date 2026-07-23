import React, { useState } from 'react';
import { ValuationState } from '../types';
import { X, CheckCircle2, ArrowRight, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';

interface ValuationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ValuationModal: React.FC<ValuationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [form, setForm] = useState<ValuationState>({
    brand: 'Kawasaki',
    model: 'ZX-10R',
    year: 2022,
    km: 5000,
    condition: 'EXCELLENT',
    phone: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Simple realistic estimation calculation
  const calculateEstimate = () => {
    let baseLakh = 14;
    if (form.brand === 'Ducati') baseLakh = 18;
    if (form.brand === 'BMW') baseLakh = 16;
    if (form.brand === 'Aprilia') baseLakh = 17;
    if (form.brand === 'MV Agusta') baseLakh = 21;

    const ageMultiplier = 1 - (2026 - form.year) * 0.05;
    const kmPenalty = (form.km / 10000) * 0.5;
    
    let est = baseLakh * Math.max(0.5, ageMultiplier) - kmPenalty;
    if (form.condition === 'MINT') est += 1.2;
    if (form.condition === 'GOOD') est -= 1.0;

    const min = Math.max(4, Number((est * 0.95).toFixed(1)));
    const max = Number((est * 1.05).toFixed(1));

    return { min, max };
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone || form.phone.length < 10) {
      alert('Please enter a valid 10-digit phone number for instant offer payout verification.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#1B0E0D] text-[#E3E2DE] border-2 border-[#C72A09] shadow-2xl p-6 sm:p-8 my-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#E3E2DE] hover:text-[#31EF07] hover:bg-[#E3E2DE]/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <span className="font-mono text-xs uppercase font-bold text-[#31EF07] tracking-widest block">
                // INSTANT VALUATION ENGINE
              </span>
              <h2 className="font-display text-3xl font-extrabold uppercase text-[#E3E2DE] mt-1">
                SELL YOUR SUPERBIKE
              </h2>
              <p className="font-mono text-xs text-[#E3E2DE]/70 mt-1">
                GET AN INSTANT ESTIMATE AND IMMEDIATE PAYOUT UPON PHYSICAL VERIFICATION.
              </p>
            </div>

            <div className="space-y-4 font-mono text-xs">
              
              {/* Brand Select */}
              <div>
                <label className="block text-[#E3E2DE]/70 uppercase mb-1">SUPERBIKE BRAND</label>
                <select
                  value={form.brand}
                  onChange={(e) => setForm({ ...form, brand: e.target.value })}
                  className="w-full bg-[#1B0E0D] text-[#E3E2DE] border border-[#E3E2DE]/30 p-3 focus:border-[#31EF07] outline-none cursor-pointer"
                >
                  <option value="Kawasaki">Kawasaki</option>
                  <option value="BMW">BMW Motorrad</option>
                  <option value="Ducati">Ducati</option>
                  <option value="Yamaha">Yamaha</option>
                  <option value="Honda">Honda</option>
                  <option value="Aprilia">Aprilia</option>
                  <option value="MV Agusta">MV Agusta</option>
                  <option value="Triumph">Triumph</option>
                </select>
              </div>

              {/* Model & Year */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#E3E2DE]/70 uppercase mb-1">MODEL NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="E.G. NINJA ZX-10R, S1000RR"
                    value={form.model}
                    onChange={(e) => setForm({ ...form, model: e.target.value })}
                    className="w-full bg-[#1B0E0D] text-[#E3E2DE] border border-[#E3E2DE]/30 p-3 focus:border-[#31EF07] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#E3E2DE]/70 uppercase mb-1">MANUFACTURE YEAR</label>
                  <select
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: Number(e.target.value) })}
                    className="w-full bg-[#1B0E0D] text-[#E3E2DE] border border-[#E3E2DE]/30 p-3 focus:border-[#31EF07] outline-none cursor-pointer"
                  >
                    {[2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015].map(y => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* KM & Condition */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#E3E2DE]/70 uppercase mb-1">ODOMETER (KM)</label>
                  <input
                    type="number"
                    required
                    min="100"
                    step="500"
                    value={form.km}
                    onChange={(e) => setForm({ ...form, km: Number(e.target.value) })}
                    className="w-full bg-[#1B0E0D] text-[#E3E2DE] border border-[#E3E2DE]/30 p-3 focus:border-[#31EF07] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#E3E2DE]/70 uppercase mb-1">OVERALL CONDITION</label>
                  <select
                    value={form.condition}
                    onChange={(e) => setForm({ ...form, condition: e.target.value as 'MINT' | 'EXCELLENT' | 'GOOD' })}
                    className="w-full bg-[#1B0E0D] text-[#E3E2DE] border border-[#E3E2DE]/30 p-3 focus:border-[#31EF07] outline-none cursor-pointer"
                  >
                    <option value="MINT">MINT (NO SCRATCHES, FULL SERVICE HISTORY)</option>
                    <option value="EXCELLENT">EXCELLENT (MINOR WEAR, ACCIDENT FREE)</option>
                    <option value="GOOD">GOOD (NORMAL WEAR & TEAR)</option>
                  </select>
                </div>
              </div>

              {/* Dynamic Estimated Valuation Banner */}
              <div className="p-4 bg-[#C72A09]/10 border border-[#C72A09] text-center space-y-1">
                <span className="font-mono text-[10px] uppercase text-[#E3E2DE]/70 block">
                  ESTIMATED MARKET VALUATION RANGE:
                </span>
                <div className="font-display text-3xl font-extrabold text-[#31EF07]">
                  ₹{estimate.min} LAKH – ₹{estimate.max} LAKH
                </div>
              </div>

              {/* Contact Phone */}
              <div>
                <label className="block text-[#E3E2DE]/70 uppercase mb-1">PHONE NUMBER FOR INSTANT OFFER PAYOUT</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#1B0E0D] text-[#E3E2DE] border border-[#E3E2DE]/30 p-3 focus:border-[#31EF07] outline-none font-mono text-sm"
                />
              </div>

            </div>

            <button
              type="submit"
              className="w-full bg-[#C72A09] hover:bg-[#31EF07] text-[#1B0E0D] font-mono text-xs font-bold uppercase tracking-wider py-4 px-6 flex items-center justify-center gap-2 border-sharp transition-colors cursor-pointer"
            >
              <span>Submit for Instant Payout Verification</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </form>
        ) : (
          <div className="py-8 text-center space-y-6">
            <CheckCircle2 className="w-16 h-16 text-[#31EF07] mx-auto" />
            
            <div className="space-y-2">
              <h2 className="font-display text-3xl font-extrabold uppercase text-[#E3E2DE]">
                VALUATION DOSSIER RECEIVED!
              </h2>
              <p className="font-mono text-xs text-[#E3E2DE]/80 max-w-md mx-auto">
                Our Chief Valuation Officer will call <strong className="text-[#31EF07]">{form.phone}</strong> within 15 minutes to confirm physical inspection at our Gurugram Studio or your residence.
              </p>
            </div>

            <div className="p-4 bg-[#E3E2DE]/10 border border-[#E3E2DE]/20 font-mono text-xs text-left max-w-md mx-auto space-y-1">
              <div>MACHINE: <strong>{form.brand} {form.model} ({form.year})</strong></div>
              <div>ODOMETER: <strong>{form.km.toLocaleString()} KM</strong></div>
              <div>ESTIMATED PAYOUT: <strong className="text-[#31EF07]">₹{estimate.min} LAKH – ₹{estimate.max} LAKH</strong></div>
            </div>

            <button
              onClick={onClose}
              className="bg-[#31EF07] text-[#1B0E0D] font-mono text-xs font-bold uppercase py-3 px-8 border-sharp hover:bg-[#E3E2DE] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
