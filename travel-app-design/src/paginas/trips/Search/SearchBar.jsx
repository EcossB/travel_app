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
import SelectComponent from './SelectComponent';
import './searchStyle.css';

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
  const [flagsInfo, setFlagsInfo] = useState(null);
  const [countriesLoad, setCountriesLoad] = useState(10);
  //const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);
  const [titleMessage, setTitleMessage] = useState('¡Busca tu destino!');
  const [showFlags, setShowFlags] = useState(true);
  const [showIcon, setShowIcon] = useState(true);

  /*const handleCountriesLoad = () => {
    setCountriesLoad((prevLoad) => prevLoad + 10);
  }*/
  
  useEffect(() => {
    // Llamada a la API para obtener todos los países al montar el componente
    const fetchAllCountries = async () => {
      try {
        setShowFlags(false)
        setShowIcon(false)
        const response = await fetch(`https://springgcp-405619.ue.r.appspot.com/paises?page=0&size=198`, {
          headers: {
            Authorization: token,
          },
        });

        const data = await response.json();

        if (response.status === 200) {
          const flagsData = data;
          const flagLinks = data.content.map((country) => country.bandera);
          setSelectedCountry(flagLinks);
          setFlagsInfo(flagsData);
          
        } else {
          console.log('Error fetching all countries:', data);
        }

        setShowFlags(true)
        setShowIcon(true)

      } catch (error) {
        console.error('Error fetching all countries:', error);
      }
    };

    fetchAllCountries();
  }, [token, countriesLoad]);

 
  const handleSearch = async (searchTerm) => {
    //setShowLoadMoreButton(false);

    try {
      const response = await fetch(`https://springgcp-405619.ue.r.appspot.com/paises/pais/${searchTerm}`, {
        headers: {
          Authorization: token,
        },
      });
      
      const data = await response.json();
      
      if (response.status === 200) {
        setTitleMessage(`Resultados de ${searchTerm}`)
        setSelectedCountryDetails(data);
        console.log(selectedCountry)
       
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

        console.log('País:', data);

      } else {
        console.log('País no encontrado');
        setFound(false)
      }

    } catch (error) {
      console.error('Error al realizar la búsqueda:', error, 'Renderizando SearchAppBar, token: ', token);
      setFound(false);
    }
  };

  const handleFilter = async (continent) => {
    setFound(true);
    //setShowLoadMoreButton(false);
    
    try {
      setShowIcon(false)
      setShowFlags(false)
      let url;
      if (continent === 'all') {
        // Si se selecciona 'all', obtén todos los países sin filtrar por continente
        url = `https://springgcp-405619.ue.r.appspot.com/paises?page=0&size=${countriesLoad}`;
        setTitleMessage(`¡Busca tu destino!`)
        //setShowLoadMoreButton(true);
        
      } else {
        // Si se selecciona un continente específico, filtra por ese continente
        url = `https://springgcp-405619.ue.r.appspot.com/paises/continentes/${continent}`;
        setTitleMessage(`¡Explora las maravillas de ${continent}!`)
      }
  
      const response = await fetch(url, {
        headers: {
          Authorization: token,
        },
      });

      const data = await response.json();
      
      if (response.status === 200 && data.length > 0) {
        const banderasEnlaces = continent === 'all' ? data.content.map((paises) => paises.bandera) : data.map((pais) => pais.bandera);
        setSelectedCountry(banderasEnlaces);
        console.log(`Países del continente ${continent}:`, data);

      } else {
        const allCountries = data.content.map((paises) => paises.bandera)
        setSelectedCountry(allCountries)
      }

      setShowFlags(true)
      setShowIcon(true)

    } catch (error) {
      console.error('Error al realizar el filtrado por continente:', error);
      setFound(false);
    }
  };
  

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleFlagClick = async (flagUrl) => {
    handleClickOpenDialog()
    try {
      // Verificar si flagsInfo o flagsInfo.content es null antes de continuar
      if (!flagsInfo || !flagsInfo.content) {
        console.log('La información de las banderas no está disponible.');
        return;
      }
  
      const selectedCountryData = flagsInfo.content.find((country) =>
        decodeURIComponent(country.bandera) === decodeURIComponent(flagUrl)
      );

  
     if (!selectedCountryData) {
        console.log('No se encontró el país correspondiente a la URL de la bandera:', flagUrl);
        console.log(selectedCountryData)
        return;
      }
  
      // Hacer la llamada a la nueva API para obtener detalles adicionales del país
      const response = await fetch(`https://springgcp-405619.ue.r.appspot.com/paises/pais/${encodeURIComponent(selectedCountryData.nombre)}`, {
        headers: {
          Authorization: token,
        },
      });
  
      const data = await response.json();
      //handleClickOpenDialog()
      if (response.status === 200) {
        console.log('Detalles adicionales del país:', data);
        setSelectedCountryDetails(data)

      } else {
        console.log('No se pudieron obtener detalles adicionales del país:', flagUrl);
      }
      
    } catch (error) {
      console.error('Error al obtener detalles del país:', error);

    }
  };
  
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ borderRadius: '25px', marginTop: '15px', background: 'rgba(87, 105, 117, 0.72)', backdropFilter: 'blur(10px)' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <CustomSelect label="Buscar país..." onSearch={handleSearch} />
          <SelectComponent onFilter={handleFilter}/>
        </Toolbar>
      </AppBar>
      {!found ? (
        <NotFound found={found} />
      ) : (
        // Si se encontraron países, mostrar las imágenes
        <>
        <ImageGallery images={selectedCountry} onFlagClick={handleFlagClick}  showWelcomeMessage={showFlags} showTitle={false} message={titleMessage} showIcon={showIcon}/>
        {/*
        
        <div className="btnLoad__container">
            {showLoadMoreButton && (
              <button className="loadbtn" onClick={handleCountriesLoad}>Cargar más ↓</button>
            )}
        </div>
        
        */}
        </>
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

