import React, { useContext, useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Card,
  Typography,
} from "@mui/material";

import './components.css'

import { UserContext } from "../utils/UserContext";

const Dropdown = () => {
  const { authors, setAuthor } = useContext(UserContext);
  const { posts, setPosts } = useContext(UserContext);
  const { matchedPosts, setMatchedPosts } = useContext(UserContext);

  let postID = posts.map((el) => el._id);

  let matchedArr = [];

  function handleClick(el) {
    for (let i = 0; i < el.posts.length; i++) {
      for (let j = 0; j < postID.length; j++) {
        if (el.posts[i] === postID[j]) {
          matchedArr.push(posts[j]);
        }
      }
    }
    setMatchedPosts(matchedArr);
  }

  return (
    <>
      <Grid className='dropdown' container>
        <Grid xs={6}>
          <FormControl  fullWidth>
            <InputLabel >Author</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Author"
              // onChange={handleChange}
            >
              {authors.map((el) => (
                <MenuItem onClick={() => handleClick(el)}>{el.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={6}>
          <FormControl fullWidth>
            <InputLabel >Count</InputLabel>
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
