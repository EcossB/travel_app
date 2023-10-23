import './FormStyles.css';
import "../../componentes/login/loginStyle.css";
import contactImg from "../../medio/formimg.png";
import { Formik, Form, Field } from "formik";
import { FaCheck } from "react-icons/fa";
import { useState } from 'react';

export const ContactForm = () => {
  const [message, setMessage] = useState(false);
  const handleClick = (values, { resetForm }) => {
    console.log(values);
    setMessage(true);
    resetForm();

    setTimeout(() => {
        setMessage(false)
    },1000);

    return values;
  }

  return (
    <Formik
        initialValues={{username: '', usermail: '', comment: ''}}
        onSubmit={handleClick}
    >
    {({values}) => 
    
    <Form className='contactForm'>
        <div className="contactform-container">
        <p className={message ?  'contactMessage' : 'invisible'}> 
            <FaCheck className='checkIcon-contact'/>
            Gracias por su mensaje. Pronto nos contactaremos.
        </p>
            <Field 
                type="text" 
                name="username"
                placeholder="Nombre"
                required
            />
            <Field 
                type="email"
                name="usermail"
                placeholder="Email"
                required
            />
            <Field
                as="textarea" 
                name="comment"
                placeholder="Escriba aquí su consulta" 
                rows="4" cols="50"   
                required
            />
            <button type="submit" className="logout-btn">Enviar</button>
        </div>
        <div className="contactform-img">
            <img src={contactImg} alt="form image" />
        </div>
    </Form>
    
    }
    </Formik>
  )
}
