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
  const { matchedComments, setMatchedComments} = useContext(UserContext)
  

  const [matchedCommentsLength, setMatchedCommentsLength] = useState([])

  const { matchedPosts, setMatchedPosts } = useContext(UserContext);

  let postID = posts.map((onePost) => onePost.userId);
  // console.log(posts)

  let matchedArr = [];
  let commentsArr = [];
  let matchedCommentsArr = [];

  function handleClick(el) {
    let userId = el.id;
    // console.log(userId)
 

    for (let i = 0; i < postID.length; i++) {
      if (userId === postID[i]) {
        matchedArr.push(posts[i]);
      }
    }
    setMatchedPosts(matchedArr);


  for (let i=0; i<matchedPosts.length; i++) {
    console.log(matchedPosts[i])
    for (let j=0; j<comments.length; j++) {
      if(matchedPosts[i].id===comments[j].postId) {
        commentsArr.push(comments[j])
      }
    }
  }
  setMatchedComments(commentsArr)

  for (let i=0; i<matchedComments.length; i++) {
  
    if(matchedPosts[userId].id===matchedComments[i].postId) {
      matchedCommentsArr.push(matchedComments[i])
    }
}

setMatchedCommentsLength(matchedCommentsArr.length)

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
