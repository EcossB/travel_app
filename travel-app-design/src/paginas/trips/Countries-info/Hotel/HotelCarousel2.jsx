import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { RatingStars } from './RatingStars';

export const HotelCarousel2 = () => {
    return (
      <ImageList className='ImageList__container' sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        
      }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={{ flex: '1 0 200px'}}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              className='adjusted-height'
              style={{ 
              width: '100%',
              height: window.innerWidth <= 400 ? '10vh' : '20vh', 
              objectFit: 'cover'
            }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<RatingStars />}
              position="below"
              sx={{ color: '#e2e2e2' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
    
    const itemData = [
      {
        img: 'https://www.elmejornido.com/sites/g/files/jgfbjl316/files/styles/facebook_share/public/recipe-thumbnail/116753-cc72869fabfc2bdfa036fd1fe0e2bad8_creamy_alfredo_pasta_long_left.jpg?itok=vtPFA3DF',
        title: 'Pasta',
        author: '@bkristastucchio',
      },
      {
        img: 'https://www.allrecipes.com/thmb/fFW1o307WSqFFYQ3-QXYVpnFj6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg',
        title: 'Pizza',
        author: '@rollelflex_graphy726',
      },
      {
        img: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/C7611167-F8F1-4452-9E2E-C35434ECAEF2/Derivates/7DADDDA3-AC3C-4947-8E1F-8A8F8F4D1A11.jpg',
        title: 'Risotto',
        author: '@helloimnik',
      },
      {
        img: 'https://vivirmejor.mx/wp-content/uploads/2023/08/ossobuco-1-2.jpg',
        title: 'Ossobuco ',
        author: '@nolanissac',
      }
    ];