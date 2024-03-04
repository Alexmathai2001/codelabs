const express = require('express')
const connectdb = require("./connection")
const app = express()
const cors = require('cors')
const approuter = require('./routes/approute')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended : true }))
app.use('/',approuter)

connectdb()





app.listen(4000,() =>{
    console.log("server started at port 5000");
})