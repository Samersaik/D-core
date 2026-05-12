import FadeIn from './FadeIn';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const facilities = [
  { id: 1, title: 'Spacious Cardio Area', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, title: 'Free Weights Zone', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, title: 'Functional Training', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, title: 'Modern Machines', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop' },
];

export default function Facilities() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="facilities" className="py-24 bg-gym-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4">
              Premium <span className="text-gym-red">Facilities</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Explore our spacious 2nd-floor AC setup with state-of-the-art equipment designed for ultimate performance.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilities.map((fac, index) => (
            <FadeIn key={fac.id} delay={index * 0.1} direction="up" className="relative group overflow-hidden rounded-xl aspect-[4/5] cursor-pointer" >
              <div onClick={() => setSelectedImg(fac.image)} className="absolute inset-0 z-10" />
              <img 
                src={fac.image} 
                alt={fac.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gym-dark via-gym-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-bebas text-2xl tracking-wide text-white group-hover:text-gym-red transition-colors">
                  {fac.title}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-gym-red transition-colors z-50"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImg}
              alt="Facility expanded"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
