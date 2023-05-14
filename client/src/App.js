import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import axios from "axios";
import { UserContext } from "./utils/UserContext";
import {
  Container
} from "@mui/material";

function App() {
  const [matchedPosts, setMatchedPosts] = useState([]);
  const [matchedComments, setMatchedComments] = useState([]);
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [postCount, setPostCount] = useState([2,5,10])
  const [selectedPosts, setSelectedPosts] = useState([])
  const [postsLength, setPostsLength] = useState()

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
          const userData = res.data;
          let filteredUsers = userData.map(user => ({id: user.id, name: user.name}))     
          setUsers(filteredUsers)  
      })
      .catch(err => {
          console.log(err) 
      })
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
          const postData = res.data;
          setPosts(postData)  
      })
      .catch(err => {
          console.log(err) 
      })
      axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
          const commentData = res.data;
          setComments(commentData)  
      })
      .catch(err => {
          console.log(err) 
      })
      }, []);

      // console.log(posts); //post.id
      // console.log(comments) //comment.postId

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        posts,
        setPosts,
        matchedPosts,
        setMatchedPosts,
        comments,
        setComments,
        matchedComments,
        setMatchedComments,
        postCount,
        setPostCount,
        selectedPosts,
        setSelectedPosts,
        postsLength,
        setPostsLength
      }}
    >
      <div>
        <>
        <Container fixed>
          <Home />
          </Container>
        </>
      </div>
    </UserContext.Provider>
  );
}

export default App;
