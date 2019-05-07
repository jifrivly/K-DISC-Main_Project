const express = require("express");

const user = express.Router();

user.get("/",(req,res)=>{
    res.json({status:100,text:"User module working"});
});


module.exports = user;