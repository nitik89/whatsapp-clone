import { Box, Drawer, styled, Typography } from "@mui/material";
import React from "react";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";

const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #FFFFF;
  display: flex;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600px;
  }
`;
const Text = styled(Typography)`
  font-size: 18px;
`;
const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;
const drawerStyle = {
  left: 20,
  top: 17,
  height: "95%",
  width: "30%",
  boxShadow: "none",
};
const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <ArrowBack
          onClick={() => {
            console.log("hello");
            setOpen(false);
          }}
        />
        <Text>Profile</Text>
      </Header>
      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
};

export default InfoDrawer;
