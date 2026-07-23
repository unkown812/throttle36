/**
 * THROTTLE36 — Season 04 Superbike Studio
 * High-Fashion Brutalist Pre-Owned Superbike Platform
 */

import React, { useState } from 'react';
import { SUPERBIKES } from './data/bikes';
import { Superbike, CartItem } from './types';
import { TextureOverlay } from './components/TextureOverlay';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { ManifestoSection } from './components/ManifestoSection';
import { CategoryDivider } from './components/CategoryDivider';
import { ProductGrid } from './components/ProductGrid';
import { HowItWorks } from './components/HowItWorks';
import { EmiCalculatorSection } from './components/EmiCalculatorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { NewsletterSection } from './components/NewsletterSection';
import { ContactFooter } from './components/ContactFooter';
import { SuperbikeDetailModal } from './components/SuperbikeDetailModal';
import { ValuationModal } from './components/ValuationModal';
import { TestRideModal } from './components/TestRideModal';
import { SearchModal } from './components/SearchModal';
import { CartDrawer } from './components/CartDrawer';
import { MobileStickyCta } from './components/MobileStickyCta';

export default function App() {
  const [selectedBike, setSelectedBike] = useState<Superbike | null>(null);
  const [isValuationOpen, setIsValuationOpen] = useState(false);
  const [isTestRideOpen, setIsTestRideOpen] = useState(false);
  const [testRideBike, setTestRideBike] = useState<Superbike | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Cart / Hold Deposits state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleReserveDeposit = (bike: Superbike) => {
    if (!cartItems.some(i => i.bike.id === bike.id)) {
      setCartItems(prev => [
        ...prev,
        {
          bike,
          depositAmount: 25000,
          addedAt: new Date().toISOString()
        }
      ]);
    }
    setSelectedBike(null);
    setIsCartOpen(true);
  };

  const handleRemoveCartItem = (bikeId: string) => {
    setCartItems(prev => prev.filter(i => i.bike.id !== bikeId));
  };

  const handleOpenTestRideForBike = (bike: Superbike) => {
    setTestRideBike(bike);
    setSelectedBike(null);
    setIsTestRideOpen(true);
  };

  const scrollToInventory = () => {
    const el = document.getElementById('inventory');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#E3E2DE] text-[#1B0E0D] relative font-sans selection:bg-[#31EF07] selection:text-[#1B0E0D] overflow-x-hidden">
      
      {/* Persistent SVG Noise Overlay Filter (0.08 Opacity, Multiply) */}
      <TextureOverlay />

      {/* Sticky Navigation with Difference Blend Mode */}
      <Navigation
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenValuation={() => setIsValuationOpen(true)}
        onOpenTestRide={() => { setTestRideBike(null); setIsTestRideOpen(true); }}
        cartCount={cartItems.length}
      />

      {/* Full-Screen Hero Section */}
      <HeroSection
        onExploreClick={scrollToInventory}
        onValuationClick={() => setIsValuationOpen(true)}
      />

      {/* Trust & Stats Bar */}
      <StatsBar />

      {/* 12-Column Grid Manifesto Section */}
      <ManifestoSection />

      {/* Category Ticker Ribbon Divider */}
      <CategoryDivider text="SUPERBIKE CATALOGUE" />

      {/* Asymmetric Product Grid with Filters & Rev Simulator */}
      <ProductGrid
        bikes={SUPERBIKES}
        onSelectBike={(bike) => setSelectedBike(bike)}
        onBookTestRide={(bike) => handleOpenTestRideForBike(bike)}
      />

      {/* 3-Step Process Section */}
      <HowItWorks />

      {/* Category Ribbon Divider 2 */}
      <CategoryDivider text="FINANCING & INSPECTION" />

      {/* Interactive EMI & Loan Calculator */}
      <EmiCalculatorSection />

      {/* Verified Rider Testimonials */}
      <TestimonialsSection />

      {/* FAQ Accordion Section */}
      <FaqSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer with 4-Col Layout and Massive Ghost Brand Banner */}
      <ContactFooter
        onOpenValuation={() => setIsValuationOpen(true)}
        onOpenTestRide={() => { setTestRideBike(null); setIsTestRideOpen(true); }}
      />

      {/* Sticky Mobile Call & Book Bar */}
      <MobileStickyCta
        onOpenTestRide={() => { setTestRideBike(null); setIsTestRideOpen(true); }}
      />

      {/* Superbike Inspection Detail Lightbox Modal */}
      <SuperbikeDetailModal
        bike={selectedBike}
        onClose={() => setSelectedBike(null)}
        onReserveDeposit={handleReserveDeposit}
        onBookTestRide={(bike) => handleOpenTestRideForBike(bike)}
      />

      {/* Sell Your Bike Valuation Tool Modal */}
      <ValuationModal
        isOpen={isValuationOpen}
        onClose={() => setIsValuationOpen(false)}
      />

      {/* Book a Test Ride Modal */}
      <TestRideModal
        isOpen={isTestRideOpen}
        selectedBike={testRideBike}
        bikes={SUPERBIKES}
        onClose={() => setIsTestRideOpen(false)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        bikes={SUPERBIKES}
        onClose={() => setIsSearchOpen(false)}
        onSelectBike={(bike) => setSelectedBike(bike)}
      />

      {/* Reserved Bikes / Deposit Hold Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => setCartItems([])}
      />

    </div>
  );
}
