
import { FormLogin } from "./FormLogin";
import { Video } from "../background/Video";
import loginVideo from "../../medio/bg-login2.mp4";
import "./loginStyle.css";
import PropTypes from 'prop-types';
import { Logo } from "../logo/Logo";
import { AuthProvider } from "../../hooks/authContext";
import { useEffect } from "react";

export const Login = ({ setLoggedInUser, pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle;
    return () => {
      document.title = 'Turisteo';
    };
  }, [pageTitle])

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
        <AuthProvider>
          <FormLogin setLoggedInUser={setLoggedInUser}/>
        </AuthProvider>
          
    </div>
  );
}

Login.propTypes = {
  setLoggedInUser: PropTypes.any,
  pageTitle: PropTypes.any,
};