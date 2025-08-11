'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'WHAT WE DO', href: '#what-we-do' },
    { name: 'WHO WE ARE', href: '#team' },
    { name: 'OUR WORK', href: '#portfolio' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 1 }}
      animate={{ 
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0)'
      }}
      style={{
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)'
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="nav-fixed"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-6">
          <motion.div 
            className="text-xl font-black text-black tracking-tight font-mono"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            INIT.PARTNERS
          </motion.div>
          
          <nav className="hidden md:flex space-x-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-black hover:text-neutral-800 transition-colors duration-300 tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.2 + index * 0.1, 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-black font-medium text-sm tracking-wide">
              MENU
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;