import italyFlag from '../../../../medio/italyflag.webp';
import mexicoFlag from '../../../../medio/mexicoFlag.jpg';
import rdFlag from '../../../../medio/rdflag.webp';
import londonFlag from '../../../../medio/londonflag.jpg';
import PropTypes from 'prop-types';
import './flagsStyle.css';

export const Flags = ({onClick}) => {
  return (
    <div className='flags__container'>
      <img src={italyFlag} className='flagImg' onClick={onClick}/>
      <img src={mexicoFlag} className='flagImg' onClick={onClick}/>
      <img src={rdFlag} className='flagImg' onClick={onClick}/>
      <img src={londonFlag} className='flagImg' onClick={onClick}/>
    </div>
  );
}

Flags.propTypes = {
  onClick: PropTypes.any.isRequired,
};
