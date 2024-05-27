import React from 'react';
import imagem1 from '../assets/foto1.jpeg';
import imagem2 from '../assets/foto2.jpeg';
import imagem3 from '../assets/foto3.jpeg';

const AboutUs = ({ language }) => {
  return (
    <section id="about-us">
      <div className="container-sobre">
        <div className="row">
          <div className="menu-inicial">
            <div className="about-us-text">
              <h2 className="Menu-sobre">{language === 'pt' ? 'Quem somos' : 'About Us'}</h2>
              <p className="txt-about-us">
                {language === 'pt' ? (
                  <>
                    A Comp Júnior é uma empresa sem fins lucrativos que atua no mercado de tecnologia há mais de 20 anos em Lavras e região, prestando serviço de desenvolvimento web, mobile e multiplataforma.
                    Nossa missão é oferecer a transformação digital aos nossos clientes, expandindo os seus negócios para o mercado digital e alcançando um potencial desconhecido.
                    A Comp Júnior também faz parte do Movimento Empresa Júnior e visa por acolher e desenvolver seus membros, oferecendo a primeira oportunidade profissional e contato com o mercado de trabalho, suas metodologias e estruturas.
                  </>
                ) : (
                  <>
                    Comp Júnior is a non-profit company that has been operating in the technology market for over 20 years in Lavras and the region, providing web, mobile, and multiplatform development services.
                    Our mission is to offer digital transformation to our clients, expanding their businesses to the digital market and reaching an unknown potential.
                    Comp Júnior is also part of the Junior Company Movement and aims to welcome and develop its members, offering the first professional opportunity and contact with the job market, its methodologies, and structures.
                  </>
                )}
              </p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <a href="http://instagram.com/comp.ufla" className="card-link">
                  <div className="success-card">
                    <div className="card-content">
                      <img src={imagem1} alt="Serviço Estático" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="http://instagram.com/comp.ufla" className="card-link">
                  <div className="success-card">
                    <div className="card-content">
                      <img src={imagem2} alt="Serviço Dinâmico" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="http://instagram.com/comp.ufla" className="card-link">
                  <div className="success-card">
                    <div className="card-content">
                      <img src={imagem3} alt="Serviço Dinâmico" />
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
