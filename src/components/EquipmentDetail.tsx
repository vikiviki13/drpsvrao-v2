import { ArrowLeft, CheckCircle2, Cpu, Settings } from 'lucide-react';
import { EquipmentData } from '../types';

interface Props {
  data: EquipmentData;
  onBack: () => void;
  onNavigate?: (page: string) => void;
}

export default function EquipmentDetail({ data, onBack, onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb & Back */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-copper-600 hover:text-copper-500 transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Catalog
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Images */}
          <div className="space-y-6">
            <div className="aspect-square bg-gray-50 rounded-sm border border-gray-100 overflow-hidden">
              <img
                src={data.images[0]}
                alt={data.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {data.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {data.images.slice(1).map((img, idx) => (
                  <div key={idx} className="aspect-square bg-gray-50 rounded-sm border border-gray-100 overflow-hidden cursor-pointer hover:border-copper-400 transition-colors">
                    <img src={img} alt={`${data.name} view ${idx + 2}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Details */}
          <div>
            <div className="inline-block px-3 py-1 bg-maroon-50 text-maroon-600 text-xs font-bold uppercase tracking-wider rounded-sm mb-4">
              {data.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-grey-900 mb-6">{data.name}</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              {data.description}
            </p>

            <div className="space-y-12">
              {/* Specifications */}
              <div>
                <h3 className="text-xl font-bold text-dark-grey-900 mb-6 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-copper-500" /> Technical Specifications
                </h3>
                <div className="bg-gray-50 rounded-sm border border-gray-100 p-6">
                  <dl className="divide-y divide-gray-200">
                    {data.specifications.map((spec, idx) => (
                      <div key={idx} className="py-3 flex justify-between items-center">
                        <dt className="text-sm font-medium text-gray-500">{spec.label}</dt>
                        <dd className="text-sm font-bold text-dark-grey-900 text-right">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h3 className="text-xl font-bold text-dark-grey-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-copper-500" /> Clinical Use Cases
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.useCases.map((uc, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 border border-gray-100 rounded-sm">
                      <div className="w-2 h-2 rounded-full bg-maroon-500 mt-2 shrink-0" />
                      <span className="text-gray-700 font-medium">{uc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Tech */}
              <div>
                <h3 className="text-xl font-bold text-dark-grey-900 mb-6 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-copper-500" /> Related Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {data.relatedTechnologies.map((tech, idx) => (
                    <button
                      key={idx}
                      onClick={() => onNavigate && onNavigate('catalog')}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:border-maroon-500 hover:text-maroon-600 transition-colors cursor-pointer"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8 border-t border-gray-100">
                <button
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-maroon-600 hover:bg-maroon-700 text-white font-bold rounded-sm transition-colors cursor-pointer"
                >
                  Request Quote / Demo
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
