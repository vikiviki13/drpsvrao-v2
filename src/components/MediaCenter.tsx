import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Play, Headphones, X, ChevronDown, ChevronUp } from 'lucide-react';
import { mediaItems, mediaFaqs } from '../data/mockMedia';
import { MediaItem } from '../types';

export default function MediaCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeVideo, setActiveVideo] = useState<MediaItem | null>(null);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  // Extract unique categories from both media and FAQs
  const categories = useMemo(() => {
    const cats = new Set([...mediaItems.map(m => m.category), ...mediaFaqs.map(f => f.category)]);
    return ['All', ...Array.from(cats)];
  }, []);

  const featuredVideos = mediaItems.filter(m => m.featured && m.type === 'video');
  
  const filteredMedia = useMemo(() => {
    return mediaItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory && !item.featured; // Exclude featured from main grid
    });
  }, [searchQuery, selectedCategory]);

  const filteredFaqs = useMemo(() => {
    return mediaFaqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Search */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-grey-900 mb-6">Educational Media</h1>
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <p className="text-gray-600 max-w-2xl text-lg">
              Explore our library of videos, audio interviews, and illustrated FAQs to better understand your care.
            </p>
            <div className="relative w-full md:w-96 shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search videos, topics, FAQs..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category 
                  ? 'bg-dark-grey-900 text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-dark-grey-900 hover:text-dark-grey-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Videos (Only show if no search and 'All' category) */}
        {searchQuery === '' && selectedCategory === 'All' && featuredVideos.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-dark-grey-900 mb-6">Featured Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredVideos.map(video => (
                <div 
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className="group relative rounded-sm overflow-hidden cursor-pointer shadow-md border border-gray-100 bg-white"
                >
                  <div className="aspect-video relative overflow-hidden bg-gray-900">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-maroon-600 transition-colors">
                        <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-bold text-maroon-600 uppercase tracking-wider mb-2">{video.category}</div>
                    <h3 className="text-xl font-bold text-dark-grey-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Grid (Videos & Audio) */}
        {filteredMedia.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-dark-grey-900 mb-6">Explore Media</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMedia.map(item => (
                <div 
                  key={item.id}
                  onClick={() => item.type === 'video' ? setActiveVideo(item) : null}
                  className={`bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden group ${item.type === 'video' ? 'cursor-pointer' : ''}`}
                >
                  {item.type === 'video' ? (
                    <div className="aspect-video relative overflow-hidden bg-gray-900">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title} 
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-maroon-600 transition-colors">
                          <Play className="w-4 h-4 text-white ml-1" fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-sm">
                        {item.duration}
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-video bg-gray-50 flex flex-col items-center justify-center border-b border-gray-100 relative">
                      <div className="w-16 h-16 bg-copper-50 rounded-full flex items-center justify-center text-copper-600 mb-3">
                        <Headphones className="w-8 h-8" />
                      </div>
                      <div className="absolute bottom-3 right-3 bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded-sm">
                        {item.duration}
                      </div>
                      {/* Simple Audio Player UI Mock */}
                      <div className="w-3/4 h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                        <div className="w-1/3 h-full bg-copper-500 rounded-full"></div>
                      </div>
                    </div>
                  )}
                  <div className="p-5">
                    <div className="text-xs font-bold text-maroon-600 uppercase tracking-wider mb-2">{item.category}</div>
                    <h3 className="text-lg font-bold text-dark-grey-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Illustrated FAQs */}
        {filteredFaqs.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-dark-grey-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {filteredFaqs.map(faq => (
                <div key={faq.id} className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm flex flex-col md:flex-row">
                  <div className="md:w-1/3 lg:w-1/4 h-48 md:h-auto bg-gray-100 shrink-0">
                    <img 
                      src={faq.illustration} 
                      alt="FAQ Illustration" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1">
                    <button 
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                      className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <div className="text-xs font-bold text-copper-600 uppercase tracking-wider mb-1">{faq.category}</div>
                        <span className="font-bold text-lg text-dark-grey-900">{faq.question}</span>
                      </div>
                      {openFaq === faq.id ? <ChevronUp className="w-6 h-6 text-gray-500 shrink-0 ml-4" /> : <ChevronDown className="w-6 h-6 text-gray-500 shrink-0 ml-4" />}
                    </button>
                    <AnimatePresence>
                      {openFaq === faq.id && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {filteredMedia.length === 0 && filteredFaqs.length === 0 && (
          <div className="text-center py-24">
            <h3 className="text-xl font-semibold text-dark-grey-900 mb-2">No content found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter.</p>
          </div>
        )}

      </div>

      {/* YouTube Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="fixed inset-0 bg-dark-grey-900/90 backdrop-blur-sm z-[80]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl z-[90] px-4"
            >
              <div className="bg-black rounded-sm overflow-hidden shadow-2xl relative">
                <button 
                  onClick={() => setActiveVideo(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors flex items-center gap-2"
                >
                  <X className="w-6 h-6" /> Close
                </button>
                <div className="aspect-video w-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`} 
                    title={activeVideo.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="bg-white p-6">
                  <div className="text-xs font-bold text-maroon-600 uppercase tracking-wider mb-2">{activeVideo.category}</div>
                  <h2 className="text-2xl font-bold text-dark-grey-900 mb-2">{activeVideo.title}</h2>
                  <p className="text-gray-600">{activeVideo.description}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
