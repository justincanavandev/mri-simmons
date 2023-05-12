import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import axios from "axios";
import { UserContext } from "./utils/UserContext";
import {
  Container
} from "@mui/material";

function App() {
  // const [authors, setAuthors] = useState([]);
  // const [posts, setPosts] = useState([]);
  const [matchedPosts, setMatchedPosts] = useState([]);

  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

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
          let filteredComments = commentData.map(comment => ({id: comment.id, postId: comment.postId, name: comment.name, body: comment.body}))     
          setComments(filteredComments)  
      })
      .catch(err => {
          console.log(err) 
      })

      }, []);

  // useEffect(() => {
  //   axios
  //     .get("api/authors")
  //     .then((res) => {
  //       const authorData = res.data;
  //       setAuthors(authorData);

  //       console.log("data received!");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // async function fetchPosts() {
  //   let postsResponse = await axios("api/posts");
  //   let posts = await postsResponse.data;
  //   setPosts(posts);
  // }
  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        posts,
        setPosts,
        matchedPosts,
        setMatchedPosts,
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
