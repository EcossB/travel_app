import { Video } from "../login/Video"
import { InputPasswd } from "./InputPasswd"
import "./passwdStyle.css"
import "../login/loginStyle.css"

export const Passwd = () => {
  return (
    <>
      <>
      <Video />
        <header className="logo">
          <h1>SOLARIS</h1>
        </header>
        <div className="title">
            <h2>
            ¡No te preocupes, 
            <br/>
            actualiza tu contraseña <span className="title-passwd">AQUÍ</span>
            </h2>
        </div>
        <div className="input-section">
          <InputPasswd/>
          <button>Actualizar</button>
        </div>
    </>
    </>
  )
}