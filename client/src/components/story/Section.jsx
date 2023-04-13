import { Box, Divider, styled } from "@mui/material";
import React from "react";
import StoryHeader from "./StoryHeader";
import Users from "./Users";
const Component=styled(Box)`
height:85vh;
width:25%;
background-color:#1E262C;
margin-left:15px;
`
const Section = () => {
  return (
    <Component>
      <StoryHeader />
      <Divider variant="middle" color="#fafafa" />
      <Users/>
    </Component>
  );
};

export default Section;
