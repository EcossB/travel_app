import logoImg from "../../medio/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaUserAlt, FaBars } from "react-icons/fa";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";

export const Menu = () => {
  const [sideBar, setSideBar] = useState(false); 

  const showSideBar = () => {
    setSideBar(!sideBar);
  }

  return (
    <header id="menu">
      <div className="menu-logo" >
        <Link to="/home"><img src={logoImg} alt="logo" /></Link>
      </div>

      <div className="links-info">
        <ul>
          <NavLink to="/home" className={({isActive}) => (isActive ? 'active-link' : null) || 'link-menu'}>Inicio</NavLink>
          <NavLink to="/contacto" className={({isActive}) => (isActive ? 'active-link' : null) || 'link-menu'}>Contacto</NavLink>
          <NavLink to="/guia" className={({isActive}) => (isActive ? 'active-link' : null) || 'link-menu'}>Guía</NavLink>
          <NavLink to="/trips" className={({isActive}) => (isActive ? 'active-link' : null) || 'link-menu'}>Trips</NavLink>
          <NavLink to="/nosotros" className={({isActive}) => (isActive ? 'active-link' : null) || 'link-menu'}>Nosotros</NavLink>
        </ul>
      </div>

      <div className="user-info">
        <FaBars className={sideBar ? "inactive" : "burger-menu"} onClick={showSideBar}/>
        <ul>
          <li>
            <FaUserAlt  className="user-icon"/>
            ¡Bienvenid@!
          </li>
          <Link to="/login"><button className="logout-btn">Cerrar sesión</button></Link>
        </ul>
      </div>
      {sideBar &&(
        <MobileMenu 
          closeSideBar={showSideBar}
        />
      )}
    </header>
  );
}

