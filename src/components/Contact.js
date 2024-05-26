import React from 'react';
import compcat from "../assets/compcat.png"

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="form-column">
            <h2>Entre em contato</h2>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" id="name" placeholder="Nome*" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="email" placeholder="Email*" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="subject" placeholder="Assunto*" />
              </div>
              <div className="form-group">
                <textarea className="form-control" id="message" rows="3" placeholder="Mensagem*"></textarea>
              </div>
              <button type="submit" className="send-button">Enviar</button>
            </form>
          </div>
          <div className="image-column">
            <img src={compcat} alt="Localização" className="contact-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
