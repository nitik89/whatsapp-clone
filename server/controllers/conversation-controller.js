import conversation from "../model/Conversation.js";


export const newConversations = async (request, response) => {
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;

    const exist = await conversation.findOne({ members: { $all: [receiverId, senderId]  }})
    // console.log('exists',exist);
    if(exist) {
        response.status(200).json('conversation already exists');
        return;
    }

    const newConversation = new conversation({
        members: [senderId, receiverId]
    });

    try {
        const savedConversation = await newConversation.save();
        response.status(200).json(savedConversation);
    } catch (error) {
        response.status(500).json(error);
    }

}

export const getConversation=async (req,res)=>{
    try{
        
      console.log('get Conversation body ',req.body,req.body.senderId, req.body.receiverId);
        
        let conver=await conversation.findOne({members:{$all:[req.body.senderId, req.body.receiverId]}});
       console.log('conver',conver);
        res.status(200).json(conver);
    }
    catch(err){
        res.status(500).json(err.message);
    }
}