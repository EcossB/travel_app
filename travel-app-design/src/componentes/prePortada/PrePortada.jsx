import "./prePortadaStyle.css";
import "../login/loginStyle.css";
import BgVideo from '../../medio/fondo-nubes.mp4';
import { Video } from "../background/Video";
import { Link } from "react-router-dom";
import { Logo } from "../logo/Logo";

export const PrePortada = () => {
    return (
        <div className="portrait-container">
            <Video sourceVideo={BgVideo} />
            <Logo/>
            <div className="portrait-title">
                <h2>
                    Descubre las diferentes 
                    <br/>
                    maravillas del mundo
                </h2>
            </div>
            <div className="buttons-section">
                <Link className="login-link" to="/login"><button>Iniciar sesión</button></Link>
                <Link className="login-link" to="/registro"><button className="register-btn">Registro</button></Link>
            </div>
        </div>
    );
};





