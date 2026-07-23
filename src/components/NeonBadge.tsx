import React from 'react';

interface NeonBadgeProps {
  text: string;
  className?: string;
  alwaysVisible?: boolean;
}

export const NeonBadge: React.FC<NeonBadgeProps> = ({ 
  text, 
  className = '', 
  alwaysVisible = false 
}) => {
  return (
    <div 
      className={`
        bg-[#31EF07] text-[#1B0E0D] text-[10px] font-mono font-bold uppercase tracking-wider
        px-2.5 py-1 border-sharp shadow-none transition-all duration-300 ease-in-out select-none
        ${alwaysVisible ? 'opacity-100 scale-100' : 'opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100'}
        ${className}
      `}
    >
      {text}
    </div>
  );
};
