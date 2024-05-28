import React, { useState } from 'react';
import Navbar from '../components/NavbarServices';
import Footer from '../components/Footer';
import '../styles/ServicesPages.css';

const DevSoft = () => {
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
                <h2>{language === 'pt' ? 'Desenvolvimento de Software' : 'Software Development'}</h2>
                <p>{language === 'pt' ? 'O desenvolvimento de software é essencial para criar aplicativos e programas que rodam em diversos dispositivos. Envolve desde a concepção até a implementação, teste e manutenção. Existem duas abordagens principais: desenvolvimento nativo e multiplataforma.' : 'Software development is essential for creating applications and programs that run on various devices. It involves everything from conception to implementation, testing, and maintenance. There are two main approaches: native development and cross-platform development.'}</p>
                <br/>
                <p>{language === 'pt' ? 'O desenvolvimento nativo cria software para uma plataforma específica, como iOS com Swift ou Objective-C, e Android com Java ou Kotlin. Isso oferece desempenho otimizado e acesso completo às funcionalidades do dispositivo, mas exige versões separadas para cada plataforma.' : 'Native development creates software for a specific platform, such as iOS with Swift or Objective-C, and Android with Java or Kotlin. This provides optimized performance and full access to device features, but requires separate versions for each platform.'}</p>
                <br/>
                <p>{language === 'pt' ? 'Já o desenvolvimento multiplataforma usa tecnologias como React Native, Flutter e Ionic para criar uma base de código única que funciona em várias plataformas. Isso aumenta a eficiência e reduz custos, embora possa haver uma leve perda de desempenho em comparação com o nativo.' : 'Cross-platform development uses technologies such as React Native, Flutter, and Ionic to create a single codebase that works on multiple platforms. This increases efficiency and reduces costs, although there may be a slight loss of performance compared to native development.'}</p>
              </div>
              <button className="botao_enviar">{language === 'pt' ? 'Faça um orçamento' : 'Request a Quote'}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevSoft;
