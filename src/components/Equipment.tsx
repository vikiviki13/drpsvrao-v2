import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const equipmentList = [
  {
    id: 'nexus-x1',
    name: "Nexus X-1 Surgical Robot",
    category: "Robotics",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'aeroscan-mri',
    name: "AeroScan MRI System",
    category: "Imaging",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'vitalsync-monitor',
    name: "VitalSync Monitor",
    category: "Monitoring",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Equipment({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <section className="py-24 bg-dark-grey-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-copper-500 tracking-widest uppercase mb-3">Featured Equipment</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">State-of-the-Art Hardware</h3>
          <button
            onClick={() => onNavigate && onNavigate('catalog')}
            className="text-copper-400 hover:text-white transition-colors font-medium flex items-center justify-center gap-2 mx-auto"
          >
            View Full Catalog <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipmentList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-dark-grey-800 border border-gray-700 rounded-sm overflow-hidden group cursor-pointer"
              onClick={() => onNavigate && onNavigate(`equipment-${item.id}`)}
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-maroon-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                <p className="text-gray-400 text-sm mb-6">
                  Industry-leading precision and reliability for critical medical environments.
                </p>
                <button className="text-copper-400 group-hover:text-copper-300 font-medium text-sm flex items-center gap-2 transition-colors">
                  View Specifications <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
