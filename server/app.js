const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');
// const User = require('./model/userSchema')
app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;

// middleware
const middleware = (req, res, next) =>{
    console.log(`hello middleware`)
    next();
}


app.get('/contact', middleware,(req, res) => {
    res.send(`hello contact`)
})


app.listen(3000, () =>{
    console.log(`server is running at port no ${PORT}`)
})