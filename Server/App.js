const express = require('express')
const app = express()

app.get("/",(req,res) => {
    res.json({"names" : ["alex","arshad","ausni"]})
})

app.listen(5000,() =>{
    console.log("server started at port 6000");
})