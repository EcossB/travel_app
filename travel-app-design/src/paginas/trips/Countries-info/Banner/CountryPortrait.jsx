import PropTypes from 'prop-types';
import './BannerCountry.css';

export const CountryPortrait = ({ bannerClass, imageBanner, title, style }) => {
    const containerStyle = {
      ...style, 
      position: 'relative', 
    };
  
    const imageStyle = {
      backgroundImage: `url(${imageBanner})`,
      
      /*backgroundSize: 'cover',
      backgroundPosition: 'center',*/
      height: '100%',
      width: '100%',
      position: 'absolute',
      /*top: 0,
      left: 0,
      zIndex: -1, */
    };
  
    const titleStyle = {
      zIndex: 1, 
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
    };
  
    return (
      <div className={bannerClass} style={containerStyle}>
        <div style={imageStyle}></div>
        <h1 style={titleStyle}>{title}</h1>
      </div>
    );
  };
CountryPortrait.propTypes = {
  title: PropTypes.any,
  imageBanner: PropTypes.any,
  bannerClass: PropTypes.any,
  style: PropTypes.object, 
};
