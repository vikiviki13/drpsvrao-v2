import { motion } from 'motion/react';
import { ShieldCheck, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-dark-grey-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-copper-500 tracking-widest uppercase mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Pioneering Medical Excellence</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              With over two decades of expertise in medical engineering, MedTech Nexus stands at the forefront of surgical innovation. We partner with leading healthcare institutions globally to deliver technologies that redefine patient outcomes.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-bold text-maroon-500 mb-2">25+</h4>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-maroon-500 mb-2">50+</h4>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Countries Served</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-dark-grey-800 p-8 rounded-sm border border-gray-700">
              <ShieldCheck className="w-10 h-10 text-copper-500 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Uncompromised Safety</h4>
              <p className="text-gray-400 text-sm">Rigorous testing and compliance with global medical standards.</p>
            </div>
            <div className="bg-dark-grey-800 p-8 rounded-sm border border-gray-700 sm:translate-y-8">
              <Award className="w-10 h-10 text-copper-500 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Award-Winning Tech</h4>
              <p className="text-gray-400 text-sm">Recognized globally for design and clinical efficacy.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
