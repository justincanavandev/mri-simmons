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
  const { postCount, setPostCount } = useContext(UserContext);
  const { selectedPosts, setSelectedPosts } = useContext(UserContext);
  const { postsLength, setPostsLength } = useContext(UserContext);

  let postID = posts.map((onePost) => onePost.userId);

  let matchedArr = [];
  let commentsArr = [];
  let countMatchedArr = [];

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

  function postClick(el) {
    setPostsLength(el);

    if (el === 2 || el === 5 || el === 10) {
      for (let i = 0; i < el; i++) {
        countMatchedArr.push(matchedPosts[i]);
      }

      setSelectedPosts(countMatchedArr);
    }
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
              label="Author"
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
              label="Author"
            >
              {postCount.map((el) => (
                <MenuItem onClick={() => postClick(el)}>{el}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default Dropdown;
