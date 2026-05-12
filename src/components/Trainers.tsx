import FadeIn from './FadeIn';
import { Instagram, Twitter } from 'lucide-react';

const trainers = [
  {
    name: 'Vikram Singh',
    role: 'Head Strength Coach',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop',
    specialties: 'Powerlifting, Hypertrophy'
  },
  {
    name: 'Anita Sharma',
    role: 'HIIT & Pilates Expert',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop',
    specialties: 'Core, Flexibility, Endurance'
  },
  {
    name: 'Rahul Verma',
    role: 'CrossFit Coach',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
    specialties: 'Functional Movement, Agility'
  }
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-gym-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6">
            Meet Our <span className="text-gym-red">Experts</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Certified male and female trainers dedicated to pushing your limits and guiding your transformation.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <FadeIn key={trainer.name} delay={index * 0.2} direction="up" className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
              {/* Image */}
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gym-darker via-gym-dark/40 to-transparent opacity-80" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-gym-red font-medium tracking-widest uppercase text-sm mb-1">{trainer.role}</p>
                <h3 className="font-bebas text-3xl tracking-wide text-white mb-2">{trainer.name}</h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Spec: {trainer.specialties}
                </p>
                
                {/* Socials */}
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-gym-red transition-colors text-white">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-gym-blue transition-colors text-white">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
