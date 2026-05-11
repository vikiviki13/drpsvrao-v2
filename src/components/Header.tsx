import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu, X, ChevronDown, ArrowRight,
  Monitor, Cpu, Zap, Camera,
  ActivitySquare, Heart, Stethoscope,
  AlertCircle, FileSearch,
  Video, Headphones,
  Activity, Zap as ZapIcon, HeartPulse, Brain,
  HelpCircle, Sparkles
} from 'lucide-react';
import Logo from './Logo';

const navData = [
  {
    name: 'Technology',
    id: 'hi-tech',
    spotlight: {
      title: 'Precision Robotics',
      desc: 'Advancing outcomes through robotic precision.',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=600',
      tag: 'FEATURED'
    },
    items: [
      { name: 'Robotics', desc: 'Haptic feedback systems.', icon: <Cpu className="w-4 h-4" /> },
      { name: 'Laparoscopy', desc: 'Ultra-HD visualization.', icon: <Monitor className="w-4 h-4" /> },
      { name: '3D Imaging', desc: 'Intraoperative diagnostics.', icon: <Camera className="w-4 h-4" /> },
      { name: 'Energy', desc: 'Tissue sealing tools.', icon: <Zap className="w-4 h-4" /> },
      { name: 'Monitoring', desc: 'Neural protection.', icon: <Activity className="w-4 h-4" /> },
      { name: 'Fiber Optics', desc: 'Superior clarity.', icon: <ZapIcon className="w-4 h-4" /> },
    ]
  },
  {
    name: 'Specialties',
    id: 'specialties',
    spotlight: {
      title: 'Clinical Care',
      desc: 'Specialized protocols for complex surgery.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600',
      tag: 'SPECIALIZED'
    },
    items: [
      { name: 'Endocrine', desc: 'Thyroid & parathyroid.', icon: <ActivitySquare className="w-4 h-4" /> },
      { name: 'Oncology', desc: 'Breast & cancer care.', icon: <Heart className="w-4 h-4" /> },
      { name: 'Abdominal', desc: 'Gastrointestinal.', icon: <Stethoscope className="w-4 h-4" /> },
      { name: 'Cardiac', desc: 'Vascular management.', icon: <HeartPulse className="w-4 h-4" /> },
      { name: 'Neuro', desc: 'Brain & spinal care.', icon: <Brain className="w-4 h-4" /> },
      { name: 'Ortho', desc: 'Joint & bone repair.', icon: <Activity className="w-4 h-4" /> },
    ]
  },
  {
    name: 'Resources',
    id: 'media-education',
    spotlight: {
      title: 'Knowledge Hub',
      desc: 'Expert-led surgical learning materials.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
      tag: 'INSIGHTS'
    },
    items: [
      { name: 'Protocols', desc: 'Pre-surgical prep.', icon: <AlertCircle className="w-4 h-4" /> },
      { name: 'Diagnostics', desc: 'Testing results.', icon: <FileSearch className="w-4 h-4" /> },
      { name: 'Videos', desc: 'Surgical footage.', icon: <Video className="w-4 h-4" /> },
      { name: 'Articles', desc: 'Innovation blogs.', icon: <Sparkles className="w-4 h-4" /> },
      { name: 'FAQs', desc: 'Common questions.', icon: <HelpCircle className="w-4 h-4" /> },
      { name: 'Lectures', desc: 'Expert podcasts.', icon: <Headphones className="w-4 h-4" /> },
    ]
  }
];

const simpleNavItems = [
  { name: 'Blog', id: 'blog' },
  { name: 'FAQ', id: 'faq' },
  { name: 'Contact', id: 'contact' },
];

