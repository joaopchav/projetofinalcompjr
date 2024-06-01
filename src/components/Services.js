import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ language }) => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>{language === 'pt' ? 'Nossos serviços' : 'Our Services'}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <Link to="/site-estatico" className="card-link">
              <div className="card">
                <div className="card-content">
                  <h3>{language === 'pt' ? 'Desenvolvimento de sites estáticos' : 'Static Website Development'}</h3>
                  <p>{language === 'pt' ? 'Sites estáticos consistem em páginas da web cujo conteúdo é fixo e exibido exatamente da mesma maneira para todos os visitantes.' : 'Static websites consist of web pages whose content is fixed and displayed exactly the same way for all visitors.'}</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <Link to="/site-dinamico" className="card-link">
              <div className="card">
                <div className="card-content">
                  <h3>{language === 'pt' ? 'Desenvolvimento de sites dinâmicos' : 'Dynamic Website Development'}</h3>
                  <p>{language === 'pt' ? 'Sites dinâmicos são aqueles cujo conteúdo e layout podem ser alterados com base em dados fornecidos pelo usuário, interações do usuário ou outras variáveis.' : 'Dynamic websites are those whose content and layout can be changed based on data provided by the user, user interactions, or other variables.'}</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <Link to="/dev-app" className="card-link">
              <div className="card">
                <div className="card-content">
                  <h3>{language === 'pt' ? 'Desenvolvimento de aplicativos' : 'App Development'}</h3>
                  <p>{language === 'pt' ? 'O desenvolvimento de aplicativos refere-se ao processo de criação de software que é executado em dispositivos móveis, como smartphones e tablets.' : 'App development refers to the process of creating software that runs on mobile devices, such as smartphones and tablets.'}</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <Link to="/dev-soft" className="card-link">
              <div className="card">
                <div className="card-content">
                  <h3>{language === 'pt' ? 'Desenvolvimento de softwares' : 'Software Development'}</h3>
                  <p>{language === 'pt' ? 'O desenvolvimento de software é um processo fundamental na criação de aplicativos e programas computacionais.' : 'Software development is a fundamental process in creating computer applications and programs.'}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
