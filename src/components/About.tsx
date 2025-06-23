// About.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, ShieldCheck, Clock } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Award, value: '100+', label: 'Projects Completed' },
    { icon: Clock, value: '5+', label: 'Years of Experience' },
    { icon: ShieldCheck, value: '24/7', label: 'Support Available' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="text-center mb-16">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            About <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Damodaran</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Damodaran IT Consultants provides specialized services that support both internal operations and client-facing solutions. We focus on IT infrastructure, software systems, and cybersecurity to drive performance and business growth.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ delay: 0.3 }} className="space-y-6">
            <h3 className="text-3xl font-bold text-secondary-900 mb-6">Our Mission</h3>
            <p className="text-lg text-secondary-600 leading-relaxed">
              Our mission is to deliver innovative, secure, and scalable IT solutions that empower businesses to thrive in the digital age. We build lasting partnerships through expert guidance, dependable support, and technology-driven results.
            </p>
            <p className="text-lg text-secondary-600 leading-relaxed">
              From software development to cybersecurity, our team ensures that each client receives tailored, impactful solutions.
            </p>
            <div className="space-y-4 mt-8">
              {[ 'Software Development & Maintenance', 'Data Engineering & Analytics', 'Cybersecurity & IT Audits', 'Hardware Solutions & Infrastructure Support' ].map((service, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.5 + index * 0.1 }} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                  <span className="text-secondary-700 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ delay: 0.5 }} className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                {[ 'Expertise in modern IT infrastructure', 'Client-centric solutions tailored to business needs', 'Proven record in cybersecurity audits and performance improvements', 'Round-the-clock support and system maintenance', 'Cost-effective hardware and software packages' ].map((point, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.7 + index * 0.1 }} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center group">
              <motion.div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-2">{stat.value}</h3>
              <p className="text-secondary-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
