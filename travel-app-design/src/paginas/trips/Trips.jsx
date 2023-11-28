//import Portrait from "../home/Portrait";
import { CustomCard } from "./Countries-info/Hotel/CustomCard";
import { InfoP } from "./Countries-info/Infos/InfoP";
import { TitleP } from "./Countries-info/Infos/TitleP";
import { DescubreMas } from "./DescubreMas/DescubreMas";
import { Cities } from "./Destino/Cities";
import { FoodComponent } from "./FoodComp/FoodComponent";
import PropTypes from 'prop-types';
import "./tripsStyle.css";
import { CountryPortrait } from "./Countries-info/Banner/CountryPortrait";

export const Trips = ({ countryDetails }) => {
  if (!countryDetails || !countryDetails.lugaresFamosos || !countryDetails.gastronomia ) {
    return <div>No hay detalles del país</div>;
  }

  const {
    nombre,
    descripcion,
    gastronomia,
    lugaresFamosos,
    imagen1,
    imagen2,
    vuelos
  } = countryDetails;

  const linkURL = vuelos && vuelos.length ? vuelos[0].link_vuelos : "";

  const famousPlaces = lugaresFamosos && Array.isArray(lugaresFamosos)
  ? lugaresFamosos.map((place, index) => ({
      nombre: place.nombre,
      descripcion: place.descripcion,
      imagen: place.imagen,
    }))
  : [];


  const citiesInfo = famousPlaces && famousPlaces.map((city, index) => ({
    name: city.nombre,
    info: city.descripcion,
    images: [city.imagen],
  }));
  

  const foods = gastronomia?.map((food, index) => ({
    name: food.nombre_plato,
    image: food.imagen,
  })) || [];  


  const portraitsStyle = {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.53) 0%, rgba(0, 0, 0, 0.53) 100%), lightgray 50% / cover no-repeat, url(${imagen1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '15vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '25px',
    color: '#fff',
    padding: '50px',
    backdropFilter: 'blur(10px)', // Aplica el desenfoque solo al fondo
  };
  
  
  return (
    <div className="infoo">
      <CountryPortrait
        bannerClass="portrait-container2 CountryBannerBg"
        imageBanner={imagen1}
        title={nombre}
      />

      <InfoP information={descripcion} />

      <div className="trips__container">
        <TitleP title="Platillos típicos" />
        <FoodComponent
        food1={gastronomia[0].nombre_plato}
        food2={gastronomia[1].nombre_plato}
        food3={gastronomia[2].nombre_plato}
        food4={gastronomia[3].nombre_plato}
        food1Img={gastronomia[0].imagen}
        food2Img={gastronomia[1].imagen}
        food3Img={gastronomia[2].imagen}
        food4Img={gastronomia[3].imagen}
      />

        <CustomCard destinyURL={imagen2} className="customCard__container" />
        <DescubreMas ImgURL={imagen2}  className2="descubreMas__container" linkURL={linkURL}/>

        <div className="cities">
          <TitleP title="¡Destinos imperdibles!" className='titlePHotel'/>
          <Cities lugaresFamosos={lugaresFamosos} />
        </div>
      </div>
    </div>
  );
};

Trips.propTypes = {
  countryDetails: PropTypes.shape({
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    gastronomia: PropTypes.arrayOf(
      PropTypes.shape({
        nombre_plato: PropTypes.string,
        imagen: PropTypes.string,
      })
    ),
    
    lugaresFamosos: PropTypes.arrayOf(
      PropTypes.shape({
        nombre: PropTypes.string,
        descripcion: PropTypes.string,
        imagen: PropTypes.string,
      })
    ),

    imagen1: PropTypes.string,
    imagen2: PropTypes.string,
    vuelos: PropTypes.any,
    
  }),
};
