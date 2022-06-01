import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//     secondary: {
//         backgroundColor: '#21B6A8',
//     },
// }));

export default function HeaderAppBar() {

    // const classes = useStyles();

    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#21B6A8"}} color="secondary">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            View Audience
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
