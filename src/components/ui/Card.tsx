import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = true,
  delay = 0,
}) => {
  return (
    <motion.div
      className={`glass-panel ${hover ? 'hover:shadow-lg hover:-translate-y-1' : ''} transition-all duration-300 ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        ease: 'easeOut',
        delay: delay * 0.1,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Card;