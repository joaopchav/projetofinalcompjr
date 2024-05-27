import React from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Nossos Projetos</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <div className="card-image">
                <img src={image1} alt="Project 1" />
              </div>
              <div className="card-content">
                <h3>Gars-ON</h3>
                <p>A Gars-On é mais do que uma plataforma de recrutamento. Somos catalisadores de oportunidades, conectando donos de restaurantes a garçons qualificados em tempo real.</p>
                <a href="https://garsonline.com.br/" className="botoes">Ver projeto</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <div className="card-image">
                <img src={image2} alt="Project 2" />
              </div>
              <div className="card-content">
                <h3>Projeto Niara</h3>
                <p>O Projeto Niara é um dos projetos da Enactus UFLA. Nós buscamos ressignificar a trajetória de mulheres que sofrem algum tipo de violência de gênero.</p>
                <a href="https://projetoniara.com.br/" className="botoes">Ver projeto</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <div className="card-image">
                <img src={image3} alt="Project 3" />
              </div>
              <div className="card-content">
                <h3>Ponte de Concreto</h3>
                <p>Fundada em 1999, a “Ponte de Concreto” é muito mais do que uma empresa de construção. Com base em Luminárias, Minas Gerais, nossa paixão é unir pessoas e lugares através de estruturas sólidas.</p>
                <a href="https://pontedeconcreto.com.br/" className="botoes">Ver projeto</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
