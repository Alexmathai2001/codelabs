const express = require('express')
const connectdb = require("./connection")
const app = express()

connectdb()

app.get("/",(req,res) => {
    res.json({"names" : ["alex","arshad","ausni"]})
})

app.post('/editprofile',(req,res) => {

})

app.listen(5000,() =>{
    console.log("server started at port 5000");
})