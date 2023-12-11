import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../ImageGallery.css';

export const PaginationComponent = () => {
  return (
    <Stack spacing={2} className='pa'>
      <Pagination className='custom-pagination' count={10} color="primary"/>
      {/*<Pagination count={10} disabled /> */}
    </Stack>
  );
}