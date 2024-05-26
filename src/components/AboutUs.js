import React from 'react';
import imagem1 from '../assets/imagem1.jpeg';
import imagem2 from '../assets/imagem2.jpeg';
import imagem3 from '../assets/imagem3.jpeg';

const AboutUs = () => {
  return (
    <section id="about-us">
      <div className="container-sobre">
        <div className="row">
          <div className="menu-inicial">
            <div className="about-us-text">
              <h2 className="Menu-sobre">Quem somos</h2>
              <p className="txt-about-us">
                A Comp Júnior é uma empresa sem fins lucrativos que atua no mercado de tecnologia há mais de 20 anos em Lavras e região, prestando serviço de desenvolvimento web, mobile e multiplataforma.
                Nossa missão é oferecer a transformação digital aos nossos clientes, expandindo os seus negócios para o mercado digital e alcançando um potencial desconhecido.
                A Comp Júnior também faz parte do Movimento Empresa Júnior e visa por acolher e desenvolver seus membros, oferecendo a primeira oportunidade profissional e contato com o mercado de trabalho, suas metodologias e estruturas.
              </p>
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
            <a href="https://compweek.com.br/" className="card-link">
              <div className="success-card">
                <div className="card-content">
                  <img src={imagem2} alt="Serviço Dinâmico" />
                </div>
              </div>
            </a>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>
    
  );
};

export default AboutUs;