const express = require("express");
const chalk = require("chalk");

my_app = express();

my_app.get("/",(req,res)=>{
	res.send("Ya Working");
});

my_app.listen("4545",()=>{
	console.log(chalk.red("Backend is working"));
});
