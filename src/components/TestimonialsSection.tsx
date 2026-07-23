import React from 'react';
import { TESTIMONIALS } from '../data/testimonialsAndFaqs';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="w-full bg-[#1B0E0D] text-[#E3E2DE] py-20 px-4 md:px-8 border-b border-[#E3E2DE]/30">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E3E2DE]/20 pb-6 gap-4">
          <div>
            <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#31EF07]">
              // VERIFIED RIDER REVIEWS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#E3E2DE] mt-1">
              WHAT OUR OWNERS SAY
            </h2>
          </div>

          <p className="font-mono text-xs text-[#E3E2DE]/70 max-w-xs">
            REAL TESTIMONIALS FROM RIDERS ACROSS INDIA WHO TRUSTED THROTTLE36.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="border border-[#E3E2DE]/30 p-8 flex flex-col justify-between space-y-6 hover:border-[#31EF07] transition-all duration-300 bg-[#1B0E0D] relative group"
            >
              <Quote className="w-10 h-10 text-[#C72A09] absolute top-6 right-6 opacity-30 group-hover:opacity-100 group-hover:text-[#31EF07] transition-all" />

              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#31EF07] text-[#31EF07]" />
                  ))}
                </div>

                <p className="font-sans text-lg text-[#E3E2DE] font-medium leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3E2DE]/15 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-3">
                  <img 
                    src={t.avatar} 
                    alt={t.name}
                    className="w-10 h-10 object-cover border border-[#E3E2DE]/30 grayscale"
                  />
                  <div>
                    <div className="font-bold uppercase text-[#E3E2DE]">{t.name}</div>
                    <div className="text-[11px] text-[#31EF07]">{t.location}</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-[#E3E2DE]/50 block">BOUGHT:</span>
                  <span className="font-bold text-[#E3E2DE]">{t.bikeBought}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
