import React from 'react';
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/face.png';
import linkedinIcon from '../assets/linkedin.png';
import twitterIcon from '../assets/twitter.png';
import compIcon from '../assets/comp.png';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
      <div className="contact-info">
          <p><img src={compIcon}></img></p>
        </div>
      <div className="contact-info">
          <p>UFLA - Departamento de Ciência da Computação <br />1º Andar, Sala 14
37200-000</p>
        </div>
        <div className="contact-info">
          <p>contato@compjunior.com.br<br />(35) 3829-5188</p>
        </div>
        <div className="social-media">
          <a href="https://www.instagram.com/compjunior/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/compjunior/" className= "facebook" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/company/compjunior/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/compjunior/" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
