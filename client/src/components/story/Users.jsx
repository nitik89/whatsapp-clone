import React, { useEffect, useState } from 'react'
import { getMyUsers, getStoryDetails, getUsers } from '../../service/api';
import { Box, styled } from '@mui/material';
import StoryBox from './StoryBox';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';

const Component=styled(Box)`
background-color:#fff;
color:black;

`

const Users = () => {
  const [users,setUsers]=useState([]);
  const [storyUsers,setStoryUsers]=useState([]);
  
  const [storyData,setStoryData]=useState([]);
  const [open,setOpen]=useState(false);
console.log('open users',open);
  const getDetails=async (id)=>{
    console.log(id);
    const stories=await getStoryDetails(id);
    setStoryData(stories.data);
    setOpen(true);
  }
  useEffect(()=>{
    const getUser=async ()=>{
       const data=await getUsers();
       setUsers(data);
       const data1=await getMyUsers();
      
       setStoryUsers(data1.data);
       
    }
    getUser();
  },[])
  return (
   <>
  {users?.map(users=>(storyUsers.filter(id=>id==users.sub)
  &&
  <Box >
  <Component onClick={()=>getDetails(users.sub)}> 
  <img src={users.picture} alt="dp"  /> {users.name} 
  </Component>
  {open?<StoryBox open={open} setOpen={setOpen} data={storyData}/>:<></>}
  </Box>
  
  ))}
   </>
  )
}

export default Users