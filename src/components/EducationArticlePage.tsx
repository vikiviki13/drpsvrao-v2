import { motion } from 'motion/react';
import { ArrowLeft, Clock } from 'lucide-react';
import { EducationArticle } from '../data/mockArticles';

export default function EducationArticlePage({ article, onBack }: { article: EducationArticle, onBack: () => void }) {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-maroon-600 transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Patient Education
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 text-sm text-copper-600 font-semibold uppercase tracking-wider mb-4">
            <span>{article.category}</span>
            <span className="w-1 h-1 bg-copper-400 rounded-full"></span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-dark-grey-900 mb-12">{article.title}</h1>

          <div className="space-y-12">
            {article.sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-2xl font-bold text-dark-grey-900 mb-6">{section.heading}</h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIdx) => {
                    // Check if it's a bullet point
                    if (paragraph.startsWith('•')) {
                      // Process bold text within bullet point
                      const parts = paragraph.substring(1).trim().split(/\*\*(.*?)\*\*/g);
                      return (
                        <div key={pIdx} className="flex gap-3 text-lg text-gray-600 leading-relaxed ml-4">
                          <span className="text-maroon-600 font-bold mt-0.5">•</span>
                          <p>
                            {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="text-gray-900">{part}</strong> : part)}
                          </p>
                        </div>
                      );
                    }
                    return (
                      <p key={pIdx} className="text-lg text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
             <p className="text-gray-500 text-sm">Was this article helpful?</p>
             <div className="flex gap-4">
                <button className="px-6 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:border-maroon-600 hover:text-maroon-600 transition-colors cursor-pointer">Yes</button>
                <button className="px-6 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:border-maroon-600 hover:text-maroon-600 transition-colors cursor-pointer">No</button>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
