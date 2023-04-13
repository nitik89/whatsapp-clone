import mongoose from "mongoose";

export const StoryDataSchema=new mongoose.Schema({
    userId:{
        type:String
    },
    name:{
        type:String
    },
    text:{
        type:String
    },
    caption:{
        type:String
    }
},
{ 
        timestamps: true
});
export const StoryData = mongoose.model('StoryData', StoryDataSchema);

