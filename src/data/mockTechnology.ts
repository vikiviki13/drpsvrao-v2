import { TechnologyData } from '../types';

export const laparoscopyData: TechnologyData = {
  id: 'laparoscopy',
  title: 'Laparoscopy',
  subtitle: 'Minimally invasive surgical techniques with advanced visualization.',
  heroImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000',
  overview: {
    description: 'Laparoscopy is a minimally invasive surgical technique that uses a laparoscope—a thin, lighted tube with a high-resolution camera—to view the abdominal and pelvic cavities. This approach eliminates the need for large incisions, significantly reducing patient trauma and recovery time.',
    highlights: [
      { title: 'Incision Size', value: '0.5 - 1.5 cm' },
      { title: 'Recovery Time', value: 'Up to 50% Faster' },
      { title: 'Visualization', value: '4K Ultra HD' }
    ]
  },
  howItWorks: {
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1000',
    steps: [
      { title: 'Incision & Access', description: 'Small keyhole incisions are made to insert trocars, providing access ports for instruments.' },
      { title: 'Insufflation', description: 'The cavity is inflated with CO2 gas to create a working space and improve visibility.' },
      { title: 'Visualization', description: 'A high-definition laparoscope is inserted, transmitting real-time video to surgical monitors.' },
      { title: 'Intervention', description: 'Specialized elongated instruments are used to perform the procedure with high precision.' }
    ]
  },
  useCases: [
    { title: 'Cholecystectomy', description: 'Removal of the gallbladder, typically for gallstones.' },
    { title: 'Appendectomy', description: 'Surgical removal of an infected appendix.' },
    { title: 'Hernia Repair', description: 'Fixing abdominal wall weaknesses using mesh.' },
    { title: 'Bariatric Surgery', description: 'Gastric bypass and sleeve gastrectomy procedures.' }
  ],
  equipment: [
    { name: 'Nexus 4K Laparoscope', category: 'Visualization', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' },
    { name: 'AeroFlow Insufflator', category: 'Gas Management', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800' },
    { name: 'Precision Trocars', category: 'Access', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800' }
  ],
  benefits: [
    { title: 'Bloodless Surgery', description: 'Advanced sealing devices and small incisions minimize blood loss.', iconName: 'Droplet' },
    { title: 'High Precision', description: 'Magnified 4K vision allows for meticulous dissection of tissues.', iconName: 'Crosshair' },
    { title: 'Faster Recovery', description: 'Reduced tissue trauma leads to shorter hospital stays and quicker return to normal activities.', iconName: 'Activity' },
    { title: 'Minimal Scarring', description: 'Keyhole incisions result in significantly better cosmetic outcomes.', iconName: 'Sparkles' }
  ],
  media: [
    { type: 'video', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800', title: 'Laparoscopic Cholecystectomy Demo', duration: '4:15' },
    { type: 'image', url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800', title: 'OR Setup' },
    { type: 'video', url: 'https://images.unsplash.com/photo-1582719478250-c89400bbbfc5?auto=format&fit=crop&q=80&w=800', title: 'Instrument Handling Guide', duration: '2:30' }
  ],
  specialties: [
    'General Surgery', 'Gynecology', 'Urology', 'Gastroenterology', 'Bariatrics'
  ]
};

export const endoscopyData: TechnologyData = {
  id: 'endoscopy',
  title: 'Endoscopy',
  subtitle: 'Internal visualization and advanced diagnostics without incisions.',
  heroImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=2000',
  overview: {
    description: 'Endoscopy employs a flexible tube with an integrated camera and light source, known as an endoscope, to non-surgically examine a person\'s digestive tract or other hollow cavities. It serves simultaneously as an intuitive diagnostic tool and a vector for minimally invasive treatments.',
    highlights: [
      { title: 'Incision Size', value: '0 cm (Natural Orifice)' },
      { title: 'Diagnostic Accuracy', value: '>98% Detection' },
      { title: 'Visualization', value: 'High-Def Optic Fiber' }
    ]
  },
  howItWorks: {
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1000',
    steps: [
      { step: 1, title: 'Patient Preparation', desc: 'Mild sedation or local anesthesia is administered for patient comfort.' },
      { step: 2, title: 'Insertion', desc: 'The flexible endoscope is gently introduced through a natural body opening (e.g., mouth or colon).' },
      { step: 3, title: 'Navigation & Inspection', desc: 'Real-time video is transmitted to a monitor as the physician steers the scope.' },
      { step: 4, title: 'Intervention', desc: 'Through a working channel, micro-instruments can biopsy tissue, remove polyps, or stop bleeding.' }
    ]
  },
  useCases: [
    { title: 'Colonoscopy', description: 'Screening for colon cancer and polyp removal.' },
    { title: 'Upper GI Endoscopy', description: 'Diagnosing ulcers, GERD, and celiac disease.' },
    { title: 'Bronchoscopy', description: 'Examining the lungs and airway passages.' },
    { title: 'ERCP', description: 'Treating issues in the bile and pancreatic ducts.' }
  ],
  equipment: [
    { id: 'endoscope-hd', name: 'VisionMax HD Endoscope', category: 'Visualization', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' },
    { id: 'endo-processor', name: 'Digital Image Processor', category: 'Control Unit', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800' }
  ],
  benefits: [
    { title: 'No External Scarring', description: 'Utilizes natural body openings, leaving zero surgical scars.', iconName: 'Sparkles' },
    { title: 'Outpatient Procedure', description: 'Most endoscopic procedures allow the patient to go home the same day.', iconName: 'Clock' },
    { title: 'Immediate Intervention', description: 'Conditions can be treated immediately upon discovery during the scan.', iconName: 'Activity' }
  ],
  media: {
    videos: [
      { title: 'Advanced Polypectomy', duration: '3:45', thumbnail: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800' }
    ],
    images: [
      { title: 'Endoscopy Suite', url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800' }
    ]
  }
};

export const roboticsData: TechnologyData = {
  id: 'robotics',
  title: 'Robotics',
  subtitle: 'Precision robotic-assisted systems for complex procedures.',
  heroImage: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=2000',
  overview: {
    description: 'Robotic-assisted surgery translates a surgeon\'s hand movements into smaller, more precise movements of tiny instruments inside the patient\'s body. The overarching console provides 3D high-definition vision, while the robotic arms offer greater dexterity and range of motion than the human hand.',
    highlights: [
      { title: 'Dexterity', value: '7 Degrees of Freedom' },
      { title: 'Magnification', value: 'Up to 10x 3D HD' },
      { title: 'Tremor Reduction', value: '100% Filtered' }
    ]
  },
  howItWorks: {
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000',
    steps: [
      { step: 1, title: 'Patient Cart Setup', desc: 'Robotic arms are positioned and docked to the trocars on the patient.' },
      { step: 2, title: 'Console Control', desc: 'The surgeon sits at a sterile console, viewing the operative field in 3D.' },
      { step: 3, title: 'Motion Translation', desc: 'The system seamlessly scales and filters the surgeon\'s hand wrist movements.' },
      { step: 4, title: 'Execution', desc: 'The robotic instruments perform complex tasks like dissecting and suturing.' }
    ]
  },
  useCases: [
    { title: 'Prostatectomy', description: 'Nerve-sparing removal of the prostate.' },
    { title: 'Hysterectomy', description: 'Complex gynecological removals via small incisions.' },
    { title: 'Valve Repair', description: 'Mitral valve surgeries without fully opening the chest.' }
  ],
  equipment: [
    { id: 'nexus-x1', name: 'Nexus X-1 Surgical Robot', category: 'Robotics', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800' }
  ],
  benefits: [
    { title: 'Unmatched Precision', description: 'Eliminates natural hand tremors for microscopic accuracy.', iconName: 'Crosshair' },
    { title: 'Better Ergonomics', description: 'Surgeons operate seated, reducing physical fatigue during long procedures.', iconName: 'User' },
    { title: 'Faster Healing', description: 'Like conventional laparoscopy, smaller incisions mean faster recoveries.', iconName: 'Activity' }
  ],
  media: {
    videos: [
      { title: 'Suturing a grape with Robotics', duration: '2:15', thumbnail: 'https://images.unsplash.com/photo-1582719478250-c89400bbbfc5?auto=format&fit=crop&q=80&w=800' }
    ],
    images: [
      { title: 'Surgeon at Console', url: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800' }
    ]
  }
};

export const energyDevicesData: TechnologyData = {
  id: 'energy',
  title: 'Energy Devices',
  subtitle: 'Advanced tissue sealing and cutting technologies.',
  heroImage: 'https://images.unsplash.com/photo-1582719478250-c89400bbbfc5?auto=format&fit=crop&q=80&w=2000',
  overview: {
    description: 'Surgical energy devices use electrical currents or ultrasonic vibrations to cut tissue and simultaneously seal or coagulate blood vessels. These tools are indispensable in modern surgery to minimize blood loss and drastically reduce operating time.',
    highlights: [
      { title: 'Sealing Capacity', value: 'Vessels up to 7mm' },
      { title: 'Burst Pressure', value: '3x Systolic Blood' },
      { title: 'Thermal Spread', value: '< 2 millimeters' }
    ]
  },
  howItWorks: {
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1000',
    steps: [
      { step: 1, title: 'Tissue Grasping', desc: 'The device jaws clamp down firmly on the target tissue or vessel.' },
      { step: 2, title: 'Energy Delivery', desc: 'RF or ultrasonic energy is delivered, denaturing collagen and elastin.' },
      { step: 3, title: 'Fusion', desc: 'The denatured proteins form a permanent, secure biological seal.' },
      { step: 4, title: 'Transection', desc: 'A physical blade or continued energy cuts harmlessly through the center of the seal.' }
    ]
  },
  useCases: [
    { title: 'Bowel Resection', description: 'Quickly dividing mesenteric vessels.' },
    { title: 'Thyroidectomy', description: 'Working safely near the voice box nerves.' }
  ],
  equipment: [
    { id: 'thermaseal-rf', name: 'ThermaSeal RF Generator', category: 'RF Devices', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800' }
  ],
  benefits: [
    { title: 'Hemostasis', description: 'Virtually bloodless surgery and clear operative fields.', iconName: 'Droplet' },
    { title: 'Efficiency', description: 'Replaces time-consuming manual suturing and tying.', iconName: 'Clock' }
  ],
  media: {
    videos: [],
    images: [
      { title: 'Energy Jaw Detail', url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' }
    ]
  }
};

export const imagingData: TechnologyData = {
  id: 'imaging',
  title: 'Imaging Systems',
  subtitle: 'High-resolution intraoperative imaging for decision-making.',
  heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000',
  overview: {
    description: 'Intraoperative imaging involves using MRI, CT, or advanced Ultrasound directly in the operating room. This allows surgeons to verify the complete removal of tumors or correct hardware placement before the patient wakes up, reducing the need for revision surgeries.',
    highlights: [
      { title: 'Resolution', value: 'Sub-millimeter' },
      { title: 'Radiation', value: 'Dramatically Reduced' },
      { title: 'Integration', value: 'Real-time PACS Sync' }
    ]
  },
  howItWorks: {
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1000',
    steps: [
      { step: 1, title: 'Positioning', desc: 'The mobile scanner is brought exactly to the sterile field over the patient.' },
      { step: 2, title: 'Scanning', desc: 'Rapid image acquisition generates slices or 3D volumes of the anatomy.' },
      { step: 3, title: 'Analysis', desc: 'Surgeons review the high-definition images on massive in-room displays.' },
      { step: 4, title: 'Confirmation', desc: 'The surgical team makes immediate adjustments based on the real-time data.' }
    ]
  },
  useCases: [
    { title: 'Neurosurgery', description: 'Confirming complete resection of brain tumors.' },
    { title: 'Spinal Fusion', description: 'Verifying pedicle screw placement trajectory.' }
  ],
  equipment: [
    { id: 'aeroscan-mri', name: 'AeroScan MRI System', category: 'Imaging', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' }
  ],
  benefits: [
    { title: 'Reduced Reoperations', description: 'Catch and fix issues instantly rather than days later.', iconName: 'CheckCircle2' },
    { title: 'Precision Verification', description: 'Operate accurately near highly critical structures like the spinal cord.', iconName: 'Crosshair' }
  ],
  media: {
    videos: [],
    images: []
  }
};
