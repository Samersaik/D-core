import FadeIn from './FadeIn';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Instagram } from 'lucide-react';

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop', colSpan: 'col-span-12 sm:col-span-8 md:col-span-8', rowSpan: 'row-span-2' },
  { id: 2, src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop', colSpan: 'col-span-6 sm:col-span-4 md:col-span-4', rowSpan: 'row-span-1' },
  { id: 3, src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop', colSpan: 'col-span-6 sm:col-span-4 md:col-span-4', rowSpan: 'row-span-1' },
  { id: 4, src: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop', colSpan: 'col-span-6 sm:col-span-4 md:col-span-4', rowSpan: 'row-span-1' },
  { id: 5, src: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop', colSpan: 'col-span-6 sm:col-span-4 md:col-span-4', rowSpan: 'row-span-1' },
  { id: 6, src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop', colSpan: 'col-span-12 sm:col-span-4 md:col-span-4', rowSpan: 'row-span-1' },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-gym-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 mb-12">
          <div>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wide">
              Gym <span className="text-gym-red">Gallery</span>
            </h2>
          </div>
          <a
            href="https://instagram.com/d_core_fitness"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gym-red hover:text-white font-medium tracking-widest uppercase transition-colors"
          >
            <Instagram size={20} />
            <span>@d_core_fitness</span>
          </a>
        </FadeIn>

        <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <FadeIn 
              key={img.id} 
              delay={index * 0.1} 
              direction="up" 
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${img.colSpan} ${img.rowSpan}`}
            >
              <div onClick={() => setSelectedImg(img.src)} className="absolute inset-0 z-10" />
              <img 
                src={img.src} 
                alt={`Gallery ${img.id}`} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gym-red/0 group-hover:bg-gym-red/20 transition-colors duration-300 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <Instagram size={32} className="text-white drop-shadow-lg" />
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
              alt="Expanded gallery image"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
