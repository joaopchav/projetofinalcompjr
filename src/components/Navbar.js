import React from 'react';
import logo from '../assets/comp.png';

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="container">
        <div className="row align-center">
          <div className="logo-container">
            <a href="#hero">
              <i className="icon"></i>
              <img src={logo} className="logo" alt="Logo" />
            </a>
          </div>
          <ul id="nav-menu" className="nav-menu">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about-us">Sobre nós</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#success-cases">Cases</a></li>
            <li><a href="#contact">Entre em Contato</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
