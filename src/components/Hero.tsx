import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark-grey-900">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000"
          alt="Advanced Medical Technology"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-grey-900 via-dark-grey-900/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-maroon-600/20 border border-maroon-500/30 text-copper-400 text-sm font-medium mb-6 tracking-wide uppercase">
              Next-Generation Healthcare
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Advanced Surgical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Technologies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light">
              Precision, Innovation, Patient Care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate && onNavigate('catalog')}
                className="px-8 py-4 bg-maroon-600 hover:bg-maroon-500 text-white font-medium rounded-sm transition-colors flex items-center justify-center gap-2 group"
              >
                Explore Technologies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
