import React, { useContext, useState } from "react";
import { Card, Typography, Badge, Button } from "@mui/material";

import "./components.css";

import CommentIcon from '@mui/icons-material/Comment';

import { UserContext } from "../utils/UserContext";

const Posts = () => {
  const { matchedPosts, setMatchedPosts } = useContext(UserContext);
  const { matchedComments, setMatchedComments } = useContext(UserContext);
  const { selectedPosts, setSelectedPosts } = useContext(UserContext);
  const { postsLength, setPostsLength } = useContext(UserContext);
  const { matchedCommentsLength, setMatchedCommentsLength } = useContext(UserContext)


  let newPostsArr = [];

  function showMore() {
    let selectPlusLength = postsLength + selectedPosts.length;

    for (let i = 0; i < postsLength; i++) {
      newPostsArr.push(matchedPosts[i]);
    }

    for (let i = postsLength; i < selectPlusLength; i++) {
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
                
              </Badge>
            </Card>
          ))}

      {selectedPosts.length === matchedPosts.length ? (
        <div className="button-margin">
          <Button
            onClick={() => showMore()}
            variant="outlined"
            fullWidth
            disabled
          >
            Show More
          </Button>
        </div>
      ) : (
        <div className="button-margin">
          <Button onClick={() => showMore()} variant="outlined" fullWidth>
            Show More
          </Button>
        </div>
      )}
    </>
  );
};

export default Posts;
