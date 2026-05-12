import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  ArrowLeft, Calendar, Clock, Share2, 
  Linkedin, Twitter, Link as LinkIcon, 
  ChevronRight, MessageSquare, 
  Bookmark, Heart,
  ShieldCheck, Download,
  List, ArrowRight, Eye, User
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
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.id]);

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Dynamic Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-maroon-600 origin-left z-[100]" 
        style={{ scaleX }} 
      />

      {/* Floating Interaction Bar */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-50">
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all ${isLiked ? 'bg-maroon-600 text-white border-maroon-600 shadow-lg shadow-maroon-600/20' : 'bg-white/80 backdrop-blur-md border-gray-100 text-gray-400 hover:text-maroon-600 hover:border-maroon-500/30'}`}
        >
          <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
        </button>
        <button 
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all ${isBookmarked ? 'bg-maroon-600 text-white border-maroon-600 shadow-lg shadow-maroon-600/20' : 'bg-white/80 backdrop-blur-md border-gray-100 text-gray-400 hover:text-maroon-600 hover:border-maroon-500/30'}`}
        >
          <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
        </button>
        <div className="w-14 h-[1px] bg-gray-200 my-2" />
        <button className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-maroon-600 hover:border-maroon-500/30 transition-all">
          <Share2 size={20} />
        </button>
      </div>

      {/* Immersive Hero Header */}
      <header className="relative w-full h-[70vh] lg:h-[85vh] overflow-hidden bg-dark-grey-900">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-grey-900 via-dark-grey-900/40 to-transparent" />
        </motion.div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group uppercase text-[10px] font-bold tracking-[0.2em]"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Insights
            </button>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-maroon-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-white/60 text-[10px] font-bold uppercase tracking-widest">
                <Calendar size={12} className="text-copper-400" />
                {post.date}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] max-w-5xl mb-12">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 border-t border-white/10 pt-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl border-2 border-copper-400/30 p-0.5 overflow-hidden">
                  <img src="https://ui-avatars.com/api/?name=PSV+Rao&background=800000&color=fff" alt="Author" className="w-full h-full rounded-xl object-cover" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-none mb-1">{post.author}</p>
                  <p className="text-copper-400 text-[10px] font-bold uppercase tracking-widest">Medical Director</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-white/50 text-[11px] font-bold uppercase tracking-widest">
                  <Clock size={14} className="text-copper-400" />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-2 text-white/50 text-[11px] font-bold uppercase tracking-widest">
                  <Eye size={14} className="text-copper-400" />
                  2.4k Views
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Article Content Section */}
      <main className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Body */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="prose prose-2xl max-w-none"
            >
              <p className="text-2xl md:text-3xl font-bold text-dark-grey-900 mb-16 leading-snug tracking-tight first-letter:text-7xl first-letter:font-black first-letter:text-maroon-600 first-letter:mr-3 first-letter:float-left">
                {post.desc}
              </p>

              <div className="space-y-12 text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
                <p>
                  The landscape of surgical innovation is rapidly shifting towards a data-driven, precision-first model. At PSVRAO, our focus has been the integration of high-fidelity robotic systems with real-time neural mapping. This synergy allows us to navigate complex anatomical landscapes with a 0.1mm tolerance, effectively redefining the limits of minimally invasive surgery.
                </p>

                <blockquote className="my-16 border-l-4 border-maroon-600 pl-10 py-4 italic">
                  <p className="text-3xl font-bold text-dark-grey-900 leading-tight mb-4">
                    "Precision is not just a metric in surgery; it's the fundamental language of patient safety in the digital age."
                  </p>
                  <cite className="text-maroon-600 font-bold text-sm uppercase tracking-widest">— Dr. PSV Rao</cite>
                </blockquote>

                <h2 className="text-3xl md:text-4xl font-bold text-dark-grey-900 mt-20 mb-8 tracking-tight">
                  Next-Gen Visualization Protocols
                </h2>
                
                <p>
                  As we move beyond traditional visualization, the role of AI in preemptive surgical planning becomes paramount. By utilizing digital twin simulations, we can rehears every maneuver before the first port is placed, ensuring that patient-specific anomalies are identified and mitigated in advance.
                </p>

                <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                      <ShieldCheck size={80} className="text-maroon-600" />
                    </div>
                    <div className="w-12 h-12 bg-maroon-50 rounded-2xl flex items-center justify-center text-maroon-600 mb-6 font-black">01</div>
                    <h4 className="text-xl font-bold text-dark-grey-900 mb-4 tracking-tight">Haptic Synchronization</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">Neutralizing surgical tremor through high-frequency tactile feedback loops and real-time correction.</p>
                  </div>
                  
                  <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Eye size={80} className="text-maroon-600" />
                    </div>
                    <div className="w-12 h-12 bg-maroon-50 rounded-2xl flex items-center justify-center text-maroon-600 mb-6 font-black">02</div>
                    <h4 className="text-xl font-bold text-dark-grey-900 mb-4 tracking-tight">Volumetric Mapping</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">Overlapping 3D vascular maps directly onto the surgeon's viewing console for enhanced navigation.</p>
                  </div>
                </div>

                <p>
                  This level of preparation, combined with our boutique care philosophy, ensures that every patient receives a personalized, high-precision surgical journey. The integration of these technologies represents a new standard of excellence in clinical practice.
                </p>
              </div>
            </motion.div>

            {/* Tags & Interaction */}
            <div className="mt-20 pt-12 border-t border-gray-100 flex flex-wrap items-center justify-between gap-8">
              <div className="flex flex-wrap gap-3">
                {['Robotic Surgery', 'AI', 'Thyroidology', 'Innovation'].map(tag => (
                  <span key={tag} className="px-5 py-2.5 bg-gray-50 text-gray-500 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-maroon-50 hover:text-maroon-600 transition-colors cursor-pointer border border-transparent hover:border-maroon-200">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <section className="mt-24 space-y-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="text-3xl font-bold text-dark-grey-900 tracking-tight">Clinical Discussion</h3>
                  <span className="px-3 py-1 bg-maroon-50 text-maroon-600 rounded-lg text-xs font-black">12</span>
                </div>
                <div className="h-[1px] flex-1 bg-gray-100 mx-10 hidden sm:block" />
              </div>

              {/* Comment Input */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/5 relative group">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-maroon-600 flex items-center justify-center shrink-0">
                    <User className="text-white" size={20} />
                  </div>
                  <div className="flex-1 space-y-4">
                    <textarea 
                      placeholder="Add to the clinical discussion..."
                      className="w-full bg-transparent border-none focus:ring-0 text-dark-grey-900 placeholder:text-gray-300 resize-none h-24 text-lg font-medium"
                    />
                    <div className="flex justify-end">
                      <button className="px-8 py-3 bg-dark-grey-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-maroon-600 transition-all active:scale-95">
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment List */}
              <div className="space-y-8">
                {[
                  { id: 1, user: 'Dr. Sarah Jenkins', role: 'Endocrinologist', text: 'The haptic feedback synchronization is a game-changer for sub-millimeter resections. Looking forward to more data on this.', date: '2 days ago', avatar: '11' },
                  { id: 2, user: 'Dr. Michael Chen', role: 'Robotic Surgeon', text: 'Excellent protocol. Have you seen any latency issues with the volumetric mapping during high-frequency movements?', date: '1 day ago', avatar: '32' },
                  { id: 3, user: 'Dr. Elena Rodriguez', role: 'Clinical Researcher', text: 'The integration of real-time neural mapping with robotic precision is exactly what the field needs. Phenomenal work, Dr. Rao.', date: '5 hours ago', avatar: '45' }
                ].map((comment) => (
                  <motion.div 
                    key={comment.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl border-2 border-gray-50 p-0.5 overflow-hidden shrink-0 group-hover:border-maroon-200 transition-colors">
                      <img src={`https://i.pravatar.cc/150?u=${comment.avatar}`} alt={comment.user} className="w-full h-full rounded-xl object-cover" />
                    </div>
                    <div className="flex-1 pb-8 border-b border-gray-50 group-last:border-none">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-dark-grey-900 tracking-tight">{comment.user}</h4>
                          <p className="text-[10px] font-black text-maroon-600 uppercase tracking-widest">{comment.role}</p>
                        </div>
                        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{comment.date}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        {comment.text}
                      </p>
                      <div className="mt-4 flex gap-6">
                        <button className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-maroon-600 transition-colors">Reply</button>
                        <button className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-maroon-600 transition-colors">Endorse</button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Engagement Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              
              <div className="bg-white p-10 rounded-[3.5rem] border border-gray-100 shadow-2xl shadow-black/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-maroon-600/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                
                <div className="flex items-center gap-3 mb-10 relative z-10">
                  <div className="w-2 h-2 bg-maroon-600 rounded-full animate-pulse" />
                  <h4 className="text-[11px] font-black text-dark-grey-900 uppercase tracking-[0.2em]">Article Engagement</h4>
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Like Option */}
                  <button 
                    onClick={() => setIsLiked(!isLiked)}
                    className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-[2rem] border border-transparent hover:border-maroon-200 transition-all group/item"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${isLiked ? 'bg-maroon-600 text-white shadow-lg shadow-maroon-600/20' : 'bg-white text-gray-400 group-hover/item:text-maroon-600'}`}>
                        <Heart size={24} fill={isLiked ? 'currentColor' : 'none'} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-dark-grey-900 tracking-tight">Appreciate Protocol</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Click to endorse</p>
                      </div>
                    </div>
                    <span className={`text-lg font-black ${isLiked ? 'text-maroon-600' : 'text-gray-300'}`}>1.2k</span>
                  </button>

                  {/* Comment Option */}
                  <button className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-[2rem] border border-transparent hover:border-maroon-200 transition-all group/item">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gray-400 group-hover/item:text-maroon-600 transition-all">
                        <MessageSquare size={24} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-dark-grey-900 tracking-tight">Clinical Discussion</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Join the conversation</p>
                      </div>
                    </div>
                    <span className="text-lg font-black text-gray-300">48</span>
                  </button>

                  {/* Share Option */}
                  <button className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-[2rem] border border-transparent hover:border-maroon-200 transition-all group/item">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gray-400 group-hover/item:text-maroon-600 transition-all">
                        <Share2 size={24} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-dark-grey-900 tracking-tight">Share Intelligence</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Disseminate knowledge</p>
                      </div>
                    </div>
                    <span className="text-lg font-black text-gray-300">256</span>
                  </button>
                </div>

                {/* Micro-insight */}
                <div className="mt-10 pt-10 border-t border-gray-50 flex items-center gap-4 relative z-10">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <img 
                        key={i} 
                        src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                        className="w-8 h-8 rounded-full border-2 border-white object-cover" 
                        alt="Reader"
                      />
                    ))}
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">
                    Trusted by <span className="text-dark-grey-900">400+</span> specialists
                  </p>
                </div>
              </div>

              {/* Keep the floating bar but maybe simplify or make it context-aware */}
              <div className="bg-dark-grey-900 p-8 rounded-[3rem] text-white flex items-center justify-between">
                <div>
                  <h5 className="font-bold tracking-tight mb-1">Download Protocol</h5>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">Full clinical PDF (2.4MB)</p>
                </div>
                <button className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white hover:text-dark-grey-900 flex items-center justify-center transition-all">
                  <Download size={20} />
                </button>
              </div>

            </div>
          </aside>
        </div>
      </main>

      {/* Recommended Articles Section */}
      <section className="bg-white py-32 border-t border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-[11px] font-black text-maroon-600 uppercase tracking-[0.3em] mb-4">Up Next</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-dark-grey-900 tracking-tight">Further Intelligence</h3>
            </div>
            <button 
              onClick={onBack}
              className="px-8 py-4 bg-dark-grey-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-maroon-600 transition-all shadow-xl active:scale-95 flex items-center gap-3"
            >
              Explore Feed
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { id: 'post-1', title: 'Precision in Thyroidectomy: AI Guidance', cat: 'Innovation', img: 'https://images.unsplash.com/photo-1579154235602-44373dbef440?auto=format&fit=crop&q=80&w=800' },
              { id: 'post-2', title: 'Recovery Protocols for Robotic Surgery', cat: 'Clinical', img: 'https://images.unsplash.com/photo-1582719478250-c89400bbbfc5?auto=format&fit=crop&q=80&w=800' },
              { id: 'post-3', title: 'Future of Endoscopic Visualization', cat: 'Tech', img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800' }
            ].map((related, idx) => (
              <motion.div 
                key={related.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => onNavigate('blog-detail-' + related.id)}
              >
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl shadow-black/5">
                  <img src={related.img} alt={related.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-grey-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-black text-maroon-600 uppercase tracking-widest">{related.cat}</span>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-dark-grey-900 group-hover:text-maroon-600 transition-colors leading-snug tracking-tight mb-4">
                  {related.title}
                </h4>
                <div className="flex items-center gap-2 text-maroon-600 font-black text-[10px] uppercase tracking-[0.2em]">
                  Read Research <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-dark-grey-900 py-24 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-maroon-900/10 pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="w-20 h-20 bg-maroon-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-maroon-600/30 rotate-12 group-hover:rotate-0 transition-transform">
            <MessageSquare className="text-white w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Clinical Discussion</h2>
          <p className="text-gray-400 text-lg mb-12 font-medium">Have questions about this protocol? Join our private medical network for deeper clinical insights.</p>
          <button className="px-12 py-5 bg-white text-dark-grey-900 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-maroon-600 hover:text-white transition-all shadow-2xl shadow-black/30 active:scale-95">
            Request Access
          </button>
        </div>
      </section>
    </div>
  );
}
