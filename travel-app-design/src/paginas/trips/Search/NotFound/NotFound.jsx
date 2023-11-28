import './notFound.css';
import PropTypes from 'prop-types';
import notFoundImg from '../../../../medio/notfound-message.png';
import notFoundImg2 from '../../../../medio/notfound-mobile.png';
import 'animate.css';

export const NotFound = ({ found }) => {
  return (
    <div className={`notfound__container ${!found ? '' : 'invisible'}`}>
        <img src={notFoundImg2} alt='notfound2' className="notfound__img2 animate__animated animate__pulse" />
        <img src={notFoundImg} alt='notfound' className="notfound__img animate__animated animate__pulse" />
    </div>
  )
}

NotFound.propTypes = {
    found: PropTypes.bool.isRequired,
};