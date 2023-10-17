import { Logo } from "../../componentes/logo/Logo";
export const Menu = () => {
  return (
    <header id="menu">
      <div className="menu-logo">
        <Logo />
      </div>
      <div className="links-info">
        <ul>
          <li>Inicio</li>
          <li>Contacto</li>
          <li>Trips</li>
          <li>Nosotros</li>
        </ul>
      </div>
      <div className="user-info">
        <ul>
          <li>Emily Smith</li>
          <button className="logout-btn">Cerrar sesión</button>
        </ul>
      </div>
    </header>
  )
}
