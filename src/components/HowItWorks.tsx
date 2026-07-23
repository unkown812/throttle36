import React from 'react';
import { motion } from 'motion/react';
import { Search, CreditCard, Truck, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Machine',
      desc: 'Browse our certified, 150-point inspected inventory and pick the superbike that fits your soul.',
      detail: 'Every bike comes with a downloadable digital inspection dossier and ECU scan log.',
      icon: <Search className="w-8 h-8 text-[#C72A09]" />
    },
    {
      num: '02',
      title: 'Get Financing & Insurance',
      desc: 'Easy EMI options and comprehensive insurance from our trusted partners, all handled in-house.',
      detail: 'Instant loan approvals up to 85% on-road funding with leading banks like HDFC & ICICI.',
      icon: <CreditCard className="w-8 h-8 text-[#31EF07]" />
    },
    {
      num: '03',
      title: 'Ride It Home',
      desc: 'We deliver your fully registered superbike to your doorstep, ready to hit the road.',
      detail: 'Hydraulic closed-truck transport with live GPS tracking direct to any pin code in India.',
      icon: <Truck className="w-8 h-8 text-[#C72A09]" />
    }
  ];

  return (
    <section id="how-it-works" className="w-full bg-[#1B0E0D] text-[#E3E2DE] py-20 px-4 md:px-8 border-b border-[#E3E2DE]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E3E2DE]/20 pb-6 gap-4"
        >
          <div>
            <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#31EF07]">
              // TRANSPARENT PROCESS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#E3E2DE] mt-1">
              HOW THROTTLE36 WORKS
            </h2>
          </div>

          <p className="font-mono text-xs text-[#E3E2DE]/70 max-w-sm">
            THREE RIGOROUS STEPS SEPARATE YOU FROM YOUR DREAM HYPER-SPORT MACHINE. ZERO HASSLE, GUARANTEED.
          </p>
        </motion.div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="border border-[#E3E2DE]/30 p-8 flex flex-col justify-between hover:border-[#31EF07] transition-all duration-300 group bg-[#1B0E0D]"
            >
              <div className="space-y-6">
                
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-extrabold text-[#C72A09] group-hover:text-[#31EF07] transition-colors">
                    {step.num}.
                  </span>
                  {step.icon}
                </div>

                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#E3E2DE]">
                  {step.title}
                </h3>

                <p className="font-sans text-base text-[#E3E2DE]/90 leading-relaxed font-medium">
                  {step.desc}
                </p>

              </div>

              <div className="mt-8 pt-4 border-t border-[#E3E2DE]/15 font-mono text-xs text-[#E3E2DE]/60">
                <p>{step.detail}</p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

