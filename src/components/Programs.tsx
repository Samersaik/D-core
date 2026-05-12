import FadeIn from './FadeIn';
import { motion } from 'motion/react';
import { Activity, Dumbbell, Zap, Flame, ShieldPlus, HeartPulse } from 'lucide-react';

const programs = [
  {
    name: 'Weight Training',
    description: 'Build raw strength and lean muscle with our state-of-the-art free weights and machines.',
    icon: Dumbbell,
    color: 'hover:border-gym-red hover:shadow-[0_0_30px_rgba(255,0,0,0.15)]'
  },
  {
    name: 'HIIT',
    description: 'High-Intensity Interval Training to maximize calorie burn and boost cardiovascular conditioning.',
    icon: Flame,
    color: 'hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]'
  },
  {
    name: 'Pilates',
    description: 'Improve flexibility, posture, and core strength in our specialized Pilates studio classes.',
    icon: Activity,
    color: 'hover:border-gym-blue hover:shadow-[0_0_30px_rgba(0,191,255,0.15)]'
  },
  {
    name: 'CrossFit Style',
    description: 'Functional, varied, high-intensity movements preparing you for any physical challenge.',
    icon: Zap,
    color: 'hover:border-yellow-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]'
  },
  {
    name: 'Core & Abs',
    description: 'Targeted workouts designed to sculpt your midsection and build foundational stability.',
    icon: ShieldPlus,
    color: 'hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]'
  },
  {
    name: 'Personal Training',
    description: '1-on-1 expert guidance tailored to your specific goals with male or female trainers.',
    icon: HeartPulse,
    color: 'hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]'
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-gym-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6">
            Elite <span className="text-gym-red">Programs</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Choose from a variety of expert-led programs designed to push your limits and deliver guaranteed results.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <FadeIn key={program.name} delay={index * 0.1} direction="up">
              <motion.div 
                whileHover={{ y: -10 }}
                className={`bg-gym-darker border border-gray-800 rounded-2xl p-8 h-full transition-all duration-300 group cursor-pointer ${program.color}`}
              >
                <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <program.icon size={28} className="text-gray-300 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bebas text-2xl tracking-wide text-white mb-3">{program.name}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {program.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
