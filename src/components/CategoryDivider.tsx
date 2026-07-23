import React from 'react';

interface CategoryDividerProps {
  text?: string;
}

export const CategoryDivider: React.FC<CategoryDividerProps> = ({ 
  text = 'SUPERBIKE CATALOGUE' 
}) => {
  return (
    <section className="w-full bg-[#E3E2DE] border-y border-[#D9D9D9] py-2 overflow-hidden select-none">
      <div className="w-full overflow-hidden whitespace-nowrap flex">
        <div className="animate-marquee flex items-center shrink-0">
          <span className="font-display text-[11vw] sm:text-[10vw] font-bold text-[#61220F] tracking-tighter leading-none uppercase px-4">
            {text} //
          </span>
          <span className="font-display text-[11vw] sm:text-[10vw] font-bold text-[#C72A09] tracking-tighter leading-none uppercase px-4">
            SEASON 04 //
          </span>
          <span className="font-display text-[11vw] sm:text-[10vw] font-bold text-[#1B0E0D] tracking-tighter leading-none uppercase px-4">
            THROTTLE36 STUDIO //
          </span>
        </div>
        <div className="animate-marquee flex items-center shrink-0" aria-hidden="true">
          <span className="font-display text-[11vw] sm:text-[10vw] font-bold text-[#61220F] tracking-tighter leading-none uppercase px-4">
            {text} //
          </span>
          <span className="font-display text-[11vw] sm:text-[10vw] font-bold text-[#C72A09] tracking-tighter leading-none uppercase px-4">
            SEASON 04 //
          </span>
          <span className="font-display text-[11vw] sm:text-[10vw] font-bold text-[#1B0E0D] tracking-tighter leading-none uppercase px-4">
            THROTTLE36 STUDIO //
          </span>
        </div>
      </div>
    </section>
  );
};
