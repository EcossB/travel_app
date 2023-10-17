import "./loginStyle.css";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { usePasswd } from "../../hooks/usePasswd";

export const FormLogin = () => {
  const [showPasswd1, togglePassword1] = usePasswd(false);

  return (
    <>
    <form >
      <div className="form-section">
        <input 
            type="text" 
            name="name"
            placeholder="Nombre"
        />
          
      <div className="password-input">
            <input
              type={showPasswd1 ? 'text' : 'password'}
              placeholder="Contraseña"
            />
            <div className="passwd-icon" onClick={togglePassword1}>
              {showPasswd1 ? <FaEye /> : <FaEyeSlash />}
            </div>
            <div className="passwd-linkk">
              <p className="passwd-p"><Link className="link" to="/recuperar-contraseña">¿Olvidaste tu contraseña?</Link></p>
            </div>
          </div>
      </div>

      <div className="form-section">
        <Link to="/home"><button>Iniciar sesión</button></Link>
        <p className="register-message">¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link></p>
      </div>
    </form>
    </>
  );
}
