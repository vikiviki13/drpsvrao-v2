import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, ArrowUpRight, Sparkles, ShieldCheck, Activity, Clock } from 'lucide-react';

const faqCategories = [
  { id: 'tech', label: 'Technology', icon: <ShieldCheck size={14} /> },
  { id: 'clinical', label: 'Clinical', icon: <Activity size={14} /> },
  { id: 'care', label: 'Concierge', icon: <Clock size={14} /> }
];

const faqData = {
  tech: [
    {
      q: "What defines the 0.1mm Precision protocol?",
      a: "A synchronized haptic-visual feedback system that eliminates surgical tremor and ensures 0.1mm accuracy across all robotic maneuvers."
    },
    {
      q: "How does 3D Imaging assist in real-time?",
      a: "Volumetric rendering overlays vital neural and vascular maps directly onto the surgical field for preemptive protection."
    },
    {
      q: "Are robotic instruments single-use?",
      a: "Yes. All micro-instrumentation is precision-calibrated for single procedures to maintain zero-tolerance clinical standards."
    }
  ],
  clinical: [
    {
      q: "What is the 'Rapid Recovery' protocol?",
      a: "A clinical pathway enabling mobility within 4-6 hours post-op, facilitated by sub-5mm entry ports and minimal tissue trauma."
    },
    {
      q: "How is post-operative pain suppressed?",
      a: "We use non-opioid, multi-modal analgesia and targeted nerve blocks to neutralize pain signals at the surgical site."
    },
    {
      q: "When can I return to light professional duties?",
      a: "Most innovation-led procedures allow a return to professional environments within 5-7 days."
    }
  ],
  care: [
    {
      q: "Do you offer virtual assessments?",
      a: "Yes. Our international desk coordinates comprehensive virtual reviews of surgical plans and 3D models."
    },
    {
      q: "What defines 'Concierge Care'?",
      a: "A dedicated clinical coordinator and private recovery suites designed for a premium hospitality experience."
    }
  ]
};

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<'tech' | 'clinical' | 'care'>('tech');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredQuestions = faqData[activeTab].filter(q => 
    q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    q.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 selection:bg-maroon-50 selection:text-maroon-900">
      <div className="max-w-4xl mx-auto px-8">
        
        {/* Boutique Minimal Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon-50 text-maroon-600 text-[10px] font-black uppercase tracking-widest mb-6">
            <Sparkles size={12} />
            Clinical FAQ
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-dark-grey-900 tracking-tighter mb-10">Protocol Knowledge.</h1>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
            <input 
              type="text" 
              placeholder="Search clinical protocols..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-1 focus:ring-maroon-600/20 transition-all text-sm font-medium"
            />
          </div>
        </div>

        {/* Elite Tab System */}
        <div className="bg-gray-50/50 p-2 rounded-[2rem] border border-gray-100 flex items-center gap-2 mb-10">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id as any);
                setOpenIndex(0);
              }}
              className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest transition-all ${
                activeTab === cat.id 
                  ? 'bg-white text-maroon-600 shadow-xl shadow-gray-200/50' 
                  : 'text-gray-400 hover:text-dark-grey-900'
              }`}
            >
              <span className={activeTab === cat.id ? 'text-maroon-600' : 'text-gray-300'}>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Compact Clinical Grid */}
        <div className="grid md:grid-cols-1 gap-4">
          {filteredQuestions.map((item, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <div 
                key={idx}
                className={`group rounded-[2rem] transition-all duration-500 border ${
                  isOpen 
                    ? 'bg-white border-maroon-600/10 shadow-2xl shadow-gray-200/40' 
                    : 'bg-white border-gray-50 hover:border-gray-200'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-8 text-left flex justify-between items-center gap-8"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-[10px] font-black transition-all ${isOpen ? 'bg-maroon-600 text-white' : 'bg-gray-50 text-gray-300 group-hover:text-maroon-600'}`}>
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                    <span className={`text-xl font-black tracking-tight leading-tight transition-all ${isOpen ? 'text-maroon-600' : 'text-dark-grey-900'}`}>
                      {item.q}
                    </span>
                  </div>
                  <ChevronDown size={18} className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-maroon-600' : 'text-gray-200'}`} />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 pb-10 pt-0 pl-24">
                        <div className="pt-6 border-t border-gray-50">
                          <p className="text-gray-500 text-lg leading-relaxed font-medium">
                            {item.a}
                          </p>
                          <button className="mt-8 text-[11px] font-black text-copper-600 uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                            Explore deep protocol <ArrowUpRight size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Micro-Elite CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-10 bg-dark-grey-900 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-maroon-600/10 blur-3xl rounded-full" />
          <div className="relative z-10">
            <h4 className="text-2xl font-black text-white mb-2 tracking-tight">Clinical Support Protocol.</h4>
            <p className="text-gray-400 text-sm font-medium">Direct access to our innovation-led clinical desk.</p>
          </div>
          <button className="relative z-10 px-10 py-4 bg-white text-maroon-900 font-black rounded-xl text-[11px] uppercase tracking-[0.2em] hover:bg-maroon-600 hover:text-white transition-all shadow-2xl active:scale-95">
            Initiate Contact
          </button>
        </motion.div>

      </div>
    </div>
  );
}
