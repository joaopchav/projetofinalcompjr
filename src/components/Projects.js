import React from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Projects = ({ language }) => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>{language === 'pt' ? 'Nossos Projetos' : 'Our Projects'}</h2>
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
                <p>{language === 'pt' ? 'A Gars-On é mais do que uma plataforma de recrutamento. Somos catalisadores de oportunidades, conectando donos de restaurantes a garçons qualificados em tempo real.' : 'Gars-On is more than a recruitment platform. We are catalysts of opportunities, connecting restaurant owners with qualified waiters in real time.'}</p>
                <a href="https://garsonline.com.br/" className="botoes">{language === 'pt' ? 'Ver projeto' : 'View project'}</a>
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
                <p>{language === 'pt' ? 'O Projeto Niara é um dos projetos da Enactus UFLA. Nós buscamos ressignificar a trajetória de mulheres que sofrem algum tipo de violência de gênero.' : 'Project Niara is one of Enactus UFLA projects. We aim to reframe the trajectory of women who suffer from some form of gender violence.'}</p>
                <a href="https://projetoniara.com.br/" className="botoes">{language === 'pt' ? 'Ver projeto' : 'View project'}</a>
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
                <p>{language === 'pt' ? 'Fundada em 1999, a “Ponte de Concreto” é muito mais do que uma empresa de construção. Com base em Luminárias, Minas Gerais, nossa paixão é unir pessoas e lugares através de estruturas sólidas.' : 'Founded in 1999, "Ponte de Concreto" is much more than a construction company. Based in Luminárias, Minas Gerais, our passion is to unite people and places through solid structures.'}</p>
                <a href="https://pontedeconcreto.com.br/" className="botoes">{language === 'pt' ? 'Ver projeto' : 'View project'}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;

