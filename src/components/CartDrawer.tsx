import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (bikeId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const totalDeposit = items.reduce((acc, item) => acc + item.depositAmount, 0);

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      onClearCart();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#1B0E0D] text-[#E3E2DE] h-full flex flex-col justify-between border-l-2 border-[#E3E2DE]/30 p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E3E2DE]/20 pb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-[#31EF07] font-bold uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>RESERVED SUPERBIKES ({items.length})</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#E3E2DE] hover:text-[#31EF07] transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        {!checkoutComplete ? (
          <>
            <div className="flex-1 overflow-y-auto my-6 space-y-4 custom-scrollbar">
              {items.length === 0 ? (
                <div className="py-20 text-center space-y-3 font-mono text-xs text-[#E3E2DE]/60">
                  <p>NO SUPERBIKE HOLD RESERVATIONS IN QUEUE.</p>
                  <p className="text-[11px]">Click "Reserve Machine" on any bike card to hold it for 48 hours.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div 
                    key={item.bike.id}
                    className="border border-[#E3E2DE]/20 p-4 bg-black/40 flex items-center justify-between gap-4"
                  >
                    <img 
                      src={item.bike.heroImage} 
                      alt={item.bike.title}
                      className="w-16 h-16 object-cover border border-[#E3E2DE]/30 grayscale"
                    />

                    <div className="flex-1 font-mono text-xs space-y-1">
                      <div className="font-bold text-[#E3E2DE] uppercase">{item.bike.title}</div>
                      <div className="text-[11px] text-[#31EF07]">₹{item.bike.priceLakh} LAKH TOTAL</div>
                      <div className="text-[10px] text-[#E3E2DE]/60">HOLD DEPOSIT: ₹25,000</div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.bike.id)}
                      className="p-2 text-[#E3E2DE]/50 hover:text-[#C72A09] transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-[#E3E2DE]/20 pt-4 space-y-4 font-mono text-xs">
                <div className="space-y-2 text-[#E3E2DE]/80">
                  <div className="flex justify-between">
                    <span>REFUNDABLE HOLD DEPOSIT:</span>
                    <strong className="text-[#31EF07]">₹{totalDeposit.toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between text-[11px] text-[#E3E2DE]/60">
                    <span>RESERVATION GUARANTEE:</span>
                    <span>48-HOUR EXCLUSIVE HOLD</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#31EF07] hover:bg-[#C72A09] text-[#1B0E0D] font-mono text-xs font-bold uppercase tracking-wider py-4 px-6 flex items-center justify-between border-sharp transition-colors cursor-pointer"
                >
                  <span>Pay ₹{totalDeposit.toLocaleString()} Secure Deposit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="my-auto text-center space-y-6 py-12">
            <CheckCircle2 className="w-16 h-16 text-[#31EF07] mx-auto animate-bounce" />
            
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold uppercase text-[#E3E2DE]">
                DEPOSIT PAYMENT SUCCESSFUL!
              </h3>
              <p className="font-mono text-xs text-[#E3E2DE]/80">
                Machine reservation confirmed for 48 hours. Your dedicated THROTTLE26 Concierge will contact you shortly.
              </p>
            </div>

            <button
              onClick={() => { setCheckoutComplete(false); onClose(); }}
              className="bg-[#31EF07] text-[#1B0E0D] font-mono text-xs font-bold uppercase py-3 px-8 border-sharp"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
