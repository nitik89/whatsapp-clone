import { Box, styled } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { useState } from "react";
import { getMessages, newMessage } from "../../../service/api";
import { useEffect } from "react";
import Message from "./Message";
import { useRef } from "react";


const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;
const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;
const Container=styled(Box)`
padding:1px 80px;
`
const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const [messages,setMessages]=useState([]);

  const [file,setFile]=useState();
  const [image,setImage]=useState('');
  const { account,socket, newmessages,
    setnewMessages } = useContext(AccountContext);
  const [incomingMessages,setincomingMessages]=useState(null);

  useEffect(()=>{
    socket.current.on('getMessage',data=>{
      setincomingMessages({
        ...data,
        createdAt:Date.now()
      })
    });
  },[])

   const scrollRef=useRef();
 
  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation?._id);
      console.log('GOT IT')
      setMessages(data);
    };
    conversation?._id && getMessageDetails();
  }, [person?._id, conversation?._id,newmessages]);

  useEffect(()=>{
    incomingMessages && conversation?.members?.includes(incomingMessages.senderId)&&
    setMessages(prev=>[...prev,incomingMessages])
  },[incomingMessages,conversation])

  // useEffect(()=>{
  //   scrollRef.current?.scrollIntoView({transition:'smooth'});
    
  // },[newmessages])
  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message={};
      if(!file){
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        };
      }
      else{
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }

      socket.current.emit('sendMessage',message);
      await newMessage(message);
      setValue("");
      setImage('');
      setFile('');
      setnewMessages(prev => !prev);
    }
  };
  return (
    <Wrapper>
      <Component>
        {messages&&messages.map((message)=>(
          <Container ref={scrollRef}>
          <Message message={message}/>
          </Container>
        ))}
        
      </Component>
      <Footer sendText={sendText} setValue={setValue} value={value} file={file} setFile={setFile} setImage={setImage}/>
    </Wrapper>
  );
};

export default Messages;
