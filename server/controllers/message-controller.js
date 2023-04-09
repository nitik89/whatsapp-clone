import conversation from "../model/Conversation.js";
import message from "../model/Message.js";

export const newMessage=async (req,res)=>{
    // console.log(req.body);
    const newMessage = new message(req.body);
    try {
        await newMessage.save();
        // console.log(req.body);
        let data=await conversation.findById(req.body.conversationId);
        // console.log('data is here ',data);
        let message=await conversation.findByIdAndUpdate(req.body.conversationId, { messages: req.body.text });
        console.log('this is the updated message ',message);
        res.status(200).json("Message has been sent successfully");
    } catch (error) {
        // console.log(error);
        res.status(500).json(error);
    }
}

export const getMessage = async (req, res) => {
    try {
        // console.log(req.params.id)
        const messages = await message.find({ conversationId: req.params.id });
    
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json(error);
    }

}