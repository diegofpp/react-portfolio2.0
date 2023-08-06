import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (

    <section id="hero">
      <div class="mt-32 flex flex-col items-center md:flex md:justify-center md:items-center">
        <div class="inline-block mt-5"> 
        <img
          src='https://i.postimg.cc/FFCnPwWn/IMG-0402-1.jpg'
          alt='Hero'
          className="rounded"
        />
        </div>

        
        <div class="p-2">

          <h1 className="text-3xl font-bold mt-4 text-center tracking-tighter">
            Hello, my name is Diego and I am a{' '}
            <span className="text-white bg-black inline-block">Front-end Developer</span>.
          </h1>
          <p className="text-lg md:text-xl mb-8 mt-4 text-center">
            I specialize in building web applications and have a passion for creating clean and efficient code.
          </p>



          <div className="flex justify-center space-x-4">
            <Link
              to="contact" 
              smooth={true}
              duration={500}
            >
            <button className="bg-black text-white rounded-lg p-2 text-lg font-medium border text-center">
              Contact Me
            </button>
            </Link>
            <Link
              to="projects" 
              smooth={true}
              duration={500}
            >
            <button className="bg-white text-black rounded-lg text-lg border border-black p-2">
              See Projects
            </button>
            </Link>
          </div>

        </div>
      </div>
      
    </section>

  );
};

export default Hero;