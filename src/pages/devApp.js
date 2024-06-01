import React, { useState } from 'react';
import Navbar from '../components/NavbarServices';
import Footer from '../components/Footer';
import '../styles/ServicesPages.css';

const DevApp = () => {
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
                <h2>{language === 'pt' ? 'Desenvolvimento de Aplicativos' : 'App Development'}</h2>
                <p>{language === 'pt' ? 'O desenvolvimento de aplicativos refere-se ao processo de criação de software que é executado em dispositivos móveis, como smartphones e tablets, ou em outros dispositivos específicos, como smartwatches e dispositivos de IoT (Internet das Coisas). Existem duas principais abordagens para o desenvolvimento de aplicativos: nativo e multiplataforma.' : 'App development refers to the process of creating software that runs on mobile devices, such as smartphones and tablets, or on other specific devices, such as smartwatches and IoT (Internet of Things) devices. There are two main approaches to app development: native and cross-platform.'}</p>
                <br />
                <p>{language === 'pt' ? 'Desenvolvimento Nativo: Neste método, os aplicativos são construídos para uma plataforma específica, como iOS (utilizando Swift ou Objective-C) ou Android (utilizando Java ou Kotlin). Isso permite um desempenho otimizado e acesso total às funcionalidades do dispositivo, mas pode exigir a criação de versões separadas para cada plataforma.' : 'Native Development: In this method, apps are built for a specific platform, such as iOS (using Swift or Objective-C) or Android (using Java or Kotlin). This allows for optimized performance and full access to device features, but may require creating separate versions for each platform.'}</p>
                <br />
                <p>{language === 'pt' ? 'Desenvolvimento Multiplataforma: Com essa abordagem, os aplicativos são escritos usando tecnologias web (como HTML, CSS e JavaScript) e são encapsulados em uma estrutura que permite executá-los em várias plataformas, como React Native, Flutter ou Ionic. Embora possa haver alguma perda de desempenho em comparação com aplicativos nativos, o desenvolvimento multiplataforma oferece eficiência ao permitir que uma única base de código seja usada em várias plataformas.' : 'Cross-platform Development: With this approach, apps are written using web technologies (such as HTML, CSS, and JavaScript) and are encapsulated in a framework that allows them to run on multiple platforms, such as React Native, Flutter, or Ionic. While there may be some loss of performance compared to native apps, cross-platform development offers efficiency by allowing a single codebase to be used across multiple platforms.'}</p>
              </div>
              <button className="botao_enviar">{language === 'pt' ? 'Faça um orçamento' : 'Request a Quote'}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevApp;
