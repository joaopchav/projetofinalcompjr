import React from 'react';
import { Link } from 'react-router-dom';
import compLogo from '../assets/comp.png';
import comp1Logo from '../assets/comp1.png';
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
          <li><Link to="/">{language === 'pt' ? 'Início' : 'Home'}</Link></li>
          <li><Link to="/">{language === 'pt' ? 'Sobre' : 'About'}</Link></li>
          <li><Link to="/">{language === 'pt' ? 'Serviços' : 'Services'}</Link></li>
          <li><Link to="/">{language === 'pt' ? 'Projetos' : 'Projects'}</Link></li>
          <li><Link to="/">{language === 'pt' ? 'Caso de Sucesso' : 'Sucess Cases'}</Link></li>
          <li><Link to="/">{language === 'pt' ? 'Contato' : 'Contact'}</Link></li>
          <div class="nav-button2">
            <button onClick={handleLanguageToggle} style={{ border: 'none', background: 'none' }}>
            <img src={linguagemIcon} alt="Linguagem" style={{ width: '24px', height: '24px' }} />
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
