import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Dialog from './Dialog';
import emailjs from 'emailjs-com';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const MotionTextarea = motion.textarea;
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowDialog(true);
        };

  const handleEmail = () => {
    emailjs.send(
      'service_bpkzifd',
      'template_rdqymf8',
      {
        name: formData.name,
        email: formData.email,
        company: formData.company || 'N/A',
        service: formData.service,
        message: formData.message,
      },
      'MKlbjCsIs3qfGT1lr'
    ).then(() => {
      alert('Email sent!');
    }).catch(() => {
      alert('Email sending failed.');
    }).finally(() => setShowDialog(false));
  };

  const handleWhatsApp = () => {
    const msg = `Hi, I'm ${formData.name} (${formData.email}) from ${formData.company || 'N/A'}.
    Service Interested: ${formData.service}
    Message: ${formData.message}`;
    const url = `https://api.whatsapp.com/send?phone=61468722463&text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setShowDialog(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-gray-50">
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
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Contact
            </span> Us
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed"
          >
            We’d love to hear from you! Whether you have a question, a project idea, or just want to say hello.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
        <motion.div variants={itemVariants} className="space-y-6">
        <div className="flex items-center space-x-4">
            <div className="p-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full">
                🏢
            </div>
            <div>
                <h4 className="text-lg font-semibold text-secondary-900">Company</h4>
                <p className="text-secondary-600">DAMODARAN PTY LTD</p>
            </div>
            </div>

            {/* ABN */}
            <div className="flex items-center space-x-4">
            <div className="p-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full">
                🧾
            </div>
            <div>
                <h4 className="text-lg font-semibold text-secondary-900">ABN</h4>
                <p className="text-secondary-600">64 664 912 001</p>
            </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
            <div className="p-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full">
                <Mail className="w-6 h-6" />
            </div>
            <div>
                <h4 className="text-lg font-semibold text-secondary-900">Email</h4>
                <p className="text-secondary-600">info.damodaran@gmail.com</p>
                <p className="text-secondary-600">sales.damodaran@gmail.com</p>
            </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
            <div className="p-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full">
                <Phone className="w-6 h-6" />
            </div>
            <div>
                <h4 className="text-lg font-semibold text-secondary-900">Phone</h4>
                <p className="text-secondary-600">0468 722 463</p>
            </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
            <div className="p-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full">
                <MapPin className="w-6 h-6" />
            </div>
            <div>
                <h4 className="text-lg font-semibold text-secondary-900">Location</h4>
                <p className="text-secondary-600">Melbourne, VIC, Australia</p>
            </div>
            </div>
          </motion.div>

          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 bg-white rounded-2xl shadow-lg p-8"
            onSubmit={handleSubmit}
          >
            <motion.input
              variants={itemVariants}
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <motion.input
              variants={itemVariants}
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <motion.input
              variants={itemVariants}
              type="text"
              placeholder="Your Company (optional)"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <motion.select
              variants={itemVariants}
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
            >
              <option value="">Select a Service</option>
              <option value="Software Development">Software Developers</option>
              <option value="Data Engineering / Analysis">Data Engineer and Analyst</option>
              <option value="IT Audit">IT Audits (Cybersecurity, Performance)</option>
              <option value="Support & Maintenance">IT Support and Maintenance</option>
              <option value="Hardware Sales">Hardware Sales</option>
            </motion.select>
            <MotionTextarea
              variants={itemVariants}
              rows={5}
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <motion.button
              variants={itemVariants}
              type="submit"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-2xl transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </motion.button>
          </motion.form>
        </div>
      </div>

      <Dialog
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        onEmailClick={handleEmail}
        onWhatsAppClick={handleWhatsApp}
      />
    </section>
  );
};

export default Contact;