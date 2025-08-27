import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projectsData';
import Button from '../ui/Button';
import AnimatedText from '../ui/AnimatedText';

const Projects: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Detect screen width on first render
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 640;
      setIsMobile(isMobileView);
      if (!isMobileView) {
        setShowAllProjects(true); // Automatically show all on larger screens
      }
    };

    handleResize(); // check on mount
    window.addEventListener('resize', handleResize); // optional: watch for changes

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="section-container bg-background-secondary py-12 sm:py-16">
      <div className="container-custom mx-auto px-4 sm:px-6">
        {/* Title & Description */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl md:leading-normal">
            <AnimatedText text="My Projects" />
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base mt-3">
            <AnimatedText 
              text="A collection of my most significant projects showcasing my skills and experience"
              delay={0.1}
            />
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glass-panel overflow-hidden h-full rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-40 sm:h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image w-full h-full object-cover transition-transform duration-500"
                />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-background-primary to-transparent opacity-0 transition-opacity duration-300 flex items-end">
                  <div className="p-3 sm:p-4 w-full flex justify-between">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white bg-accent-blue hover:bg-opacity-90 rounded-full p-1.5 sm:p-2 transition-all"
                    >
                      <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white bg-background-tertiary hover:bg-opacity-90 rounded-full p-1.5 sm:p-2 transition-all"
                    >
                      <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-3 sm:mb-4 text-xs sm:text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[10px] sm:text-xs bg-background-tertiary text-text-secondary px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2 sm:space-x-3 mt-auto">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="flex-1 text-xs sm:text-sm"
                    icon={<ExternalLink size={12} className="sm:w-[14px] sm:h-[14px]" />}
                    iconPosition="right"
                    onClick={() => window.open(project.demoLink, '_blank')}
                  >
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs sm:text-sm"
                    icon={<Github size={12} className="sm:w-[14px] sm:h-[14px]" />}
                    iconPosition="right"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More - Only on mobile view */}
        {isMobile && !showAllProjects && projects.length > 2 && (
          <div className="flex justify-center mt-8 sm:hidden">
            <Button
              variant="primary"
              onClick={() => setShowAllProjects(true)}
              className="text-sm"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
