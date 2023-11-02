import '../trips/DescubreMasStyles.css';
import passport from '../../medio/passportIcon.png';
import mapIcon from '../../medio/mapIcon.webp';
import ImgsIt from '../../medio/DecorI.png';

export const DescubreMas = () => {
  return (
    <div className='main__container'>
      <img className='passport__icon' src={passport} alt='passport' />
      <div className='white__container'>
        <div className='left__container'>
          <h1 className='h1__discover'>Disfruta de este destino</h1>
          <button className='discover__button'>Descubre más</button>
        </div>

        <div className='right__container'>
          <div className='image__container'>
            <img src={ImgsIt} alt='Italia' className='image__it' />
          </div>
        </div>
      </div>
        <img className='map__icon' src={mapIcon} alt='map' />
    </div>
  );
};


export default DescubreMas