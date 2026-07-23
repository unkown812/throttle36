import React from 'react';
import { Award, Truck, Star, Headset } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      number: '500+',
      label: 'Bikes Sold',
      subtext: 'Certified Pre-Owned',
      icon: <Award className="w-5 h-5 text-[#C72A09]" />
    },
    {
      number: '46+',
      label: '5-Star Reviews',
      subtext: 'Verified Buyers',
      icon: <Star className="w-5 h-5 text-[#31EF07]" />
    },
    {
      number: '100%',
      label: 'Pan-India Delivery',
      subtext: 'Covered Transport',
      icon: <Truck className="w-5 h-5 text-[#C72A09]" />
    },
    {
      number: '24/7',
      label: 'Concierge Support',
      subtext: 'Dedicated Advisor',
      icon: <Headset className="w-5 h-5 text-[#31EF07]" />
    }
  ];

  return (
    <section className="w-full bg-[#1B0E0D] text-[#E3E2DE] border-b border-[#E3E2DE]/30">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E3E2DE]/20">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-6 md:p-8 flex flex-col justify-between group hover:bg-[#E3E2DE]/5 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-[#31EF07]">0{idx + 1} // STAT</span>
              {stat.icon}
            </div>
            
            <div>
              <div className="font-display text-4xl lg:text-5xl font-extrabold tracking-tight text-[#E3E2DE] group-hover:text-[#31EF07] transition-colors">
                {stat.number}
              </div>
              <div className="font-mono text-sm uppercase font-bold tracking-wider mt-1 text-[#E3E2DE]">
                {stat.label}
              </div>
              <div className="font-mono text-[11px] text-[#E3E2DE]/60 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
