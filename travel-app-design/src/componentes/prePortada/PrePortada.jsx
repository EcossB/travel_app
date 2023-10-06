import "./prePortadaStyle.css"
import BgVideo from '../../medio/fondo-rio.mp4'

const PrePortada = () => {
    return (
        <div className="preportada">
            <video src={BgVideo} autoPlay muted loop className="video-bg" />
              <div className="bg-overlay"></div>
              <div className="titulo">
                  <h1>Descubre las diferentes maravillas del mundo</h1>
              </div>

            <div className="boton-contenedor">
                <div className="boton">Iniciar sesión</div>
                <div className="boton">Registro</div>
            </div>

        </div>
    )
}

export default PrePortada;



