import React, { useContext, useState } from "react";
import { Card, Typography, Badge, Button } from "@mui/material";

import "./components.css";

import { UserContext } from "../utils/UserContext";

const Postcard = () => {
    const { matchedComments, setMatchedComments } = useContext(UserContext);

    let matchedCommentsLength = matchedComments.length;

    return (

<p>hello</p>
    )

}
export default Postcard;