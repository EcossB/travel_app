import PropTypes from 'prop-types';
import "./infoStyle.css";

export const TitleP = ({title}) => {
  return (
    <div className='titleP-container'>
        <h2>{title}</h2>
    </div>
  );
}

TitleP.propTypes = {
    title: PropTypes.any.isRequired,
};
