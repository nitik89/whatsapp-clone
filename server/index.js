import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
const app=express();
import Connection from './database/db.js';
import route from './routes/route.js';
const PORT=8000;
app.get('/',(req,res)=>{
    res.send("Hello")
})
Connection();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',route);
app.listen(PORT,()=>{
    console.log(`server is active on ${PORT}`);
})
