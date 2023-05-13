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

import "./components.css";

import { UserContext } from "../utils/UserContext";

const Dropdown = () => {
  const { users, setUser } = useContext(UserContext);
  const { posts, setPosts } = useContext(UserContext);
  const { comments, setComments } = useContext(UserContext);
  const { matchedComments, setMatchedComments } = useContext(UserContext);
  const { matchedPosts, setMatchedPosts } = useContext(UserContext);

  let postID = posts.map((onePost) => onePost.userId);

  let matchedArr = [];
  let commentsArr = [];

  function handleClick(el) {
    let userId = el.id;

    for (let i = 0; i < postID.length; i++) {
      if (userId === postID[i]) {
        matchedArr.push(posts[i]);
      }
    }
    setMatchedPosts(matchedArr);

    for (let i = 0; i < comments.length; i++) {
      if (matchedPosts[userId].id === comments[i].postId) {
        commentsArr.push(comments[i]);
      }
    }
    setMatchedComments(commentsArr);
  }

  return (
    <>
      <Grid className="dropdown" container>
        <Grid xs={6}>
          <FormControl fullWidth>
            <InputLabel>Author</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Author"
              // onChange={handleChange}
            >
              {users.map((el) => (
                <MenuItem onClick={() => handleClick(el)}>{el.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={6}>
          <FormControl fullWidth>
            <InputLabel>Count</InputLabel>
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
