import React from 'react';
import heroImage from '../assets/teste3.png';

const Hero = ({ language }) => {
  return (
    <section id="hero">
      <div className="container hero-container">
        <div className="row">
          <div className="col-lg-6 col-md-12 hero-image-container">
            <img src={heroImage} alt="Hero" className="hero-image" />
          </div>
          <div className="col-lg-6 col-md-12 hero-content">
            <h1 className="hero-title">{language === 'pt' ? 'Criatividade Jovem Compromisso Profissional' : 'Young Creativity Professional Commitment'}</h1>
            <p className="hero-subtitle">{language === 'pt' ? 'Mais do que um produto, desenvolvemos soluções para o seu negócio, por meio da transformação digital e da paixão pelo o que fazemos' : 'More than a product, we develop solutions for your business, through digital transformation and passion for what we do'}</p>
            <a href="#projects" className="hero-button">{language === 'pt' ? 'Nossos projetos' : 'See our projects'}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
