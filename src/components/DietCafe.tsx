import FadeIn from './FadeIn';
import { Coffee, Salad, Droplet } from 'lucide-react';

export default function DietCafe() {
  return (
    <section id="diet-cafe" className="py-24 bg-gym-darker relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <FadeIn direction="right" className="relative">
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden relative group">
              {/* Highlight image showing healthy food/shake */}
              <img 
                src="https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1964&auto=format&fit=crop" 
                alt="Protein Shake" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gym-darker via-transparent to-transparent opacity-80" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 md:bottom-8 md:-right-8 bg-gym-dark border border-gray-800 p-6 rounded-2xl shadow-2xl z-10 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gym-blue/20 flex items-center justify-center">
                  <Coffee size={32} className="text-gym-blue" />
                </div>
                <div>
                  <h4 className="font-bebas text-2xl text-white tracking-wide">Refuel Station</h4>
                  <p className="text-gray-400 text-sm font-medium">Shakes, Meals & Coffee</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="lg:pl-12">
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6">
              D-Core <span className="text-gym-blue">Diet Cafe</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Nutrition is 80% of your transformation. Our in-house Diet Cafe offers freshly prepard, macro-calculated meals, protein shakes, and healthy snacks to fuel your workouts and optimize your recovery.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center flex-shrink-0">
                  <Droplet size={24} className="text-gym-blue" />
                </div>
                <div>
                  <h4 className="font-bebas text-xl text-white tracking-wide mb-1">Post-Workout Shakes</h4>
                  <p className="text-gray-400 text-sm">Premium whey and plant-based protein blends blended to perfection.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center flex-shrink-0">
                  <Salad size={24} className="text-green-500" />
                </div>
                <div>
                  <h4 className="font-bebas text-xl text-white tracking-wide mb-1">Macro-Friendly Meals</h4>
                  <p className="text-gray-400 text-sm">Chicken breast, paneer, and balanced carb options for your diet plan.</p>
                </div>
              </li>
            </ul>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
