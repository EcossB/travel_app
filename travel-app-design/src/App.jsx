import "./App.css";
import { Login } from "./componentes/login/Login";
import { Registro } from "./componentes/registro/Registro";
import { Passwd } from "./componentes/passwd/Passwd";
import { PrePortada } from "./componentes/prePortada/PrePortada";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Error404 } from "./componentes/error404/Error404";
import { MainHome } from "./paginas/home/MainHome";
import Contact from "./paginas/contactoform/contact";
import { MainTrip } from "./paginas/trips/MainTrip";
import { Participants } from "./paginas/developers/Participants";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PrePortada />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/registro' element={<Registro />}/>
          <Route path='/recuperar-contraseña' element={<Passwd />}/>
          <Route path='/home' element={<MainHome />}/>
          <Route path='/contacto' element={<Contact />}/>
          <Route path='/trips' element={<MainTrip />}/>
          <Route path='/nosotros' element={<Participants />}/>
          <Route path='*' element={<Error404 />}/>
        </Routes>
      </BrowserRouter>

      {/* toma
          88,dPYba,,adPYba,  ,adPPYYba, 8b,dPPYba,   ,adPPYb,d8  ,adPPYba,   
          88P'   "88"    "8a ""     `Y8 88P'   `"8a a8"    `Y88 a8"     "8a  
          88      88      88 ,adPPPPP88 88       88 8b       88 8b       d8  
          88      88      88 88,    ,88 88       88 "8a,   ,d88 "8a,   ,a8"  
          88      88      88 `"8bbdP"Y8 88       88  `"YbbdP"Y8  `"YbbdP"'   
                                                    aa,    ,88              
                                                      "Y8bbdP"              */}
    </>
  )
}

export default App
