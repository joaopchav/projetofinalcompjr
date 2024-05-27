import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import SuccessCases from './components/SuccessCases';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/style.css';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [language, setLanguage] = useState('pt');

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <Navbar 
        toggleTheme={toggleTheme} 
        toggleLanguage={toggleLanguage} 
        isDarkTheme={isDarkTheme} 
        language={language} 
      />
      <Hero language={language} />
      <AboutUs language={language} />
      <Services language={language} />
      <Projects language={language} />
      <SuccessCases language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
};

export default App;
