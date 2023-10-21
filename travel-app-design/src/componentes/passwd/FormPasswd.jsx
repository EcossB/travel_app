import "../login/loginStyle.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePasswd } from "../../hooks/usePasswd";

export const FormPasswd = () => {
  //Hook personalizado para implementar funcionalidad de mostrar y ocultar contraseña
  const [showPasswd1, togglePassword1, showPasswd2, togglePassword2] = usePasswd(false);

  const formValidate = (values) => {
    const error = {}
    const passwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    if (!values.newPasswd){
      error.newPasswd = "Contraseña es requerida";
    } else if (!passwdRegex.test(values.newPasswd)) {
      error.newPasswd = "8+ caracteres, letras y números";
    } else if (values.confirmPasswd !== values.newPasswd){
      error.confirmPasswd = "Contraseñas no coinciden";
    }

    if (!values.confirmPasswd){
      error.confirmPasswd = "Debe confirmar la contraseña";
    }

    return error;
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{newPasswd: '', confirmPasswd: ''}}
      validate={formValidate}
      onSubmit={handleSubmit}
    >
      <Form className="form-section">
      {/*Inputs con sus íconos de ver/no ver contraseña*/}
      <div className="password-input passwd-bottom">
        <Field 
          type = {showPasswd1 ? 'text' : 'password'}
          name = "newPasswd"
          placeholder = "Contraseña nueva"
        />
        <ErrorMessage name="newPasswd" component="div" className="error-message"/>
        <div className="passwd-icon eye-icon" onClick={togglePassword1}>
            {showPasswd1 ? <FaEye className="openEye-icon"/> : <FaEyeSlash className="closeEye-icon"/>}
        </div>
      </div>
      
      <div className="password-input">
        <Field 
            type = {showPasswd2 ? 'text' : 'password'}
            name = "confirmPasswd"
            placeholder = "Confirmar contraseña"
        />
        <ErrorMessage name="confirmPasswd" component="div" className="error-message"/>
        <div className="passwd-icon eye-icon" onClick={togglePassword2}>
            {showPasswd2 ? <FaEye className="openEye-icon"/> : <FaEyeSlash className="closeEye-icon"/>}
        </div>
      </div>
      
      {/*Botón para actualizar contraseña*/}
      <button type = "submit">Actualizar</button>
      </Form>
    </Formik>
  );
}