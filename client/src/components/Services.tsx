import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Join Our Daily Prayer Sessions
          </motion.h2>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-xl max-w-3xl mx-auto mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            We gather live every evening from 8:00 PM to 9:30 PM (EAT). All are welcome to experience God's love.
          </motion.p>
        </div>
        
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 md:p-10 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Sunrise with cross image */}
          <img 
            src="https://images.unsplash.com/photo-1501703979959-797917eb21c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
            alt="Sunrise with cross" 
            className="rounded-lg shadow mb-8 w-full"
          />
          
          <h3 className="text-2xl font-bold mb-4 text-primary font-poppins">Today's Service</h3>
          <p className="text-lg mb-8">Join us for worship, prayer, and Bible study from the comfort of your home.</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center">
              <i className="far fa-clock text-primary text-xl mr-2"></i>
              <span>8:00 PM - 9:30 PM (EAT)</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-video text-primary text-xl mr-2"></i>
              <span>Google Meet</span>
            </div>
          </div>
          
          <motion.a 
            href="https://meet.google.com/cxo-hsmk-zxe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-default inline-block text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-video mr-2"></i> Join Live Service
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
