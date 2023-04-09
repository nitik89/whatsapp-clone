import User from '../model/User.js';

export const addUser=async (req,res)=>{
try{
    
let exists = await User.findOne({sub:req.body.sub});

if(exists){
   return res.status(200).json({msg:'user already exits'})
}
const newuser=new User(req.body);
await newuser.save();
return res.status(200).json(newuser);
}
catch(err){
return res.status(500).json(err.message);
}
}
export const getUsers=async(req,res)=>{
    try{
        const users=await User.find({});
       
        return res.status(200).json(users);
    }
    catch(err){
        return res.status(500).json(err.message);
    }
}
