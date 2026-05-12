import { ArrowUp, Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gym-darker pt-16 pb-8 border-t border-gray-900 border-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <span className="font-bebas text-3xl md:text-4xl tracking-wider text-white">
                D CORE <span className="text-gym-red">FITNESS</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Delhi's premium strength and conditioning facility. We build bodies, forge minds, and deliver raw results.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/d_core_fitness" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-gym-red hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="tel:09582124881" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-gym-red hover:text-white transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bebas text-xl text-white tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Programs', 'Facilities', 'Memberships', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-gym-red transition-colors text-sm uppercase tracking-wider">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-xl text-white tracking-wider mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400 text-sm items-start">
                <MapPin size={16} className="text-gym-red shrink-0 mt-1" />
                <span>70, 2nd Floor, Rani Jhansi Road, Paharganj / Motia Khan, Delhi 110055</span>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm items-center">
                <Phone size={16} className="text-gym-red shrink-0" />
                <span>09582124881</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} D Core Fitness. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gym-red transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
