import React from 'react';
import { menuItems, socialLinks } from '@/lib/utils';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 font-poppins">Prayer Warriors Church</h3>
            <p className="mb-4 max-w-md">
              United in prayer across the world, we are a diverse, international family in Christ, spreading love, peace, and hope through our online fellowship.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="text-white hover:text-accent transition-default"
                  aria-label={link.name}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className={`${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4 font-poppins">Quick Links</h4>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.url} 
                    className="hover:text-accent transition-default"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 font-poppins">Join Our Services</h4>
            <p className="mb-4">Every evening from 8:00 PM to 9:30 PM (EAT)</p>
            <a 
              href="https://meet.google.com/cxo-hsmk-zxe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded-full transition-default inline-block"
            >
              <i className="fas fa-video mr-2"></i> Google Meet
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Prayer Warriors Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
