import React, { useContext } from 'react'
import {
    Card,
    Typography,
    Badge,
  } from "@mui/material";

import './components.css'

  import MailIcon from '@material-ui/icons/Mail';

  import { UserContext } from "../utils/UserContext";
 

  const Posts = () => {
    const { posts, setPosts } = useContext(UserContext);
    const { matchedPosts, setMatchedPosts } = useContext(UserContext);



    return (
      <>
        {matchedPosts.map((el) => (
            <Card className='post-padding' variant="outlined">
              <Typography variant="h5" >
                {el.title}
              </Typography>
              <Typography variant="body1">
                {el.body}
              </Typography>
              <Badge badgeContent='hello' color="primary">
  {/* <MailIcon color="action" /> */}
</Badge>
            </Card>
         
          ))}
          </>
    )
  }

  export default Posts;