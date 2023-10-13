import "./videoStyle.css";
import PropTypes from 'prop-types';

//import bgVideo from "../../medio/bg-login2.mp4"
export const Video = ({sourceVideo}) => {
  return (
    <div className="video-background">
    <video autoPlay loop muted>
      <source src = {sourceVideo} type="video/mp4" />
      Tu navegador no soporta la reproducción de videos.
    </video>
  </div>
  );
}

Video.propTypes = {
  sourceVideo: PropTypes.any.isRequired
};
