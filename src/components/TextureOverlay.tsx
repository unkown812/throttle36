import React from 'react';

export const TextureOverlay: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 w-screen h-screen pointer-events-none z-50 opacity-[0.08] mix-blend-multiply overflow-hidden"
      aria-hidden="true"
    >
      <svg className="w-full h-full">
        <filter id="brutalistNoise">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.9" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#brutalistNoise)" />
      </svg>
    </div>
  );
};
