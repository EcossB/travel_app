import "./homeStyle.css";
import PropTypes from 'prop-types';
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

const Portrait = ({title, className, bannerClass}) => {
  return (
    <>
    <div className={bannerClass}>
        <div className={className}>
            <h1 className="animate__animated animate__fadeInLeft">{title}</h1>
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

Portrait.propTypes = {
  title: PropTypes.any.isRequired,
  className: PropTypes.any.isRequired,
  bannerClass: PropTypes.any.isRequired,
};

export default Portrait;


