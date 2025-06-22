import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Cloud } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <motion.img 
            src="/Damodaran Logo.png" 
            alt="Damodaran Logo" 
            className="h-24 w-24 mx-auto mt-16 sm:mt-20 mb-6"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Damodaran
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"
            >
              IT Consultancy
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming businesses through innovative technology solutions. 
            We deliver cutting-edge IT consulting services that drive growth and efficiency.
          </motion.p>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center space-x-8 mb-12"
        >
          {[
            { Icon: Code, delay: 0 },
            { Icon: Database, delay: 0.2 },
            { Icon: Cloud, delay: 0.4 }
          ].map(({ Icon, delay }, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
              }}
            >
              <Icon className="w-8 h-8 text-primary-400" />
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          onClick={scrollToAbout}
          className="group inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Discover Our Solutions</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;