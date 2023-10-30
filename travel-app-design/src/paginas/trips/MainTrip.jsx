import { Menu } from "../home/Menu";
import { Trips } from "./Trips";

export const MainTrip = () => {
  return (
    <div>
    {/*Aquí llaman sus componentes para visualizarlos */}
        <Menu />
        <Trips />
    </div>
  )
}
