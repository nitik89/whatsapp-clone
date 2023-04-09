import { Box } from '@mui/material'
import React from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { useContext } from 'react'
import { UserContext } from '../../../context/UserProvider'
import { AccountContext } from '../../../context/AccountProvider'
import { useEffect } from 'react'
import { getConversation } from '../../../service/api'
import { useState } from 'react'

const ChatBox = () => {
  const {person}=useContext(UserContext);
  const {account}=useContext(AccountContext);
  const [conversation,setConversation]=useState({});
  useEffect(()=>{
    const getConversationDetails=async ()=>{
      let data=await getConversation({senderId:account.sub,receiverId:person.sub});
      setConversation(data);
    }
    getConversationDetails();
  },[person.sub])
  return (
   <Box style={{height:'75%'}}>
      <ChatHeader person={person}/>
      <Messages person={person} conversation={conversation}/>
   </Box>
  )
}

export default ChatBox