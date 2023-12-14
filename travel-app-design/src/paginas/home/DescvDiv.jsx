import "./homeStyle.css";
import img1 from "../../medio/imgsgif.gif";
import img2 from "../../medio/homebeach.jpeg";
import palmera from "../../medio/palmera.png";
//import travelIcon from "../../medio/travelicon.png";

export const DescvDiv = () => {
  return (
    <div className="turisteo-info-container">
        <div className="title-img-container">
            <div className="information">
                <h3>¿Qué país te gustaría conocer?</h3>
                <p>
                    Si te has preguntado alguna vez qué país te gustaría conocer, 
                    estás en el lugar correcto. 
                    En este rincón de la web, 
                    te invitamos a embarcarte en un emocionante 
                    viaje de descubrimiento, 
                    donde la aventura comienza con la pregunta: 
                    ¿Dónde te gustaría estar ahora mismo? 
                    Prepárate para sumergirte en una experiencia virtual 
                    única que te llevará a rincones exóticos, 
                    gastronomía exquisita y 
                    paisajes impresionantes de todo el mundo.
                </p>
            </div>
            <div className="images-information">
                <img loading="lazy" src={img1} alt="place1" />
                <img loading="lazy" src={img2} alt="place2" />
                <img loading="lazy" src={palmera} alt="icon" className="palm"/>
            </div>
        </div>
    </div>
  );
}
