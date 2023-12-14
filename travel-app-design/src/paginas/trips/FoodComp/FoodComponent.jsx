import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { RatingStars } from './RatingStars';
import PropTypes from 'prop-types';
import 'animate.css';

export const FoodComponent = ({ food1, food2, food3, food4, food1Img, food2Img, food3Img, food4Img }) => {
  const foods = [
    { name: food1, image: food1Img },
    { name: food2, image: food2Img },
    { name: food3, image: food3Img },
    { name: food4, image: food4Img },
  ];

  return (
    <ImageList className='ImageList__container' sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }}>
      {foods.map((food, index) => (
        <ImageListItem key={index} sx={{ flex: '1 0 200px' }}>
          <img
            srcSet={`${food.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${food.image}?w=248&fit=crop&auto=format`}
            alt={food.name}
            loading="lazy"
            className='adjusted-height animate__animated animate__fadeIn'
            style={{
              width: '100%',
              height: '20vh', 
              objectFit: 'cover'
            }}
          />
          <ImageListItemBar
            title={food.name}
            subtitle={<RatingStars />}
            position="below"
            sx={{ color: '#e2e2e2' }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

FoodComponent.propTypes = {
  food1: PropTypes.string,
  food2: PropTypes.string,
  food3: PropTypes.string,
  food4: PropTypes.string,
  food1Img: PropTypes.string,
  food2Img: PropTypes.string,
  food3Img: PropTypes.string,
  food4Img: PropTypes.string,
};
