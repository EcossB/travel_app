import "./descubreMas.css";
import Italy from "../../../medio/ItalyImg.jpg";

export const DescubreMas2 = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <h2>Título de la Tarjeta</h2>
          <button>Botón</button>
        </div>
        <div className="card-image">
          <img src={Italy} alt="Imagen" />
        </div>
      </div>
    </div>
  );
}
