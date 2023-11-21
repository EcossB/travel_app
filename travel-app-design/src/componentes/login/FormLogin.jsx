import "./loginStyle.css";
import swal from "sweetalert";
import { Link, useNavigate  } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { usePasswd } from "../../hooks/usePasswd";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const FormLogin = () => {
  const [showPasswd1, togglePassword1] = usePasswd(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch('https://springgcp-405619.ue.r.appspot.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // No incluir 'Access-Control-Allow-Origin' aquí, es una cabecera de respuesta y no debe ser establecida en la solicitud
        },
        body: JSON.stringify({
          email: values.email,
          clave: values.clave,
        }),
      });
  
      if (response.status === 200) {
        resetForm();
        navigate('/home');
        const data = await response.json()
        console.log(data)

      } else if (response.status === 403){
        resetForm()
        swal('Error', 'Contraseña o email incorrectos', 'error');
      }

      else {
        const data = await response.json();
        console.log('error', data)
      }

      

    } catch (error) {
      console.error('Error en la solicitud de registro:', error);
    }
  };

  

  //Validar los datos del formulario
  const formValidate = (values) => {
    const error = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    if (!values.email){
      error.email = "Email es requerido";
    } else if (!emailRegex.test(values.email)){
      error.email = "Correo inválido";
    }

    if (!values.clave){
      error.clave = "Contraseña es requerida"
    } else if (!passwdRegex.test(values.clave)){
      error.clave = "8+ caracteres, letras y números";
    }

    return error;
  };

  return (
    //Uso de la librería Formik para facilitar la validación de los formularios
    <Formik 
      initialValues={{email: '', clave: ''}}
      validate={formValidate}
      onSubmit={handleSubmit}
    >
    <Form>
      <div className="form-section">
        <div className="password-input">
          <Field 
              type="email" 
              name="email"
              placeholder="Email"
              required
          />
          <ErrorMessage name="email" component="div" className="error-message"/>
        </div>

        <div className="password-input">
            <Field
                type={showPasswd1 ? 'text' : 'password'}
                name="clave"
                className="passwd-field"
                placeholder="Contraseña"
                required
            />
            <ErrorMessage name="password" component="div" className="error-message"/>

            <div className="passwd-icon" onClick={togglePassword1}>
                {showPasswd1 ? <FaEye className="openEye-icon" /> : <FaEyeSlash className="closeEye-icon"/>}
            </div>
            </div>
        </div>

        <div className="form-section">
          <button type="submit">Iniciar sesión</button>
          <p className="register-message">¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link></p>
        </div>
    </Form>
    </Formik>
  );
};
