import React, { useContext } from "react";
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material'

import { UserContext } from '../utils/UserContext'


const Dropdown = () => {

const { authors, setAuthor } = useContext(UserContext)
const { posts, setPosts } = useContext(UserContext)
// console.log(posts[0].posts[0])


let authorPosts = authors.map(el => el.posts)
// console.log(authorPosts)

let authorPostIds = authorPosts.map(el => el[0])
// console.log(authorPostIds)

let postID = posts.map(el => el._id)
// console.log(postID)

let matchedPosts = [];


function handleClick(el) {
  // e.preventDefault()
  // console.log(e.target.value)
  console.log(el.posts[0])
 

  for (let i=0; i<el.posts.length; i++) {

    for (let j=0; j<postID.length; j++) {
      // console.log(el.posts[i])
      // console.log(postID[j])
      if(el.posts[i]===postID[j]) {
        console.log(posts[j])
        matchedPosts.push(posts[j])
        console.log(matchedPosts)
      }
    }
  }
}


console.log(matchedPosts);

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

     {authors.map(el =><MenuItem 
     onClick={() => handleClick(el)}>
      {el.name}</MenuItem>)}
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
