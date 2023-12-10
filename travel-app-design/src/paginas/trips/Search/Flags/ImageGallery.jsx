import PropTypes from 'prop-types';
import './ImageGallery.css';

const ImageGallery = ({ images, onFlagClick, showWelcomeMessage, showTitle }) => {
  
  return (
    <>
    <div className={`message__title ${showTitle ? 'invisible' : ''}`}>
      <h1 ><span>¡Explora ahora!</span> <br /> Busca tu destino</h1>
      <img src='https://media.baamboozle.com/uploads/images/1028221/a39c2c16-76d8-4e2a-9438-4063ef158b38.gif' />
    </div>
    <div className={`flags__container ${showWelcomeMessage ? '' : 'invisible'}`}>
      {Array.isArray(images) && images.map((url, index) => (
        <img key={index} className='flagImg' onClick={() => onFlagClick(url)} src={url} alt={`País ${index + 1}`} />
      ))}
    </div>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.any,
  onFlagClick: PropTypes.any,
  showWelcomeMessage: PropTypes.bool,
  showTitle: PropTypes.bool,
};

export default ImageGallery;
