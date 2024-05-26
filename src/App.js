import React from 'react';
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
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      <SuccessCases />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
