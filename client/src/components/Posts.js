import React, { useContext, useState } from "react";
import { Card, Typography, Badge, Button } from "@mui/material";

import "./components.css";

import MailIcon from "@material-ui/icons/Mail";

import { UserContext } from "../utils/UserContext";

const Posts = () => {
  const { matchedPosts, setMatchedPosts } = useContext(UserContext);
  const { matchedComments, setMatchedComments } = useContext(UserContext);
  const { selectedPosts, setSelectedPosts } = useContext(UserContext);
  const { postsLength, setPostsLength } = useContext(UserContext);

  let matchedCommentsLength = matchedComments.length;

  let newPostsArr = [];

  function showMore() {
    let selectPlusLength = postsLength + selectedPosts.length;

    for (let i = 0; i < postsLength; i++) {
      // console.log(matchedPosts[i]);
      newPostsArr.push(matchedPosts[i]);
    }

    for (let i = postsLength; i < selectPlusLength; i++) {
      // console.log(matchedPosts[i]);
      newPostsArr.push(matchedPosts[i]);
    }

    setSelectedPosts(newPostsArr);
  }

  return (
    <>
      {selectedPosts.length > 1
        ? selectedPosts.map((el) => (
            <Card className="post-padding" variant="outlined">
              <Typography variant="h5">{el.title} HELLO</Typography>
              <Typography variant="body1">{el.body}</Typography>
              <Badge badgeContent={matchedCommentsLength} color="primary">
                {/* <MailIcon color="action" /> */}
              </Badge>
            </Card>
          ))
        : matchedPosts.map((el) => (
            <Card className="post-padding" variant="outlined">
              <Typography variant="h5">{el.title}</Typography>
              <Typography variant="body1">{el.body}</Typography>
              <Badge badgeContent={matchedCommentsLength} color="primary">
                {/* <MailIcon color="action" /> */}
              </Badge>
            </Card>
          ))}

        {selectedPosts.length===matchedPosts.length ?
        <p>There are no more posts!</p> 
        :
      <Button onClick={() => showMore()} variant="outlined">
        Show More
      </Button>
}
    </>
  );
};

export default Posts;
