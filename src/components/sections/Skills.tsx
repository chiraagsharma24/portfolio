import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skillsData';
import AnimatedText from '../ui/AnimatedText';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'Frontend', name: 'Frontend' },
    { id: 'Backend', name: 'Backend' },
    { id: 'DevTools', name: 'Tools' },
    { id: 'Database', name: 'Database' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="section-container bg-background-primary overflow-hidden py-12 sm:py-16">
      <div className="container-custom mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            <AnimatedText text="My Skills" />
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-16">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-neon-blue'
                  : 'bg-background-tertiary text-text-secondary hover:bg-background-secondary'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-background-primary via-transparent to-background-primary z-10 pointer-events-none" />
          <motion.div 
            className="flex gap-6 sm:gap-12 py-6 sm:py-12 skills-carousel"
            animate={{ x: filteredSkills.length > 5 ? '-50%' : 0 }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            {[...filteredSkills, ...filteredSkills].map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="flex flex-col items-center justify-center gap-2 sm:gap-4 min-w-[100px] sm:min-w-[120px]"
                whileHover={{ 
                  scale: 1.1,
                  y: -10,
                  transition: { type: 'spring', stiffness: 300 }
                }}
              >
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 group">
                  <div className="absolute inset-0 bg-accent-blue rounded-xl blur-lg opacity-20 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-text-secondary group-hover:text-text-primary">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skills;