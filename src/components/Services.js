import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Nossos serviços</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <a href="src/pages/servico-estatico.html" className="card-link">
              <div className="card">
                <div className="card-content">
                  <h3>Desenvolvimento de sites estáticos</h3>
                  <p>Sites estáticos consistem em páginas da web cujo conteúdo é fixo e exibido exatamente da mesma maneira para todos os visitantes.</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="src/pages/servico-dinamico.html" className="card-link">
              <div className="card">
                <div className="card-content">
                  <h3>Desenvolvimento de sites dinâmicos</h3>
                  <p>Sites dinâmicos são aqueles cujo conteúdo e layout podem ser alterados com base em dados fornecidos pelo usuário, interações do usuário ou outras variáveis.</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="../pages/devApp.js" className="card-link">
              <div className="card">
                <div className="card-content">
                  <h3>Desenvolvimento de aplicativos</h3>
                  <p>O desenvolvimento de aplicativos refere-se ao processo de criação de software que é executado em dispositivos móveis, como smartphones e tablets.</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="src/pages/desenvolvimento-software.html" className="card-link">
              <div className="card">
                <div className="card-content">
                  <h3>Desenvolvimento de softwares</h3>
                  <p>O desenvolvimento de software é um processo fundamental na criação de aplicativos e programas computacionais.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
