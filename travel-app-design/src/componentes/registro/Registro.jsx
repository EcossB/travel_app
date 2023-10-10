import "../login/loginStyle.css";
import { FormRegistro } from "./FormRegistro";
import { Video } from "../login/Video";
import videoRegistro from "../../medio/bg-registro.mp4";
import logoIcon from "../../medio/logo-icon.png";

export const Registro = () => {
  return (
    <div className="registro-container">
      <Video sourceVideo={videoRegistro}/>

      <header className="logo">
          {/*<h1>TURISTEO</h1>*/}
          <img src={logoIcon}/>
        </header>

        <div className="title">
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
