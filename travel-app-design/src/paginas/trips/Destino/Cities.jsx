import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./CitiesStyle.css";

export const Cities = ({ lugaresFamosos }) => {
  // State para gestionar el estado del modal
  const [openModal, setOpenModal] = useState(false);

  // State para almacenar la información de la imagen seleccionada
  const [selectedCity, setSelectedCity] = useState(null);

  // Función para abrir el modal y establecer la ciudad seleccionada
  const handleOpenModal = (city) => {
    setSelectedCity(city);
    setOpenModal(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setSelectedCity(null);
    setOpenModal(false);
  };

  return (
    <div className="cities__container">
      {lugaresFamosos.map((city, index) => (
        <div key={index} className="city" onClick={() => handleOpenModal(city)}>
          <img className="cityImg" src={city.imagen} alt={city.nombre} />
        </div>
      ))}

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backdropFilter: "blur(8px)" }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedCity && selectedCity.nombre}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Mostrar la información de la ciudad seleccionada */}
            {selectedCity && (
              <>
                <img
                  className="modalImg"
                  src={selectedCity.imagen}
                  alt={selectedCity.nombre}
                />
                <p>{selectedCity.descripcion}</p>
              </>
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

Cities.propTypes = {
  lugaresFamosos: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string,
      descripcion: PropTypes.string,
      imagen: PropTypes.string,
    })
  ).isRequired,
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