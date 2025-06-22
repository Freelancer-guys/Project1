import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-Commerce Platform Modernization",
      description: "Complete digital transformation of a legacy e-commerce system, resulting in 300% performance improvement and enhanced user experience.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "AWS", "MongoDB"],
      metrics: { users: "50K+", performance: "300%", uptime: "99.9%" },
      category: "Web Development"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management platform with patient records, appointment scheduling, and telemedicine capabilities.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Angular", "Python", "PostgreSQL", "Docker"],
      metrics: { users: "10K+", efficiency: "250%", satisfaction: "98%" },
      category: "Healthcare"
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time financial analytics platform with advanced reporting, risk assessment, and predictive modeling capabilities.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Python", "TensorFlow", "Redis"],
      metrics: { data: "1TB+", accuracy: "95%", speed: "10x" },
      category: "FinTech"
    },
    {
      title: "Supply Chain Optimization",
      description: "AI-powered supply chain management system that optimizes inventory, reduces costs, and improves delivery times.",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Java", "Kubernetes", "ML"],
      metrics: { savings: "40%", efficiency: "180%", accuracy: "92%" },
      category: "Logistics"
    },
    {
      title: "Smart City IoT Platform",
      description: "Comprehensive IoT platform for smart city management including traffic monitoring, energy optimization, and public safety.",
      image: "https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["IoT", "Azure", "Machine Learning", "React"],
      metrics: { sensors: "5K+", coverage: "100%", efficiency: "220%" },
      category: "IoT"
    },
    {
      title: "Educational Learning Platform",
      description: "Interactive online learning platform with AI-powered personalization, progress tracking, and collaborative features.",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "AI"],
      metrics: { students: "25K+", engagement: "85%", completion: "78%" },
      category: "Education"
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
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6"
          >
            Our <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our portfolio of successful projects that showcase our expertise 
            in delivering innovative solutions across various industries.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {project.category}
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 + techIndex * 0.05 }}
                      className="px-3 py-1 bg-gray-100 text-secondary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.7 + index * 0.1 + metricIndex * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-lg font-bold text-primary-600">{value}</div>
                      <div className="text-xs text-secondary-500 capitalize">{key}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Details</span>
                  </motion.button>
                  <motion.button
                    className="p-2 border border-gray-300 rounded-lg hover:border-primary-500 hover:text-primary-500 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            Project Success Metrics
          </motion.h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Calendar, metric: "On-Time Delivery", value: "98%" },
              { icon: Users, metric: "Client Satisfaction", value: "99%" },
              { icon: Zap, metric: "Performance Improvement", value: "250%" },
              { icon: ExternalLink, metric: "Projects Deployed", value: "100+" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-8 h-8" />
                </motion.div>
                <div className="text-3xl font-bold mb-2">{item.value}</div>
                <div className="text-white/80">{item.metric}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;