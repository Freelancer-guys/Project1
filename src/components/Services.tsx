import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2,
  Database,
  Shield,
  ServerCog,
  MonitorSmartphone,
  Zap
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Tailored software solutions that enhance business efficiency, scalability, and innovation.',
      features: ['Web & Mobile Applications', 'Enterprise Systems', 'Legacy Modernization', 'Maintenance & Support']
    },
    {
      icon: Database,
      title: 'Data Engineering & Analytics',
      description: 'Advanced data pipeline solutions and actionable insights for smart business decisions.',
      features: ['ETL Pipelines', 'Data Warehousing', 'Visualization Dashboards', 'Business Intelligence']
    },
    {
      icon: Shield,
      title: 'IT Audits & Cybersecurity',
      description: 'Protect your systems with performance audits and cybersecurity compliance enforcement.',
      features: ['Cybersecurity Audits', 'Vulnerability Assessment', 'Compliance Checks', 'Incident Response']
    },
    {
      icon: ServerCog,
      title: 'IT Support & Infrastructure',
      description: 'Reliable system maintenance and IT support to ensure smooth business operations.',
      features: ['24/7 Tech Support', 'Network Setup & Maintenance', 'System Monitoring', 'IT Consulting']
    },
    {
      icon: MonitorSmartphone,
      title: 'Hardware Sales & Solutions',
      description: 'Affordable, high-performance hardware tailored for your business needs.',
      features: ['Servers & Workstations', 'Peripherals & Accessories', 'Installation Services', 'Vendor Integration']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We deliver impactful IT services—from development to audits—that empower your organization’s growth and resilience.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* First 3 Cards */}
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: 0.3 + index * 0.1 + featureIndex * 0.05
                    }}
                    className="flex items-center space-x-3 text-gray-400"
                  >
                    <Zap className="w-4 h-4 text-primary-400 flex-shrink-0" />
                    <span className="group-hover:text-gray-300 transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Last 2 Cards Centered */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {services.slice(3).map((service, index) => (
            <motion.div
              key={index + 3}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10 w-full md:w-[48%] lg:w-[30%]"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: 0.3 + index * 0.1 + featureIndex * 0.05
                    }}
                    className="flex items-center space-x-3 text-gray-400"
                  >
                    <Zap className="w-4 h-4 text-primary-400 flex-shrink-0" />
                    <span className="group-hover:text-gray-300 transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
