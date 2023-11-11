import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaMapMarkedAlt } from "react-icons/fa";
import "./searchStyle.css";

export default function SelectComponent() {
  const [open, setOpen] = React.useState(false);
  const [country, setCountry] = React.useState('');

  const handleChange = (event) => {
    setCountry(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen} 
      sx={{
        fontSize: '2vmin', 
        color: '#fffaf2',
        '@media (max-width: 650px)': {
          fontSize: '3vmin',
      },}}>
        <FaMapMarkedAlt className='map-icon'/>
        Continente
      </Button>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose} sx={{backdropFilter: 'blur(10px)'}}>
        <DialogTitle sx={{textAlign:'center', color: '#004068'}}>¡Explora por continente!</DialogTitle>
        <DialogContent >
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            <FormControl sx={{ m: 1, minWidth: 200}}>
              <Select
                native
                value={country}
                onChange={handleChange}
                input={<OutlinedInput label="Age" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="">Continente</option>
                <option value={10}>América</option>
                <option value={20}>Europa</option>
                <option value={30}>África</option>
                <option value={40}>Asia</option>
                <option value={50}>Europa</option>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{color: '#004068'}}>Cancelar</Button>
          <Button onClick={handleClose} sx={{color: '#004068'}}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}





/*
export default function SelectComponent() {
  const [selectedContinent, setSelectedContinent] = useState('');
  
  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth sx={{ borderBottom: '2px solid white'}}>
        <NativeSelect
          defaultValue={5}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
          
          sx={{color: '#d4daed', textShadow: '4px 4px 2px rgba(0,0,0,0.6)'}}
        >
           <option value={5} disabled={!selectedContinent}>
            Continente
          </option>

          <option value={10}>América</option>
          <option value={20}>Europa</option>
          <option value={30}>África</option>
          <option value={40}>Asia</option>
          <option value={50}>Oceanía</option>
        </NativeSelect >
      </FormControl>
    </Box>
  );
}*/



/*import { useState } from 'react';
import './searchStyle.css'; 

const SelectComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="select-container">
      <select
        id="options"
        value={selectedOption}
        onChange={handleOptionChange}
        className="custom-select"
      >
        <option value="">Elige un continente</option>
        <option value="option1">América</option>
        <option value="option2">Europa</option>
        <option value="option3">África</option>
        <option value="option3">Asia</option>
        <option value="option3">Oceanía</option>
      </select>
    </div>
  );
};

export default SelectComponent;*/
