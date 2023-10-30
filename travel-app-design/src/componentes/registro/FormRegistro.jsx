import "./registroStyle.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePasswd } from "../../hooks/usePasswd";

export const FormRegistro = () => {
  const [showPasswd1, togglePassword1, showPasswd2, togglePassword2] = usePasswd(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    swal({
        title: "Gracias por registrarse",
        text: "Usuario creado con éxito",
        icon: "success",
        button: "Aceptar"
    });
  }

  const formValidate = (values) => {
    const error = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)?( [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)?$/;
    const lastnameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)?( [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)?$/;

    if (!values.name){
      error.name = "Nombre es requerido";
    } else if (!nameRegex.test(values.name)){
        error.name = "Nombre inválido"
    }

    if (!values.lastname){
        error.lastname = "Apellido es requerido";
      } else if (!lastnameRegex.test(values.lastname)){
        error.lastname = "Apellido inválido"
    }

    if (!values.email){
        error.email = "Email es requerido";
    } else if (!emailRegex.test(values.email)){
        error.email = "Correo inválido";
    }
  
    if (!values.passwd){
        error.passwd = "Contraseña es requerida"
    } else if (!passwdRegex.test(values.passwd)){
        error.passwd = "8+ caracteres, letras y números";
    } else if (values.confirmPasswd !== values.passwd) {
        error.confirmPasswd = "Contraseñas no coinciden";
    }    

    if (!values.confirmPasswd){
        error.confirmPasswd = "Debe confirmar la contraseña";
    } 

    return error;
  };

  
  return (
    <Formik
        initialValues={{
            name: '',
            lastname: '',
            email:'',
            passwd:'',
            confirmPasswd:''
        }}
        validate={formValidate}
        onSubmit={handleSubmit}
    >
    <Form className="form-section register-inputs">
        <div className="password-input">
            <Field 
                type = "text" 
                name = "name"
                placeholder = "Nombre"
                required
            />
            <ErrorMessage name = "name" component = "div" className = "error-message"/>
        </div>

        <div className="password-input">
            <Field 
                type = "text" 
                name = "lastname"
                placeholder = "Apellido"
            />
            <ErrorMessage name = "lastname" component = "div" className = "error-message"/>
        </div>
        <div className = "password-input">
            <Field 
                type = "email"
                name = "email"
                placeholder = "Email"
            />
            <ErrorMessage name = "email" component = "div" className = "error-message"/>
        </div>
        {/*Inputs con sus íconos de ver/no ver contraseña*/}
        <div className="password-input">
            <Field 
                type = {showPasswd1 ? 'text' : 'password'}
                name = "passwd"
                placeholder = "Contraseña"
            />
            <ErrorMessage name = "passwd" component = "div" className = "error-message"/>
            <div className = "passwd-icon eye-icon" onClick={togglePassword1}>
                {showPasswd1 ? <FaEye className="openEye-icon" /> : <FaEyeSlash className="closeEye-icon"/>}
            </div>
        </div>
        <div className = "password-input">
            <Field type = {showPasswd2 ? 'text' : 'password'}
                name = "confirmPasswd"
                placeholder = "Confirmar contraseña"
            />
            <ErrorMessage name = "confirmPasswd" component = "div" className = "error-message"/>
            <div className="passwd-icon eye-icon" onClick={togglePassword2}>
                {showPasswd2 ? <FaEye className = "openEye-icon"/> : <FaEyeSlash className = "closeEye-icon"/>}
            </div>
        </div>
        <button type="submit">Guardar</button>
        <p className="register-message">¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
    </Form>
    </Formik>
  );
}
