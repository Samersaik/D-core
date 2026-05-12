import FadeIn from './FadeIn';
import { Users, Dumbbell, CalendarCheck, Award } from 'lucide-react';

const stats = [
  { id: 1, name: 'Members Transformed', value: '1500+', icon: Users },
  { id: 2, name: 'Equipment Pieces', value: '100+', icon: Dumbbell },
  { id: 3, name: 'Classes per Week', value: '50+', icon: CalendarCheck },
  { id: 4, name: 'Google Rating', value: '4.6', icon: Award },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gym-darker relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gym-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gym-blue/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="right">
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6">
              More Than Just A <span className="text-gym-red">Gym</span>.
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                D Core Fitness is a premium strength and conditioning facility right in the heart of Delhi. 
                We focus on transforming bodies and minds with functional movements, high-intensity training, and expert guidance.
              </p>
              <p>
                Whether you're looking to build muscle, lose weight, or improve overall athletic performance, our certified male and female 
                trainers are here to guide you. We also feature an on-site Diet Cafe to fuel your workouts and recovery.
              </p>
            </div>
            
            <div className="mt-8 border-l-4 border-gym-red pl-6 py-2">
              <p className="font-bebas text-2xl tracking-wider text-white">
                "Stop wishing, start doing. Your transformation begins here."
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={stat.id} delay={index * 0.1} direction="up" className="bg-gym-dark border border-gray-800 p-6 rounded-2xl flex flex-col items-center text-center group hover:border-gym-red transition-colors duration-300">
                <div className="w-12 h-12 bg-gym-darker rounded-full flex items-center justify-center mb-4 group-hover:bg-gym-red/10 group-hover:text-gym-red transition-colors">
                  <stat.icon size={24} className="text-gray-400 group-hover:text-gym-red transition-colors" />
                </div>
                <div className="font-bebas text-4xl text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.name}</div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
