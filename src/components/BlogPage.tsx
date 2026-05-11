import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Mail, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const featuredPost = {
  id: 'featured-1',
  title: 'The Evolution of Robotic Visualization in Thyroid Surgery',
  category: 'Technology',
  date: 'Nov 28, 2024',
  author: 'Dr. PSV Rao',
  readTime: '12 min read',
  image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000',
  desc: 'Exploring how next-gen 3D visualization systems are transforming complex thyroid resections with sub-millimeter precision.',
};

const blogPosts = [
  {
    id: 'post-1',
    title: 'Precision in Thyroidectomy: The Role of AI Guidance',
    category: 'Innovation',
    date: 'Oct 22, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1579154235602-44373dbef440?auto=format&fit=crop&q=80&w=800',
    desc: 'How artificial intelligence is assisting surgeons in identifying parathyroid glands and recurrent laryngeal nerves during complex neck surgeries.',
  },
  {
    id: 'post-2',
    title: 'Recovery Protocols for Minimally Invasive Procedures',
    category: 'Patient Care',
    date: 'Oct 15, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1582719478250-c89400bbbfc5?auto=format&fit=crop&q=80&w=800',
    desc: 'A comprehensive guide to post-operative care and accelerated recovery pathways for patients undergoing robotic and endoscopic surgeries.',
  },
  {
    id: 'post-3',
    title: 'Future of Endoscopy: Beyond Traditional Visualization',
    category: 'Technology',
    date: 'Oct 02, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800',
    desc: 'Exploring the shift from standard high-definition imaging to hyperspectral visualization in modern endoscopic diagnostics.',
  },
  {
    id: 'post-4',
    title: 'Managing Complex Thyroid Disorders in the 21st Century',
    category: 'Clinical',
    date: 'Sep 28, 2024',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    desc: 'An in-depth look at multidisciplinary approaches to treating advanced thyroid malignancies and multi-nodular goiters.',
  },
  {
    id: 'post-5',
    title: 'The Digital Twin Revolution in Surgical Planning',
    category: 'Technology',
    date: 'Sep 18, 2024',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800',
    desc: 'Utilizing virtual replicas of patient anatomy to simulate and optimize surgical outcomes before entering the operating room.',
  },
  {
    id: 'post-6',
    title: 'Ethical Implications of AI in Surgical Decision Making',
    category: 'Ethics',
    date: 'Sep 05, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800',
    desc: 'Balancing technological advancement with patient autonomy and the human element in robotic-assisted healthcare.',
  },
  {
    id: 'post-7',
    title: 'Breakthroughs in Parathyroid Imaging Techniques',
    category: 'Radiology',
    date: 'Aug 24, 2024',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
    desc: 'New localization strategies that are improving the success rates of re-operative parathyroid surgery.',
  },
  {
    id: 'post-8',
    title: 'Sustainability in Modern Hospital Infrastructure',
    category: 'Infrastructure',
    date: 'Aug 10, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    desc: 'How next-generation surgical centers are reducing environmental impact while maintaining sterile excellence.',
  },
  {
    id: 'post-9',
    title: 'Holistic Approaches to Surgical Wellness',
    category: 'Lifestyle',
    date: 'Jul 28, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    desc: 'The importance of nutrition, mental health, and physical preparation in achieving optimal surgical results.',
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-[#FDFCFB] pt-32 pb-20 selection:bg-maroon-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Latest Insights Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-dark-grey-900 tracking-tight leading-tight">
                Medical Insights <span className="text-maroon-600">&</span> Innovation
              </h1>
              <p className="text-gray-500 mt-4 text-lg max-w-2xl font-medium">
                Deep dives into the future of surgery, technology, and patient care by Dr. PSV Rao and his team.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group cursor-pointer overflow-hidden rounded-[2rem] lg:rounded-[3rem] aspect-[21/10] lg:aspect-[21/8] shadow-2xl shadow-maroon-900/10"
          >
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-grey-900 via-dark-grey-900/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm font-semibold mb-6">
                <span className="px-4 py-1.5 bg-maroon-600 rounded-full text-xs uppercase tracking-wider">{featuredPost.category}</span>
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-copper-400" />
                  {featuredPost.date}
                </span>
                <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                <span className="flex items-center gap-2">
                  <Clock size={14} className="text-copper-400" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-4xl leading-[1.1]">
                {featuredPost.title}
              </h2>

              <div className="flex items-center justify-between border-t border-white/10 pt-8 mt-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-copper-400/50 p-0.5 overflow-hidden">
                    <img src="https://ui-avatars.com/api/?name=PSV+Rao&background=800000&color=fff" alt="Author" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-base">{featuredPost.author}</span>
                    <span className="text-white/50 text-xs uppercase font-bold tracking-widest">Medical Director</span>
                  </div>
                </div>

                <button className="hidden md:flex items-center gap-3 bg-white text-dark-grey-900 px-8 py-4 rounded-full font-bold hover:bg-copper-400 hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-black/20">
                  Read Article
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Search & Filters */}
        <div className="mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:max-w-md relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-maroon-600" />
            <input
              type="text"
              placeholder="Search articles, topics..."
              className="w-full pl-14 pr-6 py-4.5 bg-white border border-gray-200 rounded-2xl text-dark-grey-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-maroon-500/10 focus:border-maroon-500 transition-all font-medium shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
            {['All', 'Technology', 'Clinical', 'Patient Care', 'Ethics'].map((tag) => (
              <button
                key={tag}
                className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${tag === 'All'
                    ? 'bg-dark-grey-900 text-white shadow-lg shadow-black/10'
                    : 'bg-white border border-gray-200 text-gray-500 hover:border-maroon-500 hover:text-maroon-600'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Fresh Medical Insights Grid */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-grey-900 tracking-tight">Recent Publications</h2>
            <div className="h-[2px] flex-1 bg-gray-100 mx-8 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-maroon-500/20 hover:shadow-2xl hover:shadow-maroon-900/5 transition-all duration-500 h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-xl text-[10px] font-bold text-maroon-600 uppercase tracking-widest border border-white/50">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-maroon-900/0 group-hover:bg-maroon-900/10 transition-colors duration-500" />
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-maroon-600" />
                      {post.date}
                    </span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-maroon-600" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-dark-grey-900 mb-4 leading-snug group-hover:text-maroon-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                    {post.desc}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <button className="flex items-center gap-2 text-dark-grey-900 font-bold text-xs uppercase tracking-widest group/btn hover:text-maroon-600 transition-colors">
                      Read Article
                      <div className="w-8 h-8 rounded-full bg-gray-50 group-hover/btn:bg-maroon-500 group-hover/btn:text-white flex items-center justify-center transition-all">
                        <ChevronRight size={16} className="transition-transform group-hover/btn:translate-x-0.5" />
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mb-32">
          <button className="w-12 h-12 rounded-2xl bg-maroon-600 text-white font-bold flex items-center justify-center shadow-lg shadow-maroon-600/20 active:scale-90 transition-all">1</button>
          <button className="w-12 h-12 rounded-2xl bg-white border border-gray-100 text-gray-500 font-bold flex items-center justify-center hover:bg-gray-50 transition-colors active:scale-90 transition-all">2</button>
          <button className="w-12 h-12 rounded-2xl bg-white border border-gray-100 text-gray-500 font-bold flex items-center justify-center hover:bg-gray-50 transition-colors active:scale-90 transition-all">3</button>
        </div>

        {/* Newsletter Section */}
        <section className="bg-dark-grey-900 rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden">
          {/* Artistic background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-maroon-500/10 to-transparent" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-maroon-600/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-copper-500/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-maroon-600 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-maroon-600/20 rotate-12">
              <Mail className="text-white w-10 h-10 -rotate-12" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Clinical <span className="text-copper-400">Digest</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 font-medium leading-relaxed">
              Join a global network of medical professionals receiving curated updates on surgical innovation and clinical protocols.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white/5 p-2 rounded-[2rem] backdrop-blur-xl border border-white/10">
              <input
                type="email"
                placeholder="Medical professional email"
                className="flex-1 bg-transparent rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none font-medium"
                required
              />
              <button
                type="submit"
                className="bg-maroon-600 text-white px-10 py-4 rounded-[1.5rem] font-bold hover:bg-maroon-500 transition-all shadow-xl active:scale-95"
              >
                Join Now
              </button>
            </form>

            <p className="text-gray-600 text-[11px] mt-8 uppercase font-bold tracking-[0.2em]">
              Curated Monthly • Privacy Respected
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
