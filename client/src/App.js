import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import axios from "axios";
import { UserContext } from "./utils/UserContext";

function App() {
  const [authors, setAuthors] = useState([]);
  const [posts, setPosts] = useState([]);
  const [matchedPosts, setMatchedPosts] = useState([]);

  useEffect(() => {
    axios
      .get("api/authors")
      .then((res) => {
        const authorData = res.data;
        let nameArr = authorData.map((el) => el.name);
        setAuthors(authorData);

        console.log("data received!");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function fetchPosts() {
    let postsResponse = await axios("api/posts");
    let posts = await postsResponse.data;
    setPosts(posts);
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <UserContext.Provider
      value={{
        authors,
        setAuthors,
        posts,
        setPosts,
        matchedPosts,
        setMatchedPosts,
      }}
    >
      <div className="App">
        <>
          <Home />
        </>
      </div>
    </UserContext.Provider>
  );
}

export default App;
