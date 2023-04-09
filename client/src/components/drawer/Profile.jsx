import { Box, styled, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const Picture = styled(Box)`
  display: flex;
  justify-content: center;
`;
const Img = styled("img")({
  width: 200,
  borderRadius: "50%",
  padding: "25px 0",
  height: 200,
});

const BoxWrapper = styled(Box)`
  background: #ffffff;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  & :first-child {
    font-size: 13px;
    color: #009688;
    font-weight: 200;
  }
  & :last-child {
    margin: 14px 0;
    color: #4a4a4a;
  }
`;
const DescriptionContainer = styled(Box)`
  padding: 15px 20px 28px 30px;
  & > p {
    font-size: 13px;
    color: #8696a0;
  }
`;

const Profile = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <Picture>
        <Img src={account.picture} alt="dp" />
      </Picture>
      <BoxWrapper>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      <Box>
        <DescriptionContainer>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </DescriptionContainer>
      </Box>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Eat! Sleep! Code! Repeat! 😍</Typography>
      </BoxWrapper>
    </>
  );
};

export default Profile;
