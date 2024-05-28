import React from 'react';
import compLogo from '../assets/comp.png';
import comp1Logo from '../assets/comp1.png'; 
import temaIcon from '../assets/lua1.png';
import linguagemIcon from '../assets/linguagem.png';

const Navbar = ({ toggleTheme, toggleLanguage, isDarkTheme, language }) => {
  const handleThemeToggle = () => {
    toggleTheme();
  };

  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  return (
    <nav id="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="container">
        <ul className="nav-menu" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={isDarkTheme ? compLogo : comp1Logo} alt="Logo" className="logo" /> {}
          <li><a href="#hero">{language === 'pt' ? 'Início' : 'Home'}</a></li>
          <li><a href="#about-us">{language === 'pt' ? 'Sobre' : 'About'}</a></li>
          <li><a href="#services">{language === 'pt' ? 'Serviços' : 'Services'}</a></li>
          <li><a href="#projects">{language === 'pt' ? 'Projetos' : 'Projects'}</a></li>
          <li><a href="#success-cases">{language === 'pt' ? 'Casos de Sucesso' : 'Success Cases'}</a></li>
          <li><a href="#contact">{language === 'pt' ? 'Contato' : 'Contact'}</a></li>
        </ul> 
      </div>
      <div className="nav-buttons">
        <button onClick={handleThemeToggle} style={{ border: 'none', background: 'none' }}>
          <img src={temaIcon} alt="Tema" style={{ width: '24px', height: '24px' }} />
        </button>
        <button onClick={handleLanguageToggle} style={{ border: 'none', background: 'none' }}>
          <img src={linguagemIcon} alt="Linguagem" style={{ width: '24px', height: '24px' }} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
