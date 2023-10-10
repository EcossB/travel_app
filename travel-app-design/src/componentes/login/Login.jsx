
import { FormLogin } from "./FormLogin";
import { Video } from "./Video";
import loginVideo from "../../medio/bg-login2.mp4";
import logoIcon from "../../medio/logo.png";
import "./loginStyle.css";

export const Login = () => {
  return (
    <div className="login-container">
      <Video sourceVideo={loginVideo}/>
        <header className="logo">
          <img src={logoIcon}/>
        </header>

        <div className="title">
            <h2>
            ¡Gracias por volver!
            <br/>
            ¿Listo para otra aventura?
            </h2>
        </div>

        {/*Formulario*/}
          <FormLogin/>
    </div>
  );
}