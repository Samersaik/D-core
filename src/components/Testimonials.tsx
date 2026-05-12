import FadeIn from './FadeIn';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rohan Gupta',
    platform: 'Fitpass User',
    text: 'Great ambience, excellent infrastructure, and extremely helpful trainers. The best gym in Paharganj area by far. Worth every penny!',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya M.',
    platform: 'Google Review',
    text: 'Started my fitness journey 3 months ago. The strength and conditioning programs are top-notch. Love the energy and the diet cafe is a lifesaver.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Kumar',
    platform: 'Justdial',
    text: 'Spacious setup on the 2nd floor, proper AC, and the equipment is modern. The trainers actually focus on your form. Highly recommended!',
    rating: 4.5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-gym-darker relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gym-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <FadeIn className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6">
            Client <span className="text-gym-red">Stories</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-gym-gold">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
            <span className="text-white ml-2 text-xl font-bebas tracking-wider">4.6 Rate</span>
          </div>
        </FadeIn>

        <div className="relative h-[250px] sm:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center text-center"
            >
              <Quote size={48} className="text-gym-red/20 mb-6" />
              <p className="text-lg md:text-xl text-gray-300 italic mb-8 max-w-2xl">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <h4 className="font-bebas text-2xl tracking-wider text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-gym-red font-medium tracking-wider uppercase">
                  {testimonials[currentIndex].platform}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gym-red hover:bg-gym-red transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gym-red hover:bg-gym-red transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
}
