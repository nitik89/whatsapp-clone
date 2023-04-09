import mongoose from "mongoose";
const Conversation=new mongoose.Schema({
members:{
type:Array
},
messages:{
type:String
}},
{
    timestamps:true
})
const conversation=mongoose.model('Conversation',Conversation);
export default conversation;