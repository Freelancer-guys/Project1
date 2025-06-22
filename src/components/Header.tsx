import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, CreditCard } from 'lucide-react';

interface HeaderProps {
  onPaymentClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPaymentClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img 
              src="/Damodaran Logo.png" 
              alt="Damodaran Logo" 
              className="h-10 w-10"
            />
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-secondary-900' : 'text-white'
            }`}>
              Damodaran
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['About', 'Services','Contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                  isScrolled ? 'text-secondary-700' : 'text-white'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
            
            {/* Payment Button */}
            <motion.button
              onClick={onPaymentClick}
              className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CreditCard className="w-4 h-4" />
              <span>Payment</span>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-secondary-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden py-4 px-4 space-y-3 transition-all duration-300 ${
              isScrolled ? 'bg-white text-secondary-800' : 'bg-transparent text-white'
            }`}
          >


            {['About', 'Services', 'Projects'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left py-2 transition-colors duration-300 hover:text-primary-400 ${
                  isScrolled ? 'text-secondary-700' : 'text-white'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>

            ))}
            
            {/* Mobile Payment Button */}
            <motion.button
              onClick={() => {
                onPaymentClick();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 mt-2"
              whileTap={{ scale: 0.95 }}
            >
              <CreditCard className="w-4 h-4" />
              <span>Payment</span>
            </motion.button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;