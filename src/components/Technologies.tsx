import { motion } from 'motion/react';
import { Monitor, Cpu, Search, Zap, Camera } from 'lucide-react';

const technologies = [
  {
    id: 'laparoscopy',
    icon: <Monitor className="w-8 h-8" />,
    title: "Laparoscopy",
    description: "Minimally invasive surgical techniques with advanced visualization and ergonomic instrumentation."
  },
  {
    id: 'robotics',
    icon: <Cpu className="w-8 h-8" />,
    title: "Robotics",
    description: "Precision robotic-assisted systems enhancing surgical capabilities with 3D HD vision."
  },
  {
    id: 'endoscopy',
    icon: <Search className="w-8 h-8" />,
    title: "Endoscopy",
    description: "State-of-the-art internal visualization and diagnostic tools for comprehensive care."
  },
  {
    id: 'energy',
    icon: <Zap className="w-8 h-8" />,
    title: "Energy Devices",
    description: "Advanced tissue sealing and cutting technologies for improved hemostasis and speed."
  },
  {
    id: 'imaging',
    icon: <Camera className="w-8 h-8" />,
    title: "Imaging",
    description: "Real-time, high-resolution intraoperative imaging for immediate decision-making."
  }
];

export default function Technologies({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <section id="technologies" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-maroon-600 tracking-widest uppercase mb-3">Core Technologies</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-dark-grey-900">Driving Medical Innovation</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => onNavigate && onNavigate(`tech-${tech.id}`)}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-copper-500 mb-6 group-hover:bg-maroon-600 group-hover:text-white transition-colors">
                {tech.icon}
              </div>
              <h4 className="text-xl font-semibold text-dark-grey-900 mb-3">{tech.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
