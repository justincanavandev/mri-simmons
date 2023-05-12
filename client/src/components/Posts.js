import React, { useContext, useState } from 'react'
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    Card,
    Typography,
  } from "@mui/material";

  import { UserContext } from "../utils/UserContext";

  const Posts = () => {
    const { authors, setAuthor } = useContext(UserContext);
    const { posts, setPosts } = useContext(UserContext);
    const [ matchedPosts, setMatchedPosts ] = useState([]);

    let postID = posts.map((el) => el._id);

  let matchedArr = [];

//   function handleClick(el) {
//     for (let i = 0; i < el.posts.length; i++) {
//       for (let j = 0; j < postID.length; j++) {
//         if (el.posts[i] === postID[j]) {
//           matchedArr.push(posts[j]);
//         }
//       }
//     }
//     setMatchedPosts(matchedArr);
//   }

    return (
      <>
        {matchedPosts.map((el) => (
            <Card variant="outlined">
              <Typography variant="h5" >
                {el.title}
              </Typography>
              <Typography variant="body1">
                {el.body}
              </Typography>
            </Card>
          ))}
          </>
    )
  }

  export default Posts;