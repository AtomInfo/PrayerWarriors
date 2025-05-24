import React, { useState, useEffect } from 'react';
import { menuItems } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking a link in mobile view
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-primary font-poppins font-bold text-2xl">Prayer Warriors</span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="block md:hidden text-dark focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 font-poppins">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.url} 
                className="text-dark hover:text-primary transition-default"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={`bg-white md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="px-4 py-2 font-poppins">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.url} 
                className="block py-2 text-dark hover:text-primary"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
