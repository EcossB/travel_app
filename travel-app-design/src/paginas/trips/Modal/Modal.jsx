import "./modalStyle.css";
import PropTypes from 'prop-types';
import Modal from "react-modal";
import { FaWindowClose } from "react-icons/fa";
//import { useModal } from "../../../hooks/useModal";

export const Modall = ({ modalTitle, modalInfo, isOpen, onRequestClose, imgUrl }) => {
  //const [openModal] = useModal(false);
  return (
    <div className="modal-container">
        {/*
        
                <button onClick={openModal}>
                Open Modal
            </button>
        */}
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <div className="modalInfo">
                <h2>{modalTitle}</h2>
                <FaWindowClose onClick={onRequestClose} className="modalbtn-close">Cerrar</FaWindowClose>
            </div>
            <hr />
            <img className="modalImg" src={imgUrl} alt="los haitices" />
            <p>{modalInfo}</p>
        </Modal>
    </div>
  );
}

Modal.propTypes = {
    modalTitle: PropTypes.any.isRequired,
    modalInfo: PropTypes.any.isRequired,
    isOpen: PropTypes.any.isRequired,
    onRequestClose: PropTypes.any.isRequired,
    imgUrl: PropTypes.any.isRequired,
};
