import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function ContactCTA({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <section className="py-24 bg-maroon-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-copper-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Connect?
        </h2>
        <p className="text-maroon-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          Whether you're a patient seeking care, a doctor looking to refer, or a partner wanting to collaborate, our team is ready to assist you.
        </p>

        <button
          onClick={() => onNavigate && onNavigate('contact')}
          className="px-8 py-4 bg-white hover:bg-gray-100 text-maroon-900 font-bold rounded-sm transition-colors inline-flex items-center justify-center gap-2"
        >
          Go to Contact Center <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
