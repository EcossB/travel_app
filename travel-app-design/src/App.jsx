import './App.css'
import PrePortada from './componentes/prePortada/PrePortada'
import { Login } from './componentes/login/Login'
import { Registro } from './componentes/registro/Registro'

function App() {
  return (
    //Aquí van sus creaciones (componentes).
    <>
    <PrePortada/>
      <Login/>
      <Registro/>
    </>
  )
}

export default App
