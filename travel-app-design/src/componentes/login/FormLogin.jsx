import "./loginStyle.css";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { usePasswd } from "../../hooks/usePasswd";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const FormLogin = () => {
  const [showPasswd1, togglePassword1] = usePasswd(false);

  //Ver los valores en consola
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm(); //Limpiar los inputs una vez envíada la información
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

    if (!values.password){
      error.password = "Contraseña es requerida"
    } else if (!passwdRegex.test(values.password)){
      error.password = "8+ caracteres, letras y números";
    }

    return error;
  };

  return (
    //Uso de la librería Formik para facilitar la validación de los formularios
    <Formik 
      initialValues={{email: '', password: ''}}
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
                name="password"
                className="passwd-field"
                placeholder="Contraseña"
                required
            />
            <ErrorMessage name="password" component="div" className="error-message"/>

            <div className="passwd-icon" onClick={togglePassword1}>
                {showPasswd1 ? <FaEye className="openEye-icon" /> : <FaEyeSlash className="closeEye-icon"/>}
            </div>
            <div className="passwd-linkk">
                <p className="passwd-p"><Link className="link" to="/recuperar-contraseña">¿Olvidaste tu contraseña?</Link></p>
            </div>
            </div>
        </div>

        <div className="form-section">
          <Link to="/home"><button type="submit">Iniciar sesión</button></Link>
          <p className="register-message">¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link></p>
        </div>
    </Form>
    </Formik>
  );
};
