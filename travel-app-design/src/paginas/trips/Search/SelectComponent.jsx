import Box from '@mui/material/Box';
import { useState } from 'react';
//import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
/*

<InputLabel variant="standard" htmlFor="uncontrolled-native">
          Continente
        </InputLabel>

*/
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
}



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
