import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import imagem1 from "../assets/image1.jpg"
import imagem2 from "../assets/image2.jpg"
import imagem3 from "../assets/image3.jpg"

const devApp = () => {
  return (
    <div>
      <Navbar />
      <section id="desenvolvimento-software">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="software-content text-center">
                <h2>Desenvolvimento de Aplicativos</h2>
                <p>O desenvolvimento de aplicativos refere-se ao processo de criação de software que é executado em dispositivos móveis, como smartphones e tablets, ou em outros dispositivos específicos, como smartwatches e dispositivos de IoT (Internet das Coisas). Existem duas principais abordagens para o desenvolvimento de aplicativos: nativo e multiplataforma.</p>
                <p>Desenvolvimento Nativo: Neste método, os aplicativos são construídos para uma plataforma específica, como iOS (utilizando Swift ou Objective-C) ou Android (utilizando Java ou Kotlin). Isso permite um desempenho otimizado e acesso total às funcionalidades do dispositivo, mas pode exigir a criação de versões separadas para cada plataforma.</p>
                <p>Desenvolvimento Multiplataforma: Com essa abordagem, os aplicativos são escritos usando tecnologias web (como HTML, CSS e JavaScript) e são encapsulados em uma estrutura que permite executá-los em várias plataformas, como React Native, Flutter ou Ionic. Embora possa haver alguma perda de desempenho em comparação com aplicativos nativos, o desenvolvimento multiplataforma oferece eficiência ao permitir que uma única base de código seja usada em várias plataformas.</p>
                <p>Abaixo são alguns dos projetos de desenvolvimento de aplicativos já desenvolvidos pela nossa equipe:</p>
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src={imagem1} alt="Projeto de Software 1" /></div>
                    <div className="swiper-slide"><img src={imagem2} alt="Projeto de Software 2" /></div>
                    <div className="swiper-slide"><img src={imagem3} alt="Projeto de Software 3" /></div>
                    {/* Adicione mais slides conforme necessário */}
                  </div>
                </div>
              </div>
              <button className="botao_enviar">Faça um orçamento</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default devApp;
