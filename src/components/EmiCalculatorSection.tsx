import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, CheckCircle, ArrowRight, Building2 } from 'lucide-react';

export const EmiCalculatorSection: React.FC = () => {
  const [priceLakh, setPriceLakh] = useState<number>(18.5);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [tenureMonths, setTenureMonths] = useState<number>(36);
  const [interestRate, setInterestRate] = useState<number>(8.5);

  const priceRaw = priceLakh * 100000;
  const downPaymentAmount = Math.round(priceRaw * (downPaymentPercent / 100));
  const loanAmount = priceRaw - downPaymentAmount;

  const monthlyInterestRate = interestRate / 12 / 100;
  
  const monthlyEmi = Math.round(
    (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths)) /
    (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1)
  );

  const totalPayment = monthlyEmi * tenureMonths;
  const totalInterest = totalPayment - loanAmount;

  return (
    <section id="financing" className="w-full bg-[#E3E2DE] text-[#1B0E0D] py-20 px-4 md:px-8 border-b border-[#1B0E0D]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#1B0E0D] pb-6 gap-4"
        >
          <div>
            <span className="font-mono text-xs uppercase font-bold tracking-widest text-[#C72A09]">
              // FINANCIAL SERVICES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#1B0E0D] mt-1">
              FINANCING & EMI CALCULATOR
            </h2>
          </div>

          <p className="font-mono text-xs text-[#1B0E0D]/70 max-w-sm">
            IN-HOUSE LOAN PRE-APPROVAL WITH LEADING BANKS (HDFC, ICICI, AXIS) WITH LOWEST INTEREST RATES.
          </p>
        </motion.div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sliders Column (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#1B0E0D] text-[#E3E2DE] p-6 sm:p-8 border-sharp space-y-6"
          >
            <h3 className="font-display text-2xl font-bold uppercase text-[#31EF07] flex items-center gap-2">
              <Calculator className="w-6 h-6" /> CALCULATE YOUR MONTHLY OUTFLOW
            </h3>

            {/* Slider 1: Superbike Price */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#E3E2DE]/70">SUPERBIKE VALUE:</span>
                <strong className="text-[#31EF07] text-sm">₹{priceLakh.toFixed(1)} LAKH</strong>
              </div>
              <input 
                type="range" 
                min="10" 
                max="30" 
                step="0.5"
                value={priceLakh} 
                onChange={(e) => setPriceLakh(Number(e.target.value))}
                className="w-full accent-[#31EF07] cursor-pointer"
              />
              <div className="flex justify-between font-mono text-[10px] text-[#E3E2DE]/40">
                <span>₹10.0 LAKH</span>
                <span>₹30.0 LAKH</span>
              </div>
            </div>

            {/* Slider 2: Down Payment % */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#E3E2DE]/70">DOWN PAYMENT ({downPaymentPercent}%):</span>
                <strong className="text-[#31EF07] text-sm">₹{downPaymentAmount.toLocaleString()}</strong>
              </div>
              <input 
                type="range" 
                min="10" 
                max="50" 
                step="5"
                value={downPaymentPercent} 
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-[#31EF07] cursor-pointer"
              />
              <div className="flex justify-between font-mono text-[10px] text-[#E3E2DE]/40">
                <span>10% MIN</span>
                <span>50% MAX</span>
              </div>
            </div>

            {/* Slider 3: Loan Tenure */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#E3E2DE]/70">LOAN TENURE:</span>
                <strong className="text-[#31EF07] text-sm">{tenureMonths} MONTHS ({tenureMonths / 12} YRS)</strong>
              </div>
              <div className="flex gap-2">
                {[12, 24, 36, 48, 60].map(m => (
                  <button
                    key={m}
                    onClick={() => setTenureMonths(m)}
                    className={`flex-1 font-mono text-xs font-bold py-2 border-sharp transition-colors cursor-pointer ${
                      tenureMonths === m 
                        ? 'bg-[#31EF07] text-[#1B0E0D]' 
                        : 'bg-transparent text-[#E3E2DE] border border-[#E3E2DE]/30 hover:border-[#31EF07]'
                    }`}
                  >
                    {m}M
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 4: Interest Rate */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#E3E2DE]/70">ANNUAL INTEREST RATE:</span>
                <strong className="text-[#31EF07] text-sm">{interestRate.toFixed(1)}% p.a.</strong>
              </div>
              <input 
                type="range" 
                min="7.5" 
                max="13.5" 
                step="0.25"
                value={interestRate} 
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-[#31EF07] cursor-pointer"
              />
            </div>

          </motion.div>

          {/* Results Summary Box (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-[#1B0E0D] text-[#E3E2DE] p-6 sm:p-8 border-2 border-[#C72A09] flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase font-bold text-[#C72A09] tracking-widest block">
                // ESTIMATED BREAKDOWN
              </span>

              <div>
                <div className="font-mono text-xs text-[#E3E2DE]/70 uppercase">MONTHLY EMI PAYABLE</div>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#31EF07] mt-1">
                  ₹{monthlyEmi.toLocaleString()}
                  <span className="text-xs font-mono text-[#E3E2DE] font-normal"> / MONTH</span>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs border-t border-[#E3E2DE]/20 pt-4 text-[#E3E2DE]/80">
                <div className="flex justify-between">
                  <span>LOAN PRINCIPAL AMOUNT:</span>
                  <strong className="text-[#E3E2DE]">₹{loanAmount.toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span>DOWN PAYMENT NEEDED:</span>
                  <strong className="text-[#31EF07]">₹{downPaymentAmount.toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span>TOTAL INTEREST PAYABLE:</span>
                  <strong className="text-[#C72A09]">₹{Math.round(totalInterest).toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span>TOTAL AMOUNT PAYABLE:</span>
                  <strong className="text-[#E3E2DE]">₹{Math.round(totalPayment).toLocaleString()}</strong>
                </div>
              </div>

              <div className="p-3 bg-[#E3E2DE]/10 border border-[#E3E2DE]/20 font-mono text-[11px] text-[#E3E2DE]/70 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#31EF07] shrink-0" />
                <span>PARTNER BANKS: HDFC BANK, ICICI BANK, AXIS BANK, KOTAK MAHINDRA</span>
              </div>
            </div>

            <a 
              href="tel:+919050752248"
              className="w-full bg-[#C72A09] hover:bg-[#31EF07] text-[#1B0E0D] font-mono text-xs font-bold uppercase tracking-wider py-4 px-6 flex items-center justify-between border-sharp transition-colors cursor-pointer"
            >
              <span>Apply for Instant Loan Pre-Approval</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

