import React, { useState } from 'react';
import { FAQS } from '../data/testimonialsAndFaqs';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [search, setSearch] = useState<string>('');

  const filteredFaqs = FAQS.filter(f => 
    f.question.toLowerCase().includes(search.toLowerCase()) || 
    f.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="faq" className="w-full bg-[#E3E2DE] text-[#1B0E0D] py-20 px-4 md:px-8 border-b border-[#1B0E0D]/20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#1B0E0D] pb-6 gap-4">
          <div>
            <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#C72A09]">
              // KNOWLEDGE BASE
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#1B0E0D] mt-1">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          {/* Search FAQ */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#1B0E0D]/50" />
            <input
              type="text"
              placeholder="SEARCH FAQS..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#E3E2DE] text-[#1B0E0D] placeholder-[#1B0E0D]/50 font-mono text-xs border border-[#1B0E0D] pl-9 pr-3 py-2.5 focus:border-[#C72A09] outline-none"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div 
                key={faq.id}
                className="border-2 border-[#1B0E0D] bg-[#E3E2DE] transition-colors"
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between font-display text-xl sm:text-2xl uppercase font-bold text-[#1B0E0D] hover:text-[#C72A09] transition-colors cursor-pointer gap-4"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#C72A09] shrink-0">// {faq.category}</span>
                    <span>{faq.question}</span>
                  </span>

                  <span className="shrink-0 p-1 bg-[#1B0E0D] text-[#E3E2DE]">
                    {isOpen ? <Minus className="w-5 h-5 text-[#31EF07]" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 font-sans text-base text-[#1B0E0D]/90 leading-relaxed font-medium border-t border-[#1B0E0D]/15">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
