import React, { useState } from 'react';
import Navbar from '../components/NavbarServices';
import Footer from '../components/Footer';
import '../styles/ServicesPages.css';

const SiteDinamico = () => {
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
                <h2>{language === 'pt' ? 'Sites Dinâmicos' : 'Dynamic Websites'}</h2>
                <p>{language === 'pt' ? 'Sites dinâmicos adaptam seu conteúdo e layout com base nas interações do usuário ou outras variáveis. Eles são altamente interativos e personalizados, proporcionando uma experiência mais rica para os visitantes.' : 'Dynamic websites adapt their content and layout based on user interactions or other variables. They are highly interactive and personalized, providing a richer experience for visitors.'}</p>
                <br/>
                <p>{language === 'pt' ? 'Esses sites costumam estar conectados a bancos de dados, permitindo a exibição de conteúdo atualizado em tempo real. Tecnologias comuns incluem linguagens de programação como PHP, Python e Node.js, além de frameworks como React, Angular e Vue.js.' : 'These sites are often connected to databases, allowing for real-time content updates. Common technologies include programming languages such as PHP, Python, and Node.js, as well as frameworks like React, Angular, and Vue.js.'}</p>
              </div>
              <button className="botao_enviar">{language === 'pt' ? 'Faça um orçamento' : 'Request a Quote'}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteDinamico;
