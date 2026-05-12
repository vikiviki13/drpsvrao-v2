import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  ChevronRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles,
  Stethoscope,
  ShieldCheck,
  Video,
  MapPin
} from 'lucide-react';

const steps = [
  { id: 1, label: 'Service' },
  { id: 2, label: 'Schedule' },
  { id: 3, label: 'Patient Info' },
  { id: 4, label: 'Confirm' }
];

const services = [
  { id: 'robotic', label: 'Robotic Surgery Consultation', icon: ShieldCheck, time: '45 min', desc: 'Pre-operative evaluation for robotic-assisted procedures.' },
  { id: 'thyroid', label: 'Endocrine Specialty Care', icon: Stethoscope, time: '30 min', desc: 'Diagnostic and follow-up care for thyroid disorders.' },
  { id: 'second-opinion', label: 'Surgical Second Opinion', icon: Sparkles, time: '60 min', desc: 'Comprehensive review of complex surgical cases.' },
  { id: 'telehealth', label: 'Virtual Consultation', icon: Video, time: '20 min', desc: 'Remote clinical assessment for initial inquiries.' }
];

const timeSlots = [
  '09:00 AM', '10:30 AM', '11:45 AM', '02:00 PM', '03:30 PM', '04:45 PM'
];

export default function AppointmentPage({ onBack }: { onBack: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => {
    if (currentStep === 1) onBack();
    else setCurrentStep(prev => prev - 1);
  };

  const isStepComplete = () => {
    if (currentStep === 1) return bookingData.service !== '';
    if (currentStep === 2) return bookingData.date !== '' && bookingData.time !== '';
    if (currentStep === 3) return bookingData.name !== '' && bookingData.email !== '' && bookingData.phone !== '';
    return true;
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-maroon-50 border border-maroon-100 rounded-full text-maroon-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            <Sparkles size={14} />
            Elite Clinical Access
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-dark-grey-900 tracking-tighter mb-4">
            Book Your <span className="text-maroon-600">Journey.</span>
          </h1>
          <p className="text-gray-500 font-medium max-w-xl mx-auto">
            Experience precision healthcare. Select your service and preferred schedule below to initiate your clinical encounter.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-4 mb-20">
          {steps.map((step) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black transition-all duration-500 ${
                  currentStep >= step.id ? 'bg-maroon-600 text-white shadow-xl shadow-maroon-600/20' : 'bg-white border border-gray-100 text-gray-300'
                }`}>
                  {currentStep > step.id ? <CheckCircle2 size={20} /> : step.id}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest ${currentStep >= step.id ? 'text-dark-grey-900' : 'text-gray-300'}`}>
                  {step.label}
                </span>
              </div>
              {step.id !== 4 && (
                <div className={`w-12 h-[2px] mb-6 transition-all duration-500 ${currentStep > step.id ? 'bg-maroon-600' : 'bg-gray-100'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Main Booking Panel */}
        <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden relative min-h-[600px] flex flex-col">
          
          <div className="flex-1 p-10 md:p-16">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setBookingData({ ...bookingData, service: service.id })}
                      className={`p-8 rounded-[2.5rem] border-2 text-left transition-all group ${
                        bookingData.service === service.id 
                          ? 'border-maroon-600 bg-maroon-50 shadow-xl shadow-maroon-600/5' 
                          : 'border-gray-50 bg-gray-50 hover:border-maroon-200 hover:bg-white'
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all ${
                        bookingData.service === service.id ? 'bg-maroon-600 text-white' : 'bg-white text-maroon-600'
                      }`}>
                        <service.icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-dark-grey-900 mb-2">{service.label}</h3>
                      <p className="text-sm text-gray-400 font-medium mb-6 leading-relaxed">{service.desc}</p>
                      <div className="flex items-center gap-2 text-[10px] font-black text-maroon-600 uppercase tracking-widest">
                        <Clock size={12} />
                        {service.time} session
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Select Clinical Date</h4>
                      <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                        {/* Simplified Calendar UI */}
                        <div className="grid grid-cols-7 gap-2 text-center mb-6">
                          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                            <div key={d} className="text-[10px] font-black text-gray-300">{d}</div>
                          ))}
                          {[...Array(31)].map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setBookingData({ ...bookingData, date: `May ${i + 1}, 2026` })}
                              className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold transition-all ${
                                bookingData.date === `May ${i + 1}, 2026`
                                  ? 'bg-maroon-600 text-white shadow-lg'
                                  : 'hover:bg-white hover:text-maroon-600 text-dark-grey-900'
                              }`}
                            >
                              {i + 1}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Select Arrival Time</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {timeSlots.map(time => (
                          <button
                            key={time}
                            onClick={() => setBookingData({ ...bookingData, time })}
                            className={`p-5 rounded-2xl border-2 font-bold text-sm transition-all ${
                              bookingData.time === time
                                ? 'border-maroon-600 bg-maroon-50 text-maroon-900'
                                : 'border-gray-50 bg-gray-50 text-gray-400 hover:border-maroon-200 hover:bg-white'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Identity</label>
                      <input 
                        type="text" 
                        value={bookingData.name}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                        className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-maroon-600/5 focus:bg-white focus:border-maroon-600 transition-all font-bold text-dark-grey-900"
                        placeholder="Dr. Arthur Miller"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Secure Email</label>
                      <input 
                        type="email" 
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-maroon-600/5 focus:bg-white focus:border-maroon-600 transition-all font-bold text-dark-grey-900"
                        placeholder="miller@hospital.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-maroon-600/5 focus:bg-white focus:border-maroon-600 transition-all font-bold text-dark-grey-900"
                      placeholder="+1 (000) 000-0000"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Clinical Notes (Optional)</label>
                    <textarea 
                      rows={4}
                      value={bookingData.message}
                      onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                      className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-maroon-600/5 focus:bg-white focus:border-maroon-600 transition-all font-medium text-dark-grey-900 resize-none"
                      placeholder="Symptoms, history, or specific concerns..."
                    ></textarea>
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-10"
                >
                  <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-10 shadow-xl shadow-green-100">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-4xl font-black text-dark-grey-900 mb-6 tracking-tight">Booking Requested.</h2>
                  <p className="text-gray-500 text-lg font-medium mb-12 max-w-sm">
                    Your appointment has been logged into our clinical system. A coordinator will call you to confirm.
                  </p>
                  
                  <div className="w-full max-w-md bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 text-left space-y-6 mb-12">
                    <div className="flex justify-between items-center pb-6 border-b border-gray-200">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Protocol</span>
                      <span className="font-bold text-dark-grey-900">{services.find(s => s.id === bookingData.service)?.label}</span>
                    </div>
                    <div className="flex justify-between items-center pb-6 border-b border-gray-200">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Date & Time</span>
                      <span className="font-bold text-dark-grey-900">{bookingData.date} at {bookingData.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Patient</span>
                      <span className="font-bold text-dark-grey-900">{bookingData.name}</span>
                    </div>
                  </div>

                  <button 
                    onClick={onBack}
                    className="px-12 py-5 bg-dark-grey-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-maroon-600 transition-all shadow-2xl active:scale-95"
                  >
                    Return to Portal
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Navigation */}
          {currentStep < 4 && (
            <div className="p-8 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <button 
                onClick={prevStep}
                className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-dark-grey-900 transition-all"
              >
                <ArrowLeft size={16} />
                {currentStep === 1 ? 'Cancel' : 'Go Back'}
              </button>

              <button 
                disabled={!isStepComplete()}
                onClick={nextStep}
                className={`flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all shadow-xl ${
                  isStepComplete() 
                    ? 'bg-maroon-600 text-white hover:bg-maroon-700 active:scale-95' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {currentStep === 3 ? 'Confirm Request' : 'Next Protocol'}
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Security Badge */}
        <div className="mt-12 flex items-center justify-center gap-3 text-gray-400">
          <ShieldCheck size={16} className="text-maroon-600" />
          <span className="text-[10px] font-black uppercase tracking-widest leading-none">
            HIPAA Compliant & Secure Transmission Protocols
          </span>
        </div>

      </div>
    </div>
  );
}
