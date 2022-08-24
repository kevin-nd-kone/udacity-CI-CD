import express from "express";

const app = express();

app.get('/', async(req, res)=>{
    res.status(200).send("Hello World");
})


app.listen("8080",()=>{
    console.log( `server running http://localhost:8080` );
    console.log( `press CTRL+C to stop server` );
})



