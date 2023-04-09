import { Box, Typography, styled } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'

import { UserContext } from '../../../context/UserProvider'
import { AccountContext } from '../../../context/AccountProvider'
import { setConversation,getConversation } from '../../../service/api'
import { formatDate } from '../../../utils/commom-utils'

const Component=styled(Box)`
display:flex;
height:45px;
padding:13px 0;
cursor:pointer;
`
const Container=styled(Box)`
display:flex;
`
const Timestamp=styled(Typography)`
font-size:12px;
margin-left:auto;
color:#0000999;
margin-right:20px;
`
const Text=styled(Typography)`
font-size:14px;
color:rgba(0,0,0,0.6);
margin-right:20px;
`
const Image=styled('img')({
    width:50,
    height:50,
    borderRadius:'50%',
    padding:'0 14px',
    objectFit:'cover'
})
const Conversation = ({user}) => {
  const {setPerson}=useContext(UserContext);
  const {account, newmessages,setnewMessages}=useContext(AccountContext);
  const[message,setMessage]=useState({});

//    console.log(setPerson);
console.log(message);
useEffect(()=>{
  const getConversations=async()=>{
    const data=await getConversation({senderId:account.sub,receiverId:user.sub});
    console.log('the accounts ',account.sub,user.sub);
    console.log('data from conversation',data);
    setMessage({text:data?.messages,timestamp:data?.createdAt});
  }
  getConversations();
},[newmessages])
const getUser=async ()=>{
  setPerson(user)
  let resp=await setConversation({senderId:account.sub,receiverId:user.sub});

  
}

  return (
    <Component onClick={()=>{getUser()}}>
        <Box>
            <Image src={user.picture} alt="dp"/>
        </Box>
        <Box style={{width:'100%'}}>
            <Container>
                <Typography>{user.name}</Typography>
                {
                  message?.text && <Timestamp>{formatDate(message?.timestamp)}</Timestamp>
                }
                
            </Container>
            <Box>
              <Text>{message?.text?.includes('localhost')?'media':message.text}</Text>
            </Box>
        </Box>
    </Component>
  )
}

export default Conversation