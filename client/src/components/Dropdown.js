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
  let selectedUserPosts = []

  let user = [];

  const [selectedUser, setSelectedUser] = useState([])

  function handleClick(el) {
    let userId = el.id;

    setSelectedUser(el)

    console.log(selectedUser)
    console.log(postsLength)
    


    // if (postsLength === 2 || postsLength === 5 || postsLength === 10) {
      
      for (let j=0; j<users.length; j++) {
        // console.log(users[j].id)
        // console.log(userId)
        if (users[j].id===userId) {  
          user.push(users[j])
          // setSelectedUser(users[j])  
      }
      console.log(user)
    }
  setSelectedUser(user)

  console.log(selectedUser)
  console.log(user)


      // for (let i = 0; i < posts.length; i++) {
      //   console.log(posts[i].userId)
      //   console.log(selectedUser.id)
      //   if(posts[i].userId===selectedUser.id) {
      //     selectedUserPosts.push(posts[i])
      //   }
      // }

      for (let i = 0; i < posts.length; i++) {
        console.log(user[0].id)
        if(posts[i].userId===user[0].id) {
          console.log(posts[i])
          selectedUserPosts.push(posts[i])
        }
      }
      setSelectedPosts(selectedUserPosts)


    console.log(selectedUserPosts)

      // for (let i = 0; i < postsLength; i++) {
      //   console.log(matchedPosts[i])
    
      //   countMatchedArr.push(matchedPosts[i]);
      // }
      // setSelectedPosts(countMatchedArr);
    // } 

    for (let i = 0; i < postID.length; i++) {
    
      if (userId === postID[i]) {
        matchedArr.push(posts[i]);
      }
 
    }
    setMatchedPosts(matchedArr);

    for (let i = 0; i < comments.length; i++) {
      // console.log(userId)
      if (matchedArr[userId] && matchedArr[userId].id === comments[i].postId) {

        commentsArr.push(comments[i]);
      }
    }
    setMatchedComments(commentsArr);
 
    
  }
  setMatchedCommentsLength(matchedComments.length)


            //END HANDLECLICK FUNCTION


  function postClick(el) {
    setPostsLength(el);

    let selectedUserId = selectedUser.id;
 
    for (let i = 0; i < posts.length; i++) {
      if(posts[i].userId===selectedUserId) {

        matchedArr.push(posts[i])
      }
    
    }
 
    let userId = matchedPosts[0].userId;

    if (el === 2 || el === 5 || el === 10) {
    
      for (let i=0; i<users.length; i++) {
        console.log(userId)
        if (users[i].id===userId) {    
          setSelectedUser(users[i])
      }
    
    }
    console.log(selectedUser)

      for (let i = 0; i < el; i++) {
        console.log(matchedPosts[i])
        console.log(selectedUser)
    
        countMatchedArr.push(matchedPosts[i]);
      }
      setSelectedPosts(countMatchedArr);
      console.log(selectedPosts)
    }
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
