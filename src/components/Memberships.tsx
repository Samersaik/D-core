import FadeIn from './FadeIn';
import { Check } from 'lucide-react';

const plans = [
  {
    name: '1 Month',
    price: '₹2,500',
    duration: '/month',
    features: ['Access to all equipment', 'Locker Room Access', '1 Free PT Session', 'General Guidance', 'Diet Advice'],
    isPopular: false,
  },
  {
    name: '3 Months',
    price: '₹6,000',
    duration: '/quarter',
    features: ['Access to all equipment', 'Locker & Shower Access', '3 Free PT Sessions', 'Custom Workout Plan', '10% off at Diet Cafe'],
    isPopular: true,
  },
  {
    name: '12 Months',
    price: '₹18,000',
    duration: '/year',
    features: ['Access to all equipment', 'Premium Locker Access', 'Monthly Goal Tracking', 'Free Diet Consulting', '20% off at Diet Cafe'],
    isPopular: false,
  }
];

export default function Memberships() {
  return (
    <section id="memberships" className="py-24 bg-gym-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gym-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6">
            Membership <span className="text-gym-red">Plans</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Choose the plan that fits your transformation journey. No hidden fees, just raw results.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 0.15} direction="up">
              <div 
                className={`relative h-full bg-gym-darker rounded-2xl p-8 border ${
                  plan.isPopular ? 'border-gym-red shadow-[0_0_30px_rgba(255,0,0,0.1)] scale-105 z-10' : 'border-gray-800'
                } flex flex-col`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gym-red text-white py-1 px-4 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <h3 className="font-bebas text-3xl tracking-wide text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-8 border-b border-gray-800 pb-8">
                  <span className="font-bebas text-5xl text-gym-red">{plan.price}</span>
                  <span className="text-gray-400 font-medium">{plan.duration}</span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-gym-red/20 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-gym-red" />
                      </div>
                      <span className="font-medium text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-4 rounded-xl font-bold tracking-widest uppercase transition-all duration-300 ${
                    plan.isPopular 
                      ? 'bg-gym-red text-white hover:bg-gym-red-light shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)]' 
                      : 'bg-transparent border-2 border-gray-700 text-white hover:border-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
