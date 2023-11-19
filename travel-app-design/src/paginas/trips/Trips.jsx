import Portrait from "../home/Portrait";
import { CustomCard } from "./Countries-info/Hotel/CustomCard";
import { HotelCarousel } from "./Countries-info/Hotel/HotelCarousel";
import { InfoP } from "./Countries-info/Infos/InfoP";
import { TitleP } from "./Countries-info/Infos/TitleP";
import { DescubreMas } from "./DescubreMas/DescubreMas";
import { Cities } from "./Destino/Cities";
import { FoodComponent } from "./FoodComp/FoodComponent";
import city1 from "../../medio/bahia.jpg";
import city2 from "../../medio/cacaoSendero.png";
import city3 from "../../medio/Canoa.png";
import city4 from "../../medio/Colon.webp";
import city5 from "../../medio/ItalyImg.jpg";

import "./tripsStyle.css";

//Aquí se mostrarán las informaciones del país.
export const Trips = () => {
  return (
    <div>
        {/*Banner y breve información del país*/}
        <Portrait 
            bannerClass="portrait-container2 CountryBannerBg"
            title="Italia"
            className="content banner"
        />
        <InfoP 
            information="
            Italia es reconocida por su arte, su cultura 
            y sus numerosísimos monumentos, entre ellos 
            la torre de Pisa y el Coliseo romano; 
            así como por su gastronomía (platos italianos famosos 
            son la pizza y la pasta), 
            su vino, su estilo de vida, su pintura, su diseño, cine, 
            teatro, literatura y música, en particular, la ópera.
            "
        />

        {/*Informaciones*/}
        <div className="trips__container">
          {/*Gatronomía */}
          <TitleP title="Platillos típicos"/>
          <FoodComponent />
          <CustomCard destinyURL="https://s1.1zoom.me/big0/729/421145-svetik.jpg" className="customCard__container"/>
          
          {/*Vuelos */}
          <DescubreMas ImgURL="https://s1.1zoom.me/big0/729/421145-svetik.jpg" className2="descubreMas__container"/>

          {/*Ciudades */}
          <TitleP title="¡Destinos imperdibles!"/>
          <Cities cityImages={[city1, city2, city3, city4, city5]}/>

          {/*Hoteles */}
          <TitleP className='titlePHotel' title="Hoteles"/>
          {/*Carousel con hoteles emblemáticos*/}
          <div className="hotels">
           <HotelCarousel />
          </div>
        </div>
    </div>
  );
}
