import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import PopContent from './PopContent';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//     secondary: {
//         backgroundColor: '#21B6A8',
//     },
// }));

export default function PopShow() {

    // const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    return (
    <Box sx={{ flexGrow: 1, margin: '10px' }}>
       <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="outlined" style={{ color: "#21B6A8",  }} onClick={toggleDrawer(true)} >Save Segment</Button>
        </Grid>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: "35%" },
          }}
        >
          <PopContent />
        </SwipeableDrawer>
       </Grid>
    </Box>
  );
}
