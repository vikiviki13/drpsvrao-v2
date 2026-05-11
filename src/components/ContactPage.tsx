import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Building, User, Stethoscope, Briefcase } from 'lucide-react';

const categories = [
  { id: 'patient', label: 'Patient Inquiry', icon: User, email: 'patients@example.com' },
  { id: 'doctor', label: 'Doctor / Referral', icon: Stethoscope, email: 'doctors@example.com' },
  { id: 'vendor', label: 'Vendor / Supplier', icon: Briefcase, email: 'vendors@example.com' },
  { id: 'institution', label: 'Institutional Partnership', icon: Building, email: 'partners@example.com' }
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
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', category: 'patient', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-grey-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're a patient seeking care, a doctor looking to refer, or a partner wanting to collaborate, our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Left: Contact Info & Routing */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Dynamic Routing Info */}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-dark-grey-900 mb-6">Direct Contacts</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-maroon-50 flex items-center justify-center text-maroon-600 shrink-0">
                    <selectedCategory.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">
                      {selectedCategory.label} Desk
                    </p>
                    <a href={`mailto:${selectedCategory.email}`} className="text-copper-600 hover:text-copper-500 font-medium transition-colors">
                      {selectedCategory.email}
                    </a>
                  </div>
                </div>

                <div className="h-px bg-gray-100 w-full my-4"></div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">General Inquiries</p>
                    <a href="mailto:info@example.com" className="text-gray-600 hover:text-maroon-600 transition-colors block mb-1">info@example.com</a>
                    <a href="mailto:kadir@example.com" className="text-gray-600 hover:text-maroon-600 transition-colors block">kadir@example.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-xs text-gray-500 mt-1">Mon-Fri, 8am - 6pm EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map / Location */}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-copper-500" />
                <h3 className="text-xl font-bold text-dark-grey-900">Headquarters</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                100 Innovation Drive<br />
                Medical Technology Park<br />
                Boston, MA 02115
              </p>
              <div className="aspect-video w-full bg-gray-200 rounded-sm overflow-hidden relative">
                {/* Aesthetic Map Placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                  alt="Location Map" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark-grey-900/10 mix-blend-multiply"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-maroon-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border border-gray-100 relative overflow-hidden">
              
              {/* Success Overlay */}
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-grey-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. The {selectedCategory.label} team will get back to you shortly.</p>
                </motion.div>
              )}

              <h2 className="text-2xl font-bold text-dark-grey-900 mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Category Selection */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">I am a...</label>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, category: cat.id })}
                        className={`p-3 text-sm font-medium rounded-sm border transition-all flex items-center justify-center gap-2 ${
                          formData.category === cat.id 
                            ? 'border-maroon-600 bg-maroon-50 text-maroon-700' 
                            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <cat.icon className="w-4 h-4" />
                        {cat.label.split('/')[0].trim()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:bg-white transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:bg-white transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:bg-white transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:bg-white transition-colors resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-maroon-600 hover:bg-maroon-700 text-white font-bold rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" /> Send Message
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, your inquiry will be routed to <span className="font-semibold">{selectedCategory.email}</span>.
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
