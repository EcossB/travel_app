/*import italyFlag from '../../../../medio/italyflag.webp';
import mexicoFlag from '../../../../medio/mexicoFlag.jpg';
import rdFlag from '../../../../medio/rdflag.webp';
import londonFlag from '../../../../medio/londonflag.jpg';*/
import PropTypes from 'prop-types';
import './flagsStyle.css';
import { useState, useEffect } from 'react';

export const Flags = ({ onClick }) => {
  const [banderas, setBanderas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://springgcp-405619.ue.r.appspot.com/paises");
        const data = await response.json();

        // Extraer enlaces de banderas
        const banderasEnlaces = data.content.map((pais) => pais.bandera);
        
        // Actualizar el estado con los enlaces de banderas
        setBanderas(banderasEnlaces);
        console.log(banderasEnlaces)

      } catch (error) {
        console.error("Error al obtener datos de países:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className='flags__container'>
      {banderas.map((bandera, index) => (
          <img className='flagImg' key={index} src={bandera} alt={`Bandera ${index + 1}`} onClick={onClick}/>
        ))}
    </div>
  );
}

Flags.propTypes = {
  onClick: PropTypes.any,
};
