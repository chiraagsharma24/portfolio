import React, { useState, useRef } from 'react';
import { Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setStatus('submitting');
    
    try {
      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.sendForm(
        "service_hqav116",
        "template_8m973kh",
        formRef.current,
        "6IYX3JwRpWuF-QAbn"
      );
      
      setStatus('success');
      formRef.current.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="glass-panel p-6 md:p-8 w-full max-w-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mb-6">
        <label htmlFor="name" className="block text-text-primary mb-2 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-background-tertiary border border-background-tertiary rounded-lg p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all"
          placeholder="Your Name"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-text-primary mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-background-tertiary border border-background-tertiary rounded-lg p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all"
          placeholder="Your Email ID"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-text-primary mb-2 font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-background-tertiary border border-background-tertiary rounded-lg p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all resize-none"
          placeholder="Your message..."
        />
      </div>

      {status === 'success' && (
        <motion.div 
          className="mb-4 flex items-center p-3 bg-status-success bg-opacity-20 text-status-success rounded-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <CheckCircle size={18} className="mr-2" />
          <span>Message sent successfully!</span>
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div 
          className="mb-4 flex items-center p-3 bg-status-error bg-opacity-20 text-status-error rounded-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <AlertTriangle size={18} className="mr-2" />
          <span>Failed to send message. Please try again.</span>
        </motion.div>
      )}
      
      <Button 
        type="submit" 
        variant="primary" 
        className="w-full"
        icon={<Send size={18} />}
        iconPosition="right"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </motion.form>
  );
};

export default ContactForm;