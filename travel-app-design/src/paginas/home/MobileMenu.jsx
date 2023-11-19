//Menú móvil
import "./homeStyle.css";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FaTimes, FaUserAlt, FaTools, FaPhone, FaPlane, FaPencilRuler, FaWindowClose   } from "react-icons/fa";

export const MobileMenu = ({ closeSideBar }) => {
  return (
    <div className="responsive-menu animate__animated animate__fadeInRight">
        <div className="close-icon">
            <FaTimes  onClick={closeSideBar} className="close"/>  
        </div>

        <div className="user-icon mobile-user">
            <FaUserAlt className="user-responsive"/>
            Emily Smith
        </div>
        <div className="menus-info">
            <div className="menu-reponsive-ul">
                <Link to="/home">
                    <p>
                        <FaTools className="menu-icon"/>
                        Inicio
                    </p>
                </Link>

                <Link to="/contacto">
                    <p>
                        <FaPhone className="menu-icon"/>
                        Contacto
                    </p>
                </Link>

                <Link to="/trips">
                    <p>
                        <FaPlane className="menu-icon"/>
                        Trips
                    </p>
                </Link>

                <Link to="/nosotros">
                    <p>
                        <FaPencilRuler className="menu-icon"/>
                        Nosotros
                    </p>
                </Link>

                <Link to="/login">
                    <p>
                        <FaWindowClose className="menu-icon"/>
                        Cerrar sesión
                    </p>
                </Link>
            </div>
        </div>
    </div>
  );
}

MobileMenu.propTypes = {
    closeSideBar: PropTypes.any.isRequired,
};
  
