import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';



const Navbar = () => {
  const Links = [
    { name: 'About Me', link: 'hero' },
    { name: 'Projects', link: 'projects' },
    { name: 'Skillz', link: 'skillz' },
    { name: 'Contact', link: 'contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };


  return (
    <motion.div
      className='shadow-md w-full fixed top-0 left-0 p-1 bg-white'
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
    >
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        <motion.div
          className='font-bold text-2xl cursor-pointer flex items-center'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Difepor
        </motion.div>
        {/* Mostrar el ícono FaBars si el menú está cerrado */}
        {!isOpen && (
          <motion.div
            className='md:hidden text-3xl absolute right-8 top-6 cursor-pointer'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleMenuToggle}
          >
            <FaBars name='menu' />
          </motion.div>
        )}
        {/* Mostrar el ícono FaTimes si el menú está abierto */}
        {isOpen && (
          <motion.div
            className='md:hidden text-3xl absolute right-8 top-6 cursor-pointer'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleMenuToggle}
          >
            <FaTimes name='menu' />
          </motion.div>
        )}
        <motion.ul
          //Aplicar la clase 'hidden' de manera condicional según el estado isOpen
          className={`md:flex md:items-center md:justify-center md:pb-0 pb-12 absolute md:static md:pr-5bg-white md:z-auto ${
            isOpen ? 'left-0 w-full md:w-auto md:pl-0 pl-8 max-h-[400px] bg-white sm:shadow-md' : 'hidden'
          } transition-max-h duration-300 ease-in-out overflow-hidden md:pr-5`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {Links.map((link) => (
            <motion.li
              key={link.name}
              className='md:ml-8 text-xl md:my-0 my-7'
              whileHover={{ x: 5 }}
            >

              <ScrollLink
                to={link.link}
                className='hover:text-gray-400 duration-500'
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick}
              >
                {link.name}
              </ScrollLink>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default Navbar;