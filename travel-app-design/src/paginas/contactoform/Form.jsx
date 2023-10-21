import React, { useState } from 'react';
import '../SecondDiv/FormStyles.css';
import FormImg from '../images/formimg.png';

export const Form = () => {
  const initialFormData = {
    nombre: '',
    email: '',
    consulta: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleEnviarMensaje = (e) => {
    e.preventDefault();

    const informacionAcumulada = {
      nombre: formData.nombre,
      email: formData.email,
      consulta: formData.consulta,
    };
    console.log(informacionAcumulada);

    setMensajeEnviado(true);

    // acá se reestablece la información de los campos al enviarse la info. 
    setFormData(initialFormData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleEnviarMensaje(e);
    }
  };

  return (
    <div className="container">
      <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&display=swap" rel="stylesheet"></link>
      <div className="left-side">
        <form onSubmit={handleEnviarMensaje}>
          <div className="input-container">
            <input
              type="text"
              id="name"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
              className="custom-input"
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="custom-input"
            />
          </div>
          <div className="input-container-consulta">
            <textarea
              id="message"
              name="consulta"
              placeholder="Escriba aquí su consulta"
              value={formData.consulta}
              onChange={handleInputChange}
              required
              className="custom-textarea"
              onKeyDown={handleKeyDown}
            />
          </div>
          <button type="submit" className="custom-button">
            Enviar
          </button>
          <p className="default-thanks-text">
            ¡Gracias ${} por su mensaje! En breve nos pondremos en contacto con usted.
          </p>
        </form>
      </div>
      <div className="right-side">
        <img src={FormImg} alt="Imagen de Contacto" className="custom-image" />
      </div>
    </div>
  );
};

export default Form;
