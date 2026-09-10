/**
 * YSIT Genuine Parts - Master Catalog & OE Cross-Reference Database
 * High-precision reference dataset for Hyundai, Kia, and Expansion Platforms
 */

const YSIT_CATALOG_DATA = {
  hubs: [
    {
      id: "kr",
      country: "South Korea",
      city: "Seoul / Incheon",
      role: "Global Headquarters & OEM Engineering Compliance",
      badge: "HQ & Engineering",
      color: "#DC2626",
      details: "Registered South Korean corporate entity overseeing strict OEM dimensional verification, metallurgical formulas, and 1:1 Korean platform CAD compliance.",
      stats: { "Corporate Standing": "Registered Ltd.", "Fitment Tolerance": "±0.02 mm", "Standard": "KS / ISO 9001" },
      address: "Teheran-ro, Gangnam-gu, Seoul, Republic of Korea",
      contact: "kr-desk@ysitkorea.com"
    },
    {
      id: "cn",
      country: "China",
      city: "Ningbo & Guangzhou",
      role: "Precision Sourcing, Manufacturing & Export Hub",
      badge: "Sourcing & QC Hub",
      color: "#2563EB",
      details: "Direct factory-floor multi-stage quality assurance, metallurgical spectroscopy, automated rust-inhibiting packaging, and high-volume container dispatch.",
      stats: { "Monthly Capacity": "120,000+ Units", "Inspection Stages": "4-Step QC", "QC Standard": "IATF 16949" },
      address: "Beilun Industrial Logistics Zone, Ningbo / Huadu Auto Park, Guangzhou",
      contact: "export@ysitkorea.com"
    },
    {
      id: "om",
      country: "Oman & GCC",
      city: "Muscat & Regional Hubs",
      role: "20+ Years Commercial Distribution & Extreme Climate Testing",
      badge: "20+ Years GCC Legacy",
      color: "#059669",
      details: "Over two decades of commercial wholesale distribution in Oman and across GCC markets. Every component is field-engineered to endure 50°C+ summer heat and sand abrasion.",
      stats: { "Market Presence": "20+ Years", "Thermal Rating": "50°C+ Resilient", "Network": "GCC Wide" },
      address: "Ghala Industrial Area & Wadi Kabir Automotive Zone, Muscat, Sultanate of Oman",
      contact: "gcc-sales@ysitkorea.com"
    }
  ],

  samplePartNumbers: [
    {
      oem: "58101-2VA50",
      name: "Front Ceramic Brake Pad Set",
      category: "Braking Systems",
      models: "Hyundai Elantra (MD/AD), Kia Cerato (YD)",
      specs: "Ceramic Low-Dust Formula, 650°C Anti-Fade Friction, OE Shim Included",
      fitment: "100% Direct Bolt-On OEM Match"
    },
    {
      oem: "58101-D3A00",
      name: "Front Heavy-Duty Brake Pad Set",
      category: "Braking Systems",
      models: "Hyundai Tucson (TL/NX4), Kia Sportage (QL/NQ5)",
      specs: "Semi-Metallic Thermal Heat Dissipation, GCC Heavy Duty",
      fitment: "Exact Caliper Clearance Match"
    },
    {
      oem: "54500-C1000",
      name: "Front Lower Suspension Control Arm (LH)",
      category: "Suspension & Steering",
      models: "Hyundai Sonata (LF), Kia Optima / K5 (JF)",
      specs: "Forged High-Tensile Steel, Polyurethane Dust-Boot Seal",
      fitment: "1:1 Geometric & Camber Precision"
    },
    {
      oem: "54501-C1000",
      name: "Front Lower Suspension Control Arm (RH)",
      category: "Suspension & Steering",
      models: "Hyundai Sonata (LF), Kia Optima / K5 (JF)",
      specs: "Heavy-Duty Hydromount Bushing, Corrosion-Resistant E-Coat",
      fitment: "1:1 Geometric & Camber Precision"
    },
    {
      oem: "56820-2V000",
      name: "Outer Tie Rod End Assembly",
      category: "Suspension & Steering",
      models: "Hyundai Veloster, Elantra, Kia Rio, Cerato",
      specs: "Case-Hardened Ball Pin, High-Viscosity Synthetic Grease (-40°C to 160°C)",
      fitment: "Exact Steering Rack Taper Fit"
    },
    {
      oem: "54813-2S000",
      name: "Front Stabilizer Sway Bar Bushing",
      category: "Suspension & Steering",
      models: "Hyundai Tucson (ix35), Kia Sportage (SL)",
      specs: "Natural Rubber Blend with High Ozone & Sand Abrasion Resistance",
      fitment: "Zero Squeak OEM Clamp Profile"
    },
    {
      oem: "25310-D3000",
      name: "Dual-Core High-Efficiency Radiator Assembly",
      category: "Cooling & Electrical",
      models: "Hyundai Tucson 2.0L/2.4L, Kia Sportage 2.0L",
      specs: "High-Density Aluminum Fin Pitch, 1.3 Bar Pressure Rating for GCC Heat",
      fitment: "Factory Quick-Connect Fan & Hose Mounts"
    },
    {
      oem: "97701-2S500",
      name: "A/C Compressor Unit (High-Displacement GCC Spec)",
      category: "Cooling & Electrical",
      models: "Hyundai Tucson, Santa Fe, Kia Sportage, Sorento",
      specs: "Extreme Ambient Thermal Capacity, Reinforced Clutch Bearing",
      fitment: "Direct Serpentine Belt Alignment"
    },
    {
      oem: "20910-2GA02",
      name: "Full Engine Overhaul Gasket & Seal Kit",
      category: "Engine & Transmission",
      models: "Hyundai Sonata, Santa Fe, Kia Optima (Theta II 2.4L)",
      specs: "Multi-Layer Steel (MLS) Head Gasket, Viton Valve Stem Seals",
      fitment: "Complete 100% Seal Gasket Coverage"
    },
    {
      oem: "25100-2B700",
      name: "Heavy-Duty Engine Water Pump with Gasket",
      category: "Engine & Transmission",
      models: "Hyundai Accent, Creta, Kia Rio, Cerato (1.4L / 1.6L Gamma)",
      specs: "Die-Cast Aluminum Housing, Anti-Cavitation Impeller, Silicon Carbide Seal",
      fitment: "Factory Pulley & Timing Cover Direct Mount"
    },
    {
      oem: "28113-1R100",
      name: "High-Flow Engine Air Filter",
      category: "Engine & Transmission",
      models: "Hyundai Accent (RB), Kia Rio (UB), Pegas",
      specs: "Multi-Stage Synthetic Non-Woven Media, 99.4% Sand Particle Trapping",
      fitment: "Snug Airbox Perimeter Seal"
    },
    {
      oem: "51720-0Q000",
      name: "Front Wheel Hub Bearing Assembly",
      category: "Suspension & Steering",
      models: "Hyundai Accent, Creta, Kia Rio, Pegas",
      specs: "Triple-Lip Integrated Magnetic ABS Encoder, GCr15 High-Chrome Steel",
      fitment: "Direct Knuckle Press Fit"
    }
  ],

  vehiclePlatforms: [
    {
      brand: "Hyundai",
      badge: "Hyundai OEM Coverage",
      logoType: "hyundai",
      description: "Complete replacement coverage across popular GCC and global passenger, SUV, and commercial fleets.",
      models: [
        { name: "Accent", chassis: "RB / HC", years: "2011-2024", engines: "1.4L / 1.6L Gamma, Kappa", popularSystems: ["Braking", "Suspension", "Steering", "Cooling"] },
        { name: "Elantra", chassis: "MD / AD / CN7", years: "2011-2025", engines: "1.6L / 2.0L Nu, Smartstream", popularSystems: ["Suspension Control Arms", "Brake Discs", "Engine Mounts"] },
        { name: "Sonata", chassis: "YF / LF / DN8", years: "2010-2024", engines: "2.0L / 2.4L Theta II, 2.5L Smartstream", popularSystems: ["Hydraulic Mountings", "Water Pumps", "Tie Rods"] },
        { name: "Tucson", chassis: "LM / TL / NX4", years: "2010-2025", engines: "2.0L / 2.4L / 1.6T GDI", popularSystems: ["Radiators", "AC Compressors", "Sway Bar Bushings"] },
        { name: "Santa Fe", chassis: "DM / TM / MX5", years: "2013-2025", engines: "2.4L / 3.3L / 3.5L V6 Lambda", popularSystems: ["Hub Bearings", "Ceramic Pads", "Suspension Arms"] },
        { name: "Creta", chassis: "GS / SU2", years: "2015-2024", engines: "1.5L / 1.6L MPI", popularSystems: ["Shock Absorbers", "Brake Pads", "Overhaul Gaskets"] },
        { name: "H-100 / Porter", chassis: "HR Series (Commercial)", years: "2004-2024", engines: "2.5L CRDi / TCI Diesel", popularSystems: ["Heavy Duty Ball Joints", "Water Pumps", "Brake Shoes"] }
      ]
    },
    {
      brand: "Kia",
      badge: "Kia OEM Coverage",
      logoType: "kia",
      description: "Direct OEM-tolerance components covering high-mileage urban sedans, family crossovers, and light commercial haulers.",
      models: [
        { name: "Pegas", chassis: "AB", years: "2017-2024", engines: "1.4L Kappa MPI", popularSystems: ["Air & Oil Filters", "Brake Pads", "Tie Rod Ends"] },
        { name: "Rio", chassis: "UB / YB", years: "2012-2024", engines: "1.4L / 1.6L Gamma", popularSystems: ["Control Arms", "Wheel Bearings", "Engine Mounts"] },
        { name: "Cerato", chassis: "YD / BD", years: "2013-2025", engines: "1.6L / 2.0L Nu", popularSystems: ["Brake Pads", "Stabilizer Links", "Radiators"] },
        { name: "Optima / K5", chassis: "TF / JF / DL3", years: "2011-2025", engines: "2.0L / 2.4L Theta, 2.5L", popularSystems: ["Hydraulic Bushings", "Compressors", "Gaskets"] },
        { name: "Sportage", chassis: "SL / QL / NQ5", years: "2010-2025", engines: "2.0L / 2.4L / 1.6T", popularSystems: ["Heavy-Duty Suspension", "Brake Rotors", "Cooling"] },
        { name: "Sorento", chassis: "XM / UM / MQ4", years: "2011-2025", engines: "2.4L / 3.3L / 3.5L V6", popularSystems: ["Hub Assemblies", "Ceramic Pads", "Water Pumps"] },
        { name: "Bongo", chassis: "PU Series (Commercial)", years: "2004-2024", engines: "2.5L / 2.7L / 2.9L J3 Diesel", popularSystems: ["King Pins", "Lower Arms", "Heavy-Duty Clutch Discs"] }
      ]
    },
    {
      brand: "Strategic Expansion (Chinese Platforms)",
      badge: "Launching Next-Gen Program",
      logoType: "expansion",
      description: "Accelerating full OEM replacement coverage for leading Chinese automotive platforms in the GCC and emerging export markets.",
      models: [
        { name: "Geely", series: "Coolray / Tugella / Emgrand / Monjaro", focus: "Chassis & Brake Systems", status: "Tooling & Direct Sourcing Active" },
        { name: "Chery", series: "Tiggo 4 / 7 / 8 Pro / Arrizo 6", focus: "Suspension, Filtration & Water Pumps", status: "Tooling & Direct Sourcing Active" },
        { name: "Haval", series: "H6 / Jolion / Dargo", focus: "Braking, Bushings & Radiators", status: "Trial Batch Verification" },
        { name: "Changan", series: "CS35 Plus / CS75 Plus / CS85 / UNI-T", focus: "Engine Gaskets & Control Arms", status: "Engineering Development" },
        { name: "BYD", series: "Song Plus / Atto 3 / Han EV & Hybrid", focus: "Thermal Management & Suspension Bushings", status: "R&D Prototype Matching" }
      ]
    }
  ],

  productSystems: [
    {
      id: "suspension-steering",
      title: "Suspension & Steering Systems",
      icon: "settings-2",
      shortDesc: "Precision forged linkage, hardened ball joints, and desert-grade polyurethane sealed dust boots.",
      components: [
        "Lower & Upper Control Arms (LH / RH)",
        "Inner & Outer Tie Rod Ends",
        "Heavy-Duty Suspension Ball Joints",
        "Front & Rear Stabilizer Sway Bar Links",
        "Hydraulic & Polyurethane Arm Bushings"
      ],
      techSpecs: [
        "40Cr Forged Steel with Induction-Hardened Ball Pins",
        "Extreme Temp Chloroprene & PU Dust Boots (-45°C to 150°C)",
        "Automated Laser Geometric Dimensioning (1:1 Fit)"
      ],
      climateAdvantage: "Reinforced triple-lip sand seals prevent desert dust intrusion and premature boot rupture.",
      featuredPart: "54500-C1000 / 56820-2V000"
    },
    {
      id: "braking-systems",
      title: "Braking Systems & Hydraulics",
      icon: "shield-alert",
      shortDesc: "Ultra-low dust ceramic friction formulations and precision-balanced high-carbon vented brake discs.",
      components: [
        "Ceramic & Semi-Metallic Brake Pad Sets",
        "Vented & Slotted High-Carbon Brake Rotors",
        "Brake Master Cylinders & Boosters",
        "Brake Wheel Cylinders & Heavy-Duty Caliper Kits",
        "Commercial Drum Brake Shoes (Porter / Bongo)"
      ],
      techSpecs: [
        "Friction Coefficient Class: FF / GG (Tested SAE J661)",
        "Zero Noise, Multi-Layer EPDM Anti-Squeal Shims",
        "Rotor Dynamic Balancing within 0.03mm Runout"
      ],
      climateAdvantage: "Anti-fade heat dissipation prevents brake fade during continuous 50°C+ summer stop-and-go driving.",
      featuredPart: "58101-2VA50 / 58101-D3A00"
    },
    {
      id: "engine-transmission",
      title: "Engine & Powertrain Components",
      icon: "cpu",
      shortDesc: "Complete overhaul sealing integrity, vibration-damped mountings, and high-flow coolant pumps.",
      components: [
        "Full Overhaul Cylinder Head Gasket Sets (MLS)",
        "Die-Cast High-Flow Water Pumps",
        "Hydraulic Fluid-Filled Engine & Transmission Mounts",
        "Automatic Belt Tensioner Assemblies & Pulleys",
        "Engine Timing Chain / Belt Overhaul Kits"
      ],
      techSpecs: [
        "Multi-Layer Steel Head Gaskets with Fluoroelastomer Coating",
        "Silicon-Carbide Mechanical Water Pump Dynamic Seals",
        "Heavy-Duty Hydraulic Mount Fluid Resisting Thermal Breakdown"
      ],
      climateAdvantage: "Overcomes chronic high-temperature oil oxidation and seal hardening in GCC operating conditions.",
      featuredPart: "20910-2GA02 / 25100-2B700"
    },
    {
      id: "cooling-electrical",
      title: "Cooling & Climate Electrical",
      icon: "zap",
      shortDesc: "High-capacity radiators, severe-duty AC compressors, and precision calibrated engine sensors.",
      components: [
        "Dual-Core High-Efficiency Aluminum Radiators",
        "Severe-Duty A/C Compressors & Magnetic Clutches",
        "Engine Cooling Electric Fan & Motor Assemblies",
        "OEM Direct Oxygen (O2), Crankshaft & ABS Sensors",
        "Heavy-Duty Starter Motors & High-Output Alternators"
      ],
      techSpecs: [
        "100% Helium Leak-Tested Radiator & Condenser Cores",
        "High-Displacement AC Compressors Tuned for Rapid Cabin Pull-Down",
        "Gold-Plated Sensor Terminals Preventing Oxidation"
      ],
      climateAdvantage: "Engineered specifically for peak Middle Eastern summer loads, maintaining sub-95°C engine temperatures.",
      featuredPart: "25310-D3000 / 97701-2S500"
    }
  ],

  testingStandards: [
    {
      title: "100% 1:1 OEM Fitment Benchmark",
      badge: "CAD Verified",
      desc: "Every component is verified against genuine Korean OEM samples using 3D coordinate measuring machines (CMM) to ensure flawless plug-and-play installation without modification."
    },
    {
      title: "Metallurgical & Tensile Integrity",
      badge: "Spectroscopy Certified",
      desc: "Raw forging alloys, rubber polymers, and ceramic compounds undergo strict chemical spectrometer testing and Rockwell hardness verification before and after manufacturing."
    },
    {
      title: "GCC 50°C+ Extreme Climate Chamber",
      badge: "Oman Proven",
      desc: "Continuous thermal cycling between -10°C and 115°C, 500-hour salt spray corrosion resistance, and pressurized Arizona coarse dust abrasion testing to replicate Muscat and Gulf road conditions."
    },
    {
      title: "IATF 16949 & ISO 9001 Alignment",
      badge: "Tier-1 Process",
      desc: "Factory-floor production governed by automotive tier-1 quality control standards, ensuring zero defect tolerance for global export containers."
    }
  ],

  exportDestinations: [
    { name: "Muscat / Sohar Port, Oman", transitDays: "12-14 Days", status: "Direct GCC Hub" },
    { name: "Jebel Ali Port (Dubai), UAE", transitDays: "10-12 Days", status: "GCC Major Hub" },
    { name: "Jeddah Islamic Port / Dammam, Saudi Arabia", transitDays: "14-16 Days", status: "Active Corridor" },
    { name: "Shuwaikh / Shuaiba, Kuwait", transitDays: "15-18 Days", status: "Active Corridor" },
    { name: "Hamad Port, Qatar", transitDays: "12-14 Days", status: "Active Corridor" },
    { name: "Pusan / Incheon, South Korea", transitDays: "HQ Dispatch", status: "OEM HQ Dispatch" },
    { name: "Ningbo / Guangzhou, China", transitDays: "Consolidation", status: "Direct Factory Hub" }
  ]
};

// Export to window for global browser usage
if (typeof window !== 'undefined') {
  window.YSIT_CATALOG = YSIT_CATALOG_DATA;
}
