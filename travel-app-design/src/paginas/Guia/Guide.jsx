import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Portrait from '../home/Portrait';
import './guideStyle.css';
import { Menu } from '../home/Menu';
import maleta from '../../medio/maleta2.png';
import scissors from '../../medio/tijeras.png';
import snack from '../../medio/snack.png';
import umbrella from '../../medio/umbrella.png';
import gun from '../../medio/arma.png';
import talcum from '../../medio/talco.png';
import headphone from '../../medio/audifonos.png';
import tip1 from '../../medio/tip1.webp';
import tip2 from '../../medio/tip2.webp';
import tip3 from '../../medio/tip3.png';

export const Guide = ({ pageTitle }) => {
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
        bannerClass="portrait-container2 bannerBgGuide"
        title="Consejos para viajeros"
        className="content banner"
        />
        <p className="guide__title">
            ¡Presta mucha atención a estos consejos!
        </p>
        <div className="guide__container">
            <div className="guide__advice">
                <div className="guide__tip">
                    <img src={tip1} alt="" />
                    <p>
                        Planifica con anticipación, haciendo una lista de artículos 
                        esenciales y optando por prendas versátiles. 
                        Evita el exceso de equipaje y asegúrate de incluir elementos 
                        esenciales como medicamentos y cargadores.
                    </p>
                </div>
            </div>

            <div className="guide__advice">
                <div className="guide__tip">
                    <img src={tip2} alt="" />
                    <p>
                        Sumérgete en la cultura local investigando costumbres y normas. 
                        Aprende algunas frases básicas del idioma local para facilitar la comunicación. 
                        ¡Es por eso que Turisteo es tu mejor opción!
                    </p>
                </div>
            </div>

            <div className="guide__advice">
                <div className="guide__tip">
                    <img src={tip3} alt="" />
                    <p>
                        Nunca olvides tu pasaporte, copias de documentos y 
                        siguiendo las normas locales. 
                        Mantén información de emergencia, evita mostrar mucho dinero 
                        y conoce las áreas seguras.  
                        <a href="https://mirex.gob.do/condiciones-para-dominicanos-viajar/"> Verifica información actualizada antes de viajar.</a>
                    </p>
                </div>
            </div>
        </div>
    
        <div className="maleta">
                <img src={maleta} alt="" />
        </div>

        <div className="objects__container">
            <h2>¿Qué puedes llevar en tu bolso?</h2>
            <div className="objects__imgs">
                <img src={scissors} alt="" />
                <img src={gun} alt="" />
                <img src={talcum} alt="" />
            </div>
            <div className="objects__imgs">
                <img src={snack} alt="" />
                <img src={umbrella} alt="" />
                <img src={headphone} alt="" />
            </div>
        </div>
    </div>
  )
}

Guide.propTypes = {
    pageTitle: PropTypes.any,
};

