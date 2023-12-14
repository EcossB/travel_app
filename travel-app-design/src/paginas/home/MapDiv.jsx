import map from "../../medio/map.png";
import "./homeStyle.css";

export const MapDiv = () => {
  return (
    <div className="map-container">
        <img src={map} alt="map" />
        <div className="mapinfo">
            <h3>Choose your favorite day to explore</h3>
            <p>ffrgrgrghthyyjyjyyjyjyjyj
                yjyjyjyjyjyjyjyjyjyyjy
                jjjjjjjjjjjjjjjjjj
                yyyyyyyyyyyyyy
            </p>
        </div>
    </div>
  )
}
