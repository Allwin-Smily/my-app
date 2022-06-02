import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function PopContent() {

  const options = [
    { value: 'first_name', label: 'First Name' },
    { value: 'last_name', label: 'Last Name' },
    { value: 'gender', label: 'Gender' },
    { value: 'age', label: 'Age' },
    { value: 'account_name', label: 'Account Name' },
    { value: 'city', label: 'City' },
    { value: 'state', label: 'State' },
  ];

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: 250,
      },
    },
  };

  const [segmentName, setSegmentName] = React.useState('');
  const [fieldsName, setFieldsName] = React.useState([{fieldName: ''}]);

  const handleAddFields = () => {
    let newfield = { fieldName: '' }
    setFieldsName([...fieldsName, newfield])
  };

  const handleRemoveFields = (index) => {
    let data = [...fieldsName];
    data.splice(index, 1);
    setFieldsName(data);
  };

  const handleChange = (index, event) => {
    let data = [...fieldsName];
    data[index][event.target.name] = event.target.value;
    setFieldsName(data);
 }

  const handleSegmentNameChange = (event) => {
    setSegmentName(event.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    // fetch('https://webhook.site/4e4bfbac-499e-4d56-a1ea-0fc36bc6ed71', {
    //   method: "POST",
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(e)
    // })
    // .then((response) => response.json())
    // .then((result) => {
    //   console.log("result");
    //   console.log(result);
    // })
    console.log(segmentName);
    console.log(fieldsName);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#21B6A8"}} color="secondary">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Saving Segment
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ margin: '20px' }}>
        <Typography variant="subtitle1" color="inherit" component="div">
          Enter the Name of the Segment
        </Typography>
        <TextField id="outlined-basic" label="Name of the Segment" name="segment_name" value={segmentName} onChange={handleSegmentNameChange} variant="outlined" />
        <Typography variant="subtitle1" color="inherit" component="div">
          To save your segment, you need to add the schemas to build the query
        </Typography>
      </Box>
      <Box sx={{ margin: '20px' }}>
      {fieldsName.map((data,index) => {
        return(
        <FormControl sx={{ m: 1, width: 400, mt: 3, display: 'block' }} key={index}>
          <InputLabel  id="select">Add Schema to Segment</InputLabel>
          <Select
            id="select"
            labelId="select"
            defaultValue = ''
            // value={segmentName}
            name={data.fieldName}
            onChange={event => handleChange(index, event)}
            label="Add Schema to Segment"
            MenuProps={MenuProps}
            sx={{ width: 300 }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={index}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <Button variant="outlined" size="large" onClick={() => handleRemoveFields(index)} sx={{ marginLeft: '10px', padding:'14px 0px 14px 10px' }} startIcon={<RemoveIcon />}></Button>
        </FormControl>
        )})}
        <Button variant="text" style={{ color: "#21B6A8" }} onClick={handleAddFields} ><AddIcon /> Add New Schema </Button>
      </Box>
      <Box sx={{ padding: '20px' }} style={{ backgroundColor: '#f5f5f5' }}>
        <Box>
          <Button variant="contained" sx={{ marginRight: '10px' }} style={{ color: "#fff", backgroundColor: '#21B6A8' }} onClick={submitHandle}>Save Segment</Button>
          <Button variant="contained" sx={{ marginLeft: '10px' }} style={{ color: "red", backgroundColor: '#fff' }} >Cancel</Button>
        </Box>
      </Box>
    </Box>
  );
}
