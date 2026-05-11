import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Mail } from 'lucide-react';

const featuredPost = {
  id: 'featured-1',
  title: 'The Evolution of Robotic Visualization in Thyroid Surgery',
  category: 'Technology',
  date: 'Nov 28, 2024',
  author: 'Dr. PSV Rao',
  image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000',
  desc: 'Exploring how next-gen 3D visualization systems are transforming complex thyroid resections with sub-millimeter precision.',
};

const blogPosts = [
  {
    id: 'post-1',
    title: 'The Evolution of Robotic Visualization in Thyroid Surgery',
    category: 'Technology',
    date: 'Oct 22, 2024',
    image: 'https://images.unsplash.com/photo-1579154235602-44373dbef440?auto=format&fit=crop&q=80&w=800',
    desc: 'Exploring how next-gen 3D visualization systems are transforming complex thyroid resections with sub-millimeter precision.',
  },
  {
    id: 'post-2',
    title: 'The Evolution of Robotic Visualization in Thyroid Surgery',
    category: 'Technology',
    date: 'Oct 15, 2024',
    image: 'https://images.unsplash.com/photo-1582719478250-c89400bbbfc5?auto=format&fit=crop&q=80&w=800',
    desc: 'Exploring how next-gen 3D visualization systems are transforming complex thyroid resections with sub-millimeter precision.',
  },
  {
    id: 'post-3',
    title: 'The Evolution of Robotic Visualization in Thyroid Surgery',
    category: 'Technology',
    date: 'Oct 02, 2024',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800',
    desc: 'Exploring how next-gen 3D visualization systems are transforming complex thyroid resections with sub-millimeter precision.',
  },
  {
    id: 'post-4',
    title: 'The Evolution of Robotic Visualization in Thyroid Surgery',
    category: 'Technology',
    date: 'Sep 28, 2024',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    desc: 'Exploring how next-gen 3D visualization systems are transforming complex thyroid resections with sub-millimeter precision.',
  },
  {
    id: 'post-5',
    title: 'The Evolution of Robotic Visualization in Thyroid Surgery',
    category: 'Technology',
    date: 'Sep 18, 2024',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800',
    desc: 'Exploring how next-gen 3D visualization systems are transforming complex thyroid resections with sub-millimeter precision.',
  },
  {
    id: 'post-6',
    title: 'The Evolution of Robotic Visualization in Thyroid Surgery',
    category: 'Technology',
    date: 'Sep 05, 2024',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800',
    desc: 'Exploring how next-gen 3D visualization systems are transforming complex thyroid resections with sub-millimeter precision.',
  },
  {
    id: 'post-7',
    title: 'The Evolution of Robotic Visualization in Thyroid Surgery',
    category: 'Technology',
    date: 'Aug 24, 2024',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
    desc: 'Exploring how next-gen 3D visualization systems are transforming complex thyroid resections with sub-millimeter precision.',
  },
  {
    id: 'post-8',
    title: 'The Evolution of Robotic Visualization in Thyroid Surgery',
    category: 'Technology',
    date: 'Aug 10, 2024',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    desc: 'Exploring how next-gen 3D visualization systems are transforming complex thyroid resections with sub-millimeter precision.',
  },
  {
    id: 'post-9',
    title: 'The Evolution of Robotic Visualization in Thyroid Surgery',
    category: 'Technology',
    date: 'Jul 28, 2024',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    desc: 'Exploring how next-gen 3D visualization systems are transforming complex thyroid resections with sub-millimeter precision.',
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Latest Insights Section */}
        <section className="mb-20">
          <h1 className="text-3xl font-black text-[#2D1B1B] mb-8 tracking-tight">Latest Insights</h1>
          
          <div className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] aspect-[21/9]">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-10 left-10 right-10">
              <div className="flex items-center gap-4 text-white/80 text-sm font-bold mb-4">
                <span>{featuredPost.date}</span>
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <span>{featuredPost.category}</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 max-w-4xl leading-tight">
                {featuredPost.title}
              </h2>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white/20 overflow-hidden">
                  <img src="https://ui-avatars.com/api/?name=PSV+Rao&background=0F172A&color=fff" alt="Author" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">{featuredPost.author}</span>
                  <span className="text-white/60 text-[10px] uppercase font-black tracking-widest">Author</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <div className="mb-16">
          <div className="max-w-md relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 transition-colors group-focus-within:text-blue-500" />
            <input 
              type="text"
              placeholder="Search by Author or Keyword..."
              className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Fresh Medical Insights Grid */}
        <section className="mb-20">
          <h2 className="text-2xl font-black text-[#2D1B1B] mb-10 tracking-tight">Fresh Medical Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 shadow-sm border border-slate-50">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-black text-blue-600 uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-slate-400 text-xs font-bold mb-3">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-black text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                  {post.desc}
                </p>
                
                <button className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest group/btn">
                  Read Story
                  <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mb-32">
          <button className="w-10 h-10 rounded-xl bg-[#802D2D] text-white font-black text-sm flex items-center justify-center shadow-lg shadow-[#802D2D]/20">1</button>
          <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-500 font-bold text-sm flex items-center justify-center hover:bg-slate-100 transition-colors">2</button>
          <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-500 font-bold text-sm flex items-center justify-center hover:bg-slate-100 transition-colors">3</button>
        </div>

        {/* Newsletter Section */}
        <section className="bg-[#5C1F1F] rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
          {/* Subtle background circles */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Surgical Innovation
            </h2>
            <p className="text-white/70 text-lg mb-10 font-medium leading-relaxed">
              Join 5,000+ medical professionals and patients receiving our monthly digest of clinical studies and health protocols.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm transition-all"
                required
              />
              <button 
                type="submit"
                className="bg-[#2D1B1B] text-white px-8 py-4 rounded-2xl font-black hover:bg-[#3D2B2B] transition-all shadow-xl active:scale-95"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-white/30 text-[10px] mt-6 uppercase font-black tracking-widest">
              By subscribing you agree to our privacy policy
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
