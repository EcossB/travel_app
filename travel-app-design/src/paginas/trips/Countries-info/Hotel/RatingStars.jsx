import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useState } from 'react';

export const RatingStars = () => {
  const [value, setValue] = useState(0);
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating 
        name="no-value" 
        value={value} 
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        emptyIcon={<StarBorderIcon sx={{ color: '#e2e2e2' }} />}
      />
    </Box>
  );
}
