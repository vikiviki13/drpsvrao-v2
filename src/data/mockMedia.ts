import { MediaItem, MediaFAQ } from '../types';

export const mediaItems: MediaItem[] = [
  {
    id: 'v1',
    type: 'video',
    title: 'Understanding Robotic Surgery',
    description: 'A brief overview of how robotic-assisted surgery improves precision and recovery times.',
    category: 'Robotics',
    thumbnail: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800',
    youtubeId: 'M7lc1UVf-VE', // Placeholder YouTube ID
    duration: '2:15',
    featured: true
  },
  {
    id: 'v2',
    type: 'video',
    title: 'What to Expect: Laparoscopy',
    description: 'Step-by-step guide on preparing for and recovering from a laparoscopic procedure.',
    category: 'Laparoscopy',
    thumbnail: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    youtubeId: 'M7lc1UVf-VE',
    duration: '3:45',
    featured: true
  },
  {
    id: 'a1',
    type: 'audio',
    title: 'Surgeon Q&A: Endocrine Health',
    description: 'Dr. Smith discusses the latest advancements in thyroid surgery and patient care.',
    category: 'Endocrine Surgery',
    audioUrl: '#', // Placeholder
    duration: '15:30'
  },
  {
    id: 'v3',
    type: 'video',
    title: 'Advanced Imaging Techniques',
    description: 'How real-time MRI and Ultrasound are changing the operating room.',
    category: 'Imaging',
    thumbnail: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    youtubeId: 'M7lc1UVf-VE',
    duration: '4:20'
  },
  {
    id: 'a2',
    type: 'audio',
    title: 'Patient Story: Recovery Journey',
    description: 'Listen to Sarah\'s experience with minimally invasive robotic surgery.',
    category: 'Patient Stories',
    audioUrl: '#',
    duration: '8:45'
  }
];

export const mediaFaqs: MediaFAQ[] = [
  {
    id: 'f1',
    question: 'How is robotic surgery different from traditional surgery?',
    answer: 'Robotic surgery uses specialized instruments attached to robotic arms, controlled by the surgeon. This allows for greater precision, smaller incisions, and a 3D high-definition view of the surgical area compared to traditional open surgery.',
    category: 'Robotics',
    illustration: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'f2',
    question: 'Will I be awake during a laparoscopy?',
    answer: 'No, laparoscopy is typically performed under general anesthesia, meaning you will be completely asleep and pain-free during the procedure.',
    category: 'Laparoscopy',
    illustration: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'f3',
    question: 'Is MRI safe if I have metal implants?',
    answer: 'It depends on the type of metal. Many modern implants are MRI-safe, but you must inform your doctor and the MRI technologist about any implants, pacemakers, or metal fragments in your body before the scan.',
    category: 'Imaging',
    illustration: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  }
];
