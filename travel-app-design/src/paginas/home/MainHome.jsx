import { Carousel } from "./Carousel";
import { DescvDiv } from "./DescvDiv";
//import { MapDiv } from "./MapDiv";
import { Menu } from "./Menu";
//import { Video } from "../background/Video";
//import videoPasswd from "../../medio/bg-login2.mp4";
import Portrait from "./Portrait";
//import { Carousel } from "./Carousel"; // Solo importa Carousel una vez
import "./homeStyle.css";

export const MainHome = () => {
  return (
    <div>
      <Menu />
      <Portrait
        bannerClass="portrait-container2"
        title="Encuentra la mejor opción para tu viaje"
        className="content"
      />
      <div className="d">
        <div className="homeinfo-container">
          <DescvDiv />
        </div>
        <div className="carouse-container">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
