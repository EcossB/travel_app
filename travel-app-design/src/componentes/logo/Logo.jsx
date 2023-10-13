import "./logoStyle.css";
import logoIcon from "../../medio/logo.png";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div>
        <Link to="/">
            <header className="logo">
            <img src={logoIcon}/>
            </header>
        </Link>
    </div>
  )
}
