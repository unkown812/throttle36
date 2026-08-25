import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="w-full bg-[#1B0E0D] text-[#E3E2DE] py-20 px-4 md:px-8 border-b border-[#E3E2DE]/30">
      <div className="max-w-4xl mx-auto border-2 border-[#E3E2DE]/30 p-8 sm:p-12 space-y-8 relative overflow-hidden bg-[#1B0E0D]">
        
        {/* Corner Technical Accent */}
        <div className="absolute top-0 right-0 bg-[#31EF07] text-[#1B0E0D] font-mono text-[10px] font-bold uppercase px-3 py-1">
          STUDIO INTELLIGENCE
        </div>

        <div className="space-y-3">
          <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#C72A09]">
            // VIP DROP ACCESS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#E3E2DE]">
            STAY IN THE FAST LANE
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#E3E2DE]/80 max-w-xl font-medium">
            Get exclusive listings, superbike technical tips, and launch alerts before anyone else.
          </p>
        </div>

        {!subscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-stretch pt-2">
            <input
              type="email"
              required
              placeholder="ENTER YOUR EMAIL ADDRESS..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-[#E3E2DE] placeholder-[#E3E2DE]/40 font-mono text-sm border-b-2 border-[#E3E2DE] py-3 px-2 focus:border-[#31EF07] outline-none"
            />
            <button
              type="submit"
              className="bg-[#31EF07] hover:bg-[#C72A09] text-[#1B0E0D] font-mono text-xs font-bold uppercase tracking-wider py-4 px-8 flex items-center justify-center gap-2 border-sharp transition-colors cursor-pointer shrink-0"
            >
              <span>Subscribe</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="p-4 bg-[#31EF07]/10 border border-[#31EF07] flex items-center gap-3 font-mono text-xs text-[#31EF07]">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>YOU HAVE BEEN ADDED TO THE THROTTLE26 VIP SUPERBIKE DISPATCH LIST.</span>
          </div>
        )}

      </div>
    </section>
  );
};
