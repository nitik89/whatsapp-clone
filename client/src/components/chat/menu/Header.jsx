import { Box, styled } from "@mui/material";
import React, { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import MessageIcon from "@mui/icons-material/Message";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import { useState } from "react";

const Component = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  margin-left: auto;

  & > * {
    margin-left: 2px;
    padding: 8px;
  }
  & :first-child {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;
const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
});
const Header = () => {
  const { account } = useContext(AccountContext);
  const [openDrawer, setOpenDrawer] = useState();

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <Component>
        <Image
          src={account.picture}
          alt="dp"
          onClick={() => {
            toggleDrawer();
          }}
        />
        <Wrapper>
          <MessageIcon />
          <HistoryToggleOffIcon/>
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Header;
