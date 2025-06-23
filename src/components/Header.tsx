import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, CreditCard } from 'lucide-react';

interface HeaderProps {
  onPaymentClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPaymentClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const isDark = !isScrolled && !isMobileMenuOpen;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isDark ? 'bg-white/10 text-white' : 'bg-white/80 text-secondary-900 shadow backdrop-blur-md'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <img src="/Damodaran Logo.png" alt="Logo" className="h-10 w-10" />
          <span className="font-bold text-xl">Damodaran</span>
        </motion.div>

        {/* Centered Nav */}
        <nav className="hidden md:flex space-x-10 font-medium text-base">
          {['About', 'Services', 'Contact'].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className="hover:text-primary-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
          ))}
        </nav>

        {/* Right side: Payment + Hamburger */}
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={onPaymentClick}
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CreditCard className="w-4 h-4" />
            <span>Payment</span>
          </motion.button>

          {/* Mobile Menu Icon */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className={`w-6 h-6 ${isDark ? 'text-white' : 'text-secondary-900'}`} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-screen bg-white/90 backdrop-blur-md z-50 p-6 flex flex-col items-center justify-center space-y-8 text-center text-secondary-800 overflow-y-auto"
          >
            <motion.button
              className="absolute top-6 right-6 text-secondary-900"
              onClick={() => setIsMobileMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-7 h-7" />
            </motion.button>

            {['About', 'Services', 'Contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-lg font-semibold hover:text-primary-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}

            <motion.button
              onClick={() => {
                onPaymentClick();
                setIsMobileMenuOpen(false);
              }}
              className="mt-6 flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CreditCard className="w-5 h-5" />
              <span>Payment</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
