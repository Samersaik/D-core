import FadeIn from './FadeIn';
import { MapPin, Phone, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gym-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6">
            Get In <span className="text-gym-red">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Ready to start? Visit us, call us, or drop a message. We're here to help you transform.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <FadeIn direction="right" className="space-y-8">
            <div className="bg-gym-dark border border-gray-800 p-8 rounded-2xl">
              <h3 className="font-bebas text-2xl tracking-wide text-white mb-6 border-b border-gray-800 pb-4">Contact Information</h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gym-darker border border-gray-800 flex items-center justify-center flex-shrink-0 text-gym-red">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Our Location</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      70, 2nd Floor, Rani Jhansi Road, Furniture Market, Back side Reliance Fresh, Paharganj / Motia Khan, Delhi 110055
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gym-darker border border-gray-800 flex items-center justify-center flex-shrink-0 text-gym-red">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Give Us A Call</h4>
                    <p className="text-gray-400 text-sm">
                      <a href="tel:09582124881" className="hover:text-gym-red transition-colors">09582124881</a>
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gym-darker border border-gray-800 flex items-center justify-center flex-shrink-0 text-gym-red">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Opening Hours</h4>
                    <p className="text-gray-400 text-sm">
                      Monday - Saturday: 6:00 AM – 10:00 PM<br/>
                      Sunday: Closed (or as per schedule)
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map */}
            <div className="h-[300px] bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 isolate">
              <iframe 
                src="https://maps.google.com/maps?q=28.6489957,77.2060798&hl=en&z=17&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="D Core Fitness Location"
                className="opacity-80 mix-blend-luminosity"
              />
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left">
            <div className="bg-gym-dark border border-gray-800 p-8 rounded-2xl h-full">
              <h3 className="font-bebas text-3xl tracking-wide text-white mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-gym-darker border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gym-red transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full bg-gym-darker border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gym-red transition-colors"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-400 mb-2">Interested In</label>
                  <select 
                    id="interest" 
                    className="w-full bg-gym-darker border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gym-red transition-colors appearance-none"
                  >
                    <option>General Membership</option>
                    <option>Personal Training</option>
                    <option>CrossFit/HIIT</option>
                    <option>Diet Cafe / Nutrition</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-gym-darker border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gym-red transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gym-red text-white py-4 rounded-xl font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-gym-red-light transition-colors shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)]"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919582124881" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-transform z-50 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </section>
  );
}
