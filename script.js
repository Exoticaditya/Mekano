/* ============================================================
   MEKANO ENGINEERING — Global JavaScript
   Nortech-Style Industrial Theme
   ============================================================ */
(function () {
  'use strict';

  const PRODUCT_CATALOG = [
    {
      id: 'valves',
      slug: 'industrial-valves',
      label: 'Industrial Valves',
      icon: 'fas fa-cogs',
      products: [
        {
          name: 'Shenco Gate Valve',
          brand: 'Shenco',
          sku: 'SH-GV-CI-PN16',
          image: 'shenco-gate-valve-500x500.jpg',
          badge: 'Best Seller',
          specs: [['Material', 'Cast Iron'], ['Size', '15-300 mm'], ['Pressure', 'PN16'], ['End', 'Flanged']]
        },
        {
          name: 'Audco Plug Valve',
          brand: 'Audco',
          sku: 'AU-PV-CI-150',
          image: 'audco-lubricated-plug-valve-500x500.jpg',
          specs: [['Material', 'Cast Iron'], ['Size', '15-300 mm'], ['Pressure', 'Class 150'], ['End', 'Flanged']]
        },
        {
          name: 'Sant Ball Valve',
          brand: 'Sant',
          sku: 'SV-BV-SE-40',
          image: 'shenco-screwed-ball-valve-500x500.jpg',
          specs: [['Material', 'Brass / SS'], ['Size', '1/4-2 in'], ['Pressure', 'PN40'], ['End', 'BSP']]
        },
        {
          name: 'L&T Butterfly Valve',
          brand: 'L&T',
          sku: 'LT-BFV-WF-PN16',
          image: 'lt-butterfly-valve-500x500.jpg',
          specs: [['Material', 'Cast Iron'], ['Size', '50-600 mm'], ['Pressure', 'PN10/16'], ['End', 'Wafer']]
        },
        {
          name: 'Casco Globe Valve',
          brand: 'Casco',
          sku: 'CA-GLV-CI-PN16',
          image: 'shenco-globe-valve-500x500.jpg',
          specs: [['Material', 'Cast Iron'], ['Size', '15-200 mm'], ['Pressure', 'PN16'], ['End', 'Flanged']]
        },
        {
          name: 'Valve Manifold Assembly',
          brand: 'Process Control',
          sku: 'VM-4WAY-SS',
          image: 'valve-manifold.webp',
          specs: [['Type', 'Multi Port'], ['Material', 'SS / Alloy'], ['Mount', 'Panel / Line'], ['Use', 'Process Isolation']]
        }
      ]
    },
    {
      id: 'pipes',
      slug: 'pipes-fittings',
      label: 'Pipes & Fittings',
      icon: 'fas fa-grip-lines',
      products: [
        {
          name: 'Jindal Hisar GI Pipe',
          brand: 'Jindal Hisar',
          sku: 'JHL-GIP-MED-25',
          image: 'galvanized-iron-pipe-500x500.jpg',
          badge: 'Trusted Brand',
          specs: [['Material', 'GI'], ['Class', 'Medium / Heavy'], ['Size', '15-150 mm'], ['Use', 'Water / Utility']]
        },
        {
          name: 'Jindal Star CS Seamless Pipe',
          brand: 'Jindal Star',
          sku: 'JST-CS-SCH40',
          image: 'cs-pipe-fittings-500x500.jpg',
          specs: [['Material', 'Carbon Steel'], ['Schedule', 'SCH 40 / 80'], ['Size', '15-300 mm'], ['Use', 'Steam / Process']]
        },
        {
          name: 'Forged Pipe Fittings',
          brand: 'Forged Steel',
          sku: 'FG-PF-800LB',
          image: 'forged-pipe-fittings-ibr-non-ibr.avif',
          specs: [['Type', 'Elbow / Tee / Union'], ['Rating', '3000-8000 LB'], ['Ends', 'NPT / SW / BW'], ['Use', 'Oil / Gas / Steam']]
        },
        {
          name: 'Seamless Pipe Fittings',
          brand: 'IBR / Non IBR',
          sku: 'SPF-IBR-BW',
          image: 'seamless-pipe-fittings-ibr-non-ibr.jpeg',
          specs: [['Type', 'Elbow / Reducer / Tee'], ['Standard', 'IBR / Non IBR'], ['Ends', 'Butt Weld'], ['Use', 'Steam / Process']]
        },
        {
          name: 'SORF Flanges',
          brand: 'Industrial Flanges',
          sku: 'SORF-RF-CS',
          image: 'flanges-sorf.jpeg',
          specs: [['Type', 'Slip On Raised Face'], ['Material', 'CS / SS'], ['Rating', 'Class 150 / 300'], ['Use', 'Piping Connections']]
        },
        {
          name: 'Weld Neck Flanges',
          brand: 'Industrial Flanges',
          sku: 'WNF-RF-CS',
          image: 'weldneck-flanges.jpeg',
          specs: [['Type', 'Weld Neck'], ['Material', 'CS / SS'], ['Rating', 'Class 150 / 300'], ['Use', 'High Pressure Lines']]
        }
      ]
    },
    {
      id: 'pneumatic',
      slug: 'pneumatic-solutions',
      label: 'Pneumatic Solutions',
      icon: 'fas fa-wind',
      products: [
        {
          name: 'FESTO DSBC Pneumatic Cylinder',
          brand: 'FESTO',
          sku: 'FST-DSBC-ISO15552',
          image: 'festo-pneumatic-cylinder-500x500.jpg',
          badge: 'Best Seller',
          specs: [['Type', 'Double Acting'], ['Bore', '12-320 mm'], ['Stroke', 'Up to 2000 mm'], ['Pressure', '0.05-10 bar']]
        },
        {
          name: 'Camozzi Compact Cylinder',
          brand: 'Camozzi',
          sku: 'CMZ-SER60-COMP',
          image: 'festo-frl-unit-500x500.jpg',
          specs: [['Type', 'Compact Cylinder'], ['Bore', '20-100 mm'], ['Stroke', '5-200 mm'], ['Pressure', '1-10 bar']]
        },
        {
          name: 'FESTO FRL Unit',
          brand: 'FESTO',
          sku: 'FST-FRL-AIRPREP',
          image: 'frl.jpeg',
          specs: [['Type', 'Filter Regulator Lubricator'], ['Filter', '5-40 micron'], ['Pressure', '1-10 bar'], ['Use', 'Air Preparation']]
        },
        {
          name: 'Solenoid Valve Manifold',
          brand: 'Automation',
          sku: 'SOL-MNF-08',
          image: 'solenoid-valve.jpeg',
          specs: [['Type', 'Valve Manifold'], ['Ports', '4 / 6 / 8'], ['Control', '24V DC'], ['Use', 'Machine Automation']]
        },
        {
          name: 'Hand Lever Valve',
          brand: 'Pneumatic Controls',
          sku: 'HLV-5PORT-MAN',
          image: 'hand-lever.jpeg',
          specs: [['Type', 'Manual Hand Lever'], ['Ports', '3 / 5 Port'], ['Pressure', '2-10 bar'], ['Use', 'Directional Control']]
        },
        {
          name: 'PU Fittings',
          brand: 'Automation',
          sku: 'PUF-QC-SET',
          image: 'pu-fittings.jpeg',
          specs: [['Type', 'Push-In Fittings'], ['Tube Size', '4-16 mm'], ['Material', 'Nickel Plated Brass'], ['Use', 'Air Lines']]
        },
        {
          name: 'PU Pipes',
          brand: 'Automation',
          sku: 'PUP-8MM-BLU',
          image: 'pu-pipes.jpeg',
          specs: [['Type', 'Polyurethane Tube'], ['Size', '4-16 mm'], ['Pressure', 'Up to 10 bar'], ['Use', 'Compressed Air']]
        },
        {
          name: 'Moisture Separator',
          brand: 'Air Prep',
          sku: 'MS-AIR-LINE',
          image: 'moisture-separator.jpg',
          specs: [['Type', 'Line Moisture Separator'], ['Connection', '1/4-1 in'], ['Pressure', 'Up to 10 bar'], ['Use', 'Clean Dry Air']]
        }
      ]
    },
    {
      id: 'gaskets',
      slug: 'jointings-packing',
      label: 'Jointings & Packing',
      icon: 'fas fa-ring',
      products: [
        {
          name: 'Spitmaan PTFE Gland Packing',
          brand: 'Spitmaan',
          sku: 'SP-GP-PTFE-3105',
          image: 'ptfe-gland-packing-500x500.jpg',
          badge: 'Authorised Dealer',
          specs: [['Material', 'Expanded PTFE'], ['Temp', '-200°C to +260°C'], ['Pressure', 'Up to 200 bar'], ['Use', 'Valves / Pumps']]
        },
        {
          name: 'Unik Rubber Sheet',
          brand: 'Unik',
          sku: 'UN-RS-NR-6MM',
          image: 'ptft-thread-seal-tape-500x500.jpg',
          specs: [['Grades', 'NR / NBR / Neoprene'], ['Hardness', '40-80 Shore A'], ['Thickness', '1-25 mm'], ['Width', 'Up to 1500 mm']]
        },
        {
          name: 'Spitmaan Jointing Sheet',
          brand: 'Spitmaan',
          sku: 'SP-JS-IND',
          image: 'spitman-jointing-sheets.jpg',
          specs: [['Type', 'Compressed Sheet'], ['Temp', 'Up to 400°C'], ['Use', 'Flange Sealing'], ['Media', 'Steam / Oil / Water']]
        },
        {
          name: 'Non Asbestos Gasket Sheet',
          brand: 'Industrial Gaskets',
          sku: 'NAGS-1500',
          image: 'gasket-sheet-non-asbestos.jpg',
          specs: [['Type', 'Non Asbestos'], ['Thickness', '0.5-6 mm'], ['Use', 'Flange Sealing'], ['Media', 'Oil / Water / Steam']]
        },
        {
          name: 'Cut Gaskets',
          brand: 'Industrial Gaskets',
          sku: 'CG-CUSTOM',
          image: 'cut-gaskets.jpg',
          specs: [['Type', 'Custom Cut'], ['Material', 'CAF / Rubber / PTFE'], ['Use', 'Static Sealing'], ['Supply', 'As Per Drawing']]
        },
        {
          name: 'Spiral Wound Gasket',
          brand: 'Industrial Gaskets',
          sku: 'SWG-SS-GRA',
          image: 'spiral-wound-gasket.png',
          specs: [['Type', 'Spiral Wound'], ['Material', 'SS + Graphite'], ['Rating', 'Class 150-2500'], ['Use', 'High Temp Service']]
        },
        {
          name: 'PTFE Tape',
          brand: 'Thread Seal',
          sku: 'PTFE-TS-12M',
          image: 'ptfe-tape.jpeg',
          specs: [['Type', 'Thread Seal Tape'], ['Density', 'High Density'], ['Width', '12-25 mm'], ['Use', 'Leak Proof Joints']]
        }
      ]
    },
    {
      id: 'instruments',
      slug: 'instruments-meters',
      label: 'Instruments & Meters',
      icon: 'fas fa-tachometer-alt',
      products: [
        {
          name: 'Racer SS Reflex Sight Glass',
          brand: 'Racer',
          sku: 'RC-SG-SS-25',
          image: 'racer-ss-view-sight-glass-500x500.jpg',
          badge: 'Trusted Brand',
          specs: [['Type', 'Reflex In-Line'], ['Body', 'SS 304'], ['Pressure', 'Up to 64 bar'], ['Size', 'DN 15-50']]
        },
        {
          name: 'Racer Water Level Gauge Valve',
          brand: 'Racer',
          sku: 'RC-WLG-CS-25',
          image: 'water-level-gauge-valve-500x500.jpg',
          specs: [['Type', 'Bi-colour'], ['Body', 'CS / SS'], ['Pressure', 'PN16'], ['Size', 'DN 15-50']]
        },
        {
          name: 'Electromagnetic Flow Meter',
          brand: 'Process Instruments',
          sku: 'EMF-REMOTE-DN50',
          image: 'electromagnetic-flow-meter.webp',
          specs: [['Type', 'Remote Type'], ['Line Size', 'DN 15-600'], ['Output', '4-20 mA'], ['Use', 'Water / Effluent']]
        },
        {
          name: 'Ultrasonic Level Transmitter',
          brand: 'Process Instruments',
          sku: 'ULT-LEVEL-IP68',
          image: 'ultrasonic-level-transmitter.webp',
          specs: [['Type', 'Non Contact'], ['Range', '0.3-15 m'], ['Output', '4-20 mA / HART'], ['Use', 'Tank Level']]
        },
        {
          name: 'Ultrasonic Water Meter',
          brand: 'Process Instruments',
          sku: 'UWM-DN50-BAT',
          image: 'ultrasonic-water-meter.webp',
          specs: [['Type', 'Digital Water Meter'], ['Line Size', 'DN 15-200'], ['Display', 'LCD'], ['Use', 'Water Monitoring']]
        }
      ]
    },
    {
      id: 'motors',
      slug: 'electric-motors',
      label: 'Electric Motors',
      icon: 'fas fa-bolt',
      products: [
        {
          name: 'ABB IE3 Motor',
          brand: 'ABB',
          sku: 'ABB-M2BAX-IE3',
          image: 'lv-electric-induction-motors-500x500.jpg',
          badge: 'Best Seller',
          specs: [['Type', '3-Phase'], ['Efficiency', 'IE3'], ['Power', '0.18-315 kW'], ['Voltage', '415V']]
        },
        {
          name: 'Siemens SIMOTICS GP',
          brand: 'Siemens',
          sku: 'SIE-SIMOTICS-GP',
          image: 'single-phase-induction-motor-500x500.jpg',
          specs: [['Type', 'Squirrel Cage'], ['Efficiency', 'IE2 / IE3'], ['Power', '0.09-400 kW'], ['Voltage', '230-690V']]
        },
        {
          name: 'Havells IE2 Motor',
          brand: 'Havells',
          sku: 'HAV-IE2-TEFC',
          image: 'havells-motors.jpg',
          specs: [['Type', 'TEFC'], ['Efficiency', 'IE2'], ['Power', '0.18-315 kW'], ['Voltage', '415V']]
        },
        {
          name: 'Three Phase Electric Motor',
          brand: 'Industrial Motors',
          sku: 'TPM-415V-TEFC',
          image: 'three-phase-electric-motor.jpg',
          specs: [['Type', '3-Phase'], ['Frame', 'IEC Standard'], ['Power', '0.25-30 HP'], ['Use', 'Pumps / Blowers']]
        },
        {
          name: 'Induction Motor',
          brand: 'Industrial Motors',
          sku: 'IND-MTR-STD',
          image: 'induction-motor.jpg',
          specs: [['Type', 'AC Induction'], ['Phase', 'Single / Three'], ['Duty', 'S1'], ['Use', 'General Industry']]
        }
      ]
    },
    {
      id: 'hoses',
      slug: 'flexible-hose-pipes',
      label: 'Flexible Hose Pipes',
      icon: 'fas fa-water',
      products: [
        {
          name: 'Flexible Industrial Pipe',
          brand: 'Industrial Hose',
          sku: 'FLEX-PIPE-IND',
          image: 'flexible-pipes.jpeg',
          badge: 'New Arrival',
          specs: [['Type', 'Flexible Hose Pipe'], ['Bore', '1/2-4 in'], ['Pressure', '10-40 bar'], ['Use', 'Air / Water / Utility']]
        },
        {
          name: 'Unik Rubber Hose Pipe',
          brand: 'Unik',
          sku: 'UN-RH-IND',
          image: 'newage-fire-hose-500x500.jpg',
          specs: [['Type', 'Industrial Rubber'], ['Bore', '6-100 mm'], ['Pressure', '10-40 bar'], ['Use', 'Water / Oil / Air']]
        },
        {
          name: 'SS Braided Flexible Hose',
          brand: 'Unik',
          sku: 'UN-SS-FLEX',
          image: 'newage-fire-hose-500x500.jpg',
          specs: [['Material', 'SS 304 / 316'], ['Pressure', 'PN16'], ['Ends', 'BSP / Flanged'], ['Use', 'Steam / Chemical']]
        }
      ]
    },
    {
      id: 'gearboxes',
      slug: 'gearboxes',
      label: 'Gearboxes',
      icon: 'fas fa-dharmachakra',
      products: [
        {
          name: 'Helical Gearbox',
          brand: 'Shanthi',
          sku: 'SG-HL-RX',
          image: 'gearbox.jpg',
          specs: [['Type', 'Helical'], ['Ratio', '3:1 to 500:1'], ['Mount', 'Foot / Flange'], ['Use', 'Conveyors / Mixers']]
        },
        {
          name: 'Worm Gearbox',
          brand: 'Shanthi',
          sku: 'SG-WM-NMRV',
          image: 'worm-gear-box-500x500.jpg',
          specs: [['Type', 'Worm Reduction'], ['Ratio', '5:1 to 100:1'], ['Mount', 'Hollow / Solid'], ['Use', 'Packaging / Handling']]
        },
        {
          name: 'Geared Motor',
          brand: 'Shanthi',
          sku: 'GM-HEL-IEC',
          image: 'geared-motor.jpg',
          specs: [['Type', 'Integrated Gear Motor'], ['Mount', 'Foot / Flange'], ['Power', '0.25-10 HP'], ['Use', 'Conveyors / Feeders']]
        },
        {
          name: 'Industrial Gears',
          brand: 'Power Transmission',
          sku: 'GR-SPUR-HEL',
          image: 'gears.jpg',
          specs: [['Type', 'Spur / Helical'], ['Material', 'EN8 / EN19'], ['Module', 'As Required'], ['Use', 'Machine Transmission']]
        }
      ]
    },
    {
      id: 'chains',
      slug: 'chains-sprockets',
      label: 'Chains & Sprockets',
      icon: 'fas fa-link',
      products: [
        {
          name: 'Diamond Roller Chain',
          brand: 'Diamond',
          sku: 'DM-10B-1',
          image: 'diamond-roller-chain-500x500.jpg',
          specs: [['Type', 'Standard Roller'], ['Pitch', '06B-24B'], ['Material', 'Alloy Steel'], ['Use', 'Transmission']]
        },
        {
          name: 'Industrial Chain Sprocket',
          brand: 'Power Transmission',
          sku: 'SPKT-IND-12T',
          image: 'chain-sprockets.jpg',
          specs: [['Teeth', '12-120'], ['Material', 'C45 / EN8'], ['Pitch', 'ASA / BS'], ['Use', 'Drive Systems']]
        },
        {
          name: 'DRP Transmission Chain',
          brand: 'DRP',
          sku: 'DRP-TR-STD',
          image: 'industrial-chain-sprocket-500x500.jpg',
          specs: [['Type', 'Transmission'], ['Series', 'Simplex / Duplex'], ['Material', 'Heat Treated'], ['Use', 'Conveying / Drives']]
        }
      ]
    },
    {
      id: 'pulleys',
      slug: 'chain-pulley-blocks',
      label: 'Chain Pulley Blocks',
      icon: 'fas fa-arrow-up',
      products: [
        {
          name: 'Indef Chain Pulley Block',
          brand: 'Bajaj Indef',
          sku: 'INDEF-CPB-1T',
          image: 'indef-chain-pulley-block-500x500.jpg',
          badge: 'Authorised Dealer',
          specs: [['Capacity', '0.5-20T'], ['Lift', '3m Std'], ['Type', 'Manual'], ['Grade', 'IS 10973']]
        },
        {
          name: 'Indef Electric Chain Hoist',
          brand: 'Bajaj Indef',
          sku: 'INDEF-ECH-1T',
          image: 'chain-hoist.webp',
          specs: [['Capacity', '0.5-5T'], ['Power', '415V'], ['Lift', '3m Std'], ['Grade', 'IS 3938']]
        },
        {
          name: 'Hand Lever Hoist',
          brand: 'Material Handling',
          sku: 'HLH-1.5T',
          image: 'hand-lever.jpeg',
          specs: [['Capacity', '0.75-9T'], ['Lift', '1.5m / 3m'], ['Type', 'Ratchet Lever'], ['Use', 'Pulling / Lifting']]
        },
        {
          name: 'Manual Chain Pulley Block',
          brand: 'Material Handling',
          sku: 'MCPB-1T',
          image: 'manual-chain-pulley-block.webp',
          specs: [['Capacity', '0.5-10T'], ['Lift', '3m Std'], ['Type', 'Manual'], ['Use', 'Workshop / Site']]
        }
      ]
    }
  ];

  const BULK_IMPORTED_SOURCE_FILES = [
    'Asbestos Gaskets.jpg',
    'Asbestos Rope.jpeg',
    'Asbestos Tape(Textile).jpg',
    'Asbestos Yarn.jpeg',
    'BFV Foot Valve.jpg',
    'Brass Balancing Valve.jpg',
    'Brass Pressure Reducing Valve.jpg',
    'Bronze Fusible Plug.jpg',
    'Bronze Safety Valve.jpg',
    'Bronze Sleeve Packed Water Level Gauge.jpg',
    'C.I. T Strainer.jpg',
    'Cast Iron Pressure Reducing Valve.jpg',
    'Cast Iron Reflux Valve, Swing Check Type (Non Return Valve).jpg',
    'Cast Iron Vertical Inverted Steam Trap.jpg',
    'Cast Iron Wedge Sluice Valve.jpg',
    'Cast Iron Y Type Strainer.jpg',
    'Cast Steel Ball Valve.jpg',
    'Cast Steel Globe Valve.jpg',
    'Cast Steel Parallel Slide Blow off Valve.jpg',
    'Cast Steel Sleeve Packed Water Level Gauge.jpg',
    'Cast Steel Swing Check Valve.jpg',
    'Cast Steel Y-Type Strainer.jpg',
    'Chain Hoist.webp',
    'Check Valve.jpg',
    'Check Valve_.jpg',
    'CI Ball Valve.jpg',
    'CI Safety Valve.jpg',
    'Cut Gaskets.jpg',
    'Ductile Iron Balancing Valve.jpg',
    'Electric Hoist.webp',
    'Electromagnetic Flow Meter.webp',
    'Flanges SORF.jpeg',
    'Flexible Pipes.jpeg',
    'Forged Pipe Fittings ( IBR & Non IBR).avif',
    'FRL.jpeg',
    'Gasket Sheet Non Asbestos.jpg',
    'Gate Valve.jpg',
    'Geared Motor.jpg',
    'Gears.jpg',
    'Gears_.jpg',
    'Gland Packing_.jpg',
    'Hand Lever.jpeg',
    'Induction Motor.jpg',
    'Investment Casting Ball Valve.jpg',
    'Jointings.png',
    'Manual Chain Pulley Block.webp',
    'Moisture Separator.jpg',
    'Motors -Double Phase.webp',
    'PTFE Gland Packing Black.png',
    'PTFE Gland Packing.png',
    'PTFE Tape.jpeg',
    'PU Fittings.jpeg',
    'PU Pipes.jpeg',
    'Seamless Pipe Fittings (IBR & Non IBR).jpeg',
    'Seamless Pipe Fittings.jpeg',
    'Single Plate Check Valve.jpg',
    'Solenoid Valve.jpeg',
    'Spiral Wound Gasket.png',
    'SS Ball Valve.jpg',
    'Stainless Steel Steam Trap.jpg',
    'Strainer.jpeg',
    'Three Phase Electric Motor.jpg',
    'Ultrasonic Level Transmitter.webp',
    'Ultrasonic Water Meter.webp',
    'Weldneck  Flanges.jpeg'
  ];

  const BULK_FILENAME_OVERRIDES = {
    'Check Valve_.jpg': 'check-valve-alt.jpg',
    'Gears_.jpg': 'gears-alt.jpg',
    'Forged Pipe Fittings ( IBR & Non IBR).avif': 'forged-pipe-fittings-ibr-non-ibr.avif',
    'Seamless Pipe Fittings (IBR & Non IBR).jpeg': 'seamless-pipe-fittings-ibr-non-ibr.jpeg',
    'Weldneck  Flanges.jpeg': 'weldneck-flanges.jpeg'
  };

  function sourceToAssetFileName(sourceFile) {
    if (BULK_FILENAME_OVERRIDES[sourceFile]) return BULK_FILENAME_OVERRIDES[sourceFile];

    const lastDot = sourceFile.lastIndexOf('.');
    const ext = lastDot >= 0 ? sourceFile.slice(lastDot).toLowerCase() : '';
    const base = (lastDot >= 0 ? sourceFile.slice(0, lastDot) : sourceFile).toLowerCase();
    const slug = base
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    return `${slug || 'item'}${ext}`;
  }

  function sourceToProductName(sourceFile) {
    const lastDot = sourceFile.lastIndexOf('.');
    const base = lastDot >= 0 ? sourceFile.slice(0, lastDot) : sourceFile;
    return base
      .replace(/_/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function inferBulkCategoryId(sourceFile) {
    const lower = sourceFile.toLowerCase();

    if (/frl|solenoid|moisture separator|pu fittings|pu pipes|hand lever/.test(lower)) return 'pneumatic';
    if (/flexible pipes|hose/.test(lower)) return 'hoses';
    if (/gasket|packing|jointings|ptfe|asbestos|rope|tape|yarn/.test(lower)) return 'gaskets';
    if (/meter|transmitter|water level gauge/.test(lower)) return 'instruments';
    if (/geared motor|gears/.test(lower)) return 'gearboxes';
    if (/motor/.test(lower)) return 'motors';
    if (/chain hoist|electric hoist|pulley block/.test(lower)) return 'pulleys';
    if (/flange|fittings|seamless pipe|weldneck|sorf/.test(lower)) return 'pipes';
    if (/valve|strainer|steam trap|fusible plug|reflux|sluice|check/.test(lower)) return 'valves';

    return 'valves';
  }

  function bulkBrandByCategory(categoryId) {
    const brands = {
      valves: 'Industrial Valves',
      pipes: 'Piping Components',
      pneumatic: 'Pneumatic Controls',
      gaskets: 'Sealing Solutions',
      instruments: 'Process Instruments',
      motors: 'Industrial Motors',
      hoses: 'Industrial Hose',
      gearboxes: 'Power Transmission',
      chains: 'Power Transmission',
      pulleys: 'Material Handling'
    };

    return brands[categoryId] || 'Industrial Products';
  }

  function bulkSpecsByCategory(categoryId) {
    const specs = {
      valves: [['Type', 'Industrial'], ['Material', 'CS / SS / CI'], ['Pressure', 'As Required'], ['Use', 'Flow Control']],
      pipes: [['Type', 'Pipe / Fittings'], ['Material', 'CS / SS / Alloy'], ['Rating', 'As Required'], ['Use', 'Piping Systems']],
      pneumatic: [['Type', 'Pneumatic Component'], ['Pressure', '2-10 bar'], ['Connection', 'Standard'], ['Use', 'Automation']],
      gaskets: [['Type', 'Sealing Product'], ['Temp', 'As Required'], ['Thickness', 'Standard'], ['Use', 'Leak Prevention']],
      instruments: [['Type', 'Instrumentation'], ['Output', 'Standard'], ['Connection', 'Process'], ['Use', 'Monitoring']],
      motors: [['Type', 'Electric Motor'], ['Phase', 'Single / Three'], ['Power', 'As Required'], ['Use', 'Industrial Drives']],
      hoses: [['Type', 'Flexible Hose'], ['Bore', 'As Required'], ['Pressure', 'As Required'], ['Use', 'Fluid Transfer']],
      gearboxes: [['Type', 'Transmission Component'], ['Material', 'Alloy Steel'], ['Ratio', 'As Required'], ['Use', 'Power Transmission']],
      chains: [['Type', 'Chain / Sprocket'], ['Material', 'Alloy Steel'], ['Pitch', 'Standard'], ['Use', 'Transmission']],
      pulleys: [['Type', 'Lifting Equipment'], ['Capacity', 'As Required'], ['Lift', 'Standard'], ['Use', 'Material Handling']]
    };

    return specs[categoryId] || [['Type', 'Industrial Product'], ['Grade', 'Standard'], ['Supply', 'As Required'], ['Use', 'Industrial']];
  }

  function createBulkSku(name, index) {
    const token = name
      .replace(/[^a-zA-Z0-9]+/g, ' ')
      .trim()
      .split(/\s+/)
      .slice(0, 3)
      .map(part => part.slice(0, 3).toUpperCase())
      .join('');

    return `IMP-${token || 'PRD'}-${String(index + 1).padStart(3, '0')}`;
  }

  function appendBulkImportedProducts() {
    const categoryById = Object.fromEntries(PRODUCT_CATALOG.map(category => [category.id, category]));
    const existingNames = new Set(
      PRODUCT_CATALOG.flatMap(category => category.products.map(product => product.name.toLowerCase()))
    );
    const existingImages = new Set(
      PRODUCT_CATALOG.flatMap(category => category.products.map(product => product.image.toLowerCase()))
    );

    BULK_IMPORTED_SOURCE_FILES.forEach((sourceFile, index) => {
      const name = sourceToProductName(sourceFile);
      const image = sourceToAssetFileName(sourceFile);
      const nameKey = name.toLowerCase();
      const imageKey = image.toLowerCase();

      if (existingNames.has(nameKey) || existingImages.has(imageKey)) return;

      const categoryId = inferBulkCategoryId(sourceFile);
      const category = categoryById[categoryId] || categoryById.valves;
      if (!category) return;

      category.products.push({
        name,
        brand: bulkBrandByCategory(category.id),
        sku: createBulkSku(name, index),
        image,
        specs: bulkSpecsByCategory(category.id)
      });

      existingNames.add(nameKey);
      existingImages.add(imageKey);
    });
  }

  appendBulkImportedProducts();

  const CATEGORY_BY_SLUG = Object.fromEntries(PRODUCT_CATALOG.map(category => [category.slug, category]));

  function getOriginPath() {
    const homeLink = document.querySelector('.main-nav > li > a[href*="index.html"]');
    if (!homeLink) return '';
    const href = homeLink.getAttribute('href') || '';
    return href.replace(/index\.html(?:#.*)?$/, '');
  }

  function assetPath(originPath, fileName) {
    return `${originPath}assets/products/${fileName}`;
  }

  function categoryPath(originPath, slug) {
    return `${originPath}products/${slug}/index.html`;
  }

  function normalizeLocalAssetPaths(originPath) {
    document.querySelectorAll('img[src^="/assets/"]').forEach(img => {
      img.src = `${originPath}${img.getAttribute('src').replace(/^\//, '')}`;
    });

    document.querySelectorAll('[style*="/assets/"]').forEach(el => {
      const bg = el.style.backgroundImage;
      if (bg && bg.includes('/assets/')) {
        el.style.backgroundImage = bg.replace(/url\((["']?)\/assets\//g, `url($1${originPath}assets/`);
      }
    });
  }

  function buildMegaMenu(originPath) {
    const categoriesHtml = PRODUCT_CATALOG.map((category, index) => `
      <div class="mega-cat-item ${index === 0 ? 'active' : ''}" data-cat="${category.id}">
        <i class="${category.icon}"></i>
        <span>${category.label}</span>
        <small class="mega-cat-count">${category.products.length}</small>
        <span class="arrow"><i class="fas fa-chevron-right"></i></span>
      </div>`).join('');

    const panelsHtml = PRODUCT_CATALOG.map((category, index) => {
      const productCards = category.products.map(product => `
        <a href="${categoryPath(originPath, category.slug)}" class="mega-product-card">
          <img loading="lazy" src="${assetPath(originPath, product.image)}" alt="${product.name}">
          <span>${product.name}</span>
        </a>`).join('');

      return `<div class="mega-products-grid ${index === 0 ? 'active' : ''}" data-panel="${category.id}">${productCards}</div>`;
    }).join('');

    return `
      <div class="mega-menu" id="megaMenu">
        <div class="mega-menu-inner">
          <div class="mega-menu-categories" id="megaCats">${categoriesHtml}</div>
          <div class="mega-menu-products">${panelsHtml}</div>
        </div>
        <div class="mega-menu-footer">
          <span>Explore our full industrial product range</span>
          <a href="${originPath}products/index.html">View All Products &#8594;</a>
        </div>
      </div>`;
  }

  function enhanceProductsNav(originPath) {
    const mainNav = document.getElementById('mainNav');
    if (!mainNav) return;

    const productLi = Array.from(mainNav.children).find(li => {
      const anchor = li.querySelector(':scope > a');
      return anchor && anchor.textContent.replace(/\s+/g, ' ').trim().startsWith('PRODUCTS');
    });

    if (!productLi) return;

    const isProductsArea = window.location.pathname.replace(/\\/g, '/').includes('/products/');
    const productsHref = `${originPath}products/index.html`;

    productLi.innerHTML = `
      <a href="${productsHref}"${isProductsArea ? ' class="active"' : ''}>PRODUCTS <i class="fas fa-chevron-down"></i></a>
      ${buildMegaMenu(originPath)}`;
  }

  function createPrimaryQuoteButton(label, productName, variant) {
    if (variant === 'prod') {
      return `<a href="#quoteModal" class="btn-quote-sm" data-modal="quoteModal" data-product="${productName}">${label}</a>`;
    }
    return `<a href="#quoteModal" class="btn-q" data-modal="quoteModal" data-product="${productName}">${label}</a>`;
  }

  function renderProductCard(category, product, variant, originPath) {
    const specsHtml = product.specs.map(([key, value]) => {
      if (variant === 'prod') {
        return `<div><span class="spec-label">${key}</span><span class="spec-value">${value}</span></div>`;
      }
      return `<div><span class="sp-lbl">${key}</span><span class="sp-val">${value}</span></div>`;
    }).join('');

    if (variant === 'prod') {
      return `
        <div class="prod-card">
          <div class="prod-card-img">
            <img loading="lazy" src="${assetPath(originPath, product.image)}" alt="${product.name}">
            ${product.badge ? `<span class="prod-card-badge">${product.badge}</span>` : ''}
          </div>
          <div class="prod-card-body">
            <div><span class="prod-card-brand">${product.brand}</span>${product.sku ? `<span class="prod-card-sku">${product.sku}</span>` : ''}</div>
            <h3>${product.name}</h3>
            <div class="prod-card-specs">${specsHtml}</div>
            <div class="prod-card-actions single-action">
              ${createPrimaryQuoteButton('Get Quote', product.name, 'prod')}
            </div>
          </div>
        </div>`;
    }

    return `
      <div class="prd-card">
        <div class="prd-img">
          <img loading="lazy" src="${assetPath(originPath, product.image)}" alt="${product.name}">
          ${product.badge ? `<span class="prd-badge">${product.badge}</span>` : ''}
        </div>
        <div class="prd-body">
          <div><span class="prd-brand">${product.brand}</span>${product.sku ? `<span class="prd-sku">${product.sku}</span>` : ''}</div>
          <h3>${product.name}</h3>
          <div class="prd-specs">${specsHtml}</div>
          <div class="prd-card-btns single-action">
            ${createPrimaryQuoteButton('Get Quote', product.name, 'prd')}
          </div>
        </div>
      </div>`;
  }

  function renderCategoryListings(originPath) {
    const path = window.location.pathname
      .replace(/\\/g, '/')
      .replace(/\/index\.html$/, '')
      .replace(/\/+$/, '');
    const match = path.match(/\/products\/([^/]+)$/);
    if (!match) return;

    const category = CATEGORY_BY_SLUG[match[1]];
    if (!category) return;

    const prodGrid = document.querySelector('.products-grid');
    if (prodGrid) {
      prodGrid.innerHTML = category.products.map(product => renderProductCard(category, product, 'prod', originPath)).join('');
    }

    const prdGrid = document.querySelector('.prd-grid');
    if (prdGrid) {
      prdGrid.innerHTML = category.products.map(product => renderProductCard(category, product, 'prd', originPath)).join('');
    }

    document.querySelectorAll('.count-badge, .cnt').forEach(el => {
      el.textContent = `${category.products.length} Products`;
    });
  }

  function updateProductsLandingCounts() {
    const path = window.location.pathname
      .replace(/\\/g, '/')
      .replace(/\/index\.html$/, '')
      .replace(/\/+$/, '');
    if (!/\/products$/.test(path)) return;

    document.querySelectorAll('.cat-card').forEach(card => {
      const href = card.getAttribute('href') || '';
      const match = href.match(/([^/]+)\/index\.html$/);
      if (!match) return;
      const category = CATEGORY_BY_SLUG[match[1]];
      if (!category) return;
      const countEl = card.querySelector('.cat-count');
      if (countEl) countEl.textContent = `${category.products.length} Products`;
    });
  }

  function redirectLegacyProductDetails(originPath) {
    const path = window.location.pathname
      .replace(/\\/g, '/')
      .replace(/\/index\.html$/, '')
      .replace(/\/+$/, '');
    const match = path.match(/\/products\/([^/]+)\/[^/]+$/);
    if (!match) return;

    window.location.replace(categoryPath(originPath, match[1]));
  }

  function removeLanguageUi() {
    document.querySelectorAll('.lang-switcher, #google_translate_element, .goog-te-banner-frame, .goog-te-gadget').forEach(el => {
      el.remove();
    });
  }

  // ---- HEADER SCROLL ----
  const header = document.getElementById('header');
  const backToTop = document.getElementById('backToTop');

  function onScroll() {
    const y = window.scrollY;
    if (header) header.classList.toggle('scrolled', y > 60);
    if (backToTop) backToTop.classList.toggle('visible', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const originPath = getOriginPath();
  removeLanguageUi();
  normalizeLocalAssetPaths(originPath);
  enhanceProductsNav(originPath);
  renderCategoryListings(originPath);
  updateProductsLandingCounts();
  redirectLegacyProductDetails(originPath);

  // ---- MOBILE NAV ----
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const navInner = document.querySelector('.navbar-inner');

  // Overlay backdrop to close mobile nav on outside click
  let navOverlay = document.getElementById('navOverlay');
  if (!navOverlay) {
    navOverlay = document.createElement('div');
    navOverlay.id = 'navOverlay';
    navOverlay.style.cssText = 'display:none;position:fixed;inset:0;z-index:9998;background:rgba(0,0,0,.45);';
    document.body.appendChild(navOverlay);
  }

  function closeNav() {
    if (navToggle) navToggle.classList.remove('active');
    if (mainNav) mainNav.classList.remove('open');
    navOverlay.style.display = 'none';
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const opening = !mainNav.classList.contains('open');
      navToggle.classList.toggle('active');
      mainNav.classList.toggle('open');
      navOverlay.style.display = opening ? 'block' : 'none';
    });

    navOverlay.addEventListener('click', closeNav);

    // Mobile sub-menu toggles
    mainNav.querySelectorAll('.main-nav > li').forEach(li => {
      const sub = li.querySelector('.mega-menu, .dropdown');
      if (!sub) return;
      li.querySelector(':scope > a').addEventListener('click', e => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          li.classList.toggle('open');
        }
      });
    });
  }

  // ---- MEGA MENU HOVER + CLICK (Desktop & Mobile) ----
  const megaCats = document.getElementById('megaCats');
  if (megaCats) {
    const items = megaCats.querySelectorAll('.mega-cat-item');
    const panels = document.querySelectorAll('.mega-products-grid');

    const catLinks = Object.fromEntries(PRODUCT_CATALOG.map(category => [category.id, categoryPath(originPath, category.slug)]));

    items.forEach(item => {
      // Desktop: hover switches product panel
      item.addEventListener('mouseenter', () => {
        items.forEach(i => i.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        item.classList.add('active');
        const cat = item.dataset.cat;
        const target = document.querySelector(`.mega-products-grid[data-panel="${cat}"]`);
        if (target) target.classList.add('active');
      });

      // Desktop + Mobile: click navigates to category page
      item.addEventListener('click', () => {
        const link = catLinks[item.dataset.cat];
        if (link) window.location.href = link;
      });

      // Make cursor look clickable
      item.style.cursor = 'pointer';
    });
  }

  // ---- MODAL ----
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.preventDefault();
      const id = trigger.dataset.modal || trigger.getAttribute('href')?.replace('#', '');
      const modal = document.getElementById(id);
      const productInput = document.getElementById('quoteProduct');
      if (productInput && trigger.dataset.product) {
        productInput.value = trigger.dataset.product;
      }
      if (modal) modal.classList.add('active');
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal-overlay')?.classList.remove('active');
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  });

  // Esc to close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
    }
  });

  // ---- COUNTER ANIMATION ----
  function animateCounters() {
    document.querySelectorAll('.counter').forEach(el => {
      if (el.dataset.animated) return;
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;

      el.dataset.animated = '1';
      const target = parseInt(el.dataset.target, 10);
      el.textContent = '0'; // reset before animating (HTML default = fallback for no-JS)
      const duration = 2000;
      const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * ease);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }
  window.addEventListener('scroll', animateCounters, { passive: true });
  animateCounters();

  // ---- SCROLL REVEAL ----
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ---- BACK TO TOP ----
  if (backToTop) {
    backToTop.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- ACTIVE NAV HIGHLIGHT ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav > li > a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPage = href.split('/').pop();
    if (currentPage === linkPage) {
      link.classList.add('active');
    } else if (currentPage !== 'index.html' && href.includes('products') && window.location.pathname.includes('products')) {
      link.classList.add('active');
    }
  });

  // ---- QUOTE MODAL — PRE-FILL PRODUCT ----
  window.openQuoteFor = function (productName) {
    const modal = document.getElementById('quoteModal');
    const input = document.getElementById('quoteProduct');
    if (modal) modal.classList.add('active');
    if (input && productName) input.value = productName;
  };

})();
