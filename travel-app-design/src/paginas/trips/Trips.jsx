import Portrait from "../home/Portrait";
import { CustomCard } from "./Countries-info/Hotel/CustomCard";
import { HotelCarousel } from "./Countries-info/Hotel/HotelCarousel";
import { HotelCarousel2 } from "./Countries-info/Hotel/HotelCarousel2";
import { InfoP } from "./Countries-info/InfoP";
import { TitleP } from "./Countries-info/titleP";
import { DescubreMas } from "./DescubreMas/DescubreMas";
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

        {/*Gastronomía y página de vuelos*/}
        <div className="trips__container">
          <TitleP title="Platillos típicos"/>
          {/*<TitleP title="¡Destinos imperdibles!"/>*/}
          {/*<ImgDestino />*/}
          <HotelCarousel2/>
          <CustomCard destinyURL="https://s1.1zoom.me/big0/729/421145-svetik.jpg" className="customCard__container"/>
          <DescubreMas ImgURL="https://s1.1zoom.me/big0/729/421145-svetik.jpg" className2="descubreMas__container"/>
          <TitleP className='titlePHotel' title="Hoteles"/>
            
          {/*Carousel con hoteles emblemáticos*/}
          <div className="hotels">
           <HotelCarousel />
          </div>
        </div>
    </div>
  );
}
