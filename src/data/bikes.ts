import { Superbike } from '../types';

export const SUPERBIKES: Superbike[] = [
  {
    id: 'zx10r-2022',
    title: 'KAWASAKI NINJA ZX-10R',
    brand: 'Kawasaki',
    year: 2022,
    priceLakh: 15.5,
    priceRaw: 1550000,
    engineCC: 998,
    powerBHP: 203,
    kmDriven: 4200,
    owners: 1,
    registrationState: 'HR-26 (Gurugram)',
    status: 'AVAILABLE',
    badge: '150-PT CERTIFIED',
    heroImage: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop'
    ],
    color: 'Lime Green / Ebony Black',
    specs: {
      topSpeed: '299 km/h (Electronically Limited)',
      torque: '114.9 Nm @ 11,400 RPM',
      weight: '207 kg (Wet)',
      frame: 'Aluminum Twin-Spar',
      exhaust: 'Akrapovič Slip-On Titanium',
      electronics: 'KTRC 5-Level, KIBS ABS, Launch Control, Quickshifter Up/Down'
    },
    inspectionReport: [
      {
        category: 'Engine & Transmission',
        score: 100,
        status: 'PASSED',
        items: [
          { name: 'Compression Test', condition: '12.8 bar across all 4 cylinders', passed: true },
          { name: 'Clutch Basket & Friction Plates', condition: 'Zero wear, original spec', passed: true },
          { name: 'Valve Clearance', condition: 'Factory tolerances verified', passed: true }
        ]
      },
      {
        category: 'Electronics & ECU Diagnostics',
        score: 100,
        status: 'VERIFIED',
        items: [
          { name: 'KScan Diagnostics Scan', condition: '0 Fault codes detected', passed: true },
          { name: 'Quickshifter Sensor Calibration', condition: 'Seamless up/down actuation', passed: true },
          { name: 'TFT Display & Switchgear', condition: 'All functions responsive', passed: true }
        ]
      },
      {
        category: 'Chassis & Suspension',
        score: 100,
        status: 'OPTIMAL',
        items: [
          { name: 'Showa Balance Free Front Fork', condition: 'Fresh seal replacement & oil service', passed: true },
          { name: 'Frame Geometry Alignment', condition: 'Laser measure verified true', passed: true }
        ]
      }
    ],
    engineType: 'INLINE_4',
    featured: true,
    location: 'Gurugram Studio'
  },
  {
    id: 's1000rr-2021',
    title: 'BMW S 1000 RR PRO M',
    brand: 'BMW',
    year: 2021,
    priceLakh: 18.2,
    priceRaw: 1820000,
    engineCC: 999,
    powerBHP: 207,
    kmDriven: 3800,
    owners: 1,
    registrationState: 'DL-01 (Delhi)',
    status: 'AVAILABLE',
    badge: 'M CARBON SPEC',
    heroImage: 'https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop'
    ],
    color: 'M Motorsport Tri-Color White',
    specs: {
      topSpeed: '303 km/h',
      torque: '113 Nm @ 11,000 RPM',
      weight: '193.5 kg (M Package)',
      frame: 'Bridge-Type Aluminum',
      exhaust: 'Full Titanium Akrapovič Evolution Line',
      electronics: 'BMW ShiftCam, Dynamic DDC Suspension, DTC, Race ABS Pro'
    },
    inspectionReport: [
      {
        category: 'Engine & ShiftCam System',
        score: 100,
        status: 'PASSED',
        items: [
          { name: 'ShiftCam Actuator Check', condition: 'Flawless variable valve switching', passed: true },
          { name: 'Oil Pressure & Viscosity', condition: 'Fresh Motul 300V Synthetic Fill', passed: true }
        ]
      },
      {
        category: 'Brakes & Carbon Wheels',
        score: 100,
        status: 'OPTIMAL',
        items: [
          { name: 'M Carbon Wheels Structural Integrity', condition: 'X-ray NDT tested, zero cracks', passed: true },
          { name: 'Hayes M Calipers & Rotors', condition: 'Pads at 90% lifespan', passed: true }
        ]
      }
    ],
    engineType: 'INLINE_4',
    featured: true,
    location: 'Gurugram Studio'
  },
  {
    id: 'v4s-2023',
    title: 'DUCATI PANIGALE V4 S',
    brand: 'Ducati',
    year: 2023,
    priceLakh: 22.8,
    priceRaw: 2280000,
    engineCC: 1103,
    powerBHP: 214,
    kmDriven: 1900,
    owners: 1,
    registrationState: 'MH-02 (Mumbai)',
    status: 'AVAILABLE',
    badge: 'DESMO CERTIFIED',
    heroImage: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop'
    ],
    color: 'Ducati Red / Brushed Aluminum Tank',
    specs: {
      topSpeed: '308 km/h',
      torque: '124 Nm @ 10,000 RPM',
      weight: '195.5 kg (Dry 174 kg)',
      frame: 'Aluminum Alloy Front Frame',
      exhaust: 'Akrapovič Full Titanium Race System (+12 hp)',
      electronics: 'Öhlins NPX 25/30 Electronic Suspension, Slide Control, Cornering ABS EVO'
    },
    inspectionReport: [
      {
        category: 'Desmosedici Stradale Engine',
        score: 100,
        status: 'PASSED',
        items: [
          { name: 'Desmo Valve Clearance', condition: 'Verified by Ducati Master Tech', passed: true },
          { name: 'Counter-Rotating Crank Balance', condition: 'Vibration metrics strictly baseline', passed: true }
        ]
      }
    ],
    engineType: 'V4',
    featured: true,
    location: 'Gurugram Studio'
  },
  {
    id: 'r1m-2020',
    title: 'YAMAHA YZF-R1M',
    brand: 'Yamaha',
    year: 2020,
    priceLakh: 12.9,
    priceRaw: 1290000,
    engineCC: 998,
    powerBHP: 200,
    kmDriven: 8500,
    owners: 2,
    registrationState: 'TS-09 (Hyderabad)',
    status: 'RESERVED',
    badge: 'CROSSPLANE MONSTER',
    heroImage: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop'
    ],
    color: 'Silver Blu Carbon Edition',
    specs: {
      topSpeed: '298 km/h',
      torque: '113.3 Nm @ 11,500 RPM',
      weight: '202 kg',
      frame: 'Deltabox Aluminum',
      exhaust: 'SC Project Titanium Slip-On',
      electronics: 'Öhlins ERS Suspension, 6-Axis IMU, YRC Controls'
    },
    inspectionReport: [
      {
        category: 'Crossplane Crankshaft & Drivetrain',
        score: 100,
        status: 'PASSED',
        items: [
          { name: '270-180-90-180 Firing Order Check', condition: 'Perfect harmonic cadence', passed: true },
          { name: 'Chain & Sprocket Kit', condition: 'Brand new DID Gold 520 Chain installed', passed: true }
        ]
      }
    ],
    engineType: 'CROSSPLANE_4',
    featured: true,
    location: 'Gurugram Studio'
  },
  {
    id: 'streetfighter-v4s-2022',
    title: 'DUCATI STREETFIGHTER V4 S',
    brand: 'Ducati',
    year: 2022,
    priceLakh: 19.4,
    priceRaw: 1940000,
    engineCC: 1103,
    powerBHP: 208,
    kmDriven: 2400,
    owners: 1,
    registrationState: 'HR-51 (Faridabad)',
    status: 'AVAILABLE',
    badge: 'DARK STEALTH EDITION',
    heroImage: 'https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?q=80&w=1200&auto=format&fit=crop'
    ],
    color: 'Dark Stealth Matte Black',
    specs: {
      topSpeed: '280 km/h',
      torque: '123 Nm @ 11,500 RPM',
      weight: '199 kg',
      frame: 'Aluminum Front Frame',
      exhaust: 'Ducati Performance Termignoni Slip-On',
      electronics: 'Biplane Wings (28kg downforce @ 270km/h), Öhlins Smart EC 2.0'
    },
    inspectionReport: [
      {
        category: 'Aero Wings & Electronics',
        score: 100,
        status: 'VERIFIED',
        items: [
          { name: 'Carbon Biplane Wings Mounting', condition: 'Torque specs factory verified', passed: true }
        ]
      }
    ],
    engineType: 'V4',
    featured: false,
    location: 'Gurugram Studio'
  },
  {
    id: 'rsv4-2023',
    title: 'APRILIA RSV4 FACTORY 1100',
    brand: 'Aprilia',
    year: 2023,
    priceLakh: 21.0,
    priceRaw: 2100000,
    engineCC: 1099,
    powerBHP: 217,
    kmDriven: 1200,
    owners: 1,
    registrationState: 'KA-01 (Bengaluru)',
    status: 'AVAILABLE',
    badge: 'TRACK MONSTER',
    heroImage: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop'
    ],
    color: 'Ultra Dark Matte Carbon',
    specs: {
      topSpeed: '305 km/h',
      torque: '125 Nm @ 10,500 RPM',
      weight: '202 kg',
      frame: 'Dual Beam Aluminum Frame',
      exhaust: 'Akrapovič Factory Spec',
      electronics: 'APRC System (ATC, AWC, ALC, AQS, APL, PIT, Cruise)'
    },
    inspectionReport: [
      {
        category: 'APRC Electronics Suite',
        score: 100,
        status: 'PASSED',
        items: [
          { name: 'Aprilia ECU Telemetry Log', condition: 'Zero error codes or overrev records', passed: true }
        ]
      }
    ],
    engineType: 'V4',
    featured: false,
    location: 'Gurugram Studio'
  }
];
