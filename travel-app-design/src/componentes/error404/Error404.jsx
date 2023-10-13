import "./404Style.css";
import "../prePortada/PrePortadaStyle.css";
import { Video } from "../background/Video";
import img404 from "../../medio/error404-bg2.png";
import Bg404 from "../../medio/bg404.mp4";
import mobileIcon from "../../medio/error404-mobileIcon.png";
import { Logo } from "../logo/Logo";

export const Error404 = () => {
    return (
      <div className="error-container">
        <Video sourceVideo={Bg404}/>
        <Logo/>
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
  