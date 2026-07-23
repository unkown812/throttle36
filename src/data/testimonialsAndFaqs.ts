import { Testimonial, FAQItem } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'S M Ash',
    location: 'Hyderabad, Telangana',
    quote: 'Being from Hyderabad, buying a bike from a dealer in Delhi without visiting in person was a big decision. The entire process was smooth, honest, and stress-free.',
    bikeBought: 'Ducati Panigale V4 S',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'test-2',
    name: 'Himanshu Varma',
    location: 'Delhi NCR',
    quote: 'These guys are really humble and helpful. Even when I couldn’t find the right bike with them initially, they kept guiding me so I could make the best decision elsewhere.',
    bikeBought: 'Kawasaki ZX-10R',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'test-3',
    name: 'Amit Sinha',
    location: 'Bengaluru, Karnataka',
    quote: 'There are many superbike dealers in the market, but Throttle36 is giving very neat and clean deals with complete transparency.',
    bikeBought: 'BMW S 1000 RR',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'test-4',
    name: 'Vikramaditya Roy',
    location: 'Mumbai, Maharashtra',
    quote: 'The 150-point report was accurate to every millimeter. Delivered right to my driveway in Mumbai in a closed hydraulic truck. Superb service!',
    bikeBought: 'Aprilia RSV4 Factory',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Are the bikes thoroughly inspected?',
    answer: 'Every motorcycle undergoes a rigorous 150-point inspection by certified superbike technicians before listing. You receive a complete digital diagnostic and mechanical report, including compression testing, frame alignment laser scans, and ECU fault logs.',
    category: 'INSPECTION'
  },
  {
    id: 'faq-2',
    question: 'Do you offer financing and EMI options?',
    answer: 'Yes, we partner with leading private & nationalized banks (HDFC, ICICI, Axis Bank) to provide quick loan approvals with flexible EMI options up to 60 months with minimal documentation.',
    category: 'FINANCING'
  },
  {
    id: 'faq-3',
    question: 'Can I sell my superbike to Throttle36?',
    answer: 'Absolutely. We offer competitive market valuations with instant payout upon physical evaluation and document verification. You can also opt for our high-visibility consignment sales model.',
    category: 'SELLING'
  },
  {
    id: 'faq-4',
    question: 'Do you provide nationwide doorstep delivery?',
    answer: 'Yes, we ship fully registered and insured superbikes anywhere across India using covered, custom-padded hydraulic bike transport rigs with real-time GPS tracking.',
    category: 'DELIVERY'
  },
  {
    id: 'faq-5',
    question: 'What brands do you specialize in?',
    answer: 'We specialize exclusively in premium liter-class, middleweight, and hyper-sport motorcycles from Kawasaki, BMW Motorrad, Ducati, Yamaha, Aprilia, Honda, MV Agusta, and Triumph.',
    category: 'GENERAL'
  },
  {
    id: 'faq-6',
    question: 'How do I reserve a superbike online?',
    answer: 'You can reserve any available machine by placing a fully refundable ₹25,000 booking deposit directly on our platform or contacting our Gurugram studio directly.',
    category: 'GENERAL'
  }
];
