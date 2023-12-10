import "./404Style.css";
import "../prePortada/PrePortadaStyle.css";
import { Video } from "../background/Video";
import img404 from "../../medio/error404-bg.png";
import Bg404 from "../../medio/404Bbglandscape.mp4";
import mobileIcon from "../../medio/error404-mobileIcon.png";
import { Logo } from "../logo/Logo";
import { useEffect } from "react";
import PropTypes from 'prop-types';

export const Error404 = ({ pageTitle }) => {
    useEffect(() => {
      document.title = pageTitle;
      return () => {
        document.title = 'Turisteo';
      };
    }, [pageTitle]);

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

Error404.propTypes = {
    pageTitle: PropTypes.any,
};

  