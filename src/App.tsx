/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import DietCafe from './components/DietCafe';
import Memberships from './components/Memberships';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-gym-dark min-h-screen font-inter text-white selection:bg-gym-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Programs />
        <Trainers />
        <Testimonials />
        <DietCafe />
        <Memberships />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
