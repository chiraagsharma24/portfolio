import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { experiences } from '../../data/experienceData';
import AnimatedText from '../ui/AnimatedText';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-container bg-background-secondary py-12 sm:py-16">
      <div className="container-custom mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            <AnimatedText text="Education" />
          </h2>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 sm:w-1 bg-background-tertiary rounded hidden sm:block" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`flex flex-col sm:flex-row items-center mb-8 sm:mb-12 ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`w-full sm:w-1/2 sm:pl-12 text-center sm:text-left`}>
                <motion.div
                  className="glass-panel p-4 sm:p-6 inline-block w-full sm:w-auto"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{exp.role}</h3>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 text-accent-blue">
                    <span>{exp.organization}</span>
                    {exp.link && (
                      <a 
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent-purple transition-colors"
                      >
                        <ExternalLink size={14} className="sm:w-[16px] sm:h-[16px]" />
                      </a>
                    )}
                  </div>
                  <p className="text-text-secondary text-xs sm:text-sm mb-2 sm:mb-3">{exp.period}</p>
                  <ul className="space-y-1 text-sm">
                    {exp.description.map((point, i) => (
                      <li key={i} className="text-text-secondary">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              <div className="relative flex items-center justify-center w-8 my-4 sm:my-0">
                <motion.div
                  className="w-3 h-3 sm:w-4 sm:h-4 bg-accent-blue rounded-full z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                />
              </div>
              
              <div className="hidden sm:block sm:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;