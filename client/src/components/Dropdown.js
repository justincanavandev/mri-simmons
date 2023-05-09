import React, { useContext } from "react";
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material'

import { UserContext } from '../utils/UserContext'


const Dropdown = () => {

const { user, setUser } = useContext(UserContext)

  return (
    <>
    <p>{user}</p>
    <button onClick={()=> setUser('steven')}change value></button>
  <Grid container >
  <Grid xs={6}>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Author</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={age}
    label="Author"
    // onChange={handleChange}
  >
    {/* <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem> */}
  </Select>
</FormControl>
</Grid>
<Grid xs={6}>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Author</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={age}
    label="Author"
    // onChange={handleChange}
  >
    {/* <MenuItem value={2}>2</MenuItem>
    <MenuItem value={5}>5</MenuItem>
    <MenuItem value={10}>10</MenuItem> */}
  </Select>
</FormControl>
</Grid>
</Grid>
  

    </>
  );
};

export default Dropdown;
