
import React from 'react';
import '../src/index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    
      <div className="font-roboto bg-white text-black">

      <Navbar />
      <Hero id="hero" />
      <Projects id="projects" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Footer id="footer" />


      </div>
      

    
  );
}

export default App;
