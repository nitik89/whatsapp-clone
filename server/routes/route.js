import express from 'express';
import { addUser, getUsers } from '../controllers/user-controller.js';
import { getConversation, newConversations } from '../controllers/conversation-controller.js';
import { getMessage, newMessage } from '../controllers/message-controller.js';
import upload from '../utils/upload.js';
import { getImage, uploadFile } from '../controllers/image-controllers.js';
import { getStory, getStoryDetails, uploadStory } from '../controllers/story-controller.js';


const route=express.Router();

route.post('/add',addUser);
route.get('/users',getUsers);
route.post('/conversation/add',newConversations);
route.post('/conversation/get', getConversation);
route.post('/message/add',newMessage);

route.get('/message/get/:id',getMessage);
route.post('/file/upload',upload.single("file"),uploadFile);
route.get('/file/:filename',getImage)

route.post('/story/upload',uploadStory);
route.get('/story/get',getStory);
route.get('/story/getStory/:id',getStoryDetails);
export default route;