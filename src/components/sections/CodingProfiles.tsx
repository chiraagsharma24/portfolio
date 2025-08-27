import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { codingProfiles } from '../../data/codingProfilesData';
import Card from '../ui/Card';
import AnimatedText from '../ui/AnimatedText';

const CodingProfiles: React.FC = () => {
  return (
    <section id="coding" className="section-container bg-background-primary py-12 sm:py-16">
      <div className="container-custom mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl md:leading-normal">
            <AnimatedText text="Coding Profiles" />
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base mt-3">
            <AnimatedText 
              text="Check out my performance and achievements on competitive coding platforms"
              delay={0.1}
            />
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {codingProfiles.map((profile, index) => (
            <Card key={profile.platform} delay={index}>
              <div className="p-4 sm:p-6 flex flex-col h-full">
                <div className="flex items-center mb-3 sm:mb-4">
                  <img 
                    src={profile.logo} 
                    alt={profile.platform}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain mr-2 sm:mr-3"
                  />
                  <h3 className="text-lg sm:text-xl font-bold">{profile.platform}</h3>
                </div>
                
                <ul className="mb-4 sm:mb-6 flex-grow space-y-1.5 sm:space-y-2">
                  {profile.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent-blue mr-1.5 sm:mr-2 text-sm sm:text-base">•</span>
                      <span className="text-text-secondary text-sm sm:text-base">{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.a
                  href={profile.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-accent-blue hover:underline text-sm sm:text-base"
                  whileHover={{ x: 5 }}
                >
                  Visit Profile
                  <ExternalLink size={14} className="ml-1 sm:w-[16px] sm:h-[16px]" />
                </motion.a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;