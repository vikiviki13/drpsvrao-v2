import { motion } from 'motion/react';
import { BookOpen, AlertCircle, FileSearch, Pill, ArrowLeft } from 'lucide-react';

export default function PatientEducationHub({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const sections = [
    {
      id: 'symptoms',
      title: 'Symptoms Check',
      icon: <AlertCircle className="w-8 h-8 text-copper-500" />,
      description: 'Understanding early warning signs and when to seek medical attention for various conditions.',
      links: [
        { title: 'Recognizing stroke symptoms', id: 'article-stroke-symptoms' },
        { title: 'Heart attack warning signs', id: 'article-heart-attack' },
        { title: 'When to worry about back pain', id: 'article-back-pain' },
        { title: 'Identifying abnormal growths', id: 'article-abnormal-growths' }
      ]
    },
    {
      id: 'diagnosis',
      title: 'Diagnosis & Testing',
      icon: <FileSearch className="w-8 h-8 text-copper-500" />,
      description: 'Learn about the technology and procedures we use to accurately identify your condition.',
      links: [
        { title: 'Preparing for an MRI', id: 'article-mri-prep' },
        { title: 'What to expect during an endoscopy', id: 'article-endoscopy' },
        { title: 'Understanding blood panels', id: 'article-blood-panels' },
        { title: 'Decoding biopsy results', id: 'article-biopsy' }
      ]
    },
    {
      id: 'treatment-options',
      title: 'Treatment Options',
      icon: <Pill className="w-8 h-8 text-copper-500" />,
      description: 'Explore our range of surgical and non-surgical approaches tailored to your specific needs.',
      links: [
        { title: 'Minimally invasive vs. traditional surgery', id: 'article-minimally-invasive' },
        { title: 'Benefits of robotic-assisted procedures', id: 'article-robotic-benefits' },
        { title: 'Post-operative recovery plans', id: 'article-recovery-plans' },
        { title: 'Medication management strategies', id: 'article-medication-management' }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={() => onNavigate?.('home')}
          className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-maroon-600 transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-grey-900 mb-4">Patient Education</h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Empowering you with the knowledge you need. Explore our comprehensive guides and resources to better understand your health journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 rounded-sm p-8 border border-gray-100 hover:shadow-lg hover:border-copper-200 transition-all flex flex-col"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                {section.icon}
              </div>
              <h2 className="text-2xl font-bold text-dark-grey-900 mb-3">{section.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {section.description}
              </p>
              <ul className="space-y-3 mt-auto">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="flex flex-start">
                    <button
                      onClick={() => onNavigate?.(link.id)}
                      className="text-copper-600 hover:text-maroon-600 text-sm font-medium hover:underline text-left transition-colors cursor-pointer"
                    >
                      {link.title}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
