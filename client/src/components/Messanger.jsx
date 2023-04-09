import React, { useContext } from "react";
import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";

const Component = styled(Box)`
  height: 200vh;
  background: #dcdcdc;
  color: black;
`;

const Header = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;
const Messanger = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <Component>
        {account ? (
          <>
            <Header>
              <Toolbar></Toolbar>
            </Header>
            <ChatDialog />
          </>
        ) : (
          <>
            <LoginHeader>
              <Toolbar></Toolbar>
            </LoginHeader>
            <LoginDialog />
          </>
        )}
      </Component>
    </>
  );
};

export default Messanger;
