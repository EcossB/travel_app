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
            <Route path='/' element={<PrePortada />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/registro' element={<Registro />}/>
            <Route path='/home' element={<MainHome />}/>
            <Route path='/contacto' element={<Contact />}/>
            <Route path='/trips' element={<MainTrip />}/>
            <Route path='/nosotros' element={<Participants />}/>
            <Route path='/admin-turisteo' element={<AdminPage />}/>
            <Route path='/admin-turisteo/Postpaises' element={<PostForm />}/>
            <Route path='/admin-turisteo/Postpaises/lugares' element={<PostLugares />}/>
            <Route path='/admin-turisteo/Postpaises/gastronomia' element={<PostGastronomia />}/>
            <Route path='/admin-turisteo/Postpaises/vuelos' element={<PostVuelos />}/>
            <Route path='/admin-turisteo/DelPaises' element={<DelPaises />}/>
            <Route path='/admin-turisteo/PutPaises' element={<PutForm />}/>
            <Route path='/admin-turisteo/Putpaises/pais' element={<PutAddForm />}/>
            <Route path='/admin-turisteo/Putpaises/lugares' element={<PutLugares />}/>
            <Route path='/admin-turisteo/Putpaises/gastronomia' element={<PutGastronomia />}/>
            <Route path='/admin-turisteo/Putpaises/vuelos' element={<PutVuelos />}/>
            <Route path='*' element={<Error404 />}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
