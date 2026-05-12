import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Building, User, Stethoscope, Briefcase, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const categories = [
  { id: 'patient', label: 'Patient Care', icon: User, email: 'care@psvrao.com' },
  { id: 'doctor', label: 'Referrals', icon: Stethoscope, email: 'referrals@psvrao.com' },
  { id: 'vendor', label: 'Procurement', icon: Briefcase, email: 'supply@psvrao.com' },
  { id: 'institution', label: 'Partnerships', icon: Building, email: 'partners@psvrao.com' }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'patient',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const selectedCategory = categories.find(c => c.id === formData.category) || categories[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', category: 'patient', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-maroon-100 selection:text-maroon-900">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Panel: Information & Branding (Cinematic) */}
        <div className="lg:w-[40%] bg-dark-grey-900 relative overflow-hidden flex flex-col p-12 md:p-20 lg:p-24 justify-center">
          {/* Background Accents */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-maroon-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-copper-500/5 blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-copper-400 text-[10px] font-black tracking-[0.2em] uppercase mb-10">
              <Sparkles size={14} className="text-maroon-600" />
              Direct Clinical Access
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              Let's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-copper-500">Connect.</span>
            </h1>
            
            <p className="text-gray-400 text-xl font-medium leading-relaxed mb-16 max-w-md">
              Your inquiry will be routed to a specialized clinical coordinator to ensure rapid and accurate response protocols.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-maroon-500 group-hover:bg-maroon-600 group-hover:text-white transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Clinical Support</p>
                  <p className="text-white text-xl font-bold">+1 (800) PSV-RAO</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-copper-500 group-hover:bg-copper-500 group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Innovation HQ</p>
                  <p className="text-white text-xl font-bold">Boston, MA 02115</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Panel: The Form (Premium Minimalist) */}
        <div className="lg:w-[60%] flex items-center justify-center p-8 md:p-20 lg:p-32 bg-gray-50">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-2xl relative"
          >
            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/90 backdrop-blur-xl z-20 flex flex-col items-center justify-center text-center p-10 rounded-[3rem]"
                >
                  <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-green-100">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-4xl font-black text-dark-grey-900 mb-4 tracking-tight">Inquiry Received.</h3>
                  <p className="text-gray-500 text-lg font-medium max-w-sm">A clinical specialist will initiate the response protocol within 24 hours.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-white">
              <h2 className="text-3xl font-black text-dark-grey-900 mb-10 tracking-tight">Secure Communication</h2>
              
              <form onSubmit={handleSubmit} className="space-y-10">
                


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Identity</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-maroon-600/5 focus:bg-white focus:border-maroon-600 transition-all font-bold text-dark-grey-900"
                      placeholder="e.g. Dr. Arthur Miller"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Verified Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-maroon-600/5 focus:bg-white focus:border-maroon-600 transition-all font-bold text-dark-grey-900"
                      placeholder="name@domain.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Clinical Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-maroon-600/5 focus:bg-white focus:border-maroon-600 transition-all font-medium text-dark-grey-900 resize-none"
                    placeholder="Briefly describe your inquiry..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-6 bg-dark-grey-900 hover:bg-maroon-600 text-white font-black rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-maroon-900/20 group active:scale-[0.98]"
                >
                  Initiate Connection <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
                </button>

                <p className="text-[10px] text-gray-400 text-center font-black uppercase tracking-[0.2em]">
                  Encrypted transmission via <span className="text-maroon-600">{selectedCategory.email}</span>
                </p>

              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
