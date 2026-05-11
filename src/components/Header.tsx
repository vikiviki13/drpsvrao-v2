import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu, X, ChevronDown, ArrowRight,
  Monitor, Search, Cpu, Zap, Camera,
  ActivitySquare, Heart, Stethoscope,
  AlertCircle, FileSearch, Pill,
  Video, Headphones,
  User, Briefcase, Mail,
  Activity, Zap as ZapIcon, HeartPulse, Brain,
  Dna, HelpCircle
} from 'lucide-react';
import Logo from './Logo';

const navData = [
  {
    name: 'Hi-Tech',
    id: 'hi-tech',
    spotlight: {
      title: 'Robotic-Assisted Surgery',
      desc: 'Experience sub-millimeter precision with state-of-the-art robotic platforms for complex procedures.',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=400',
      tag: 'SPOTLIGHT'
    },
    items: [
      { name: 'Robotics', desc: 'Precision robotic-assisted systems for complex surgical procedures.', icon: <Cpu className="w-5 h-5" /> },
      { name: 'Advanced Laparoscopy', desc: 'Minimally invasive camera-guided abdominal surgical techniques.', icon: <Monitor className="w-5 h-5" /> },
      { name: 'Nano 3D Imaging', desc: 'High-resolution intraoperative imaging for microscopic decision-making.', icon: <Camera className="w-5 h-5" /> },
      { name: 'Energy Devices', desc: 'Advanced tissue sealing and bloodless cutting technologies.', icon: <Zap className="w-5 h-5" /> },
      { name: 'Nerve Monitoring', desc: 'Intraoperative neural protection during complex endocrine surgeries.', icon: <Activity className="w-5 h-5" /> },
      { name: 'Fiber Optics', desc: 'Advanced illumination systems for superior operative visibility.', icon: <ZapIcon className="w-5 h-5" /> },
    ]
  },
  {
    name: 'Specialties',
    id: 'specialties',
    spotlight: {
      title: 'Surgical Excellence',
      desc: 'Comprehensive multi-disciplinary care across thyroid, breast, and abdominal surgical specialties.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400',
      tag: 'SPECIALIZED'
    },
    items: [
      { name: 'Endocrine Surgery', desc: 'Specialized care for thyroid, parathyroid, and adrenal conditions.', icon: <ActivitySquare className="w-5 h-5" /> },
      { name: 'Breast Surgery', desc: 'Comprehensive oncoplastic care and cancer treatment.', icon: <Heart className="w-5 h-5" /> },
      { name: 'General Surgery', desc: 'Advanced abdominal and gastrointestinal procedures.', icon: <Stethoscope className="w-5 h-5" /> },
      { name: 'Cardiology', desc: 'Interventional and surgical cardiovascular care.', icon: <HeartPulse className="w-5 h-5" /> },
      { name: 'Neurosurgery', desc: 'Advanced brain and spinal surgical interventions.', icon: <Brain className="w-5 h-5" /> },
      { name: 'Orthopedics', desc: 'Musculoskeletal and joint replacement specialties.', icon: <Activity className="w-5 h-5" /> },
    ]
  },
  {
    name: 'Media & Education',
    id: 'media-education',
    spotlight: {
      title: 'Patient Education',
      desc: 'Empowering patients with knowledge about their conditions and treatment options.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400',
      tag: 'EDUCATION'
    },
    items: [
      { name: 'Symptoms', desc: 'Identify and understand common warning signs and conditions.', icon: <AlertCircle className="w-5 h-5" /> },
      { name: 'Diagnosis', desc: 'Learn about modern diagnostic testing and results interpretation.', icon: <FileSearch className="w-5 h-5" /> },
      { name: 'Treatment Options', desc: 'Explore surgical and medical paths available for your care.', icon: <Pill className="w-5 h-5" /> },
      { name: 'Videos', desc: 'Educational surgical footage and procedure tutorials.', icon: <Video className="w-5 h-5" /> },
      { name: 'FAQs', desc: 'Get answers to commonly asked questions about surgery.', icon: <HelpCircle className="w-5 h-5" /> },
      { name: 'Audio Clips', desc: 'Podcasts and expert interviews on surgical innovation.', icon: <Headphones className="w-5 h-5" /> },
    ]
  },
  {
    name: 'Contact',
    id: 'contact',
    spotlight: {
      title: 'Consult Now',
      desc: 'Connect with our team to schedule an appointment or seek professional advice.',
      image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703a0?auto=format&fit=crop&q=80&w=400',
      tag: 'SUPPORT'
    },
    items: [
      { name: 'Doctor Inquiries', desc: 'Professional connections for specialist inquiries.', icon: <User className="w-5 h-5" /> },
      { name: 'Vendor Inquiries', desc: 'Supply chain and partnership opportunities.', icon: <Briefcase className="w-5 h-5" /> },
      { name: 'General Contact', desc: 'Administrative support and general inquiries.', icon: <Mail className="w-5 h-5" /> },
    ]
  }
];

