import { InputLogin } from "./InputLogin"
import { Video } from "./Video"
import "./loginStyle.css"

export const Login = () => {
  return (
    <>
      <Video />
        <header className="logo">
          <h1>SOLARIS</h1>
        </header>
        <div className="title">
            <h2>
            ¡Gracias por volver!
                <br/>
            ¿Listo para otra aventura?
            </h2>
        </div>
        <div className="input-section">
          <InputLogin/>
          <button>Iniciar sesión</button>
          <p className="register-message">¿No tienes una cuenta? <a href="#">Regístrate aquí</a></p>
        </div>
    </>
  )
}