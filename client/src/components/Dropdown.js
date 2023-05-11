import React, { useContext } from "react";
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material'

import { UserContext } from '../utils/UserContext'


const Dropdown = () => {

const { authors, setAuthor } = useContext(UserContext)
const { posts, setPosts } = useContext(UserContext)
// console.log(posts[0].posts[0])


let authorPostID = authors.map(el => el.posts)
console.log(authorPostID)

let newArr = authorPostID.map(el => el[0])
console.log(newArr)

let postID = posts.map(el => el._id)
console.log(postID)

for (let i=0; i<newArr.length; i++) {
  if (newArr[i]===postID[2]) {
    console.log('newArr[i] ' + newArr[i])
  }
}


// if (authorPostID === postID) {
//   console.log(authorPostID)
// }



console.log(posts)

  return (
    <>
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

     {authors.map(el =><MenuItem>{el.name}</MenuItem>)}
  </Select>
</FormControl>
</Grid>
<Grid xs={6}>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Count</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={age}
    label="Author"
    // onChange={handleChange}
  >
    <MenuItem value={2}>2</MenuItem>
    <MenuItem value={5}>5</MenuItem>
    <MenuItem value={10}>10</MenuItem>
  </Select>
</FormControl>
</Grid>
</Grid>
  

    </>
  );
};

export default Dropdown;
