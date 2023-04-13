import mongoose from "mongoose";



const StorySchema=new mongoose.Schema({
    userId:{
        type:String
    },
    name:{
        type:String
    }
   
},
{ 
        timestamps: true
});
export const Story = mongoose.model('Story', StorySchema);
