import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft, Info, Settings, Activity,
  Box, ShieldCheck, Image as ImageIcon,
  Stethoscope, Droplet, Crosshair, Sparkles,
  PlayCircle, CheckCircle2
} from 'lucide-react';
import { TechnologyData } from '../types';

interface Props {
  data: TechnologyData;
  onBack: () => void;
  onNavigate?: (page: string) => void;
}

const iconMap: Record<string, any> = {
  Droplet, Crosshair, Activity, Sparkles
};

export default function TechnologyDetail({ data, onBack, onNavigate }: Props) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Info className="w-4 h-4" /> },
    { id: 'how-it-works', label: 'How it Works', icon: <Settings className="w-4 h-4" /> },
    { id: 'use-cases', label: 'Use Cases', icon: <Activity className="w-4 h-4" /> },
    { id: 'equipment', label: 'Equipment Used', icon: <Box className="w-4 h-4" /> },
    { id: 'benefits', label: 'Benefits', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'media', label: 'Media', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'specialties', label: 'Related Specialties', icon: <Stethoscope className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-24">
      {/* Hero Banner */}
      <div className="bg-dark-grey-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-grey-900 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-copper-400 hover:text-copper-300 transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Technologies
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light">{data.subtitle}</p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex flex-col md:flex-row gap-12">

          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 shrink-0">
            <div className="sticky top-32 bg-white rounded-sm shadow-sm border border-gray-100 p-2 flex flex-col gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-sm transition-all text-left ${activeTab === tab.id
                    ? 'bg-maroon-50 text-maroon-600 border-l-2 border-maroon-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-dark-grey-900 border-l-2 border-transparent'
                    }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 md:p-12"
              >
                {/* OVERVIEW TAB */}
                {activeTab === 'overview' && (
                  <div>
                    <h2 className="text-2xl font-bold text-dark-grey-900 mb-6">What is {data.title}?</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-12">
                      {data.overview.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {data.overview.highlights.map((highlight, idx) => (
                        <div key={idx} className="bg-gray-50 p-6 rounded-sm border border-gray-100 text-center">
                          <div className="text-sm font-semibold text-copper-600 uppercase tracking-wider mb-2">{highlight.title}</div>
                          <div className="text-2xl font-bold text-dark-grey-900">{highlight.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* HOW IT WORKS TAB */}
                {activeTab === 'how-it-works' && (
                  <div>
                    <h2 className="text-2xl font-bold text-dark-grey-900 mb-8">How it Works</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div className="space-y-8">
                        {data.howItWorks.steps.map((step, idx) => (
                          <div key={idx} className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-maroon-100 text-maroon-600 flex items-center justify-center font-bold shrink-0 mt-1">
                              {idx + 1}
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-dark-grey-900 mb-2">{step.title}</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-sm overflow-hidden shadow-lg border border-gray-100">
                        <img src={data.howItWorks.image} alt="How it works" className="w-full h-auto" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                  </div>
                )}

                {/* USE CASES TAB */}
                {activeTab === 'use-cases' && (
                  <div>
                    <h2 className="text-2xl font-bold text-dark-grey-900 mb-8">Clinical Applications</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {data.useCases.map((useCase, idx) => (
                        <div key={idx} className="p-6 border border-gray-100 rounded-sm hover:border-copper-300 transition-colors bg-gray-50">
                          <div className="flex items-center gap-3 mb-3">
                            <CheckCircle2 className="w-5 h-5 text-copper-500" />
                            <h4 className="text-lg font-semibold text-dark-grey-900">{useCase.title}</h4>
                          </div>
                          <p className="text-gray-600 text-sm pl-8">{useCase.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* EQUIPMENT TAB */}
                {activeTab === 'equipment' && (
                  <div>
                    <h2 className="text-2xl font-bold text-dark-grey-900 mb-8">Linked Devices & Equipment</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {data.equipment.map((item, idx) => (
                        <div key={idx} className="group border border-gray-100 rounded-sm overflow-hidden hover:shadow-md transition-all">
                          <div className="h-48 overflow-hidden bg-gray-100 relative">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-maroon-600 uppercase tracking-wider rounded-sm">
                              {item.category}
                            </div>
                          </div>
                          <div className="p-5 bg-white">
                            <h4 className="font-semibold text-dark-grey-900 text-lg">{item.name}</h4>
                            <button
                              onClick={() => onNavigate && onNavigate(`equipment-${item.id}`)}
                              className="mt-3 text-sm text-copper-600 font-medium hover:text-maroon-600 transition-colors cursor-pointer"
                            >
                              View Specifications &rarr;
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* BENEFITS TAB */}
                {activeTab === 'benefits' && (
                  <div>
                    <h2 className="text-2xl font-bold text-dark-grey-900 mb-8">Key Benefits</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {data.benefits.map((benefit, idx) => {
                        const IconComponent = iconMap[benefit.iconName] || ShieldCheck;
                        return (
                          <div key={idx} className="flex gap-5">
                            <div className="w-12 h-12 rounded-full bg-copper-50 flex items-center justify-center text-copper-600 shrink-0">
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-dark-grey-900 mb-2">{benefit.title}</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* MEDIA TAB */}
                {activeTab === 'media' && (
                  <div>
                    <h2 className="text-2xl font-bold text-dark-grey-900 mb-8">Media Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {data.media.map((item, idx) => (
                        <div key={idx} className="relative group rounded-sm overflow-hidden cursor-pointer border border-gray-100">
                          <div className="aspect-video bg-gray-100">
                            <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                          </div>
                          {item.type === 'video' && (
                            <div className="absolute inset-0 bg-dark-grey-900/30 flex items-center justify-center group-hover:bg-dark-grey-900/40 transition-colors">
                              <PlayCircle className="w-12 h-12 text-white opacity-90 group-hover:scale-110 transition-transform" />
                            </div>
                          )}
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-grey-900/90 to-transparent">
                            <h5 className="text-white font-medium text-sm">{item.title}</h5>
                            {item.duration && <p className="text-gray-300 text-xs mt-1">{item.duration}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SPECIALTIES TAB */}
                {activeTab === 'specialties' && (
                  <div>
                    <h2 className="text-2xl font-bold text-dark-grey-900 mb-8">Related Specialties</h2>
                    <div className="flex flex-wrap gap-3">
                      {data.specialties.map((specialty, idx) => (
                        <div key={idx} className="px-5 py-3 bg-gray-50 border border-gray-200 rounded-full text-dark-grey-900 font-medium hover:border-maroon-500 hover:text-maroon-600 transition-colors cursor-pointer flex items-center gap-2">
                          <Stethoscope className="w-4 h-4 text-copper-500" />
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
