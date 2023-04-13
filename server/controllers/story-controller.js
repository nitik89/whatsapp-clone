import {StoryData} from "../model/StoryData.js";

export const uploadStory = async (req, res) => {

    // console.log(req.body);
    try {
        const storydata = new StoryData(req.body);
        await storydata.save();
        console.log(storydata);
        res.status(200).json({msg: "saved"});


    } catch (err) {
        return res.status(500).json({msg: 'Error'});
    }
}
export const getStory=async(req,res)=>{
   const data=await StoryData.distinct("userId");
   console.log(data);
   res.status(200).json(data);
}
export const getStoryDetails=async(req,res)=>{
    try{
    const {id}=req.params;
    console.log(id);
   const data= await StoryData.find({userId:id});
   res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err.message);
    }
}
