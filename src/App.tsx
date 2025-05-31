import React, { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import CodingProfiles from './components/sections/CodingProfiles';
import Contact from './components/sections/Contact';
import Resume from './components/sections/Resume';

function App() {
  useEffect(() => {
    document.title = 'Chirag Sharma Portfolio';
  }, []);

  return (
    <Layout>
      <Hero />
      <Skills />
      <Projects />
      <CodingProfiles />
      <Resume />
      <Experience />
      <Contact />
    </Layout>
  );
}

export default App;