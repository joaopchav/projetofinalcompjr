import React from 'react';
import heroImage from '../assets/teste3.png'; // Certifique-se de que o caminho para a imagem esteja correto

const Hero = () => {
  return (
    <section id="hero">
      <div className="container hero-container">
        <div className="row">
          <div className="col-lg-6 col-md-12 hero-image-container">
            <img src={heroImage} alt="Hero" className="hero-image" />
          </div>
          <div className="col-lg-6 col-md-12 hero-content">
            <h1 className="hero-title">Criatividade Jovem Compromisso Profissional</h1>
            <p className="hero-subtitle">Mais do que um produto, desenvolvemos soluções para o seu negócio, por meio da transformação digital e da paixão pelo o que fazemos</p>
            <a href="#projects" className="hero-button">Nossos projetos</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
