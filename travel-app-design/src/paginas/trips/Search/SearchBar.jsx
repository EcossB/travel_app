import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FullScreenDialog from '../Countries-info/Dialog/Dialog';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from '../Search/Flags/ImageGallery';
import { NotFound } from './NotFound/NotFound';
import { Trips } from '../Trips';
import useAuthToken from '../../../hooks/useAuthToken';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%', 
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({

  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '22ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const CustomSelect = ({ onSearch  }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
      // Limpiar el contenido del input después de la búsqueda
      setSearchTerm('');
    }
  };

  return (
    <Search sx={{borderRadius: '15px'}} >
      <SearchIconWrapper>
        <SearchIcon onClick={handleSearch}/>
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Buscar país..."
        inputProps={{ 'aria-label': 'search' }}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
    </Search>
  );
};

CustomSelect.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default function SearchAppBar() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const token = useAuthToken();
  
  const [found, setFound] = useState(true);
  const [selectedCountryDetails, setSelectedCountryDetails] = useState(null);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  
  useEffect(() => {
    // Llamada a la API para obtener todos los países al montar el componente
    const fetchAllCountries = async () => {
      try {
        const response = await fetch('https://springgcp-405619.ue.r.appspot.com/paises', {
          headers: {
            Authorization: token,
          },
        });

        const data = await response.json();

        if (response.status === 200) {
          const flagLinks = data.content.map((country) => country.bandera);
          setSelectedCountry(flagLinks);
          
        } else {
          console.log('Error fetching all countries:', data);
        }
      } catch (error) {
        console.error('Error fetching all countries:', error);
      }
    };

    fetchAllCountries();
  }, [token]);

  

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`https://springgcp-405619.ue.r.appspot.com/paises/pais/${searchTerm}`, {
        headers: {
          Authorization: token,
        },
      });
      
      const data = await response.json();
      
      if (response.status === 200) {
        setSelectedCountryDetails(data);
       
        if (Array.isArray(data)) {
          setSelectedCountry(data.map((country) => country.bandera));

        } else if (typeof data === 'object' && data.bandera) {
          setSelectedCountry([data.bandera]);

        } else {
          console.log('Respuesta inesperada:', data);
        }

        setFound(true);
        setShowWelcomeMessage(true);
        setShowTitle(true); 

        console.log('Selected Country:', data);

      } else {
        console.log('País no encontrado');
        setFound(false)
      }

    } catch (error) {
      //console.log('Context in SearchAppBar:', authToken);
      console.error('Error al realizar la búsqueda:', error, 'Renderizando SearchAppBar, token: ', token);
      setFound(false);
    }
  };
  

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ borderRadius: '25px', marginTop: '15px', background: 'rgba(87, 105, 117, 0.72)', backdropFilter: 'blur(10px)' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <CustomSelect label="Buscar país..." onSearch={handleSearch} />
        </Toolbar>
      </AppBar>
      {!found ? (
        <NotFound found={found} />
      ) : (
        // Si se encontraron países, mostrar las imágenes
        <ImageGallery images={selectedCountry} onClick={handleClickOpenDialog} showWelcomeMessage={showWelcomeMessage} showTitle={showTitle} />
      )}
      <FullScreenDialog 
        openDialog={openDialog} 
        onClickIcon={handleCloseDialog} 
        tripsComponent={
          <Trips countryDetails={selectedCountryDetails} />
        }
        
      />
    </Box>
  );
}

