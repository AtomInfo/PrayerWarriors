import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Background image - peaceful spiritual image with hands in prayer */}
      <div 
        className="h-screen bg-cover bg-center" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"}}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <motion.div 
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 font-poppins">Prayer Warriors Church</h1>
            <h2 className="text-white text-xl md:text-3xl mb-8 font-poppins">United in Prayer Across the World</h2>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-10 font-nunito">
              As Prayer Warriors Church, we come together every evening to share the goodness of God. We are a diverse, international family in Christ, spreading love, peace, and hope through our online fellowship.
            </p>
            <motion.a 
              href="#services" 
              className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-default inline-block text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Services
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
