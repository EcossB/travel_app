import passport from '../../../medio/passportIcon.png';
import mapIcon from '../../../medio/mapIcon.webp';
import PropTypes from 'prop-types';
import './DescubreMasStyles.css';

/*Card que dirige al usuario a una página de reserva de vuelos*/
export const DescubreMas = ({className2, ImgURL}) => {
  return (
    <div className={className2}>
    <div className='main__container'>
      <img className='passport__icon' src={passport} alt='passport' />
      <div className='white__container'>
        <div className='left__container'>
          <h1 className='h1__discover'>Disfruta de este destino</h1>
          <button className='discover__button'>¡Reserva un vuelo!</button>
        </div>

        <div className='right__container'>
          <div className='image__container'>
            <img src={ImgURL} alt='countryPic' className='image__it' />
          </div>
        </div>
      </div>
        <img className='map__icon' src={mapIcon} alt='map' />
    </div>
    </div>
  );
};


DescubreMas.propTypes = {
  className2: PropTypes.any,
  ImgURL: PropTypes.any,
}

export default DescubreMas