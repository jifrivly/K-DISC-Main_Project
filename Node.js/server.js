const express = require("express");
const chalk = require("chalk");

const userRouter = require("./user");
const productRouter = require("./product");

my_app = express();

my_app.use("/user",userRouter);
my_app.use("/product",productRouter);

my_app.get("/",(req,res)=>{
	res.json({status:"404",text:"Not exist"});
});


const port = process.env.PORT || 4545;
my_app.listen(port, ()=>{
	console.log(chalk.red("Backend is working on port : " + port));
});
