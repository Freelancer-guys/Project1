import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    { icon: Mail, text: "info.damodaran@gmail.com", href: "mailto:info.damodaran@gmail.com" },
    { icon: Mail, text: "sales.damodaran@gmail.com", href: "mailto:sales.damodaran@gmail.com" },
    { icon: Phone, text: "0468 722 463", href: "tel:0468722463" },
    { icon: MapPin, text: "Melbourne, VIC, Australia", href: "#" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.img 
                src="/Damodaran Logo.png" 
                alt="Damodaran Logo" 
                className="h-12 w-12"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="text-2xl font-bold">Damodaran IT Consultants</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              DAMODARAN PTY LTD (ABN: 64 664 912 001). We provide cutting-edge IT services including software development, data engineering, IT audits, support, and hardware solutions.
            </p>
            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <contact.icon className="w-5 h-5" />
                  <span>{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Services', 'Projects', 'Contact'].map((link, index) => (
                <motion.li key={index}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Software Developers',
                'Data Engineering / Analysis',
                'IT Audits',
                'Support & Maintenance',
                'Hardware Sales'
              ].map((service, index) => (
                <motion.li
                  key={index}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Damodaran IT Consultants. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-white/10 rounded-full hover:bg-primary-500 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↑
        </motion.div>
      </motion.button>
    </footer>
  );
};

export default Footer;
