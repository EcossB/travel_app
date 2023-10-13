
import { FormLogin } from "./FormLogin";
import { Video } from "../background/Video";
import loginVideo from "../../medio/bg-login2.mp4";
import "./loginStyle.css";
import { Logo } from "../logo/Logo";

export const Login = () => {
  return (
    <div className="login-container">
      <Video sourceVideo={loginVideo}/>
        <Logo/>
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