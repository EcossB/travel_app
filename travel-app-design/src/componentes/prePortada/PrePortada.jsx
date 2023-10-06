import "./prePortadaStyle.css";
import BgVideo from '../../medio/fondo-nubes.mp4';
// import Logo from '../../assets/logo.png'; 

const PrePortada = () => {
    return (
        <div className="preportada">

            <div className="logo-contenedor">
                <h1 className="logo-titulo">Solaria</h1>
            </div>
            {/* <div className="logo-container">
                <img src={Logo} alt="Logo de la empresa" className="logo" />
            </div> */}
            
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
    );
};

export default PrePortada;




