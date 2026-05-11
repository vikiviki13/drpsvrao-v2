import { motion } from 'motion/react';
import { PlayCircle, HelpCircle, FileText } from 'lucide-react';

export default function Education({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const handleNav = () => {
    if (onNavigate) {
      onNavigate('media');
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-maroon-600 tracking-widest uppercase mb-3">Educational Content</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-dark-grey-900">Learn & Discover</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Videos */}
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center gap-2 text-dark-grey-900">
              <PlayCircle className="w-6 h-6 text-copper-500" /> 1-Minute Tech Clips
            </h4>
            <div className="space-y-6">
              {[
                { title: "Robotic Arm Precision Demo", img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800" },
                { title: "Advanced Endoscopy Visualization", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" }
              ].map((video, idx) => (
                <motion.div 
                  key={idx}
                  onClick={handleNav}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group cursor-pointer rounded-sm overflow-hidden h-48 block"
                >
                  <img src={video.img} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-dark-grey-900/40 group-hover:bg-dark-grey-900/30 transition-colors flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-grey-900/90 to-transparent">
                    <h5 className="text-white font-medium">{video.title}</h5>
                    <p className="text-gray-300 text-xs mt-1">1:00</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQs with illustrations */}
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center gap-2 text-dark-grey-900">
              <HelpCircle className="w-6 h-6 text-copper-500" /> Illustrated FAQs
            </h4>
            <div className="space-y-4">
              {[
                { q: "How does robotic-assisted surgery work?", icon: <FileText className="w-8 h-8 text-maroon-600" /> },
                { q: "What are the benefits of advanced imaging?", icon: <FileText className="w-8 h-8 text-maroon-600" /> },
                { q: "Is minimally invasive surgery right for me?", icon: <FileText className="w-8 h-8 text-maroon-600" /> },
                { q: "How to prepare for an endoscopic procedure?", icon: <FileText className="w-8 h-8 text-maroon-600" /> }
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  onClick={handleNav}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-5 border border-gray-100 rounded-sm hover:border-copper-400 hover:shadow-md transition-all cursor-pointer bg-gray-50 hover:bg-white flex gap-4 items-center group block"
                >
                  <div className="bg-white p-2 rounded-sm shadow-sm border border-gray-100 group-hover:border-copper-200 transition-colors">
                    {faq.icon}
                  </div>
                  <div>
                    <h5 className="font-medium text-dark-grey-900 group-hover:text-maroon-600 transition-colors">{faq.q}</h5>
                    <p className="text-sm text-gray-500 mt-1">View illustrated guide &rarr;</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
