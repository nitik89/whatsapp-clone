import axios from 'axios';
const url='http://localhost:8000';

export const addUser=async (data)=>{
    try{
       await axios.post(`${url}/add`,data);
    }
    catch(err){
        console.log(err);
    }
}

export const getUsers=async ()=>{
    try{
       let response=await axios.get(`${url}/users`);
       return response.data;
    }
    catch(err){
        console.log(err.message);
    }
}
export const setConversation=async (data)=>{
    console.log(data);
 try{
   
    await axios.post(`${url}/conversation/add`,data)
 }  
 catch(err){
    console.log(err.message);
 } 
}

export const getConversation = async (users) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, users);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error);
    }
}

export const newMessage=async(data)=>{
    try{
        await axios.post(`${url}/message/add`,data);
    }
    catch(err){
        console.log(err.message);
    }
}
export const getMessages=async(id)=>{
    try{
        let resp=await axios.get(`${url}/message/get/${id}`);
        return resp.data
    }
    catch(err){
        console.log(err.message);
    }
}

export const uploadFile=async (data)=>{
    try{
        console.log(data);
        return await axios.post(`${url}/file/upload`,data);
    }
    catch(err){
        console.log(err.message);
    }
}
export const uploadStory=async (data)=>{
    try{
        console.log(data);
        return await axios.post(`${url}/story/upload`,data);
    }
    catch(err){
        console.log(err.message);
    }
}
export const getMyUsers=async()=>{
    try{
      return  await axios.get(`${url}/story/get`)
    }
    catch(err){
        console.log(err.message);
    
    }
}
export const getStoryDetails=async(id)=>{
    try{
        return await axios.get(`${url}/story/getStory/${id}`,)
    }
    catch(err){
        console.log(err.message);
    }
}