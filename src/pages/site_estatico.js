import React, { useState } from 'react';
import Navbar from '../components/NavbarServices';
import Footer from '../components/Footer';
import '../styles/ServicesPages.css';

const SiteEstatico = () => {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <div>
      <Navbar toggleLanguage={toggleLanguage} />
      <section id="desenvolvimento-aplicativos">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="aplicativos-content text-center">
                <h2>{language === 'pt' ? 'Sites Estáticos' : 'Static Websites'}</h2>
                <p>{language === 'pt' ? 'Sites estáticos exibem conteúdo fixo que é o mesmo para todos os visitantes, sendo ideais para projetos que não exigem atualizações frequentes ou interatividade complexa.' : 'Static websites display fixed content that is the same for all visitors, making them ideal for projects that do not require frequent updates or complex interactivity.'}</p>
                <br/>
                <p>{language === 'pt' ? 'Eles são rápidos de desenvolver, têm desempenho excelente e oferecem maior segurança por não dependerem de processamento dinâmico no servidor. Utilizam tecnologias como HTML, CSS e ferramentas de geração de sites estáticos como Jekyll, Hugo e Gatsby.' : 'They are quick to develop, have excellent performance, and offer greater security because they do not rely on dynamic server-side processing. They use technologies such as HTML, CSS, and static site generation tools like Jekyll, Hugo, and Gatsby.'}</p>
              </div>
              <button className="botao_enviar">{language === 'pt' ? 'Faça um orçamento' : 'Request a Quote'}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteEstatico;
