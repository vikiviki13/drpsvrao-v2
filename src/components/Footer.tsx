import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const handleNav = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (onNavigate) onNavigate(page);
  };

  return (
    <footer className="bg-dark-grey-900 text-gray-300 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-8 h-8" isScrolled={false} />
              <span className="text-xl font-bold tracking-tight text-white">
                MedTech<span className="text-copper-500">Nexus</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Advancing healthcare through precision engineering, innovative technology, and a commitment to patient outcomes.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm flex flex-col items-start">
              <li><button onClick={(e) => handleNav(e, 'home')} className="hover:text-copper-400 transition-colors cursor-pointer text-left">Technologies</button></li>
              <li><button onClick={(e) => handleNav(e, 'specialty-thyroid')} className="hover:text-copper-400 transition-colors cursor-pointer text-left">Specialties</button></li>
              <li><button onClick={(e) => handleNav(e, 'catalog')} className="hover:text-copper-400 transition-colors cursor-pointer text-left">Equipment Catalog</button></li>
              <li><button onClick={(e) => handleNav(e, 'contact')} className="hover:text-copper-400 transition-colors cursor-pointer text-left">Patient Portal</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-3 text-sm flex flex-col items-start">
              <li><button onClick={(e) => handleNav(e, 'construction')} className="hover:text-copper-400 transition-colors cursor-pointer text-left">Clinical Trials</button></li>
              <li><button onClick={(e) => handleNav(e, 'media')} className="hover:text-copper-400 transition-colors cursor-pointer text-left">Research Papers</button></li>
              <li><button onClick={(e) => handleNav(e, 'contact')} className="hover:text-copper-400 transition-colors cursor-pointer text-left">Vendor Support</button></li>
              <li><button onClick={(e) => handleNav(e, 'contact')} className="hover:text-copper-400 transition-colors cursor-pointer text-left">Careers</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maroon-500 shrink-0" />
                <span>100 Innovation Drive<br />Medical District, MD 20245</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-maroon-500 shrink-0" />
                <span>+1 (800) 555-TECH</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-maroon-500 shrink-0" />
                <span>contact@medtechnexus.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} MedTech Nexus. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={(e) => handleNav(e, 'construction')} className="hover:text-white transition-colors cursor-pointer text-left">Privacy Policy</button>
            <button onClick={(e) => handleNav(e, 'construction')} className="hover:text-white transition-colors cursor-pointer text-left">Terms of Service</button>
            <button onClick={(e) => handleNav(e, 'construction')} className="hover:text-white transition-colors cursor-pointer text-left">Compliance</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
