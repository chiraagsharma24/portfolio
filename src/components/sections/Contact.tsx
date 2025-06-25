import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import ContactForm from '../ui/ContactForm';
import AnimatedText from '../ui/AnimatedText';

const Contact: React.FC = () => {
  const socialLinks = [
    { icon: <Github size={24} />, url: 'https://github.com/chiraagsharma24', label: 'GitHub' },
    { icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/chiragsharma-dev', label: 'LinkedIn' },
    { icon: <Mail size={24} />, url: 'mailto:chiragnoida3345@gmail.com', label: 'Email' },
    { icon: <Send size={24} /> , url : 'https://t.me/chiraagsharmaa' , label:'Telegram'},
  ];
  
  return (
    <section id="contact" className="section-container bg-background-secondary">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            <AnimatedText text="Get In Touch" />
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            <AnimatedText 
              text="Have a project in mind or want to collaborate? Feel free to reach out!"
              delay={0.1}
            />
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <motion.div
              className="glass-panel p-8 rounded-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-text-secondary mb-6">
                I'm currently open for freelance work and job opportunities. 
                Drop me a message and I'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="text-accent-blue mr-3" size={20} />
                  <a href="mailto:chiragnoida3345@gmail.com" className="text-text-primary hover:text-accent-blue transition-colors">
                    chiragnoida3345@gmail.com
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Connect with me:</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-background-tertiary rounded-full text-text-secondary hover:text-accent-blue transition-colors"
                      aria-label={link.label}
                      whileHover={{ 
                        y: -5,
                        boxShadow: '0 10px 25px -5px rgba(67, 97, 238, 0.3)'
                      }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;