const simpleNavItems = [
  { name: 'Publication', id: 'publication' },
  { name: 'Blog', id: 'blog' },
  { name: 'FAQ', id: 'faq' },
  { name: 'Kadri Clinic', id: 'kadri-clinic' },
];

export default function Header({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleNavClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
      setMobileMenuOpen(false);
      setActiveMenu(null);
    }
  };

  return (
    <header className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6">
      <div className="w-full max-w-[1400px] bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_15px_50px_rgba(0,0,0,0.08)] rounded-[2.5rem] px-10 py-4 flex items-center justify-between transition-all duration-500">
        {/* Logo */}
        <div onClick={(e) => handleNavClick(e, 'home')} className="cursor-pointer">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-2">
          <div className="flex items-center gap-1">
            {navData.map((category) => (
              <div 
                key={category.id} 
                className="static"
                onMouseEnter={() => setActiveMenu(category.id)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={(e) => handleNavClick(e, category.id)}
                  className={`flex items-center gap-1.5 px-5 py-3 rounded-full text-[14px] font-bold transition-all duration-300 ${
                    activeMenu === category.id ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {category.name}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === category.id ? 'rotate-180' : ''}`} />
                </button>

                {/* Wide Mega Menu */}
                <AnimatePresence>
                  {activeMenu === category.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.98 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute top-full left-0 right-0 pt-6 px-6"
                    >
                      <div className="bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden flex min-h-[450px]">
                        {/* Left Content Area: Grid of Items */}
                        <div className="flex-1 p-12 grid grid-cols-3 gap-x-8 gap-y-10">
                          {category.items.map((item) => (
                            <button
                              key={item.name}
                              onClick={(e) => {
                                let route = item.name.toLowerCase().replace(' ', '-');
                                // Specific mapping for routes
                                if (item.name === 'Robotics') route = 'tech-robotics';
                                else if (item.name === 'Advanced Laparoscopy') route = 'tech-laparoscopy';
                                else if (item.name === 'Nano 3D Imaging') route = 'tech-imaging';
                                else if (item.name === 'Energy Devices') route = 'tech-energy';
                                else if (item.name === 'Endocrine Surgery') route = 'specialty-thyroid';
                                else if (item.name === 'Breast Surgery') route = 'specialty-breast-surgery';
                                else if (item.name === 'General Surgery') route = 'specialty-general-surgery';
                                else if (item.name === 'Cardiology') route = 'specialty-cardiology';
                                else if (item.name === 'Neurosurgery') route = 'specialty-neurology';
                                else if (item.name === 'Orthopedics') route = 'specialty-orthopedics';
                                else if (item.name === 'Symptoms' || item.name === 'Diagnosis' || item.name === 'Treatment Options') route = 'patient-education';
                                else if (item.name === 'Videos' || item.name === 'FAQs' || item.name === 'Audio Clips') route = 'media';
                                
                                handleNavClick(e, route);
                              }}
                              className="flex items-start gap-4 text-left group/item transition-all"
                            >
                              <div className="w-11 h-11 bg-blue-50/50 text-blue-600 rounded-xl flex items-center justify-center group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
                                {item.icon}
                              </div>
                              <div className="flex-1">
                                <div className="text-[15px] font-bold text-slate-900 mb-1 group-hover/item:text-blue-600 transition-colors">
                                  {item.name}
                                </div>
                                <div className="text-[13px] text-slate-500 leading-relaxed font-medium">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>

                        {/* Right Section: Spotlight Card */}
                        <div className="w-[380px] bg-[#0A0F1C] p-8 m-4 rounded-[2.5rem] flex flex-col">
                          <div className="mb-auto">
                            <div className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-[10px] font-black tracking-widest rounded-full mb-6">
                              {category.spotlight.tag}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                              {category.spotlight.title}
                            </h3>
                            <p className="text-slate-400 text-[14px] leading-relaxed mb-8">
                              {category.spotlight.desc}
                            </p>
                          </div>
                          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group/img">
                            <img 
                              src={category.spotlight.image} 
                              alt={category.spotlight.title}
                              className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/80 to-transparent" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="h-6 w-[1.5px] bg-slate-100 mx-4" />

          {/* Simple Items */}
          <div className="flex items-center gap-1">
            {simpleNavItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => handleNavClick(e, item.id)}
                className="px-5 py-3 rounded-full text-[14px] font-bold text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hidden sm:flex bg-[#0F172A] text-white px-9 py-4 rounded-2xl text-[14px] font-black hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-900/10 active:scale-95"
          >
            Consult Now
          </button>

          <button
            className="xl:hidden p-3 text-slate-900 hover:bg-slate-50 rounded-2xl transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-32 left-6 right-6 bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.2)] border border-slate-100 xl:hidden overflow-hidden p-8 z-40"
          >
            <div className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto pr-2">
              {[...navData, ...simpleNavItems].map((item) => (
                <button
                  key={item.id}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-left py-5 px-6 rounded-2xl font-bold text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-all text-lg"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={(e) => handleNavClick(e, 'contact')}
                className="mt-6 w-full bg-[#0F172A] text-white py-6 rounded-2xl font-black text-center text-lg"
              >
                Consult Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
