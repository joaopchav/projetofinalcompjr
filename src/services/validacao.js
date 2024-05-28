// services/validacao.js

export const validateForm = (formData, language) => {
  const errors = {};
  
  if (!formData.name) {
    errors.name = language === 'pt' ? 'Nome é obrigatório' : 'Name is required';
  }
  if (!formData.email) {
    errors.email = language === 'pt' ? 'Email é obrigatório' : 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = language === 'pt' ? 'Email inválido' : 'Invalid email';
  }
  if (!formData.phone) {
    errors.phone = language === 'pt' ? 'Telefone é obrigatório' : 'Phone is required';
  }
  if (!formData.subject) {
    errors.subject = language === 'pt' ? 'Assunto é obrigatório' : 'Subject is required';
  }
  if (!formData.message) {
    errors.message = language === 'pt' ? 'Mensagem é obrigatória' : 'Message is required';
  }
  
  return errors;
};
