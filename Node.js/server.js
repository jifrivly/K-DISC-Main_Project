const express = require("express");
const chalk = require("chalk");
const mongoose = require("mongoose");

const adminRouter = require("./modules/admin");
const userRouter = require("./modules/user");
const productRouter = require("./modules/product");

my_app = express();

// mongoDB connection setup
mongoose
	.connect("mongodb://localhost:27017/shopDB")
	.then(() => {
		console.log("Database connection successful");
	})
	.catch((err) => {
		console.log("Error occured in Database connection, " + err);
	});


my_app.use("/admin", adminRouter);
my_app.use("/user", userRouter);
my_app.use("/product", productRouter);

my_app.get("/", (req, res) => {
	res.status(404).json({ status: "404", text: "Not exist" });
});


const port = process.env.PORT || 4545;
my_app.listen(port, () => {
	console.log(chalk.red("Backend is working on port : " + port));
});
