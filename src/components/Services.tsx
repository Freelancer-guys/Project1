import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Cloud, 
  Database, 
  Shield, 
  Smartphone, 
  BarChart3,
  Cog,
  Zap
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements and scale with your growth.",
      features: ["Web Applications", "Desktop Software", "API Development", "Legacy System Modernization"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Comprehensive cloud migration and management services to optimize your infrastructure and reduce costs.",
      features: ["Cloud Migration", "AWS/Azure Setup", "DevOps Implementation", "Cloud Security"]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Advanced data analytics and management solutions to help you make informed business decisions.",
      features: ["Database Design", "Data Analytics", "Business Intelligence", "Data Migration"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Robust security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"]
    },
    {
      icon: BarChart3,
      title: "Digital Transformation",
      description: "Strategic consulting to help your business leverage technology for competitive advantage.",
      features: ["Process Automation", "Digital Strategy", "Technology Roadmap", "Change Management"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We offer a comprehensive suite of IT services designed to accelerate your 
            digital transformation and drive business success.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + index * 0.1 + featureIndex * 0.05 }}
                    className="flex items-center space-x-3 text-gray-400"
                  >
                    <Zap className="w-4 h-4 text-primary-400 flex-shrink-0" />
                    <span className="group-hover:text-gray-300 transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-12"
          >
            Our Process
          </motion.h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understanding your needs and challenges" },
              { step: "02", title: "Strategy", description: "Developing a tailored solution roadmap" },
              { step: "03", title: "Implementation", description: "Executing the solution with precision" },
              { step: "04", title: "Support", description: "Ongoing maintenance and optimization" }
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {process.step}
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-2">{process.title}</h4>
                <p className="text-gray-300">{process.description}</p>
                
                {index < 3 && (
                  <motion.div
                    className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;