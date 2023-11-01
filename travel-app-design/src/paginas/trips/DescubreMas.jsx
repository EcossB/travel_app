import '../trips/DescubreMasStyles.css';
import ImgsIt from '../../medio/DecorI.png';

export const DescubreMas = () => {
  return (
    <div className='main__container'>
      <div className='white__container'>
        <div className='left__container'>
          
          <h1 className='h1__discover'>Disfruta de este destino</h1>
          <button className='discover__button'>Descubre más</button>
        </div>

        <div className='right__container'>
          <div className='image__container'>
            <img src={ImgsIt} alt='Imagen de lugar en Italia' className='image__it' />
          </div>
        </div>
      </div>
    </div>
  );
};


export default DescubreMas