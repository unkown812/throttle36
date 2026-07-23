import React from 'react';
import { PhoneCall, Calendar } from 'lucide-react';

interface MobileStickyCtaProps {
  onOpenTestRide: () => void;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ onOpenTestRide }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#1B0E0D] border-t-2 border-[#31EF07] p-2.5 px-4 flex items-center justify-between gap-2 shadow-2xl">
      <a
        href="tel:+919050752248"
        className="flex-1 bg-[#C72A09] text-[#1B0E0D] font-mono text-xs font-bold uppercase py-3 px-3 flex items-center justify-center gap-1.5 border-sharp"
      >
        <PhoneCall className="w-4 h-4" />
        <span>Call Now</span>
      </a>

      <button
        onClick={onOpenTestRide}
        className="flex-1 bg-[#31EF07] text-[#1B0E0D] font-mono text-xs font-bold uppercase py-3 px-3 flex items-center justify-center gap-1.5 border-sharp"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Ride</span>
      </button>
    </div>
  );
};