export default function Header({ onNavigate, currentPage, forceSolid }: { onNavigate?: (page: string) => void, currentPage?: string, forceSolid?: boolean }) {
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
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <div className={`w-full max-w-[900px] ${forceSolid ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]' : 'bg-white/90 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.06)]'} border border-gray-100 rounded-2xl px-6 py-2 flex items-center justify-between transition-all duration-500 pointer-events-auto`}>
        {/* Logo Section */}
        <div 
          onClick={(e) => handleNavClick(e, 'home')} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <Logo className="w-6 h-6" />
          <span className="text-sm font-black tracking-tight text-dark-grey-900 leading-none">
            PSVRAO<span className="text-maroon-600">.</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navData.map((category) => (
            <div 
              key={category.id} 
              className="static"
              onMouseEnter={() => setActiveMenu(category.id)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  let target = category.id;
                  if (category.id === 'hi-tech') target = 'home#technologies';
                  else if (category.id === 'specialties') target = 'home#specialties';
                  else if (category.id === 'media-education') target = 'home#media';
                  handleNavClick(e, target);
                }}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-[12px] font-bold tracking-tight transition-all duration-200 ${
                  activeMenu === category.id || 
                  (category.id === 'hi-tech' && (currentPage?.startsWith('tech-') || currentPage === 'home#technologies')) ||
                  (category.id === 'specialties' && (currentPage?.startsWith('specialty-') || currentPage === 'home#specialties')) ||
                  (category.id === 'media-education' && (currentPage === 'media' || currentPage === 'patient-education' || currentPage?.startsWith('article-') || currentPage === 'home#media'))
                    ? 'text-maroon-600 bg-maroon-50' 
                    : 'text-gray-500 hover:text-maroon-600'
                }`}
              >
                {category.name}
                <ChevronDown size={11} className={`transition-transform duration-300 ${activeMenu === category.id ? 'rotate-180' : ''}`} />
              </button>

              {/* Ultra Compact Mega Menu - Perfect Match to Screenshot */}
              <AnimatePresence>
                {activeMenu === category.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.99 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.99 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 right-0 pt-4"
                  >
                    <div className="bg-white rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden flex max-w-[850px] mx-auto">
                      {/* Left: Nav Items Grid (2 Columns) */}
                      <div className="flex-1 p-10 grid grid-cols-2 gap-x-12 gap-y-8">
                        {category.items.map((item) => (
                          <button
                            key={item.name}
                            onClick={(e) => {
                              let route = item.name.toLowerCase().replace(' ', '-');
                              if (item.name === 'Robotics') route = 'tech-robotics';
                              else if (item.name === 'Laparoscopy') route = 'tech-laparoscopy';
                              else if (item.name === '3D Imaging') route = 'tech-imaging';
                              else if (item.name === 'Energy') route = 'tech-energy';
                              else if (item.name === 'Endocrine') route = 'specialty-thyroid';
                              else if (item.name === 'Oncology') route = 'specialty-breast-surgery';
                              else if (item.name === 'Abdominal') route = 'specialty-general-surgery';
                              else if (item.name === 'Cardiac') route = 'specialty-cardiology';
                              else if (item.name === 'Neuro') route = 'specialty-neurology';
                              else if (item.name === 'Ortho') route = 'specialty-orthopedics';
                              
                              handleNavClick(e, route);
                            }}
                            className="flex items-center gap-4 text-left group"
                          >
                            <div className="w-10 h-10 bg-white border border-gray-50 shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-maroon-600 rounded-xl flex items-center justify-center group-hover:bg-maroon-600 group-hover:text-white transition-all duration-300 shrink-0">
                              {item.icon}
                            </div>
                            <div className="flex flex-col">
                              <div className="text-[14px] font-bold text-dark-grey-900 leading-none mb-1 group-hover:text-maroon-600 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-[11px] text-gray-400 font-medium leading-none">
                                {item.desc}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Right: Flush Dark Spotlight Section */}
                      <div className="w-[280px] bg-[#141414] p-10 flex flex-col relative">
                        <div className="mb-auto">
                          <div className="inline-flex items-center px-2.5 py-1 bg-copper-500/10 border border-copper-500/20 text-copper-500 text-[9px] font-black tracking-[0.15em] rounded-md mb-6 uppercase">
                            {category.spotlight.tag}
                          </div>
                          
                          <h3 className="text-[22px] font-bold text-white mb-4 tracking-tight leading-tight">
                            {category.spotlight.title}
                          </h3>
                          <p className="text-gray-500 text-[13px] leading-relaxed mb-8 font-medium">
                            {category.spotlight.desc}
                          </p>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden aspect-[1.4] group/img ring-1 ring-white/5 shadow-2xl">
                          <img 
                            src={category.spotlight.image} 
                            alt={category.spotlight.title}
                            className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-transparent to-transparent" />
                          
                          {/* Arrow Circle Button */}
                          <div className="absolute bottom-3 left-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover/img:bg-maroon-600 group-hover/img:border-maroon-600 transition-all duration-300 shadow-lg">
                              <ArrowRight size={14} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div className="h-3 w-px bg-gray-100 mx-2" />

          {simpleNavItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-colors ${
                currentPage === item.id 
                  ? 'text-maroon-600 bg-maroon-50' 
                  : 'text-gray-400 hover:text-maroon-600'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hidden sm:flex bg-dark-grey-900 text-white px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider hover:bg-maroon-600 transition-all shadow-lg shadow-maroon-900/10 active:scale-95"
          >
            Consultation
          </button>

          <button
            className="lg:hidden p-2 text-dark-grey-900 hover:bg-gray-50 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-6 right-6 bg-white rounded-2xl shadow-2xl border border-gray-100 lg:hidden overflow-hidden p-4 z-40 pointer-events-auto"
          >
            <div className="flex flex-col gap-1">
              {[...navData, ...simpleNavItems].map((item) => (
                <button
                  key={item.id}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-left py-3 px-5 rounded-xl font-bold text-dark-grey-900 hover:bg-maroon-50 hover:text-maroon-600 transition-all text-sm"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={(e) => handleNavClick(e, 'contact')}
                className="mt-4 w-full bg-dark-grey-900 text-white py-4 rounded-xl font-black text-center text-xs uppercase tracking-widest"
              >
                Schedule Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
