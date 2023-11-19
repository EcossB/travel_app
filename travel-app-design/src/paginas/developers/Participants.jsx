import { Menu } from "../home/Menu"
import "./ParticipantsStyle.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import baljeet from "../../medio/baljeet.png";

export const Participants = () => {
  return (
    <>
        <Menu />
        <div className="participants__container">
            <div className="participant__card">
                <img className="profile__img" src="https://static.vecteezy.com/system/resources/previews/028/597/534/non_2x/young-cartoon-female-avatar-student-character-wearing-eyeglasses-file-no-background-ai-generated-png.png" alt="" />
                <div className="participants__info">
                    <h2>Cristal Tavárez Novas</h2>
                    <p>Desarrolladora FrontEnd</p>
                </div>
                <div className="participants__social">
                    <GitHubIcon className="github__icon"/>
                    <EmailIcon className="email__icon"/>
                    <LinkedInIcon className="linkedin__icon"/>
                </div>
            </div>

            <div className="participant__card">
                <img className="profile__img" src="https://purepng.com/public/uploads/large/the-rock-dwayne-johnson-wwe-wtu.png" alt="" />
                <div className="participants__info">
                    <h2>Erwing Coss Batista</h2>
                    <p>Desarrollador Backend</p>
                </div>
                <div className="participants__social">
                    <GitHubIcon className="github__icon"/>
                    <EmailIcon className="email__icon"/>
                    <LinkedInIcon className="linkedin__icon"/>
                </div>
            </div>


            <div className="participant__card">
                <img className="profile__img" src="https://cdn-icons-png.flaticon.com/512/3006/3006859.png" alt="" />
                <div className="participants__info">
                    <h2>Samantha Díaz Ramírez</h2>
                    <p>Desarrolladora FrontEnd</p>
                </div>
                <div className="participants__social">
                    <GitHubIcon className="github__icon"/>
                    <EmailIcon className="email__icon"/>
                    <LinkedInIcon className="linkedin__icon"/>
                </div>
            </div>


            <div className="participant__card">
                <img className="profile__img" src="https://freepngimg.com/save/112656-yeager-eren-hd-image-free/1190x1140" alt="" />
                <div className="participants__info">
                    <h2>Chamyl Nova Ciprián</h2>
                    <p>Desarrolladora FrontEnd</p>
                </div>
                <div className="participants__social">
                    <GitHubIcon className="github__icon"/>
                    <EmailIcon className="email__icon"/>
                    <LinkedInIcon className="linkedin__icon"/>
                </div>
            </div>

            <div className="participant__card">
                <img className="profile__img" src={baljeet} alt="" />
                <div className="participants__info">
                    <h2>Rafael Custodio Guillén</h2>
                    <p>Desarrollador Backend</p>
                </div>
                <div className="participants__social">
                    <GitHubIcon className="github__icon"/>
                    <EmailIcon className="email__icon"/>
                    <LinkedInIcon className="linkedin__icon"/>
                </div>
            </div>


            <div className="participant__card">
                <img className="profile__img" src="https://static.vecteezy.com/system/resources/previews/019/980/635/original/cute-african-american-girl-cartoon-character-png.png" alt="" />
                <div className="participants__info">
                    <h2>Estefani Soto de los Santos</h2>
                    <p>Desarrolladora FrontEnd</p>
                </div>
                <div className="participants__social">
                    <GitHubIcon className="github__icon"/>
                    <EmailIcon className="email__icon"/>
                    <LinkedInIcon className="linkedin__icon"/>
                </div>
            </div>

            <div className="participant__card">
                <img className="profile__img" src="https://images.vexels.com/media/users/3/151935/isolated/preview/28bcad1d766bcbbe96e451410adb1e79-dibujos-animados-de-animales-mapache.png" alt="" />
                <div className="participants__info">
                    <h2>Esmeisy Ramírez Guerrero</h2>
                    <p>Desarrolladora FrontEnd</p>
                </div>
                <div className="participants__social">
                    <GitHubIcon className="github__icon"/>
                    <EmailIcon className="email__icon"/>
                    <LinkedInIcon className="linkedin__icon"/>
                </div>
            </div>


            <div className="participant__card">
                <img className="profile__img" src="https://images.vexels.com/media/users/3/323506/isolated/preview/eaefd28273693c92c88165d79f8cd249-simpa-tico-mapache-de-dibujos-animados.png" alt="" />
                <div className="participants__info">
                    <h2>Yuliana Zorrilla Castro</h2>
                    <p>Desarrolladora FrontEnd</p>
                </div>
                <div className="participants__social">
                    <GitHubIcon className="github__icon"/>
                    <EmailIcon className="email__icon"/>
                    <LinkedInIcon className="linkedin__icon"/>
                </div>
            </div>
            
        </div>
    </>
  )
}
