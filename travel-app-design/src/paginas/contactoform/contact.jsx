import { Menu } from '../home/Menu';
import "../home/homeStyle.css";
import './FormStyles.css';
import Portrait from '../home/Portrait';
import { ContactForm } from './ContactForm';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

function Contact ({ pageTitle }) {
  useEffect(() => {
    document.title = pageTitle;
    return () => {
      document.title = 'Turisteo';
    };
  }, [pageTitle]);

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


Contact.propTypes = {
  pageTitle: PropTypes.any,
};

