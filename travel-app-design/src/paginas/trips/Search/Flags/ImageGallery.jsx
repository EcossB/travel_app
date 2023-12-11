import PropTypes from 'prop-types';
import './ImageGallery.css';

const ImageGallery = ({ images, onFlagClick, showWelcomeMessage, showTitle, message, showIcon }) => {
  
  return (
    <>
    <div className={`message__title ${showTitle ? 'invisible' : ''}`}>
      <h1>{message}</h1>
      <img className={`load__icon ${showIcon ? 'invisible' : ''}`} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif" alt="" />
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
  message: PropTypes.any,
  showIcon: PropTypes.any,
};

export default ImageGallery;
