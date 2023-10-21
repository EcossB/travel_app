import React from 'react';
import ImgDivStyles from '../ImageDiv/ImgDivStyles.css';
import Canoa from '../images/Canoa.png';

export const ImgDiv = () => {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&family=Roboto&display=swap" rel="stylesheet"></link>
      <div className="ImageCanoa">
        
        <img className="Canoa" src={Canoa} alt="Imagen de fondo con canoa" />
        <div className="centered-text">¡Contáctanos!</div>
      </div>
    </div>
  );
}

export default ImgDiv;
