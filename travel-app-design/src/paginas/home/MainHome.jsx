import { Carousel } from "./Carousel";
import { DescvDiv } from "./DescvDiv";
import { Menu } from "./Menu";
import Portrait from "./Portrait";
import "./homeStyle.css";
import PropTypes from 'prop-types';
import { useEffect } from "react";

export const MainHome = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle;
    return () => {
      document.title = 'Turisteo';
    };
  }, [pageTitle]);

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


MainHome.propTypes = {
  pageTitle: PropTypes.any,
};

