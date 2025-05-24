import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/lib/utils';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Words of Encouragement
          </motion.h2>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 text-accent">
                <i className={testimonial.type === 'quote' ? 'fas fa-quote-left text-3xl' : 'fas fa-book-bible text-3xl'}></i>
              </div>
              
              <p className={`text-lg mb-4 italic ${testimonial.type === 'scripture' ? 'scripture' : ''}`}>
                {testimonial.content}
              </p>
              
              {testimonial.type === 'quote' ? (
                <div className="flex items-center">
                  <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ) : (
                <p className="font-semibold text-primary">{testimonial.reference}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
