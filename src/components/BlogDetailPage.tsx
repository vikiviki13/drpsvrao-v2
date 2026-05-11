import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Calendar, Clock, Share2, 
  Linkedin, Twitter, Link as LinkIcon, 
  ChevronRight, MessageSquare, 
  Printer, Type, Bookmark, Heart,
  Sparkles, ShieldCheck, Activity, Volume2, 
  FileText, Maximize2, Download, ExternalLink,
  List, ArrowRight
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  desc: string;
}

export default function BlogDetailPage({ post, onBack, onNavigate }: { post: BlogPost, onBack: () => void, onNavigate: (page: string) => void }) {
  const [readingProgress, setReadingProgress] = useState(0);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contentSizeClass = {
    sm: 'text-base leading-relaxed',
    md: 'text-lg md:text-xl leading-relaxed',
    lg: 'text-2xl leading-relaxed'
  }[fontSize];

  return (
    <div className="min-h-screen bg-white pt-24 pb-32 selection:bg-maroon-100 selection:text-maroon-900">
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-gray-50 z-[100]">
        <motion.div className="h-full bg-maroon-600" style={{ width: `${readingProgress}%` }} />
      </div>

      <div className="max-w-7xl mx-auto px-8">
        
        {/* Navigation Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 py-6 border-b border-gray-100 gap-6">
          <button 
            onClick={onBack}
            className="group flex items-center gap-4 text-[10px] font-black text-dark-grey-900 uppercase tracking-[0.2em] hover:text-maroon-600 transition-all"
          >
            <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-maroon-600 group-hover:text-white transition-all">
              <ArrowLeft size={20} />
            </div>
            Insights Feed
          </button>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 bg-gray-50 p-1.5 rounded-xl border border-gray-100">
              {(['sm', 'md', 'lg'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${fontSize === size ? 'bg-white text-maroon-600 shadow-sm border border-gray-100' : 'text-gray-400 hover:text-dark-grey-900'}`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all ${isBookmarked ? 'bg-maroon-600 text-white border-maroon-600 shadow-xl' : 'bg-white border-gray-100 text-gray-400 hover:text-maroon-600'}`}
              >
                <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* Main Content */}
          <article className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="px-4 py-1.5 rounded-full bg-maroon-900 text-white text-[10px] font-black uppercase tracking-[0.2em]">
                  {post.category} Publication
                </div>
                <div className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
                  {post.date}
                </div>
              </div>

              <h1 className="text-4xl md:text-7xl font-black text-dark-grey-900 tracking-tighter leading-[1.05] mb-12">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 mb-16 pb-12 border-b border-gray-100">
                <div className="w-16 h-16 rounded-[1.5rem] border-2 border-maroon-600 p-1">
                  <img src="https://ui-avatars.com/api/?name=PSV+Rao&background=800000&color=fff" alt="Dr. PSV Rao" className="w-full h-full rounded-xl object-cover" />
                </div>
                <div>
                  <p className="text-lg font-black text-dark-grey-900 leading-none mb-1">{post.author}</p>
                  <p className="text-[10px] font-black text-maroon-600 uppercase tracking-widest">Medical Director</p>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100">
                  <Clock size={16} className="text-maroon-600" />
                  <span className="text-[11px] font-black text-dark-grey-900 uppercase tracking-widest">{post.readTime}</span>
                </div>
              </div>

              <div className="relative rounded-[3rem] overflow-hidden mb-16 shadow-2xl shadow-gray-200">
                <img src={post.image} alt={post.title} className="w-full h-96 object-cover" />
              </div>

              <div className={`prose prose-2xl max-w-none text-gray-500 font-medium ${contentSizeClass}`}>
                <p className="text-2xl md:text-3xl font-black text-dark-grey-900 mb-12 leading-tight tracking-tight">
                  {post.desc}
                </p>

                <h2 className="text-2xl md:text-4xl font-black text-dark-grey-900 mt-20 mb-10 tracking-tighter">
                  Introduction to the Clinical Protocol
                </h2>
                <p className="mb-10">
                  The landscape of surgical innovation is rapidly shifting towards a data-driven, precision-first model. At PSVRAO, our focus has been the integration of high-fidelity robotic systems with real-time neural mapping. This synergy allows us to navigate complex anatomical landscapes with a 0.1mm tolerance, effectively redefining the limits of minimally invasive surgery.
                </p>

                <div className="my-16 p-12 bg-gray-50 rounded-[3rem] border border-gray-100">
                  <h4 className="text-xl font-black text-dark-grey-900 mb-8 flex items-center gap-3">
                    <ShieldCheck className="text-maroon-600" size={24} />
                    Clinical Key Findings
                  </h4>
                  <div className="space-y-6">
                    <div className="flex gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-maroon-600 shadow-sm shrink-0 font-black text-xs">01</div>
                      <div>
                        <p className="font-black text-dark-grey-900 mb-2">Haptic Synchronization</p>
                        <p className="text-sm text-gray-400">Neutralizing surgical tremor through high-frequency tactile feedback loops.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-maroon-600 shadow-sm shrink-0 font-black text-xs">02</div>
                      <div>
                        <p className="font-black text-dark-grey-900 mb-2">Volumetric Mapping</p>
                        <p className="text-sm text-gray-400">Overlapping 3D vascular maps directly onto the surgeon's viewing console.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl md:text-4xl font-black text-dark-grey-900 mt-20 mb-10 tracking-tighter">
                  The Future Trajectory
                </h2>
                <p className="mb-10">
                  As we move beyond traditional visualization, the role of AI in preemptive surgical planning becomes paramount. By utilizing digital twin simulations, we can rehears every maneuver before the first port is placed, ensuring that patient-specific anomalies are identified and mitigated in advance.
                </p>

                <p className="mb-10">
                  This level of preparation, combined with our boutique care philosophy, ensures that every patient receives a personalized, high-precision surgical journey.
                </p>
              </div>

              {/* Engagement Panel */}
              <div className="mt-24 p-12 bg-dark-grey-900 rounded-[3rem] flex flex-wrap items-center justify-between gap-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-maroon-600/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-2 tracking-tight">Was this protocol helpful?</h3>
                  <p className="text-gray-400 text-sm font-medium">Join the discussion with other clinical professionals.</p>
                </div>
                <div className="flex gap-4 relative z-10">
                  <button 
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${isLiked ? 'bg-maroon-600 text-white shadow-xl' : 'bg-white/10 text-white hover:bg-white/20'}`}
                  >
                    <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
                    Relevant {isLiked ? '(1)' : ''}
                  </button>
                  <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-dark-grey-900 font-black text-[10px] uppercase tracking-widest hover:bg-maroon-600 hover:text-white transition-all">
                    <MessageSquare size={18} />
                    Discuss
                  </button>
                </div>
              </div>
            </motion.div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-12">
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-100/50">
              <div className="flex items-center gap-3 mb-8">
                <List size={18} className="text-maroon-600" />
                <h4 className="text-[11px] font-black text-dark-grey-900 uppercase tracking-widest">Article Sections</h4>
              </div>
              <nav className="space-y-6">
                {['Protocol Introduction', 'Clinical Key Findings', 'Future Trajectory', 'Conclusion'].map((item, idx) => (
                  <button key={item} className="flex items-start gap-4 w-full text-left group">
                    <span className="text-[10px] font-black text-gray-200 group-hover:text-maroon-600 transition-colors mt-1">0{idx + 1}</span>
                    <span className="text-sm font-bold text-gray-500 group-hover:text-dark-grey-900 transition-colors">{item}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Clinical Assets</h4>
              <button className="w-full flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 hover:border-maroon-600 transition-all group">
                <div className="flex items-center gap-4">
                  <FileText size={18} className="text-maroon-600" />
                  <span className="text-sm font-bold text-dark-grey-900">Protocol PDF</span>
                </div>
                <Download size={16} className="text-gray-300 group-hover:text-maroon-600" />
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Intelligence */}
      <section className="bg-gray-50 mt-32 py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-4xl font-black text-dark-grey-900 tracking-tighter">Related Intelligence</h2>
            <button className="text-xs font-black text-maroon-600 uppercase tracking-widest flex items-center gap-2 group">
              View Publication Feed <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] rounded-[3rem] overflow-hidden mb-10 bg-gray-200 relative">
                  <div className="w-full h-full bg-dark-grey-900/10 group-hover:bg-dark-grey-900/20 transition-all duration-700" />
                </div>
                <h3 className="text-2xl font-black text-dark-grey-900 group-hover:text-maroon-600 transition-colors leading-tight mb-4">
                  Innovation in Surgical {i === 1 ? 'Endocrine' : i === 2 ? 'Cardiology' : 'Neurology'} Protocols.
                </h3>
                <div className="flex items-center gap-2 text-maroon-600 font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Read article <ArrowRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
