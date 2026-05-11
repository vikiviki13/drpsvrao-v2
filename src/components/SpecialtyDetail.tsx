import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft, Battery, Scale, HeartPulse, User,
  Stethoscope, Syringe, Waves, Microscope,
  ChevronDown, ChevronUp, Calendar, ArrowRight
} from 'lucide-react';
import { SpecialtyData } from '../types';

interface Props {
  data: SpecialtyData;
  onBack: () => void;
  onNavigate?: (page: string) => void;
}

const iconMap: Record<string, any> = {
  Battery, Scale, HeartPulse, User,
  Stethoscope, Syringe, Waves, Microscope
};

export default function SpecialtyDetail({ data, onBack, onNavigate }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-24">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-copper-600 hover:text-copper-500 transition-colors mb-6 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Specialties
            </button>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-grey-900 mb-4">{data.patientFriendlyName}</h1>
            <p className="text-lg text-gray-500 mb-6 font-medium uppercase tracking-wider">{data.title}</p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              {data.overview}
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
              <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-16 space-y-24">

        {/* Symptoms Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-grey-900 mb-4">Common Symptoms to Watch For</h2>
            <p className="text-gray-600">Thyroid issues can affect people differently. Here are the most common signs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.symptoms.map((symptom, idx) => {
              const IconComponent = iconMap[symptom.iconName] || User;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex gap-4 items-start"
                >
                  <div className="w-12 h-12 rounded-full bg-maroon-50 text-maroon-600 flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-grey-900 mb-2">{symptom.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{symptom.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Diagnosis Journey */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-grey-900 mb-4">Your Diagnosis Journey</h2>
            <p className="text-gray-600">We take a step-by-step approach to understand exactly what's happening.</p>
          </div>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-copper-200 hidden md:block"></div>

            <div className="space-y-8">
              {data.diagnosisSteps.map((step, idx) => {
                const IconComponent = iconMap[step.iconName] || Stethoscope;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start"
                  >
                    <div className="flex items-center gap-4 md:w-48 shrink-0 relative z-10 md:bg-gray-50 md:py-2">
                      <div className="w-16 h-16 rounded-full bg-copper-500 text-white flex items-center justify-center shadow-md border-4 border-gray-50 shrink-0">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-copper-600 font-bold uppercase tracking-wider text-sm">Step {step.step}</span>
                    </div>
                    <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-100 flex-1 w-full relative">
                      {/* Left Arrow for desktop */}
                      <div className="hidden md:block absolute top-8 -left-3 w-6 h-6 bg-white border-l border-b border-gray-100 transform rotate-45"></div>
                      <h3 className="text-xl font-bold text-dark-grey-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-grey-900 mb-4">Treatment Options</h2>
            <p className="text-gray-600">Tailored solutions ranging from gentle medications to advanced surgery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Non-Surgical */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-maroon-600 mb-6 border-b border-gray-200 pb-2">Medical Management</h3>
              {data.treatments.filter(t => t.type === 'Non-Surgical').map((treatment, idx) => (
                <div key={idx} className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-dark-grey-900 mb-2">{treatment.title}</h4>
                  <p className="text-gray-600 text-sm">{treatment.description}</p>
                </div>
              ))}
            </div>
            {/* Surgical */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-copper-600 mb-6 border-b border-gray-200 pb-2">Surgical Solutions</h3>
              {data.treatments.filter(t => t.type === 'Surgical').map((treatment, idx) => (
                <div key={idx} className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 border-l-4 border-l-copper-500">
                  <h4 className="font-semibold text-dark-grey-900 mb-2">{treatment.title}</h4>
                  <p className="text-gray-600 text-sm">{treatment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology & Equipment */}
        <section className="bg-dark-grey-900 text-white rounded-sm p-8 md:p-12 shadow-xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4">How Technology Keeps You Safe</h2>
            <p className="text-gray-400">We use the latest advancements to ensure precision and a faster recovery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {data.technologies.map((tech, idx) => (
                <div key={idx}>
                  <h4 className="text-xl font-semibold text-copper-400 mb-2">{tech.name}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{tech.description}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.equipment.map((eq, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="aspect-square rounded-sm overflow-hidden bg-gray-800">
                    <img src={eq.image} alt={eq.name} className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-xs text-center font-medium text-gray-400 uppercase tracking-wider">{eq.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-grey-900 mb-4">Common Questions</h2>
            <p className="text-gray-600">Answers to help you feel more comfortable and prepared.</p>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-dark-grey-900">{faq.question}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-maroon-900 rounded-sm p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000')] opacity-10 object-cover mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Discuss Your Options?</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
              Schedule a consultation with our endocrine specialists to get a personalized diagnosis and treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate && onNavigate('contact')}
                className="px-8 py-4 bg-white text-maroon-900 font-bold rounded-sm hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-5 h-5" /> Book an Appointment
              </button>
              <button
                onClick={() => onNavigate && onNavigate('contact')}
                className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Contact Our Team <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
