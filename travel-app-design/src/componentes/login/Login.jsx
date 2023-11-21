
import { FormLogin } from "./FormLogin";
import { Video } from "../background/Video";
import loginVideo from "../../medio/bg-login2.mp4";
import "./loginStyle.css";
import PropTypes from 'prop-types';
import { Logo } from "../logo/Logo";

export const Login = ({ setLoggedInUser }) => {
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
          <FormLogin setLoggedInUser={setLoggedInUser}/>
    </div>
  );
}

Login.propTypes = {
  setLoggedInUser: PropTypes.any,
};