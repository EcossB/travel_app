import "../login/loginStyle.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { usePasswd } from "../../hooks/usePasswd";

export const FormPasswd = () => {
  //Hook personalizado para implementar funcionalidad de mostrar y ocultar contraseña
  const [showPasswd1, togglePassword1, showPasswd2, togglePassword2] = usePasswd(false);
  return (
    <form className="form-section">
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
    
    {/*Botón para actualizar contraseña*/}
    <button>Actualizar</button>
    </form>
  );
}