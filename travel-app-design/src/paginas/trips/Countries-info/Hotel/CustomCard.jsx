import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Button, CardActions, Grid } from '@mui/material';

export const CustomCard = ({destinyURL, className}) => {
  return (
    <Card sx={{ maxWidth: '100%',borderRadius: '25px'}} className={className}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <CardMedia
              component="img"
              height="100%"
              image={destinyURL}
              alt="countrypic"
            />
          </Grid>
          <Grid item xs={12} sm={8} sx={{marginTop: '5%'}}>
            <CardContent>
              <Typography gutterBottom variant="h2" component="div" sx={{fontSize: '6.5vmin', fontFamily: 'Be Vietnam Pro', fontWeight: '700'}}>
                Disfruta de este destino
              </Typography>
              <CardActions>
              <Button size="medium" sx={{backgroundColor: '#3F7BFD', color: '#fff', borderRadius: '25px', width: '15em','&:hover': { backgroundColor: '#3a61b5' }}}>
                ¡Reserva un vuelo!
              </Button>
            </CardActions>
            </CardContent>
          </Grid>
        </Grid>
    </Card>
  );
}

CustomCard.propTypes = {
  destinyURL: PropTypes.any,
  className: PropTypes.any,
}
