import React from 'react';
import imagem1 from '../assets/imagem1.jpeg';
import imagem2 from '../assets/imagem2.jpeg';
import imagem3 from '../assets/imagem3.jpeg';
import imagem4 from '../assets/imagem4.jpeg';
import imagem5 from '../assets/imagem5.jpeg';
import imagem6 from '../assets/imagem6.jpeg';

const SuccessCases = ({ language }) => {
  return (
    <section id="success-cases">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>{language === 'pt' ? 'Cases de Sucesso' : 'Success Cases'}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <a href="http://seti.ufla.br/" className="card-link">
              <div className="success-card">
                <div className="card-content">
                  <img src={imagem1} alt="Serviço Estático" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="https://compweek.com.br/" className="card-link">
              <div className="success-card">
                <div className="card-content">
                  <img src={imagem2} alt="Serviço Dinâmico" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="https://www.stamplavras.ind.br/" className="card-link">
              <div className="success-card">
                <div className="card-content">
                  <img src={imagem3} alt="Desenvolvimento de Aplicativos" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="https://projetoniara.com.br/" className="card-link">
              <div className="success-card">
                <div className="card-content">
                  <img src={imagem4} alt="Desenvolvimento de Software" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="https://play.google.com/store/apps/details?id=com.sigmavaf.metadados&hl=pt_BR&gl=US" className="card-link">
              <div className="success-card">
                <div className="card-content">
                  <img src={imagem5} alt="Desenvolvimento de Software" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="https://juridicajunior.ufla.br/" className="card-link">
              <div className="success-card">
                <div className="card-content">
                  <img src={imagem6} alt="Desenvolvimento de Software" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
