
import express from 'express';



const app=express();


app.get("/", (req,res)=>{
    res.send("Hello world")
})

app.get("/harry",(req,res)=>{
    res.send("namaste anna!!");
})

//test

app.listen(3000,()=>{
    console.log('App is running on port 3000');
});