// validation.js
export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  export const validatePhone = (phone) => {
    const re = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
    return re.test(String(phone));
  };
  
  export const validateForm = (formData) => {
    const errors = {};
    if (!formData.name) errors.name = "Nome é obrigatório.";
    if (!formData.email) {
      errors.email = "Email é obrigatório.";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Email inválido.";
    }
    if (!formData.subject) errors.subject = "Assunto é obrigatório.";
    if (!formData.message) errors.message = "Mensagem é obrigatória.";
    if (!formData.phone) {
      errors.phone = "Telefone é obrigatório.";
    } else if (!validatePhone(formData.phone)) {
      errors.phone = "Telefone inválido.";
    }
    return errors;
  };
  