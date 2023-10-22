import "./homeStyle.css";
import { FaGlobeAmericas } from "react-icons/fa";
//import bgVideo from "../../medio/bg-login2.mp4";
import { Link } from "react-router-dom";
//import { VidBanner } from "./VidBanner";

export const TravelTitle = () => {
  return(
    <div className="travelTitle-container">
      <p>
        <FaGlobeAmericas className="globe-icon"/>
        Descubre más
      </p>
    </div>
  );
}

const Portrait = () => {
  return (
    <>
    <div className="portrait-container2">
        <div className="content">
          <h1>Encuentra la mejor opción para tu viaje</h1>
          <Link to="/trips">
            <button>
              <TravelTitle />
            </button>
          </Link>
        </div>
    </div>
    </>
  );
};

export default Portrait;


