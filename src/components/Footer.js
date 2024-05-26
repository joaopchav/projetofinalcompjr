import React from 'react';
import instagramIcon from '../assets/insta.png';
import facebookIcon from '../assets/facebook.png';
import linkedinIcon from '../assets/linkedin.png';
import twitterIcon from '../assets/twitter.png';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="contact-info">
          <p>Email: compjunior@gmail.com<br />Telefone: (35) 99999-9999</p>
        </div>
        <div className="social-media">
          <a href="https://www.instagram.com/compjuniorufla/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/compjuniorufla/" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/company/compjunior/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/compjuniorufla/" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
