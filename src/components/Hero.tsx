import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Placeholder for Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gym-dark/80 via-gym-dark/60 to-gym-dark opacity-90 z-10" />
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="font-bebas text-5xl sm:text-7xl md:text-9xl tracking-wider mb-4 leading-none">
            <span className="text-white">D CORE</span> <br className="sm:hidden"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-red flex-shrink-0 to-gym-red-light">FITNESS</span>
          </h1>
        </motion.div>

        <FadeIn delay={0.3} direction="up">
          <p className="text-lg md:text-2xl text-gray-300 font-medium tracking-wide mb-2 uppercase">
            Join Us For Transformation
          </p>
          <div className="flex items-center justify-center gap-4 text-sm md:text-base text-gray-400 font-medium tracking-widest uppercase mb-12">
            <span>Strength</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gym-red" />
            <span>Conditioning</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gym-red" />
            <span>Results</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} direction="up" className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <a
            href="#memberships"
            className="group relative px-8 py-4 bg-gym-red text-white font-bold tracking-widest uppercase text-sm md:text-base rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 text-center shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:shadow-[0_0_30px_rgba(255,0,0,0.6)]"
          >
            <span className="relative z-10">Join Now</span>
            <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
          <a
            href="#programs"
            className="group px-8 py-4 bg-transparent border-2 border-white text-white font-bold tracking-widest uppercase text-sm md:text-base rounded-full transition-all hover:scale-105 active:scale-95 text-center hover:bg-white hover:text-gym-dark"
          >
            View Programs
          </a>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-white transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={32} />
        </motion.div>
      </motion.a>
    </section>
  );
}
