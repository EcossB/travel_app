import { Link } from "react-router-dom";
import { Logo } from "../../componentes/logo/Logo";
import "./adminStyle.css";
import LockIcon from '@mui/icons-material/Lock';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useNavigate } from "react-router-dom";

export const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  }
  
  return (
    <div id="admin">
    <div className="title__container">
        <Logo />
        <LockIcon className="admin__icon" sx={{fontSize: '5vmin'}}/>
    </div>
    <div className="admin__container">
        <h2>Datos</h2>
        <hr />
        <ul>
            <h3>Creación de países</h3>
            <Link to="/admin-turisteo/Postpaises">
            <li className="admin__list">
                <VpnKeyIcon sx={{color: '#efcb65', marginRight: '8px', fontSize: '2.3vmin'}}/>
                POST Paises
            </li>
            </Link>

            <h3>Actualización de países</h3>
            <Link to="/admin-turisteo/Putpaises">
            <li className="admin__list">
                <VpnKeyIcon sx={{color: '#efcb65', marginRight: '8px', fontSize: '2.3vmin'}}/>
                PUT Paises
            </li>
            </Link>

            <h3>Eliminación de países</h3>
            <Link to="/admin-turisteo/DelPaises">
            <li className="admin__list">
                <VpnKeyIcon sx={{color: '#efcb65', marginRight: '8px', fontSize: '2.3vmin'}}/>
                DELETE Paises
            </li>
            </Link>
        </ul>
        <button className="logout__admin" onClick={handleLogout}>Cerrar Sesión</button>
    </div>
    </div>
  )
}
