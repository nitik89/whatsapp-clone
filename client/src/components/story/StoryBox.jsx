import React from 'react'
import { useState } from 'react';
import {Close, Translate} from '@mui/icons-material';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Backdrop, Box, Fade, IconButton, Modal } from '@mui/material';


const StoryBox = ({open,setOpen,data}) => {

  
    console.log('open ',data);
      
      const handleClose = () => {
        console.log('closeit');
        setOpen(false);
      };
  return (
    <Box sx={{position:"relative"}}>
    <Modal
  open={open}
  onClose={handleClose}
  closeAfterTransition
  sx={{
    position:"absolute",
    height:"75vh",
    width:"70%",
   alignContent:"center",
   left:"50%",
   top:"50%",
   transform:"translate(-50%,-50%)"
   
    
  }}
  
>
  <Fade in={open}>
    <div>
      <IconButton sx={{color:"white"}}onClick={handleClose}>
        <Close />
      </IconButton>
      <Carousel>
      
{data.map((dt,idx)=>( 
<div key={1}>
    <img src={dt.text} alt="Carousel Item 1"/>
  </div>))}
</Carousel>
    </div>
  </Fade>
</Modal>
    </Box>
  )
}

export default StoryBox