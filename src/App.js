
import React from 'react';
import '../src/index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skillz from './components/Skillz';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    
      <div className="p-6 font-roboto bg-white text-black">

      <Navbar />
      <Hero id="hero" />
      <Projects id="projects" />
      <Skillz id="skillz" />
      <Contact id="contact" />
      <Footer id="footer" />


      </div>
      

    
  );
}

export default App;
