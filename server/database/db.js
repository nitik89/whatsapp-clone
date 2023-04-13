import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
// console.log(USERNAME,PASSWORD);
const Connection=async()=>{
   
    const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.nstrnep.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true});
        console.log("Database connected succesfully");
    }
    catch(err){
        console.log("error while connecting to the database",err.message);
    }
}
export default Connection;