import { InputRegistro } from "./InputRegistro"
import { VideoRegistro } from "./VideoRegistro"
import "./registroStyle.css"

export const Registro = () => {
  return (
    <>
      <VideoRegistro />
        <header className="logo">
          <h1>SOLARIS</h1>
        </header>
        <div className="title">
            <h2>
            ¿Listo para empezar la aventura?
                <br/>
            ¡Regístrate!
            </h2>
        </div>
        <div className="input-section">
          <InputRegistro />
          <button>Guardar</button>
          <p className="register-message">¿Ya tienes una cuenta? <a href="#">Inicia sesión aquí</a></p>
        </div>
    </>
  )
}
