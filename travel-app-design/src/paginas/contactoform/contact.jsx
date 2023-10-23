import { Menu } from '../home/Menu';
import "../home/homeStyle.css";
import './FormStyles.css';
import Portrait from '../home/Portrait';
import { ContactForm } from './ContactForm';

function Contact () {
  return (
    <div>
        <Menu />
        <Portrait 
        bannerClass="portrait-container2 bannerBg"
        title="¡Contáctanos!"
        className="content banner"
        />
        <ContactForm />
    </div>
  );
}

export default Contact;

