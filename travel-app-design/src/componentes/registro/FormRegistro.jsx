import "./registroStyle.css"
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { usePasswd } from "../../hooks/usePasswd";

export const FormRegistro = () => {
  const [showPasswd1, togglePassword1, showPasswd2, togglePassword2] = usePasswd(false);
  return (
    <form className="form-section register-inputs">
        <input 
            type="text" 
            placeholder="Nombre"
        />
        <input 
            type="text" 
            placeholder="Apellido"
        />
        <input 
            type="email" 
            placeholder="Email"
        />
        {/*Inputs con sus íconos de ver/no ver contraseña*/}
        <div className="password-input passwd1">
            <input 
                type={showPasswd1 ? 'text' : 'password'}
                placeholder="Contraseña nueva"
            />
            <div className="passwd-icon eye-icon" onClick={togglePassword1}>
                {showPasswd1 ? <FaEye /> : <FaEyeSlash />}
            </div>
        </div>
        <div className="password-input">
            <input type={showPasswd2 ? 'text' : 'password'}
                placeholder="Confirmar contraseña"
            />
            <div className="passwd-icon eye-icon" onClick={togglePassword2}>
                {showPasswd2 ? <FaEye /> : <FaEyeSlash />}
            </div>
        </div>
        <button>Guardar</button>
        <p className="register-message">¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
    </form>
  );
}
