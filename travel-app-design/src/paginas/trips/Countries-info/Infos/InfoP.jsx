import PropTypes from 'prop-types';
import "./infoStyle.css";

export const InfoP = ({information}) => {
  return (
    <div className='infoP-container'>
        <p>
            {information}
        </p>
    </div>
  );
}

InfoP.propTypes = {
    information: PropTypes.any.isRequired,
};
