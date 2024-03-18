const express = require('express')
const connectdb = require("./connection")
const app = express()
const cors = require('cors')
const approuter = require('./routes/approute')
const bodyparser = require('body-parser')
const session = require('express-session')

app.use(bodyparser.json({
    limit : '50mb'
}))
app.use(cors())

app.use(session({
    secret: 'your-secret-key', 
    resave: false,
    saveUninitialized: true
}));

app.use(express.urlencoded({
     extended : true,
    limit : '50mb'
}))
app.use('/',approuter)

connectdb()


app.listen(4000,() =>{
    console.log("server started at port 4000");
})