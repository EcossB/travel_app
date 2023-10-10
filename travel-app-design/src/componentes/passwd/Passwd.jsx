import { Video } from "../login/Video";
import videoPasswd from "../../medio/bg-login2.mp4";
import { FormPasswd } from "./FormPasswd";
import logoIcon from "../../medio/logo-icon.png";
import "./passwdStyle.css";
import "../login/loginStyle.css";

export const Passwd = () => {
  return (
    <div className="passwd-container">
      <Video sourceVideo={videoPasswd}/>

        <header className="logo">
          <img src={logoIcon}/>
        </header>

        <div className="title">
            <h2>
            ¡No te preocupes, 
            <br/>
            actualiza tu contraseña <span className="title-passwd">AQUÍ</span>
            </h2>
        </div>

        {/*Formulario*/}
        <FormPasswd/>
    </div>
  );
}