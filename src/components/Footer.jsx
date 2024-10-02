import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <h3>Connect with me</h3>
      <div className="social-icons">
        <a href="[Link de LinkedIn]"><FaLinkedin size={30} /></a>
        <a href="[Link de Twitter]"><FaTwitter size={30} /></a>
        <a href="[Link de GitHub]"><FaGithub size={30} /></a>
      </div>
    </footer>
  );
};

export default Footer;
