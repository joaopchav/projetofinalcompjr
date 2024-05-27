import React from 'react';
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/face.png';
import linkedinIcon from '../assets/linkedin.png';
import twitterIcon from '../assets/twitter.png';
import compIcon from '../assets/comp.png';
import comp1Icon from '../assets/comp1.png'; // Nova imagem do ícone para o light theme

const Footer = ({ language, isDarkTheme }) => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="contact-img">
          <p>
            <img
              src={isDarkTheme ? compIcon : comp1Icon}
              alt="Comp Icon"
              style={{ width: '40px', height: '40px' }} // Fixa o tamanho do ícone
            />
          </p>
        </div>
        <div className="contact-info">
            <p>{language === 'pt' ? 'UFLA - Departamento de Ciência da Computação' : 'UFLA - Department of Computer Science'}<br />
                {language === 'pt' ? '1º Andar, Sala 14 37200-000' : '1st Floor, Room 14 37200-000'}
            </p>
        </div>
        <div className="contact-info">
          <p>
            contato@compjunior.com.br
            <br />
            (35) 3829-5188
          </p>
        </div>
        <div className="social-media">
          <a
            href="https://www.instagram.com/compjunior/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/compjunior/"
            className="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a
            href="https://www.linkedin.com/company/compjunior/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://twitter.com/compjunior/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
