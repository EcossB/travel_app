import "../login/loginStyle.css";
import { FormRegistro } from "./FormRegistro";
import { Video } from "../background/Video";
import videoRegistro from "../../medio/bg-registro.mp4";
import { Logo } from "../logo/Logo";

export const Registro = () => {
  return (
    <div className="registro-container">
      <Video sourceVideo={videoRegistro}/>
      <Logo/>
        <div className="title register-title">
            <h2>
            ¿Listo para empezar la aventura?
                <br/>
            ¡Regístrate!
            </h2>
        </div>
        {/*Formulario*/}
        <FormRegistro />
    </div>
  );
}
