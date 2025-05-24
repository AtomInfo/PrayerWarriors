import React from 'react';
import { motion } from 'framer-motion';
import { missionPoints } from '@/lib/utils';

const Mission: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Mission & Motto
          </motion.h2>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.div>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <motion.h3 
              className="text-2xl font-bold mb-6 text-primary font-poppins"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Mission
            </motion.h3>
            
            <motion.ul 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {missionPoints.map((point, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="bg-primary rounded-full p-2 mr-4 mt-1">
                    <i className={`${point.icon} text-white`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 font-poppins">{point.title}</h4>
                    <p className="text-lg">{point.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          
          <motion.div 
            className="md:w-1/2 bg-secondary rounded-lg p-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary text-center font-poppins">Our Motto</h3>
            
            <div className="scripture text-center p-6 bg-white rounded-lg shadow-md mb-8">
              <p className="text-xl md:text-2xl mb-4 leading-relaxed">
                "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law."
              </p>
              <p className="text-lg font-semibold text-primary">Galatians 5:22-23</p>
            </div>
            
            <p className="text-lg text-center">
              We strive to embody these fruits of the Spirit in our daily lives and in our interactions with one another, creating a community that reflects God's love and grace.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
