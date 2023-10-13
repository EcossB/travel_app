import { Video } from "../background/Video";
import videoPasswd from "../../medio/bg-login2.mp4";
import { FormPasswd } from "./FormPasswd";
import "./passwdStyle.css";
import "../login/loginStyle.css";
import { Logo } from "../logo/Logo";

export const Passwd = () => {
  return (
    <div className="passwd-container">
      <Video sourceVideo={videoPasswd}/>
        <Logo/>
        <div className="title">
            <h2>
            No te preocupes, 
            <br/>
            actualiza tu contraseña <span className="title-passwd">AQUÍ</span>
            </h2>
        </div>

        {/*Formulario*/}
        <FormPasswd/>
    </div>
  );
}