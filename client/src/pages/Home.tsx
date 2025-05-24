import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Mission from '@/components/Mission';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Donate from '@/components/Donate';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mission />
      <Testimonials />
      <Gallery />
      <Donate />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
