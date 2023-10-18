import { Logo } from "../../componentes/logo/Logo";
import { NavLink, Link } from "react-router-dom";
import { FaUserAlt, FaBars } from "react-icons/fa";
export const Menu = () => {
  return (
    <header id="menu">
      <div className="menu-logo">
        <Logo />
      </div>
      <div className="links-info">
        <ul>
          <NavLink to="/home" className={({isActive}) => (isActive ? 'active-link' : null) || 'link-menu'}>Inicio</NavLink>
          <NavLink to="/contacto" className={({isActive}) => (isActive ? 'active-link' : null) || 'link-menu'}>Contacto</NavLink>
          <NavLink to="/trips" className={({isActive}) => (isActive ? 'active-link' : null) || 'link-menu'}>Trips</NavLink>
          <NavLink to="/nosotros" className={({isActive}) => (isActive ? 'active-link' : null) || 'link-menu'}>Nosotros</NavLink>
        </ul>
      </div>
      <div className="user-info">
        <FaBars className="burger-menu"/>
        <ul>
          <li>
            <FaUserAlt  className="user-icon"/>
            Emily Smith
          </li>
          <Link to="/login"><button className="logout-btn">Cerrar sesión</button></Link>
        </ul>
      </div>
    </header>
  );
}
