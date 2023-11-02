import Portrait from "../home/Portrait";
import { HotelCarousel } from "./Countries-info/Hotel/HotelCarousel";
import { InfoP } from "./Countries-info/InfoP";
import { TitleP } from "./Countries-info/titleP";
import { DescubreMas } from "./DescubreMas";
//import { ImgDestino } from "../trips/Destino/ImgDestino";
import FoodC from "./FoodComp/FoodC";
import "./tripsStyle.css";

export const Trips = () => {
  return (
    <div>
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
        <div className="trips__container">
          <TitleP title="Deliciosos platillos"/>
          {/*<TitleP title="¡Destinos imperdibles!"/>*/}
          {/*<ImgDestino />*/}
          <FoodC />
          <DescubreMas />
          
          <TitleP title="Hoteles"/>
          <div className="hotels">
           <HotelCarousel />
          </div>
        </div>
    </div>
  )
}
