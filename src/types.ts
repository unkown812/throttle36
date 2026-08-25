/**
 * Types definition for THROTTLE26 Season 04 Superbike Studio
 */

export interface InspectionCategory {
  category: string;
  score: number; // e.g. 100%
  status: 'PASSED' | 'VERIFIED' | 'OPTIMAL';
  items: {
    name: string;
    condition: string;
    passed: boolean;
  }[];
}

export interface Superbike {
  id: string;
  title: string;
  brand: 'Kawasaki' | 'BMW' | 'Ducati' | 'Yamaha' | 'Aprilia' | 'Honda' | 'MV Agusta';
  year: number;
  priceLakh: number; // e.g. 15.5 (Lakh INR)
  priceRaw: number; // e.g. 1550000
  engineCC: number;
  powerBHP: number;
  kmDriven: number;
  owners: number;
  registrationState: string;
  status: 'AVAILABLE' | 'RESERVED' | 'IN_INSPECTION' | 'SOLD';
  badge: string; // e.g., '150-PT CERTIFIED', 'AKRAPOVIČ SPEC'
  heroImage: string;
  gallery: string[];
  color: string;
  specs: {
    topSpeed: string;
    torque: string;
    weight: string;
    frame: string;
    exhaust: string;
    electronics: string;
  };
  inspectionReport: InspectionCategory[];
  engineType: 'INLINE_4' | 'V4' | 'CROSSPLANE_4';
  featured: boolean;
  location: string;
}

export interface FilterState {
  search: string;
  brand: string;
  minPrice: number;
  maxPrice: number;
  minYear: number;
  engineCC: string;
  statusOnly: string;
}

export interface CartItem {
  bike: Superbike;
  depositAmount: number; // ₹25,000 default token
  addedAt: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  bikeBought: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'INSPECTION' | 'FINANCING' | 'SELLING' | 'DELIVERY' | 'GENERAL';
}

export interface ValuationState {
  brand: string;
  model: string;
  year: number;
  km: number;
  condition: 'MINT' | 'EXCELLENT' | 'GOOD';
  phone: string;
  estimatedValuationMin?: number;
  estimatedValuationMax?: number;
}
