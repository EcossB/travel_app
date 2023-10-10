import "./404Style.css";
//import "../login/loginStyle.css";
import "../prePortada/PrePortadaStyle.css";
import { Video } from "../login/Video";
import img404 from "../../medio/error404-bg2.png";
import Bg404 from "../../medio/bg404.mp4";
import logoIcon from "../../medio/logo-icon.png";
import mobileIcon from "../../medio/error404-mobileIcon.png";

export const Error404 = () => {
    return (
      <div className="error-container">
        <Video sourceVideo={Bg404}/>
        <header className="logo">
          <img src={logoIcon}/>
        </header>
        <div className="title">
             <img className="error-icon" src={img404}/>
             
        </div>  
        <div className="return-button" onClick={() => window.history.back()}>
          <button>Retornar</button>
        </div>  
        <img className="mobile-icon" src={mobileIcon}/> 
      </div>
    );
  }
  