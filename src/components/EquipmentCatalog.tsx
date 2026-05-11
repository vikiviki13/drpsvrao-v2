import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, X, ArrowRight, Box, Activity, ChevronRight } from 'lucide-react';
import { equipmentCatalogData } from '../data/mockEquipment';
import { EquipmentData } from '../types';

interface Props {
  onNavigate: (page: string) => void;
}

export default function EquipmentCatalog({ onNavigate }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [previewItem, setPreviewItem] = useState<EquipmentData | null>(null);

  const categories = ['All', ...Array.from(new Set(equipmentCatalogData.map(item => item.category)))];

  const filteredData = useMemo(() => {
    return equipmentCatalogData.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Search */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-grey-900 mb-6">Equipment Catalog</h1>
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <p className="text-gray-600 max-w-2xl text-lg">
              Browse our comprehensive portfolio of advanced surgical devices and medical equipment.
            </p>
            <div className="relative w-full md:w-96 shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search devices, categories..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <div className="flex items-center gap-2 mr-4 text-gray-500 font-medium text-sm">
            <Filter className="w-4 h-4" /> Filter by:
          </div>
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden group flex flex-col"
              >
                <div className="h-56 overflow-hidden relative bg-gray-100">
                  <img 
                    src={item.images[0]} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-maroon-600 uppercase tracking-wider rounded-sm shadow-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-dark-grey-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-6 flex-1">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <button 
                      onClick={() => setPreviewItem(item)}
                      className="flex-1 py-2.5 bg-gray-50 hover:bg-gray-100 text-dark-grey-900 text-sm font-semibold rounded-sm transition-colors border border-gray-200"
                    >
                      Quick Preview
                    </button>
                    <button 
                      onClick={() => onNavigate(`equipment-${item.id}`)}
                      className="flex-1 py-2.5 bg-maroon-600 hover:bg-maroon-700 text-white text-sm font-semibold rounded-sm transition-colors flex items-center justify-center gap-2"
                    >
                      Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-24">
            <Box className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-dark-grey-900 mb-2">No devices found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-6 text-maroon-600 font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>

      {/* Quick Preview Modal */}
      <AnimatePresence>
        {previewItem && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewItem(null)}
              className="fixed inset-0 bg-dark-grey-900/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-white rounded-sm shadow-2xl z-[70] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setPreviewItem(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-dark-grey-900 hover:bg-gray-100 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100 relative">
                <img 
                  src={previewItem.images[0]} 
                  alt={previewItem.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-10 overflow-y-auto">
                <div className="inline-block px-3 py-1 bg-maroon-50 text-maroon-600 text-xs font-bold uppercase tracking-wider rounded-sm mb-4">
                  {previewItem.category}
                </div>
                <h2 className="text-3xl font-bold text-dark-grey-900 mb-4">{previewItem.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {previewItem.description}
                </p>
                
                <div className="space-y-6 mb-10">
                  <div>
                    <h4 className="text-sm font-bold text-dark-grey-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-copper-500" /> Primary Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {previewItem.useCases.slice(0, 3).map((uc, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-sm">{uc}</span>
                      ))}
                      {previewItem.useCases.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-500 text-sm rounded-sm">+{previewItem.useCases.length - 3} more</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-auto">
                  <button 
                    onClick={() => {
                      onNavigate(`equipment-${previewItem.id}`);
                      setPreviewItem(null);
                    }}
                    className="flex-1 py-4 bg-maroon-600 hover:bg-maroon-700 text-white font-bold rounded-sm transition-colors flex items-center justify-center gap-2"
                  >
                    View Full Details <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
