import { Menu } from "../home/Menu";
import { Trips } from "./Trips";
//import DescubreMas from "./DescubreMas"
//import FoodC from "./FoodComp/FoodC";

export const MainTrip = () => {
  return (
    <div>
      {/*<FoodC />*/}
    {/*Aquí llaman sus componentes para visualizarlos */}
    {/*< ImgDestino/>
    <ImgDestino />
    <DescubreMas/>*/}
    <Menu />
    <Trips />
    
    {/*  ,
     /\^/`\
    | \/   |
    | |    |
    \ \    /
     '\\//'
       ||
       ||
       ||
       ||  ,
   |\  ||  |\
   | | ||  | |
   | | || / /
    \ \||/ /
     `\\//`
    ^^^^^^^^ 

    una flor para ti cuchurrumín que lees esto */}
    </div>
  );
}
