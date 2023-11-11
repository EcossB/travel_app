import PropTypes from 'prop-types';
import "./infoStyle.css";

export const TitleP = ({title, className}) => {
  return (
    <div className='titleP-container'>
        <h2 className={className}>{title}</h2>
    </div>
  );
}

TitleP.propTypes = {
    title: PropTypes.any.isRequired,
    className: PropTypes.any.isRequired,
};
