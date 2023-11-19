import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./CitiesStyle.css";

export const Cities = ({ cityImages }) => {
  // State para gestionar el estado del modal
  const [openModal, setOpenModal] = useState(false);

  // State para almacenar la información de la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(null);

  // Función para abrir el modal y establecer la imagen seleccionada
  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setSelectedImage(null);
    setOpenModal(false);
  };

  return (
    <div className="cities__container">
      {cityImages.map((cityImage, index) => (
        <img
          key={index}
          className="cityImg"
          src={cityImage}
          alt=""
          onClick={() => handleOpenModal(cityImage)}
        />
      ))}

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{backdropFilter: "blur(8px)"}}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Lugar
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Mostrar la información de la imagen seleccionada */}
            {selectedImage && <img className="modalImg" src={selectedImage} alt="Selected city" />}
            Descripción breve del lugar.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

Cities.propTypes = {
  cityImages: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderLeft: "5px solid #3F7BFD",
  boxShadow: 21,
  p: 4,
};
