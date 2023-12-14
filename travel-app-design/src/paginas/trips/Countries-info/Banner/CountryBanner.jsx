import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';


export default function ImgMediaCard({imageBanner}) {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250px"
        image={imageBanner}
      />
    </Card>
  );
}

ImgMediaCard.propTypes = {
    imageBanner: PropTypes.any,
}