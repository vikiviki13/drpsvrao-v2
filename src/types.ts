import { ReactNode } from 'react';

export interface TechnologyData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  overview: {
    description: string;
    highlights: { title: string; value: string }[];
  };
  howItWorks: {
    image: string;
    steps: { title: string; description: string }[];
  };
  useCases: { title: string; description: string }[];
  equipment: { name: string; category: string; image: string }[];
  benefits: { title: string; description: string; iconName: string }[];
  media: { type: 'video' | 'image'; url: string; title: string; duration?: string }[];
  specialties: string[];
}

export interface SpecialtyData {
  id: string;
  title: string;
  patientFriendlyName: string;
  heroImage: string;
  overview: string;
  symptoms: { name: string; description: string; iconName: string }[];
  diagnosisSteps: { step: number; title: string; description: string; iconName: string }[];
  treatments: { title: string; description: string; type: 'Non-Surgical' | 'Surgical' }[];
  technologies: { name: string; description: string }[];
  equipment: { name: string; image: string }[];
  faqs: { question: string; answer: string }[];
}

export interface EquipmentData {
  id: string;
  name: string;
  category: string;
  description: string;
  useCases: string[];
  relatedTechnologies: string[];
  images: string[];
  specifications: { label: string; value: string }[];
}

export interface MediaItem {
  id: string;
  type: 'video' | 'audio';
  title: string;
  description: string;
  category: string;
  thumbnail?: string;
  youtubeId?: string;
  audioUrl?: string;
  duration: string;
  featured?: boolean;
}

export interface MediaFAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  illustration: string;
}
