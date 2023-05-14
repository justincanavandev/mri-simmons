import React, { useContext, useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,

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
  const { matchedCommentsLength, setMatchedCommentsLength } = useContext(UserContext)

  let postID = posts.map((onePost) => onePost.userId);

  let matchedArr = [];
  let commentsArr = [];
  let countMatchedArr = [];

  function handleClick(el) {
    let userId = el.id;
    console.log(userId);
 
    console.log(postID)
  

    for (let i = 0; i < postID.length; i++) {
      if (userId === postID[i]) {
        // console.log(userId)
        // console.log(postID[i])

        matchedArr.push(posts[i]);
      }
      
    }
    setMatchedPosts(matchedArr);

    console.log(userId)
    console.log(matchedArr)
   

    for (let i = 0; i < comments.length; i++) {
      console.log(userId)
      if (matchedArr[userId] && matchedArr[userId].id === comments[i].postId) {

        commentsArr.push(comments[i]);
      }
    }
    setMatchedComments(commentsArr);
    
    
  }
  console.log(matchedComments)
  setMatchedCommentsLength(matchedComments.length)
  console.log(matchedCommentsLength)

  function postClick(el) {
    setPostsLength(el);

    if (el === 2 || el === 5 || el === 10) {
      for (let i = 0; i < el; i++) {
        countMatchedArr.push(matchedPosts[i]);
      }
    }
    setSelectedPosts(countMatchedArr);
  }


  return (
    <>
    <div>
      <Grid className="dropdown select-padding" container>
        <Grid xs={6}>
          <FormControl fullWidth>
            <InputLabel>Author</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Author"
              className='author-margin'
              variant="outlined"
            >
              {users.map((el) => (
                <MenuItem onClick={() => handleClick(el)}>{el.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
       
      
        <Grid xs={6}>
          <FormControl fullWidth>
            <InputLabel className='count-margin'>Count</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Author"
              className='count-margin'
              variant="outlined"
            >
              {postCount.map((el) => (
                <MenuItem onClick={() => postClick(el)}>{el}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      </div>
    </>
  );
};

export default Dropdown;
