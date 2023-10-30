import { Menu } from "../home/Menu";
import { Modall } from "./Modal/Modal";
//import { Trips } from "./Trips";

export const MainTrip = () => {
  return (
    <div>
    {/*Aquí llaman sus componentes para visualizarlos */}
        <Menu />
        <Modall 
          modalTitle="Parque nacional Los Haitises"
          modalInfo="El Parque Nacional Los Haitises, ubicado en 
          la costa noreste de la República Dominicana, 
          es conocido por sus impresionantes formaciones de mogotes, 
          cuevas, ríos y bosques de manglares. 
          Este santuario ecológico alberga una variada 
          vida silvestre y exhibe arte rupestre taíno en sus cuevas. 
          Los visitantes pueden explorar en bote, observar aves 
          y disfrutar de la naturaleza mientras aprenden 
          sobre la historia de la región.
          "
        />
    </div>
  )
}
