import { motion } from 'motion/react';
import { HeartPulse, Brain, Bone, Eye, ActivitySquare } from 'lucide-react';

const specialties = [
  {
    id: 'thyroid',
    title: "Endocrine Surgery",
    icon: <ActivitySquare className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'neurology',
    title: "Neurology",
    icon: <Brain className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'orthopedics',
    title: "Orthopedics",
    icon: <Bone className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1582719478250-c89400bbbfc5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'cardiology',
    title: "Cardiology",
    icon: <HeartPulse className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Specialties({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <section id="specialties" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-maroon-600 tracking-widest uppercase mb-3">Clinical Specialties</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-dark-grey-900">Comprehensive Care Solutions</h3>
          </div>
          <button 
            onClick={() => onNavigate && onNavigate('home#specialties')}
            className="text-copper-600 font-medium hover:text-copper-500 transition-colors flex items-center gap-2 cursor-pointer"
          >
            View All Specialties
            <span className="text-xl">&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => onNavigate && onNavigate(`specialty-${spec.id}`)}
              className="group relative h-80 rounded-sm overflow-hidden cursor-pointer"
            >
              <img 
                src={spec.image} 
                alt={spec.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-grey-900 via-dark-grey-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center gap-3 mb-2 text-copper-400">
                  {spec.icon}
                  <h4 className="text-xl font-semibold text-white">{spec.title}</h4>
                </div>
                <div className="h-0 overflow-hidden group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-gray-300 text-sm mt-2">
                    Advanced solutions and equipment tailored for {spec.title.toLowerCase()} procedures.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
