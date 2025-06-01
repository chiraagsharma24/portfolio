import React from 'react';
import { Github, Linkedin, Send, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
      { icon: <Github size={24} />, url: 'https://github.com/chiraagsharma24', label: 'GitHub' },
      { icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/chirag-sharma-365703226', label: 'LinkedIn' },
      { icon: <Mail size={24} />, url: 'mailto:chiragnoida3345@gmail.com', label: 'Email' },
      { icon: <Send size={24} /> , url : 'https://t.me/chiraagsharmaa' , label:'Telegram'},
    ];
  
  return (
    <footer className="bg-background-secondary py-8">
      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold gradient-text">Chirag.dev</a>
            <p className="text-text-secondary mt-2">Building the future, one line at a time.</p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="p-2 text-text-secondary hover:text-accent-blue transition-colors duration-300"
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-background-tertiary text-center">
          <p className="text-text-tertiary text-sm">
            &copy; {currentYear} Chirag Sharma and Priyansh Batish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;