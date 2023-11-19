import { Menu } from "../home/Menu";
import FullScreenDialog from "./Countries-info/Dialog/Dialog";
import { TripSearch } from "./Search/TripSearch";
//import { Trips } from "./Trips";

export const MainTrip = () => {
  return (
    <div>
      {/*<FoodC />*/}
    {/*Aquí llaman sus componentes para visualizarlos */}
    {/*< ImgDestino/>
    <ImgDestino />
    <DescubreMas/>*/}
    <Menu />
    <TripSearch />
    <FullScreenDialog />
    </div>
  );
}
