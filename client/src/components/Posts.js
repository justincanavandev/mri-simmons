import React, { useContext, useState } from "react";
import { Card, Typography, Badge } from "@mui/material";

import "./components.css";

import MailIcon from "@material-ui/icons/Mail";

import { UserContext } from "../utils/UserContext";

const Posts = () => {
  const { matchedPosts, setMatchedPosts } = useContext(UserContext);
  const { matchedComments, setMatchedComments } = useContext(UserContext);

  let matchedCommentsLength = matchedComments.length;
  console.log(matchedCommentsLength);

  return (
    <>
      {matchedPosts.map((el) => (
        <Card className="post-padding" variant="outlined">
          <Typography variant="h5">{el.title}</Typography>
          <Typography variant="body1">{el.body}</Typography>
          <Badge badgeContent={matchedCommentsLength} color="primary">
            {/* <MailIcon color="action" /> */}
          </Badge>
        </Card>
      ))}
    </>
  );
};

export default Posts;
