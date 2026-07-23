import React, { useState } from 'react';
import { Superbike } from '../types';
import { X, Calendar, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface TestRideModalProps {
  isOpen: boolean;
  selectedBike: Superbike | null;
  bikes: Superbike[];
  onClose: () => void;
}

export const TestRideModal: React.FC<TestRideModalProps> = ({
  isOpen,
  selectedBike,
  bikes,
  onClose
}) => {
  if (!isOpen) return null;

  const [bikeId, setBikeId] = useState(selectedBike ? selectedBike.id : bikes[0]?.id || '');
  const [date, setDate] = useState('2026-07-25');
  const [time, setTime] = useState('11:00 AM');
  const [experience, setExperience] = useState('ADVANCED');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    setSubmitted(true);
  };

  const chosenBike = bikes.find(b => b.id === bikeId) || selectedBike;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#1B0E0D] text-[#E3E2DE] border-2 border-[#31EF07] shadow-2xl p-6 sm:p-8 my-auto">
        
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
                // STUDIO EXPERIENCE
              </span>
              <h2 className="font-display text-3xl font-extrabold uppercase text-[#E3E2DE] mt-1">
                BOOK A TEST RIDE
              </h2>
              <p className="font-mono text-xs text-[#E3E2DE]/70 mt-1">
                TEST RIDES ARE CONDUCTED AT OUR PRIVATE BALIAWAS TRACK FACILITY IN GURUGRAM.
              </p>
            </div>

            <div className="space-y-4 font-mono text-xs">
              
              {/* Bike Choice */}
              <div>
                <label className="block text-[#E3E2DE]/70 uppercase mb-1">CHOOSE SUPERBIKE</label>
                <select
                  value={bikeId}
                  onChange={(e) => setBikeId(e.target.value)}
                  className="w-full bg-[#1B0E0D] text-[#E3E2DE] border border-[#E3E2DE]/30 p-3 focus:border-[#31EF07] outline-none cursor-pointer"
                >
                  {bikes.map(b => (
                    <option key={b.id} value={b.id}>
                      {b.title} ({b.year}) — ₹{b.priceLakh} LAKH
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#E3E2DE]/70 uppercase mb-1">PREFERRED DATE</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#1B0E0D] text-[#E3E2DE] border border-[#E3E2DE]/30 p-3 focus:border-[#31EF07] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#E3E2DE]/70 uppercase mb-1">PREFERRED TIME SLOT</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#1B0E0D] text-[#E3E2DE] border border-[#E3E2DE]/30 p-3 focus:border-[#31EF07] outline-none cursor-pointer"
                  >
                    <option value="10:00 AM">10:00 AM MORNING</option>
                    <option value="12:00 PM">12:00 PM NOON</option>
                    <option value="03:00 PM">03:00 PM AFTERNOON</option>
                    <option value="05:00 PM">05:00 PM EVENING</option>
                  </select>
                </div>
              </div>

              {/* Rider Experience Level */}
              <div>
                <label className="block text-[#E3E2DE]/70 uppercase mb-1">RIDER EXPERIENCE LEVEL</label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full bg-[#1B0E0D] text-[#E3E2DE] border border-[#E3E2DE]/30 p-3 focus:border-[#31EF07] outline-none cursor-pointer"
                >
                  <option value="ADVANCED">ADVANCED TRACK / LITER-CLASS RIDER</option>
                  <option value="INTERMEDIATE">INTERMEDIATE (MIDDLEWEIGHT 600-800CC)</option>
                  <option value="FIRST_SUPERBIKE">FIRST LITER-CLASS SUPERBIKE</option>
                </select>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#E3E2DE]/70 uppercase mb-1">YOUR FULL NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="E.G. RAHUL SHARMA"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#1B0E0D] text-[#E3E2DE] border border-[#E3E2DE]/30 p-3 focus:border-[#31EF07] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#E3E2DE]/70 uppercase mb-1">PHONE NUMBER</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 90507 52248"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#1B0E0D] text-[#E3E2DE] border border-[#E3E2DE]/30 p-3 focus:border-[#31EF07] outline-none"
                  />
                </div>
              </div>

            </div>

            <button
              type="submit"
              className="w-full bg-[#31EF07] hover:bg-[#C72A09] text-[#1B0E0D] font-mono text-xs font-bold uppercase tracking-wider py-4 px-6 flex items-center justify-center gap-2 border-sharp transition-colors cursor-pointer"
            >
              <span>Confirm Test Ride Reservation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </form>
        ) : (
          <div className="py-8 text-center space-y-6">
            <CheckCircle2 className="w-16 h-16 text-[#31EF07] mx-auto" />
            
            <div className="space-y-2">
              <h3 className="font-display text-3xl font-extrabold uppercase text-[#E3E2DE]">
                TEST RIDE CONFIRMED!
              </h3>
              <p className="font-mono text-xs text-[#E3E2DE]/80 max-w-md mx-auto">
                Thank you <strong>{name}</strong>. Your track session for <strong className="text-[#31EF07]">{chosenBike?.title}</strong> is set for <strong>{date} at {time}</strong>.
              </p>
            </div>

            <div className="p-4 bg-[#E3E2DE]/10 border border-[#E3E2DE]/20 font-mono text-xs text-left max-w-md mx-auto space-y-1">
              <div>LOCATION: <strong>Faridabad - Gurgaon Rd, Baliawas, Gurugram</strong></div>
              <div>REQUIREMENT: <strong>Valid Riding License & Full Riding Gear</strong></div>
            </div>

            <button
              onClick={onClose}
              className="bg-[#31EF07] text-[#1B0E0D] font-mono text-xs font-bold uppercase py-3 px-8 border-sharp"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
