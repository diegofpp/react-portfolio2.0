import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black mt-8 py-4 px-6 flex items-center justify-between">
      <div className="text-sm text-gray-500">© 2023 Difepor. All rights reserved.</div>
      <div className="flex items-center space-x-4">
        <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-500 hover:text-gray-700" size={24} />
        </a>
        <a href="https://instagram.com/diego___patricio" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-500 hover:text-gray-700" size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
