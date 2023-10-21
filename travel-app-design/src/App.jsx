import "./App.css";
import { Login } from "./componentes/login/Login";
import { Registro } from "./componentes/registro/Registro";
import { Passwd } from "./componentes/passwd/Passwd";
import { PrePortada } from "./componentes/prePortada/PrePortada";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Error404 } from "./componentes/error404/Error404";
import { ContactForm } from "./paginas/contacto/ContactForm";
import { MainHome } from "./paginas/home/MainHome";
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
          <Route path='/contacto' element={<ContactForm />}/>
          <Route path='*' element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
