import './styleIcon.css';
import PropTypes from 'prop-types';
import { FaTimes } from "react-icons/fa";

export const FaTimeIcon = ({onClick}) => {
  return (
    <FaTimes onClick={onClick} className='FatimeIcon'/>
  );
}

FaTimeIcon.propTypes = {
  onClick: PropTypes.any,
};
