import * as React from 'react';
//import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Trips } from '../../Trips';
import { Flags } from '../../Search/countries-flag/Flags';
import { FaTimeIcon } from './FaTimeIcon';
//import italyflag from '../../../../medio/italyflag.webp';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Flags 
      className='imgg'
      onClick={handleClickOpen} 
      />
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: '#e2e2e2'}}>
          <Toolbar sx={{boxShadow: '5px 0px 5px black'}}>
            <FaTimeIcon
              onClick={handleClose}
            >
              <CloseIcon />
            </FaTimeIcon>
          </Toolbar>
        </AppBar>
        <List sx={{padding: '15px', backgroundColor:'#091F31',  height: '100vh', overflowY: 'auto'}} >
          <Trips />
        </List>
      </Dialog>
    </React.Fragment>
  );
}