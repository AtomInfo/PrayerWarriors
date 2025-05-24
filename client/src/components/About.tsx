import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Our Church
          </motion.h2>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          {/* Church gathering image */}
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Church community gathering" 
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg mb-6 leading-relaxed">
              Prayer Warriors Church is a vibrant, online community of believers who gather daily to grow in faith together. Our digital doors are open to everyone from around the world who seeks spiritual connection and growth.
            </p>
            
            <p className="text-lg mb-6 leading-relaxed">
              We believe in the power of prayer, the strength of community, and the transformative nature of God's word. Our fellowship is built on the foundations of love, friendship, support, and encouragement.
            </p>
            
            <p className="scripture text-lg mb-8 leading-relaxed">
              Matthew 6:33 — "But seek first His kingdom and His righteousness, and all these things will be added to you."
            </p>
            
            <p className="text-lg leading-relaxed">
              Every evening, believers from different continents and time zones join together in our virtual sanctuary to worship, pray, and study scripture. We celebrate the diversity of our congregation while remaining united in our faith and purpose.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
