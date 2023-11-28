import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaMapMarkedAlt } from "react-icons/fa";
import PropTypes from 'prop-types';


export default function SelectComponent({ onFilter  }) {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleSearch = () => {
    onFilter(country);
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} sx={{ fontSize: '2vmin', width: '100%', color: '#fffaf2', '@media (max-width: 650px)': { fontSize: '3vmin' }, '@media (max-width: 350px)': { fontSize: '4vmin' } }}>
        <FaMapMarkedAlt className='map-icon' />
        Continente
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose} sx={{ backdropFilter: 'blur(10px)' }}>
        <DialogTitle sx={{ textAlign: 'center', color: '#004068' }}>¡Explora por continente!</DialogTitle>
        <DialogContent>
          <FormControl sx={{ m: 1, minWidth: 200, display: 'flex', justifyContent: 'center' }}>
            <Select
              native
              value={country}
              onChange={handleChange}
              input={<OutlinedInput label="Age" id="demo-dialog-native" />}
              sx={{ m: 1, minWidth: 200 }}
            >
              <option aria-label="None" value="all">Todos</option>
              <option value="AMERICA">América</option>
              <option value="EUROPA">Europa</option>
              <option value="AFRICA">África</option>
              <option value="ASIA">Asia</option>
              <option value="OCEANIA">Oceanía</option>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: '#004068' }}>Cancelar</Button>
          <Button  onClick={handleSearch} sx={{ color: '#004068' }}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

SelectComponent.propTypes = {
  onFilter: PropTypes.any,
};
