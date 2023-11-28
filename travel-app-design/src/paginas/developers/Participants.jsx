import { Menu } from "../home/Menu"
import "./ParticipantsStyle.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import esmeDev from "../../medio/meyDev.jpg";
import estefDev from "../../medio/estefDev.jpg";
import yuliDev from "../../medio/YulianaDev.jpg";
import erwingDev from "../../medio/erwingDev.jpg";
import arielDev from "../../medio/arielDev.jpg";
import crisDev from "../../medio/crisDev.jpg";
import 'animate.css';


export const Participants = () => {
  return (
    <>
        <Menu />
        <div className="participants__container animate__animated animate__backInUp">
            <div className="participant__card">
                <img className="profile__img" src={crisDev} alt="" />
                <div className="participants__info">
                    <h2>Cristal Tavárez Novas</h2>
                    <p>Líder de proyecto / Desarrolladora FrontEnd</p>
                </div>
                <div className="participants__social">
                    <a href="https://github.com/CristalpyC"><GitHubIcon className="github__icon"/></a>
                    <a href="mailto:cristaltn03@gmail.com"><EmailIcon className="email__icon"/></a>
                    <a href=""><LinkedInIcon className="linkedin__icon"/></a>
                </div>
            </div>

            <div className="participant__card">
                <img className="profile__img" src={erwingDev} alt="" />
                <div className="participants__info">
                    <h2>Erwing Coss Batista</h2>
                    <p>Desarrollador Backend</p>
                </div>
                <div className="participants__social">
                    <a href="https://github.com/EcossB"><GitHubIcon className="github__icon"/></a>
                    <a href=""><EmailIcon className="email__icon"/></a>
                    <a href=""><LinkedInIcon className="linkedin__icon"/></a>
                </div>
            </div>


            <div className="participant__card">
                <img className="profile__img" src="https://avatars.githubusercontent.com/u/107286548?v=4" alt="" />
                <div className="participants__info">
                    <h2>Samantha Díaz Ramírez</h2>
                    <p>UI/UX designer</p>
                </div>
                <div className="participants__social">
                    <a href="https://github.com/sammadr"><GitHubIcon className="github__icon"/></a>
                    <a href=""><EmailIcon className="email__icon"/></a>
                    <a href=""><LinkedInIcon className="linkedin__icon"/></a>
                </div>
            </div>


            <div className="participant__card">
                <img className="profile__img" src="https://cdn.sanity.io/images/tlr8oxjg/production/9f15109746df254c5a030a7ba9239f8a4bb5dadb-1456x816.png?w=3840&q=100&fit=clip&auto=format" alt="" />
                <div className="participants__info">
                    <h2>Chamyl Nova Ciprián</h2>
                    <p>Gerente de documentación</p>
                </div>
                <div className="participants__social">
                    <a href=""><GitHubIcon className="github__icon"/></a>
                    <a href=""><EmailIcon className="email__icon"/></a>
                    <a href=""><LinkedInIcon className="linkedin__icon"/></a>
                </div>
            </div>

            <div className="participant__card">
                <img className="profile__img" src={arielDev} alt="" />
                <div className="participants__info">
                    <h2>Rafael Custodio Guillén</h2>
                    <p>Desarrollador Backend</p>
                </div>
                <div className="participants__social">
                    <a href="https://github.com/0-0Rafael"><GitHubIcon className="github__icon"/></a>
                    <a href="mailto:rafaelarielcg@gmail.com"><EmailIcon className="email__icon"/></a>
                    <a href="https://www.linkedin.com/in/rafael-ariel-custodio-guillén-726430276/"><LinkedInIcon className="linkedin__icon"/></a>
                </div>
            </div>


            <div className="participant__card">
                <img className="profile__img" src={estefDev} alt="" />
                <div className="participants__info">
                    <h2>Estefani Soto de los Santos</h2>
                    <p>Gerente de documentación</p>
                </div>
                <div className="participants__social">
                    <a href="https://github.com/EstefaniSoto"><GitHubIcon className="github__icon"/></a>
                    <a href="mailto:eri022004@hotmail.com"><EmailIcon className="email__icon"/></a>
                    <a href="https://www.linkedin.com/in/estefani-eridania-soto-de-los-santos-08a060274/"><LinkedInIcon className="linkedin__icon"/></a>
                </div>
            </div>

            <div className="participant__card">
                <img className="profile__img" src={esmeDev} alt="" />
                <div className="participants__info">
                    <h2>Esmeisy Ramírez Guerrero</h2>
                    <p>Desarrolladora FrontEnd</p>
                </div>
                <div className="participants__social">
                    <a href="https://github.com/esmeisyrg"><GitHubIcon className="github__icon"/></a>
                    <a href="mailto:esmeisyrg@gmail.com "><EmailIcon className="email__icon"/></a>
                    <a href="http://www.linkedin.com/in/esmeisy-ramírez"><LinkedInIcon className="linkedin__icon"/></a>
                </div>
            </div>


            <div className="participant__card">
                <img className="profile__img" src={yuliDev} alt="" />
                <div className="participants__info">
                    <h2>Yuliana Zorrilla Castro</h2>
                    <p>Desarrolladora FrontEnd</p>
                </div>
                <div className="participants__social">
                    <a href="https://github.com/Yuls0799"><GitHubIcon className="github__icon"/></a>
                    <a href=""><EmailIcon className="email__icon"/></a>
                    <a href=""><LinkedInIcon className="linkedin__icon"/></a>
                </div>
            </div>
            
        </div>
    </>
  )
}
