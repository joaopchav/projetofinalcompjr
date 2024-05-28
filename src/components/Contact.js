import React, { useState } from 'react';
import compcat from "../assets/compcat.png";
import { validateForm } from '../services/validacao';

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData, language);
    if (Object.keys(errors).length === 0) {
      alert(language === 'pt' ? 'Formulário enviado com sucesso!' : 'Form submitted successfully!');
      setFormErrors({});
    } else {
      alert(language === 'pt' ? 'Erro ao enviar o formulário. Verifique os campos.' : 'Error submitting form. Please check the fields.');
      setFormErrors(errors);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="form-column">
            <h2>{language === 'pt' ? 'Entre em contato' : 'Contact Us'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder={language === 'pt' ? 'Nome*' : 'Name*'}
                  value={formData.name}
                  onChange={handleChange}
                />
                {formErrors.name && <span className="error">{formErrors.name}</span>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder={language === 'pt' ? 'Email*' : 'Email*'}
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && <span className="error">{formErrors.email}</span>}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder={language === 'pt' ? 'Telefone*' : 'Phone*'}
                  value={formData.phone}
                  onChange={handleChange}
                />
                {formErrors.phone && <span className="error">{formErrors.phone}</span>}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder={language === 'pt' ? 'Assunto*' : 'Subject*'}
                  value={formData.subject}
                  onChange={handleChange}
                />
                {formErrors.subject && <span className="error">{formErrors.subject}</span>}
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder={language === 'pt' ? 'Mensagem*' : 'Message*'}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {formErrors.message && <span className="error">{formErrors.message}</span>}
              </div>
              <button type="submit" className="send-button">{language === 'pt' ? 'Enviar' : 'Send'}</button>
            </form>
            {formStatus && <p className="form-status">{formStatus}</p>}
          </div>
          <div className="image-column">
            <img src={compcat} alt={language === 'pt' ? 'Localização' : 'Location'} className="contact-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
