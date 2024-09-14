import React, { useState } from 'react';
import logo from './images/download__3_-removebg-preview.png';
 
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
 
      <button className="burger" onClick={toggleMenu}>
        &#9776;  
      </button>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a className="img" href="#"> <img src={logo} alt="Logo" /></a>
        <a className="Home" href="#">Home Page</a>
        <a className="about" href="#about-me">About Me</a>
        <a className="ex" href="#Experience">Experience</a>
        <a className="pr" href="#projects">Projects</a>
        <a className="cm" href="#Contact Me">Contact Me</a>
      </nav>
    </header>
  );
}
