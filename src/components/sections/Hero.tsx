import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Send, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedText from '../ui/AnimatedText';

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const resumeUrl = '/Chirag_Sharma_Resume.pdf';

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(resumeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Chirag_Sharma_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Failed to download resume. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    { icon: <Github size={24} />, url: 'https://github.com/chiraagsharma24', label: 'GitHub' },
    { icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/chirag-sharma-365703226', label: 'LinkedIn' },
    { icon: <Mail size={24} />, url: 'mailto:chiragnoida3345@gmail.com', label: 'Email' },
    { icon: <Send size={24} />, url: 'https://t.me/chiraagsharmaa', label: 'Telegram' },
  ];

  const stats = [
    { label: 'Projects', value: '10+' },
    { label: 'GitHub Stars', value: '100+' },
    { label: 'Contributions', value: '50+' },
  ];

  return (
    <section id="home" className="h-screen flex items-center pt-16 sm:pt-24 relative overflow-visible">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue opacity-30 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-purple opacity-30 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          {/* Left Side Content */}
          <motion.div
            className="w-full lg:w-3/5 lg:ml-20 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 leading-snug sm:leading-[1.3] pb-1 overflow-visible">
  <AnimatedText text="Chirag Sharma" className="gradient-text" />
</h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-text-secondary font-medium mb-3 sm:mb-4">
              <AnimatedText
                text="Full Stack Developer"
                delay={0.2}
              />
            </h2>

            <p className="text-text-secondary mb-4 sm:mb-6 max-w-2xl text-sm sm:text-base mx-auto lg:mx-0">
              <AnimatedText
                text="A full stack developer specializing in creating fast, scalable, and user-focused web applications."
                delay={0.2}
              />
            </p>

            <p className="text-text-secondary mb-4 sm:mb-6 max-w-2xl text-sm sm:text-base mx-auto lg:mx-0">
              <AnimatedText
                text="I'm passionate about open-source, love collaborating on impactful projects, and have actively contributed to 5+ hackathons winning 2."
                delay={0.2}
              />
            </p>

            <p className="text-text-secondary mb-4 sm:mb-6 max-w-2xl text-sm sm:text-base mx-auto lg:mx-0">
              <AnimatedText
                text="Currently exploring Web3 to build the next generation of decentralized solutions."
                delay={0.5}
              />
            </p>

            {/* Social Stats */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    className="text-xl sm:text-2xl font-bold gradient-text"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-text-secondary text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
              <Button
                variant="primary"
                icon={<Download size={18} />}
                onClick={handleDownload}
              >
                {isLoading ? 'Downloading...' : 'Download Resume'}
              </Button>

              <Button
                variant="outline"
                icon={<Send size={18} />}
                onClick={() => document.getElementById('contact')?.scrollIntoView()}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start gap-3 sm:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background-tertiary rounded-lg text-text-secondary hover:text-accent-blue transition-all hover:-translate-y-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="w-full lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Mobile View - Circular Image */}
            <div className="lg:hidden relative w-24 h-24">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple p-[2px]">
                <div className="w-full h-full rounded-full bg-background-primary overflow-hidden">
                  <img
                    src="/pfp.jpg"
                    alt="Chirag Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Desktop View - Background-less Image */}
            <div className="hidden lg:block relative">
              <div className="relative w-[400px] h-[500px] flex flex-col items-center">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent-blue opacity-20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-purple opacity-20 rounded-full blur-xl" />

                {/* Main Image */}
                <img
                  src="/pfp2.png"
                  alt="Chirag Sharma"
                  className="w-3/4 h-3/4 object-contain drop-shadow-2xl"
                />
                <p className="text-center text-text-secondary text-lg font-medium mt-2">
                  👋 Meet the dev behind the deploys
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;