import "./prePortadaStyle.css";
import "../login/loginStyle.css";
import BgVideo from '../../medio/fondo-nubes.mp4';
import logoIcon from "../../medio/logo.png";
import { Video } from "../login/Video";
import { Link } from "react-router-dom";

export const PrePortada = () => {
    return (
        <div className="portrait-container">
            <Video sourceVideo={BgVideo} />
            <header className="logo">
                {/*<h1>TURISTEO</h1>*/}
                <img src={logoIcon}/>
            </header>
            <div className="portrait-title">
            <h2>
                Descubre las diferentes 
                <br/>
                maravillas del mundo
            </h2>
            </div>
            <div className="buttons-section">
                <button><Link className="login-link" to="/login">Iniciar sesión</Link></button>
                <button className="register-btn"><Link className="login-link" to="/registro">Registro</Link></button>
            </div>
        </div>
    );
};





