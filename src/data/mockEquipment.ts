import { EquipmentData } from '../types';

export const equipmentCatalogData: EquipmentData[] = [
  {
    id: 'nexus-x1',
    name: 'Nexus X-1 Surgical Robot',
    category: 'Robotics',
    description: 'A state-of-the-art robotic surgical system offering unparalleled precision, 3D high-definition visualization, and wristed instruments that bend and rotate far greater than the human hand.',
    useCases: ['Prostatectomy', 'Hysterectomy', 'Mitral Valve Repair', 'Colorectal Surgery'],
    relatedTechnologies: ['Robotics', 'Laparoscopy', 'Imaging Systems'],
    images: [
      'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800'
    ],
    specifications: [
      { label: 'Arms', value: '4 Interactive Arms' },
      { label: 'Vision', value: 'Dual 4K Sensors' },
      { label: 'Control', value: 'Haptic Feedback Console' },
      { label: 'Weight', value: '540 kg' }
    ]
  },
  {
    id: 'aeroscan-mri',
    name: 'AeroScan MRI System',
    category: 'Imaging',
    description: 'Next-generation magnetic resonance imaging providing ultra-fast, high-resolution scans with a wider bore for patient comfort and reduced claustrophobia.',
    useCases: ['Neurological Imaging', 'Musculoskeletal Scans', 'Cardiovascular Assessment', 'Oncology Staging'],
    relatedTechnologies: ['Imaging Systems', 'AI Diagnostics'],
    images: [
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
    ],
    specifications: [
      { label: 'Field Strength', value: '3.0 Tesla' },
      { label: 'Bore Size', value: '70 cm (Wide)' },
      { label: 'Scan Speed', value: 'Up to 40% faster' },
      { label: 'Acoustic Noise', value: 'Reduced by 90%' }
    ]
  },
  {
    id: 'lumina-laser',
    name: 'Lumina Laser Scalpel',
    category: 'Laser',
    description: 'A highly focused CO2 laser system designed for precise soft tissue ablation, cutting, and coagulation with minimal thermal damage to surrounding tissues.',
    useCases: ['Dermatological Surgery', 'ENT Procedures', 'Gynecology', 'Neurosurgery'],
    relatedTechnologies: ['Energy Devices', 'Endoscopy'],
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89400bbbfc5?auto=format&fit=crop&q=80&w=800'
    ],
    specifications: [
      { label: 'Wavelength', value: '10,600 nm' },
      { label: 'Power Output', value: '1 - 60 Watts' },
      { label: 'Delivery System', value: 'Articulated Arm' },
      { label: 'Cooling', value: 'Integrated Air Cooling' }
    ]
  },
  {
    id: 'thermaseal-rf',
    name: 'ThermaSeal RF Generator',
    category: 'RF Devices',
    description: 'Advanced radiofrequency energy platform that intelligently seals vessels up to 7mm and cuts tissue in a single step, reducing blood loss and operative time.',
    useCases: ['General Surgery', 'Bariatrics', 'Urology', 'Thoracic Surgery'],
    relatedTechnologies: ['Energy Devices', 'Laparoscopy'],
    images: [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
    ],
    specifications: [
      { label: 'Energy Type', value: 'Bipolar RF' },
      { label: 'Vessel Sealing', value: 'Up to 7mm' },
      { label: 'Feedback Loop', value: '4000x per second' },
      { label: 'Display', value: '7" Touchscreen' }
    ]
  },
  {
    id: 'echopro-us',
    name: 'EchoPro Ultrasound',
    category: 'Ultrasound',
    description: 'Portable, high-definition ultrasound system featuring AI-assisted imaging optimization and a suite of specialized transducers for point-of-care diagnostics.',
    useCases: ['Intraoperative Imaging', 'Emergency Medicine', 'Cardiology', 'Obstetrics'],
    relatedTechnologies: ['Imaging Systems'],
    images: [
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800'
    ],
    specifications: [
      { label: 'Display', value: '15" OLED' },
      { label: 'Battery Life', value: '4 Hours Active Scanning' },
      { label: 'Transducers', value: 'Linear, Convex, Phased Array' },
      { label: 'Connectivity', value: 'Wi-Fi, DICOM' }
    ]
  },
  {
    id: 'vitalsync-monitor',
    name: 'VitalSync Monitor',
    category: 'Monitoring',
    description: 'Comprehensive patient monitoring system that aggregates data from multiple sensors into a single, intuitive interface with predictive alerts.',
    useCases: ['ICU', 'Operating Room', 'Post-Op Recovery'],
    relatedTechnologies: ['Nerve Monitoring Systems'],
    images: [
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800'
    ],
    specifications: [
      { label: 'Screen', value: '19" Multi-touch' },
      { label: 'Parameters', value: 'ECG, SpO2, NIBP, Temp, CO2' },
      { label: 'Networking', value: 'Central Station Integration' },
      { label: 'Alarms', value: 'Smart Predictive Alarms' }
    ]
  }
];
