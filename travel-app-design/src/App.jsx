import "./App.css";
import { Login } from "./componentes/login/Login";
import { Registro } from "./componentes/registro/Registro";
import { PrePortada } from "./componentes/prePortada/PrePortada";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Error404 } from "./componentes/error404/Error404";
import { MainHome } from "./paginas/home/MainHome";
import Contact from "./paginas/contactoform/contact";
import { MainTrip } from "./paginas/trips/MainTrip";
import { Participants } from "./paginas/developers/Participants";
import { AdminPage } from "./paginas/admin/AdminPage";
import { PutForm } from "./paginas/admin/PUT/PutForm";
import { PostForm } from "./paginas/admin/POST/PosForm2";
import { AuthProvider } from "./hooks/authContext";
import { PostLugares } from "./paginas/admin/POST/Lugares/PostLugares";
import { PostGastronomia } from "./paginas/admin/POST/Gastronomia/PostGastronomia";
import { PostVuelos } from "./paginas/admin/POST/Vuelos/PostVuelos";
import { DelPaises } from "./paginas/admin/DELETE/DelPaises";
import { PutAddForm } from "./paginas/admin/PUT/Pais/PutAddForm";
import { PutLugares } from "./paginas/admin/PUT/Lugares/PutLugares";
import { PutVuelos } from "./paginas/admin/PUT/Vuelos/PutVuelos";
import { PutGastronomia } from "./paginas/admin/PUT/Gastronomia/PutGastronomia";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PrePortada pageTitle="Turisteo"/>}/>
            <Route path='/login' element={<Login pageTitle="Turisteo - Login"/>} />
            <Route path='/registro' element={<Registro pageTitle="Turisteo - Registro"/>}/>
            <Route path='/home' element={<MainHome pageTitle="Turisteo - Home"/>}/>
            <Route path='/contacto' element={<Contact pageTitle="Turisteo - Contacto"/>}/>
            <Route path='/trips' element={<MainTrip pageTitle="Turisteo - Explorar destinos"/>}/>
            <Route path='/nosotros' element={<Participants pageTitle="Turisteo - Desarrolladores"/>}/>
            <Route path='/admin-turisteo' element={<AdminPage pageTitle="Turisteo - Admin"/>}/>
            <Route path='/admin-turisteo/Postpaises' element={<PostForm pageTitle="Admin - Paises"/>}/>
            <Route path='/admin-turisteo/Postpaises/lugares' element={<PostLugares pageTitle="Admin - Lugares"/>}/>
            <Route path='/admin-turisteo/Postpaises/gastronomia' element={<PostGastronomia pageTitle="Admin - Gastronomia"/>}/>
            <Route path='/admin-turisteo/Postpaises/vuelos' element={<PostVuelos pageTitle="Admin - Vuelos"/>}/>
            <Route path='/admin-turisteo/DelPaises' element={<DelPaises pageTitle="Admin - Eliminar país"/>}/>
            <Route path='/admin-turisteo/PutPaises' element={<PutForm pageTitle="Admin - Búsqueda "/>}/>
            <Route path='/admin-turisteo/Putpaises/pais' element={<PutAddForm pageTitle="Admin - Edición país"/>}/>
            <Route path='/admin-turisteo/Putpaises/lugares' element={<PutLugares pageTitle="Admin - Edición lugares"/>}/>
            <Route path='/admin-turisteo/Putpaises/gastronomia' element={<PutGastronomia pageTitle="Admin - Edición gastronomía"/>}/>
            <Route path='/admin-turisteo/Putpaises/vuelos' element={<PutVuelos pageTitle="Admin - Edición vuelos"/>}/>
            <Route path='*' element={<Error404 />}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
