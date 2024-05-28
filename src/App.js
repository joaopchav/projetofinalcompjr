import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import SuccessCases from './components/SuccessCases';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SiteDinamico from './pages/site_dinamico';
import SiteEstatico from './pages/site_estatico';
import DevApp from './pages/devApp';
import DevSoft from './pages/devSoft';
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
    <Router>
      <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
        <Navbar 
          toggleTheme={toggleTheme} 
          toggleLanguage={toggleLanguage} 
          isDarkTheme={isDarkTheme} 
          language={language} 
        />
        <Routes>
          <Route exact path="/" element={
            <>
              <Hero language={language} />
              <AboutUs language={language} />
              <Services language={language} />
              <Projects language={language} />
              <SuccessCases language={language} />
              <Contact language={language} />
            </>
          } />
          <Route path="/site-estatico" element={<SiteEstatico />} />
          <Route path="/site-dinamico" element={<SiteDinamico />} />
          <Route path="/dev-app" element={<DevApp />} />
          <Route path="/dev-soft" element={<DevSoft />} />
        </Routes>
        <Footer language={language} />
      </div>
    </Router>
  );
};

export default App;
