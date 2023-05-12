import React, { useContext } from 'react'
import {
    Card,
    Typography,
  } from "@mui/material";

  import { UserContext } from "../utils/UserContext";

  const Posts = () => {
    const { posts, setPosts } = useContext(UserContext);
    const { matchedPosts, setMatchedPosts } = useContext(UserContext);


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