import * as React from 'react';
//import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
//import { Trips } from '../../Trips';
import { FaTimeIcon } from './FaTimeIcon';
import PropTypes from 'prop-types';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ info, onClose, onClickIcon, openDialog, tripsComponent }) {

  return (
    <React.Fragment>
      {info}
      <Dialog
        fullScreen
        open={openDialog}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: '#e2e2e2'}}>
          <Toolbar sx={{boxShadow: '5px 0px 5px black'}}>
            <FaTimeIcon
              onClick={onClickIcon}
            >
              <CloseIcon />
            </FaTimeIcon>
          </Toolbar>
        </AppBar>
        <List sx={{padding: '15px', backgroundColor:'#091F31',  height: '100vh', overflowY: 'auto'}} >
          {tripsComponent}
        </List>
      </Dialog>
    </React.Fragment>
  );
}

FullScreenDialog.propTypes = {
  info: PropTypes.any,
  onClickIcon: PropTypes.any,
  onClose: PropTypes.any,
  openDialog: PropTypes.any,
  tripsComponent: PropTypes.any,
};
